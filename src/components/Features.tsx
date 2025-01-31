import { Card, CardContent } from "@/components/ui/card";
import { BadgeDollarSign, FileSpreadsheet, Calculator, Users } from "lucide-react";

const features = [
  {
    title: "Smart Invoicing",
    description: "Create and send professional invoices in seconds. Track payments and send automatic reminders for overdue invoices.",
    icon: BadgeDollarSign,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Expense Tracking",
    description: "Automatically categorize expenses and attach receipts. Generate expense reports and prepare for tax season effortlessly.",
    icon: FileSpreadsheet,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Tax Preparation",
    description: "Real-time tax calculations and estimates. Generate detailed reports for your tax return with a single click.",
    icon: Calculator,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Client Management",
    description: "Centralized client information, project tracking, and payment history. Build stronger client relationships.",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export const Features = () => {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Powerful tools designed specifically for freelancers and sole traders,
            helping you focus on what matters most - your business.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="animate-fade-up relative overflow-hidden group hover:shadow-lg transition-all duration-300 [animation-delay:var(--delay)] border-0 bg-white/50 backdrop-blur-sm"
                style={{ "--delay": `${index * 200}ms` } as React.CSSProperties}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50"></div>
                <CardContent className="relative p-6">
                  <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};