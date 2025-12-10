"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small manufacturing units",
    features: [
      "Up to 10 users",
      "Core modules",
      "Basic reporting",
      "Email support",
      "Cloud hosting",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses",
    features: [
      "Up to 50 users",
      "All core modules",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    features: [
      "Unlimited users",
      "All modules + custom dev",
      "Dedicated support",
      "On-premise or cloud",
      "White-label options",
      "SLA guarantee",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 sm:py-20 bg-[hsl(0_0%_96%)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-linear-to-br from-primary/10 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-linear-to-tr from-primary/10 to-transparent opacity-40 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
            Pricing Plans
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative h-full bg-white border rounded-lg overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40"
                }`}
              >
                <div className="p-5 sm:p-6 h-full flex flex-col">
                  {/* Plan Name */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 text-foreground">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground mb-5">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full group inline-flex items-center justify-center text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-300 cursor-pointer mt-auto ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "border border-primary/30 bg-transparent text-foreground hover:bg-primary/5 hover:border-primary/50"
                    }`}
                  >
                    {plan.popular ? (
                      <>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      "Contact Sales"
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">
            Need a custom solution? Contact us for a tailored plan.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/30 bg-transparent text-foreground hover:bg-primary/5 hover:border-primary/50 rounded-lg transition-all duration-300 text-sm font-medium cursor-pointer"
          >
            Contact Sales
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
