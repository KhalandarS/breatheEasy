import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";
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
    <Card className="p-6 rounded-xl shadow-sm bg-white" data-testid={`card-location-${label.toLowerCase()}`}>
      <label className="text-sm font-medium text-muted-foreground mb-3 block">{label}</label>
      <div className="flex gap-3">
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 h-12 rounded-lg"
          data-testid={`input-location-${label.toLowerCase()}`}
        />
        {onUseCurrentLocation && (
          <Button 
            variant="outline" 
            size="icon"
            className="h-12 w-12"
            onClick={onUseCurrentLocation}
            data-testid="button-current-location"
          >
            <Navigation className="w-5 h-5" />
          </Button>
        )}
      </div>
    </Card>
  );
}
