import { Card } from "@/components/ui/card";
import { Map } from "lucide-react";

export default function MapPlaceholder() {
  return (
    <Card className="w-full h-[600px] flex items-center justify-center bg-gray-50 rounded-2xl shadow-sm" data-testid="card-map-placeholder">
      <div className="text-center">
        <Map className="w-16 h-16 text-gray-300 mx-auto mb-4" strokeWidth={1.5} />
        <p className="text-base font-medium text-muted-foreground">Interactive map</p>
        <p className="text-sm text-muted-foreground mt-2">Google Maps integration coming soon</p>
      </div>
    </Card>
  );
}
