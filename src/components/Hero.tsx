import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-transparent py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left column - keep existing code */}
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
          
          {/* Right column - Dashboard Preview */}
          <div className="relative animate-fade-up [animation-delay:600ms]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-6">
                <div className="absolute -top-8 left-4 bg-white rounded-xl shadow-lg p-3 animate-fade-up [animation-delay:800ms]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary text-sm">€</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Monthly Revenue</div>
                      <div className="text-lg font-bold text-primary">€4,379.02</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-4 top-1/4 bg-white rounded-xl shadow-lg p-3 animate-fade-up [animation-delay:1000ms]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-500 text-sm">↗</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Latest Invoice</div>
                      <div className="text-lg font-bold text-green-500">€121.00</div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-white">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-2">
                        <Badge variant="outline" className="bg-primary/5">All</Badge>
                        <Badge variant="outline" className="bg-white">Invoices</Badge>
                        <Badge variant="outline" className="bg-white">Expenses</Badge>
                      </div>
                      <Button size="sm" className="bg-primary text-white rounded-full">
                        + New Invoice
                      </Button>
                    </div>
                    
                    <div className="h-48 bg-gradient-to-b from-primary/5 to-transparent rounded-xl mb-4">
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-full h-32" viewBox="0 0 400 100">
                          <path
                            d="M0,50 C100,20 200,80 400,50"
                            fill="none"
                            stroke="#635BFF"
                            strokeWidth="2"
                          />
                          <path
                            d="M0,50 C100,20 200,80 400,50"
                            fill="none"
                            stroke="#635BFF"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                            opacity="0.5"
                          />
                          <circle cx="0" cy="50" r="4" fill="#635BFF" />
                          <circle cx="100" cy="20" r="4" fill="#635BFF" />
                          <circle cx="200" cy="80" r="4" fill="#635BFF" />
                          <circle cx="400" cy="50" r="4" fill="#635BFF" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <path d="M3 9h18" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Website Design</div>
                            <div className="text-xs text-gray-500">Invoice #1234</div>
                          </div>
                        </div>
                        <div className="text-sm font-bold">€300.00</div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Mobile App</div>
                            <div className="text-xs text-gray-500">Invoice #1235</div>
                          </div>
                        </div>
                        <div className="text-sm font-bold">€750.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
