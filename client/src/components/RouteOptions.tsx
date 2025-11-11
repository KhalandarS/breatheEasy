import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bike, PersonStanding, Footprints } from "lucide-react";

interface RouteOptionsProps {
  mode: string;
  onModeChange: (mode: string) => void;
}

export default function RouteOptions({ mode, onModeChange }: RouteOptionsProps) {
  return (
    <Card className="p-4" data-testid="card-route-options">
      <h3 className="text-sm font-medium mb-3">Travel Mode</h3>
      <ToggleGroup 
        type="single" 
        value={mode} 
        onValueChange={(value) => value && onModeChange(value)}
        className="justify-start gap-2"
      >
        <ToggleGroupItem 
          value="walking" 
          aria-label="Walking"
          className="flex-1"
          data-testid="toggle-walking"
        >
          <Footprints className="w-4 h-4 mr-2" />
          Walking
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="running" 
          aria-label="Running"
          className="flex-1"
          data-testid="toggle-running"
        >
          <PersonStanding className="w-4 h-4 mr-2" />
          Running
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="biking" 
          aria-label="Biking"
          className="flex-1"
          data-testid="toggle-biking"
        >
          <Bike className="w-4 h-4 mr-2" />
          Biking
        </ToggleGroupItem>
      </ToggleGroup>
    </Card>
  );
}
