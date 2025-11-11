import axios from "axios";

interface AQIData {
  aqi: number;
  category: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

export async function getAirQuality(
  lat: number,
  lng: number
): Promise<AQIData> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error("GOOGLE_MAPS_API_KEY is not configured");
  }

  try {
    const response = await axios.post(
      `https://airquality.googleapis.com/v1/currentConditions:lookup?key=${apiKey}`,
      {
        location: {
          latitude: lat,
          longitude: lng,
        },
      }
    );

    const indexes = response.data.indexes || [];
    const aqiIndex = indexes.find((idx: any) => idx.code === "uaqi");

    if (!aqiIndex) {
      // Return default moderate AQI if data not available
      return { aqi: 75, category: "Moderate" };
    }

    return {
      aqi: aqiIndex.aqi || 75,
      category: aqiIndex.category || "Moderate",
    };
  } catch (error) {
    console.error("Air quality API error:", error);
    // Return default moderate AQI on error
    return { aqi: 75, category: "Moderate" };
  }
}

export async function enrichRouteWithAQI(
  steps: Array<Coordinates>
): Promise<Array<Coordinates & AQIData>> {
  // Sample points along the route (every 5th point to reduce API calls)
  const sampledPoints = steps.filter((_, index) => index % 5 === 0 || index === steps.length - 1);

  const enrichedPoints = await Promise.all(
    sampledPoints.map(async (point) => {
      const aqiData = await getAirQuality(point.lat, point.lng);
      return {
        ...point,
        ...aqiData,
      };
    })
  );

  return enrichedPoints;
}

export function calculateAverageAQI(
  segments: Array<{ aqi: number }>
): number {
  if (segments.length === 0) return 0;
  const sum = segments.reduce((acc, seg) => acc + seg.aqi, 0);
  return Math.round(sum / segments.length);
}

export function countHotspots(
  segments: Array<{ aqi: number }>
): number {
  // Count segments with AQI > 100 (Unhealthy for Sensitive Groups)
  return segments.filter((seg) => seg.aqi > 100).length;
}
