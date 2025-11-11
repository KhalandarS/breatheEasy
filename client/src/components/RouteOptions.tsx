import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bike, PersonStanding, Footprints } from "lucide-react";

interface RouteOptionsProps {
  mode: string;
  onModeChange: (mode: string) => void;
}

export default function RouteOptions({ mode, onModeChange }: RouteOptionsProps) {
  return (
    <Card className="p-6 rounded-xl shadow-sm bg-white" data-testid="card-route-options">
      <h3 className="text-sm font-medium text-muted-foreground mb-4">Travel Mode</h3>
      <ToggleGroup 
        type="single" 
        value={mode} 
        onValueChange={(value) => value && onModeChange(value)}
        className="grid grid-cols-3 gap-2"
      >
        <ToggleGroupItem 
          value="walking" 
          aria-label="Walking"
          className="h-12 flex flex-col items-center justify-center gap-1"
          data-testid="toggle-walking"
        >
          <Footprints className="w-5 h-5" />
          <span className="text-xs">Walk</span>
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="running" 
          aria-label="Running"
          className="h-12 flex flex-col items-center justify-center gap-1"
          data-testid="toggle-running"
        >
          <PersonStanding className="w-5 h-5" />
          <span className="text-xs">Run</span>
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="biking" 
          aria-label="Biking"
          className="h-12 flex flex-col items-center justify-center gap-1"
          data-testid="toggle-biking"
        >
          <Bike className="w-5 h-5" />
          <span className="text-xs">Bike</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </Card>
  );
}
