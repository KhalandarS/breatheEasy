import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Woman_jogging_in_park_a198362d.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-6xl font-semibold tracking-tight mb-6" data-testid="text-hero-title">
              Breathe Easier on Every Journey
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl" data-testid="text-hero-subtitle">
              Find walking, running, and biking routes with better air quality using real-time pollution data
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/planner">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-base"
                  data-testid="button-hero-cta"
                >
                  Start Planning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-sm text-muted-foreground" data-testid="text-trust-indicator">
              Powered by Google Air Quality API
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <img 
              src={heroImage} 
              alt="Person jogging in clean air environment" 
              className="rounded-2xl w-full h-auto shadow-sm"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
