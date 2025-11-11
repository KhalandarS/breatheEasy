import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";

interface LocationInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onUseCurrentLocation?: () => void;
}

export default function LocationInput({ 
  label, 
  placeholder, 
  value, 
  onChange,
  onUseCurrentLocation 
}: LocationInputProps) {
  return (
    <Card className="p-4" data-testid={`card-location-${label.toLowerCase()}`}>
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="w-4 h-4 text-muted-foreground" />
        <label className="text-sm font-medium">{label}</label>
      </div>
      <div className="flex gap-2">
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1"
          data-testid={`input-location-${label.toLowerCase()}`}
        />
        {onUseCurrentLocation && (
          <Button 
            variant="outline" 
            size="icon"
            onClick={onUseCurrentLocation}
            data-testid="button-current-location"
          >
            <Navigation className="w-4 h-4" />
          </Button>
        )}
      </div>
    </Card>
  );
}
