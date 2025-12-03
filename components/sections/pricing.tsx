"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Custom",
    description: "Perfect for small manufacturing units",
    features: [
      "Up to 10 users",
      "Core modules (Inventory, Sales, Production)",
      "Basic reporting",
      "Email support",
      "Cloud hosting",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "Custom",
    description: "Ideal for growing businesses",
    features: [
      "Up to 50 users",
      "All core modules",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Training & onboarding",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Unlimited users",
      "All modules + custom development",
      "Dedicated support team",
      "On-premise or cloud",
      "API access",
      "White-label options",
      "SLA guarantee",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include
            setup, training, and ongoing support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col border rounded-lg shadow-none ${
                  plan.popular
                    ? "border-primary scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            All plans are customizable based on your specific requirements.
          </p>
          <Button variant="outline">Contact Sales for Custom Quote</Button>
        </motion.div>
      </div>
    </section>
  );
}

