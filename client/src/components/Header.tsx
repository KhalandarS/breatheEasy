import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-lg px-3 py-2 -ml-3" data-testid="link-home">
          <Leaf className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">BreatheEasy</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/planner">
            <Button size="lg" className="px-8" data-testid="button-plan-route">
              Start Planning
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
