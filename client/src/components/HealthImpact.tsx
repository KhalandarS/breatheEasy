import { Card } from "@/components/ui/card";
import healthImage from "@assets/generated_images/Person_walking_tree-lined_path_fb1c6bfc.png";

const stats = [
  { value: "65%", label: "Less pollution exposure on average" },
  { value: "2.5km", label: "Average route distance difference" },
  { value: "45", label: "Better average AQI score" }
];

export default function HealthImpact() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight mb-6" data-testid="text-health-impact-title">
                The Health Impact
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Air pollution is a major trigger for asthma and respiratory conditions. 
                By choosing routes with better air quality, you can significantly reduce 
                your exposure to harmful pollutants.
              </p>
            </div>
            
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 rounded-2xl shadow-sm bg-white hover-elevate" data-testid={`card-stat-${index}`}>
                  <div className="flex items-baseline gap-4">
                    <div className="text-4xl font-semibold text-primary" data-testid="text-stat-value">
                      {stat.value}
                    </div>
                    <div className="text-base text-muted-foreground" data-testid="text-stat-label">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <img 
              src={healthImage} 
              alt="Person walking on tree-lined path" 
              className="rounded-2xl w-full h-auto shadow-sm"
              data-testid="img-health-impact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
