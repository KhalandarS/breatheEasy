import { Card } from "@/components/ui/card";
import healthImage from "@assets/generated_images/Woman_jogging_in_park_a198362d.png";

const stats = [
  { value: "30%", label: "Average reduction in pollutant exposure" },
  { value: "15min", label: "Longer routes for significantly cleaner air" },
  { value: "92%", label: "Users report breathing easier" }
];

export default function HealthImpact() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6" data-testid="text-health-impact-title">
              The Health Impact
            </h2>
            <p className="text-muted-foreground mb-8">
              Air pollution is a major trigger for asthma and respiratory conditions. 
              By choosing routes with better air quality, you can significantly reduce 
              your exposure to harmful pollutants while staying active.
            </p>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 hover-elevate" data-testid={`card-stat-${index}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-primary" data-testid="text-stat-value">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid="text-stat-label">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src={healthImage} 
              alt="Person exercising in clean air environment" 
              className="rounded-lg w-full h-auto"
              data-testid="img-health-impact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
