import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-8 rounded-2xl shadow-sm bg-white hover-elevate" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="mb-6">
        <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold mb-3" data-testid="text-feature-title">{title}</h3>
      <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-feature-description">{description}</p>
    </Card>
  );
}
