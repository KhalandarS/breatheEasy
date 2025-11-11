import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Navigation, Wind } from "lucide-react";

interface RouteData {
  type: "fastest" | "cleanest";
  distance: string;
  duration: string;
  avgAQI: number;
  hotspotsCount: number;
}

interface RouteComparisonCardProps {
  route: RouteData;
  onSelect: () => void;
}

function getAQIColor(aqi: number): string {
  if (aqi <= 50) return "bg-green-500";
  if (aqi <= 100) return "bg-yellow-500";
  if (aqi <= 150) return "bg-orange-500";
  if (aqi <= 200) return "bg-red-500";
  return "bg-purple-600";
}

function getAQILabel(aqi: number): string {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Moderate";
  if (aqi <= 150) return "Unhealthy";
  if (aqi <= 200) return "Very Unhealthy";
  return "Hazardous";
}

export default function RouteComparisonCard({ route, onSelect }: RouteComparisonCardProps) {
  const isCleanest = route.type === "cleanest";
  
  return (
    <Card className="p-6 rounded-xl shadow-md bg-white hover-elevate" data-testid={`card-route-${route.type}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold">
          {isCleanest ? "Cleanest Air" : "Fastest Route"}
        </h3>
        {isCleanest && (
          <Badge variant="default" className="text-xs" data-testid="badge-recommended">Recommended</Badge>
        )}
      </div>
      
      <div className="space-y-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded-full ${getAQIColor(route.avgAQI)}`} />
            <span className="text-sm text-muted-foreground">Air Quality</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-semibold" data-testid="text-aqi">{route.avgAQI}</div>
            <div className="text-xs text-muted-foreground">{getAQILabel(route.avgAQI)}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Distance</div>
            <div className="text-base font-medium" data-testid="text-distance">{route.distance}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Duration</div>
            <div className="text-base font-medium" data-testid="text-duration">{route.duration}</div>
          </div>
        </div>
      </div>
      
      <Button 
        variant={isCleanest ? "default" : "outline"} 
        className="w-full h-12"
        onClick={onSelect}
        data-testid={`button-select-${route.type}`}
      >
        Select This Route
      </Button>
    </Card>
  );
}
