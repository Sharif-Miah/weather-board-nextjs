import { getLocation } from './location-util';

export async function GET() {
  const locationDate = await getLocation();

  return Response.json(locationDate);
}
