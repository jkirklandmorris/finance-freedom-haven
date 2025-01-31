import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "£9",
    description: "Perfect for getting started",
    features: [
      "Unlimited invoices",
      "Basic expense tracking",
      "Client management",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "£29",
    description: "Best for growing businesses",
    features: [
      "Everything in Basic",
      "Custom invoice templates",
      "Advanced reporting",
      "Priority support",
      "Tax calculation",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "£99",
    description: "For larger operations",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integration",
      "Team collaboration",
      "API access",
    ],
  },
];

export const Pricing = () => {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`animate-fade-up relative overflow-hidden [animation-delay:var(--delay)] backdrop-blur-sm ${
                tier.highlighted
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
              }`}
              style={{ "--delay": `${index * 200}ms` } as React.CSSProperties}
            >
              {tier.badge && (
                <Badge
                  className="absolute top-4 right-4 bg-primary/10 text-primary border-0"
                >
                  {tier.badge}
                </Badge>
              )}
              <CardHeader className="p-6">
                <h3 className="text-2xl font-bold text-secondary">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-secondary">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className={`w-full rounded-full h-11 ${
                    tier.highlighted
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-secondary/5 text-secondary hover:bg-secondary/10"
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-sm text-muted">
            Looking for a custom plan? <a href="#" className="text-primary hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};