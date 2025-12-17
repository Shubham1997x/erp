"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/toast";
import { trackEvent } from "@/components/analytics";

const plans = [
  {
    name: "Starter",
    description: "For small manufacturing units",
    monthlyPrice: 299,
    annualPrice: 2990, // 2 months free (17% savings)
    features: [
      "Up to 10 users",
      "Core modules",
      "Basic reporting",
      "Email support",
      "Cloud hosting",
    ],
    popular: false,
    savings: null,
  },
  {
    name: "Professional",
    description: "For growing businesses",
    monthlyPrice: 799,
    annualPrice: 7990, // 2 months free (17% savings)
    features: [
      "Up to 50 users",
      "All core modules",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "API access",
    ],
    popular: true,
    savings: "Save 17%",
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    monthlyPrice: null, // Custom pricing
    annualPrice: null,
    features: [
      "Unlimited users",
      "All modules + custom dev",
      "Dedicated support",
      "On-premise or cloud",
      "White-label options",
      "SLA guarantee",
    ],
    popular: false,
    savings: null,
  },
];

export function Pricing() {
  const { showToast } = useToast();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const handleGetStarted = () => {
    trackEvent("cta_click", {
      button_text: "Get Started",
      location: "pricing",
    });
    window.open(
      "https://calendly.com/wantace-ai/discovery-call",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleContactSales = () => {
    trackEvent("cta_click", {
      button_text: "Contact Sales",
      location: "pricing",
    });
    window.open(
      "https://calendly.com/wantace-ai/discovery-call",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const formatPrice = (price: number | null) => {
    if (price === null) return "Custom";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getDisplayPrice = (plan: (typeof plans)[number]) => {
    if (plan.monthlyPrice === null || plan.annualPrice === null) return null;
    return billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
  };

  const getPriceLabel = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return "Contact for pricing";
    if (billingCycle === "annual") {
      return "per year";
    }
    return "per month";
  };

  return (
    <section id="pricing" className="relative py-16 sm:py-20 bg-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

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
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Pricing Plans
          </div>
          <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-6">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className={`text-sm font-medium transition-colors ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative w-14 h-7 bg-primary/20 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`Switch to ${billingCycle === "monthly" ? "annual" : "monthly"} billing`}
            >
              <motion.div
                className="w-5 h-5 bg-primary rounded-full shadow-md"
                animate={{
                  x: billingCycle === "annual" ? 28 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${billingCycle === "annual" ? "text-foreground" : "text-muted-foreground"}`}>
              Annual
            </span>
            <span className="inline-flex items-center min-w-[80px] justify-center">
              <motion.span
                initial={false}
                animate={{ 
                  opacity: billingCycle === "annual" ? 1 : 0,
                  scale: billingCycle === "annual" ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full"
              >
                <Sparkles className="h-3 w-3 shrink-0" />
                <span className="whitespace-nowrap">Save 17%</span>
              </motion.span>
            </span>
          </div>
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
                  <p className="text-xs text-muted-foreground mb-4">
                    {plan.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      {plan.monthlyPrice === null ? (
                        <span className="text-2xl sm:text-3xl font-bold text-foreground">
                          Custom
                        </span>
                      ) : (
                        <>
                          <span className="text-2xl sm:text-3xl font-bold text-foreground">
                            {formatPrice(getDisplayPrice(plan))}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {getPriceLabel(plan)}
                          </span>
                        </>
                      )}
                    </div>
                    {plan.savings && billingCycle === "annual" && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-green-600 font-medium mt-1"
                      >
                        {plan.savings} with annual billing
                      </motion.p>
                    )}
                    {billingCycle === "monthly" && plan.monthlyPrice !== null && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Billed monthly
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    onClick={plan.popular ? handleGetStarted : handleContactSales}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full group inline-flex items-center justify-center text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-300 cursor-pointer mt-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "border border-primary/30 bg-transparent text-foreground hover:bg-primary/5 hover:border-primary/50"
                    }`}
                    aria-label={plan.popular ? `Get started with ${plan.name} plan` : `Contact sales about ${plan.name} plan`}
                  >
                    {plan.popular ? (
                      <>
                        <span>Get Started</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </>
                    ) : (
                      <span>Contact Sales</span>
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
            onClick={handleContactSales}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/30 bg-transparent text-foreground hover:bg-primary/5 hover:border-primary/50 rounded-lg transition-all duration-300 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Contact sales team for custom pricing"
          >
            <span>Contact Sales</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
