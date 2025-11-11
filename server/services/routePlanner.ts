import { geocodeAddress, getDirections } from "./googleMaps";
import { enrichRouteWithAQI, calculateAverageAQI, countHotspots } from "./airQuality";
import type { RoutePlanRequest, RoutePlanResponse, RouteOption } from "@shared/schema";

export async function planRoutes(
  request: RoutePlanRequest
): Promise<RoutePlanResponse> {
  try {
    // Geocode start and end locations
    const [startCoords, endCoords] = await Promise.all([
      geocodeAddress(request.startLocation),
      geocodeAddress(request.endLocation),
    ]);

    // Get directions with alternatives
    const routes = await getDirections(
      request.startLocation,
      request.endLocation,
      request.travelMode
    );

    // Enrich each route with AQI data
    const enrichedRoutes = await Promise.all(
      routes.map(async (route) => {
        const segments = await enrichRouteWithAQI(route.steps);
        const avgAQI = calculateAverageAQI(segments);
        const hotspotsCount = countHotspots(segments);

        return {
          route,
          segments,
          avgAQI,
          hotspotsCount,
        };
      })
    );

    // Sort routes: one with best AQI, one with shortest distance
    const sortedByAQI = [...enrichedRoutes].sort((a, b) => a.avgAQI - b.avgAQI);
    const sortedByDistance = [...enrichedRoutes].sort((a, b) => {
      const distA = parseFloat(a.route.distance.replace(/[^\d.]/g, ""));
      const distB = parseFloat(b.route.distance.replace(/[^\d.]/g, ""));
      return distA - distB;
    });

    const cleanestRoute = sortedByAQI[0];
    const fastestRoute = sortedByDistance[0];

    const routeOptions: RouteOption[] = [
      {
        type: "cleanest",
        distance: cleanestRoute.route.distance,
        duration: cleanestRoute.route.duration,
        avgAQI: cleanestRoute.avgAQI,
        hotspotsCount: cleanestRoute.hotspotsCount,
        polyline: cleanestRoute.route.polyline,
        segments: cleanestRoute.segments,
      },
    ];

    // Only add fastest route if it's different from cleanest
    if (fastestRoute !== cleanestRoute) {
      routeOptions.push({
        type: "fastest",
        distance: fastestRoute.route.distance,
        duration: fastestRoute.route.duration,
        avgAQI: fastestRoute.avgAQI,
        hotspotsCount: fastestRoute.hotspotsCount,
        polyline: fastestRoute.route.polyline,
        segments: fastestRoute.segments,
      });
    }

    return {
      routes: routeOptions,
      startCoords,
      endCoords,
    };
  } catch (error) {
    console.error("Route planning error:", error);
    throw error;
  }
}
