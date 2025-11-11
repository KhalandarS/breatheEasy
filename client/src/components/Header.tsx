import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1" data-testid="link-home">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold">BreatheEasy</span>
          </a>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link href="/planner">
            <Button variant="default" data-testid="button-plan-route">
              Plan Your Route
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
