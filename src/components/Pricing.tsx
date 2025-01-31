import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`animate-fade-up rounded-3xl p-8 ring-1 ring-gray-200 [animation-delay:var(--delay)] ${
                tier.highlighted
                  ? "bg-primary text-white ring-primary"
                  : "bg-white"
              }`}
              style={{ "--delay": `${index * 200}ms` } as React.CSSProperties}
            >
              <h3 className={`text-2xl font-bold ${tier.highlighted ? "text-white" : "text-gray-900"}`}>
                {tier.name}
              </h3>
              <p className={`mt-4 text-sm ${tier.highlighted ? "text-white/90" : "text-gray-600"}`}>
                {tier.description}
              </p>
              <p className="mt-6">
                <span className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-gray-900"}`}>
                  {tier.price}
                </span>
                <span className={`text-sm ${tier.highlighted ? "text-white/90" : "text-gray-600"}`}>
                  /month
                </span>
              </p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`h-5 w-5 ${tier.highlighted ? "text-white" : "text-primary"}`} />
                    <span className={`text-sm ${tier.highlighted ? "text-white" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full ${
                  tier.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};