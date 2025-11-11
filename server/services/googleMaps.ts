import { Client, TravelMode } from "@googlemaps/google-maps-services-js";

const client = new Client({});

interface Coordinates {
  lat: number;
  lng: number;
}

interface RouteData {
  distance: string;
  duration: string;
  polyline: string;
  steps: Array<{
    lat: number;
    lng: number;
  }>;
}

export async function geocodeAddress(address: string): Promise<Coordinates> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error("GOOGLE_MAPS_API_KEY is not configured");
  }

  try {
    const response = await client.geocode({
      params: {
        address,
        key: apiKey,
      },
    });

    if (response.data.results.length === 0) {
      throw new Error(`Location not found: ${address}`);
    }

    const location = response.data.results[0].geometry.location;
    return {
      lat: location.lat,
      lng: location.lng,
    };
  } catch (error) {
    console.error("Geocoding error:", error);
    throw new Error(`Failed to geocode address: ${address}`);
  }
}

export async function getDirections(
  origin: string,
  destination: string,
  mode: "walking" | "running" | "biking"
): Promise<RouteData[]> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error("GOOGLE_MAPS_API_KEY is not configured");
  }

  // Map our modes to Google's travel modes
  const travelMode: TravelMode =
    mode === "biking" ? TravelMode.bicycling : TravelMode.walking;

  try {
    const response = await client.directions({
      params: {
        origin,
        destination,
        mode: travelMode,
        alternatives: true, // Request alternative routes
        key: apiKey,
      },
    });

    if (response.data.routes.length === 0) {
      throw new Error("No routes found");
    }

    return response.data.routes.map((route) => {
      const leg = route.legs[0];
      
      // Extract waypoints from route steps
      const steps: Array<{ lat: number; lng: number }> = [];
      leg.steps.forEach((step) => {
        steps.push({
          lat: step.start_location.lat,
          lng: step.start_location.lng,
        });
      });
      // Add final point
      steps.push({
        lat: leg.end_location.lat,
        lng: leg.end_location.lng,
      });

      return {
        distance: leg.distance.text,
        duration: leg.duration.text,
        polyline: route.overview_polyline.points,
        steps,
      };
    });
  } catch (error) {
    console.error("Directions error:", error);
    throw new Error("Failed to fetch directions");
  }
}
