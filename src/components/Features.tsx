import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Smart Invoicing",
    description: "Create and send professional invoices in seconds. Track payments and send automatic reminders.",
  },
  {
    title: "Expense Tracking",
    description: "Easily categorize expenses and attach receipts. Perfect for tax time.",
  },
  {
    title: "Tax Preparation",
    description: "Automatically calculate tax obligations and generate reports for your tax return.",
  },
  {
    title: "Client Management",
    description: "Keep track of client information, projects, and payment history all in one place.",
  },
];

export const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Powerful tools designed specifically for freelancers and sole traders.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-up rounded-xl bg-white p-8 shadow-lg [animation-delay:var(--delay)]"
              style={{ "--delay": `${index * 200}ms` } as React.CSSProperties}
            >
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};