import WindComponeent from '@/components/WindComponeent';

const WindPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <WindComponeent
      lat={latitude}
      lon={longitude}
    />
  );
};

export default WindPage;
