import { getLocationByName } from '../location-util';

export async function GET(_request, { params }) {
  const locationByName = await getLocationByName(params?.name);
  return Response.json(locationByName);
}
