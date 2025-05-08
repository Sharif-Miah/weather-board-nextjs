import Link from 'next/link';
import Card from './Card';

const NoLocationInfo = ({ location }) => {
  return (
    <Card>
      <p className='mb-10'>
        No Location Info Found Avable here{' '}
        <span className='text-[#b2cae7]'>{location}</span>
      </p>
      <Link
        href='/'
        className='text-xl  bg-[#2d5585] py-1 px-5 rounded-md text-white my-10'>
        Go to Home Page
      </Link>
    </Card>
  );
};

export default NoLocationInfo;
