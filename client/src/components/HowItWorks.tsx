import { MapPin, Wind, Route } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: MapPin,
    title: "Enter Routes",
    description: "Simply enter your starting point and destination to begin planning your healthier journey"
  },
  {
    icon: Wind,
    title: "View Air Quality",
    description: "See real-time pollution data and identify areas with poor air quality along your route"
  },
  {
    icon: Route,
    title: "Get Healthier Path",
    description: "Receive optimized routes that prioritize cleaner air while balancing distance and time"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold tracking-tight text-center mb-16" data-testid="text-how-it-works-title">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
