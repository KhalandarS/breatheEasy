import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function MapPlaceholder() {
  return (
    <Card className="w-full h-[500px] flex items-center justify-center bg-muted/30" data-testid="card-map-placeholder">
      <div className="text-center">
        <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">Interactive map will appear here</p>
        <p className="text-xs text-muted-foreground mt-1">Google Maps integration coming soon</p>
      </div>
    </Card>
  );
}
