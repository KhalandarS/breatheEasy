import { useState } from "react";
import Header from "@/components/Header";
import LocationInput from "@/components/LocationInput";
import RouteOptions from "@/components/RouteOptions";
import AQILegend from "@/components/AQILegend";
import RouteComparisonCard from "@/components/RouteComparisonCard";
import MapPlaceholder from "@/components/MapPlaceholder";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";

export default function Planner() {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [travelMode, setTravelMode] = useState("walking");
  const [showResults, setShowResults] = useState(false);

  const handleSwapLocations = () => {
    const temp = startLocation;
    setStartLocation(endLocation);
    setEndLocation(temp);
  };

  const handleFindRoutes = () => {
    console.log("Finding routes...", { startLocation, endLocation, travelMode });
    setShowResults(true);
  };

  const mockRoutes = [
    {
      type: "cleanest" as const,
      distance: "2.8 km",
      duration: "35 min",
      avgAQI: 45,
      hotspotsCount: 1
    },
    {
      type: "fastest" as const,
      distance: "2.3 km",
      duration: "28 min",
      avgAQI: 125,
      hotspotsCount: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-32 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-semibold tracking-tight mb-4" data-testid="text-planner-title">
              Plan Your Clean Air Route
            </h1>
            <p className="text-lg text-muted-foreground">
              Find healthier paths for your journey with real-time air quality data
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <MapPlaceholder />
              
              {showResults && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Route Options</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockRoutes.map((route) => (
                      <RouteComparisonCard
                        key={route.type}
                        route={route}
                        onSelect={() => console.log(`Selected ${route.type} route`)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <LocationInput
                label="Start Location"
                placeholder="Enter starting point..."
                value={startLocation}
                onChange={setStartLocation}
                onUseCurrentLocation={() => {
                  console.log("Using current location");
                  setStartLocation("Current Location");
                }}
              />
              
              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  onClick={handleSwapLocations}
                  data-testid="button-swap-locations"
                >
                  <ArrowLeftRight className="w-5 h-5" />
                </Button>
              </div>
              
              <LocationInput
                label="End Location"
                placeholder="Enter destination..."
                value={endLocation}
                onChange={setEndLocation}
              />
              
              <RouteOptions mode={travelMode} onModeChange={setTravelMode} />
              
              <Button 
                className="w-full h-12 text-base" 
                onClick={handleFindRoutes}
                disabled={!startLocation || !endLocation}
                data-testid="button-find-routes"
              >
                Find Routes
              </Button>
              
              <AQILegend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
