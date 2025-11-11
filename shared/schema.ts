import { z } from "zod";

// Route planning request schema
export const routePlanRequestSchema = z.object({
  startLocation: z.string().min(1, "Start location is required"),
  endLocation: z.string().min(1, "End location is required"),
  travelMode: z.enum(["walking", "running", "biking"]).default("walking"),
});

export type RoutePlanRequest = z.infer<typeof routePlanRequestSchema>;

// AQI segment data
export const aqiSegmentSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  aqi: z.number(),
  category: z.string(),
});

export type AQISegment = z.infer<typeof aqiSegmentSchema>;

// Route option with air quality data
export const routeOptionSchema = z.object({
  type: z.enum(["fastest", "cleanest"]),
  distance: z.string(),
  duration: z.string(),
  avgAQI: z.number(),
  hotspotsCount: z.number(),
  polyline: z.string(),
  segments: z.array(aqiSegmentSchema),
});

export type RouteOption = z.infer<typeof routeOptionSchema>;

// Route plan response
export const routePlanResponseSchema = z.object({
  routes: z.array(routeOptionSchema),
  startCoords: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  endCoords: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
});

export type RoutePlanResponse = z.infer<typeof routePlanResponseSchema>;
