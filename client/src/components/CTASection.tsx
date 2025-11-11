import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-semibold tracking-tight mb-6" data-testid="text-cta-title">
          Start Planning Healthier Routes
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Join thousands of users who are breathing easier on their daily journeys. 
          Free to use, no account required.
        </p>
        <Link href="/planner">
          <Button size="lg" className="px-8 py-6 text-base" data-testid="button-cta-main">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
