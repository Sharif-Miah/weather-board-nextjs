/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

const LocationDetector = () => {
  const [loading, setLoating] = useState(false);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoating(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set('latitude', position.coords.latitude);
        params.set('longitude', position.coords.longitude);
        setLoating(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathName, searchParams]);

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-700 text-white'>
      {loading && (
        <>
          <Image
            src='/network.gif'
            alt='Loading...'
            height={500}
            width={500}
            className='border rounded-md my-4'
          />
          <p className='text-4xl text-center'>Detecting Location...</p>
        </>
      )}
    </div>
  );
};

export default function LocationDetectorComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationDetector />
    </Suspense>
  );
}
