import TemperatureComponent from '@/components/TemperatureComponent';

const TempeturePage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <TemperatureComponent
      lat={latitude}
      lon={longitude}
    />
  );
};

export default TempeturePage;
