import { Link } from "wouter";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="font-semibold">BreatheEasy</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Making every journey healthier with clean air routing powered by real-time pollution data.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/planner">
                  <a className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-planner">Route Planner</a>
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#data-sources" className="text-muted-foreground hover:text-foreground transition-colors">Data Sources</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 BreatheEasy. All rights reserved.</p>
          <p>Powered by Google Air Quality API</p>
        </div>
      </div>
    </footer>
  );
}
