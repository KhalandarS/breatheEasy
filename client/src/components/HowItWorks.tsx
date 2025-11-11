import { MapPin, Wind, Route } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: MapPin,
    title: "Enter Start & End Points",
    description: "Choose your starting location and destination with our easy-to-use interface"
  },
  {
    icon: Wind,
    title: "View Pollution Hotspots",
    description: "See real-time air quality data and identify areas with poor air quality"
  },
  {
    icon: Route,
    title: "Get Cleaner-Air Routes",
    description: "Receive optimized routes that prioritize cleaner air, even if slightly longer"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12" data-testid="text-how-it-works-title">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
