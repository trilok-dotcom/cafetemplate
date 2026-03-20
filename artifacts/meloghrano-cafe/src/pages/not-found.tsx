import { Leaf } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <Leaf className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-6xl font-display font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        
        <p className="text-muted-foreground mb-8">
          Oops! It looks like you've wandered off the menu. Let's get you back to our delicious offerings.
        </p>
        
        <Link href="/" className="inline-flex px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
