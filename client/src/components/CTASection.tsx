import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4" data-testid="text-cta-title">
          Start Planning Healthier Routes
        </h2>
        <p className="text-muted-foreground mb-8">
          Join thousands of users who are breathing easier on their daily journeys. 
          Free to use, no account required.
        </p>
        <Link href="/planner">
          <Button size="lg" data-testid="button-cta-main">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
