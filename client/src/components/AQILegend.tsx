import { Card } from "@/components/ui/card";

const aqiLevels = [
  { range: "0-50", label: "Good", color: "bg-green-500" },
  { range: "51-100", label: "Moderate", color: "bg-yellow-500" },
  { range: "101-150", label: "Unhealthy for Sensitive", color: "bg-orange-500" },
  { range: "151-200", label: "Unhealthy", color: "bg-red-500" },
  { range: "201-300", label: "Very Unhealthy", color: "bg-purple-500" },
  { range: "301+", label: "Hazardous", color: "bg-pink-900" }
];

export default function AQILegend() {
  return (
    <Card className="p-4" data-testid="card-aqi-legend">
      <h3 className="text-sm font-semibold mb-3">Air Quality Index</h3>
      <div className="space-y-2">
        {aqiLevels.map((level, index) => (
          <div key={index} className="flex items-center gap-3" data-testid={`aqi-level-${index}`}>
            <div className={`w-12 h-6 rounded ${level.color}`} />
            <div className="flex-1 text-xs">
              <div className="font-medium">{level.label}</div>
              <div className="text-muted-foreground">{level.range}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
