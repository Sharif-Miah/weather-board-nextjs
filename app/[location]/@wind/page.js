import WindComponeent from '@/components/WindComponeent';
import NoLocationInfo from '@/components/NoLocationInfo';
import { getResolvedLatLong } from '@/lib/location-info';

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return (
      <WindComponeent
        lat={resolved.lat}
        lon={resolved.lon}
      />
    );
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default WindPage;
