import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Navigation, Wind, AlertTriangle } from "lucide-react";

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
  return "bg-purple-500";
}

function getAQILabel(aqi: number): string {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Moderate";
  if (aqi <= 150) return "Unhealthy for Sensitive";
  if (aqi <= 200) return "Unhealthy";
  return "Very Unhealthy";
}

export default function RouteComparisonCard({ route, onSelect }: RouteComparisonCardProps) {
  const isCleanest = route.type === "cleanest";
  
  return (
    <Card className="p-4 hover-elevate" data-testid={`card-route-${route.type}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">
          {isCleanest ? "Cleanest Air Route" : "Fastest Route"}
        </h3>
        {isCleanest && (
          <Badge variant="default" data-testid="badge-recommended">Recommended</Badge>
        )}
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Navigation className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Distance:</span>
          <span className="font-medium" data-testid="text-distance">{route.distance}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Duration:</span>
          <span className="font-medium" data-testid="text-duration">{route.duration}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Wind className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Avg AQI:</span>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${getAQIColor(route.avgAQI)}`} />
            <span className="font-medium" data-testid="text-aqi">{route.avgAQI}</span>
            <span className="text-xs text-muted-foreground">({getAQILabel(route.avgAQI)})</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <AlertTriangle className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Hotspots:</span>
          <span className="font-medium" data-testid="text-hotspots">{route.hotspotsCount}</span>
        </div>
      </div>
      
      <Button 
        variant={isCleanest ? "default" : "outline"} 
        className="w-full"
        onClick={onSelect}
        data-testid={`button-select-${route.type}`}
      >
        Select This Route
      </Button>
    </Card>
  );
}
