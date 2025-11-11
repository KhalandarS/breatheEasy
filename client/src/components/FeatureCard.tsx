import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 text-center hover-elevate" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2" data-testid="text-feature-title">{title}</h3>
      <p className="text-sm text-muted-foreground" data-testid="text-feature-description">{description}</p>
    </Card>
  );
}
