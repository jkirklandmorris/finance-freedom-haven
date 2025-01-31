import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-accent/5 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary hover:bg-secondary/20">
                Trusted by 10,000+ freelancers
              </Badge>
              <Badge variant="outline" className="text-xs">⭐ 4.9/5 Rating</Badge>
            </div>
            
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-secondary sm:text-6xl">
              Simplify Your <span className="text-primary">Freelance</span> Finances
            </h1>
            <p className="mt-6 animate-fade-up text-lg leading-8 text-muted-foreground [animation-delay:200ms]">
              All-in-one financial management for freelancers and sole traders. Handle invoices, track expenses, and prepare for tax season with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:400ms]">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full h-12 px-8">
                Start Free Trial
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="lg" className="rounded-full h-12 px-8">
                    Watch Demo
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Product Demo</SheetTitle>
                  </SheetHeader>
                  <div className="mt-4 aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-muted">Demo video placeholder</p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              No credit card required
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:600ms]">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-xl"></div>
            <img
              src="/api/placeholder/800/600"
              alt="Financial management dashboard"
              className="relative rounded-3xl shadow-2xl border border-gray-200/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};