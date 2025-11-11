import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Person_walking_tree-lined_path_fb1c6bfc.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold text-white mb-6" data-testid="text-hero-title">
            Breathe Easier on Every Journey
          </h1>
          <p className="text-xl text-white/90 mb-8" data-testid="text-hero-subtitle">
            Real-time air quality routing for healthier walks, runs, and bike rides
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/planner">
              <Button 
                size="lg" 
                className="bg-primary/90 hover:bg-primary border border-primary-border backdrop-blur-sm"
                data-testid="button-hero-cta"
              >
                Plan Your Route
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70" data-testid="text-trust-indicator">
            Powered by Google Air Quality Data
          </p>
        </div>
      </div>
    </section>
  );
}
