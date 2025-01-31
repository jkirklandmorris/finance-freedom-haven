import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Simplify Your Freelance Finances
            </h1>
            <p className="mt-6 animate-fade-up text-lg leading-8 text-gray-600 [animation-delay:200ms]">
              All-in-one financial management for freelancers and sole traders. Handle invoices, track expenses, and prepare for tax season with confidence.
            </p>
            <div className="mt-10 animate-fade-up [animation-delay:400ms]">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Start Free Trial
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:600ms]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Freelancer working"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};