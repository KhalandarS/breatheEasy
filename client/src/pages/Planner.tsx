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
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold mb-8" data-testid="text-planner-title">
            Plan Your Clean Air Route
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <MapPlaceholder />
              
              {showResults && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Route Options</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            
            <div className="space-y-4">
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
                  variant="outline"
                  size="icon"
                  onClick={handleSwapLocations}
                  data-testid="button-swap-locations"
                >
                  <ArrowLeftRight className="w-4 h-4" />
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
                className="w-full" 
                size="lg"
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
