"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Package, Calculator, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ProductRecipe() {
  const [activeTab, setActiveTab] = useState<"product" | "recipe">("product");
  const [activeStep, setActiveStep] = useState(0);

  const tabs = [
    {
      id: "product" as const,
      label: "Product Catalog",
      icon: Package,
      content: {
        title: "Product Catalog",
        description: "Complete product management with detailed specifications",
        features: [
          {
            title: "Product Information",
            description:
              "Images, dimensions, weight, category, and unit (SQM, pieces)",
          },
          {
            title: "Dropdown Master",
            description:
              "Centrally manage Categories, Subcategories, Colors, and Patterns",
          },
          {
            title: "Compliance & Certifications",
            description:
              "Capture fire ratings, sustainability tags, and export documents",
          },
          {
            title: "Pricing & Margin Controls",
            description: "List price, customer segments, and margin guardrails",
          },
          {
            title: "Versioning & Audit Trail",
            description: "Track changes to specs with user/time stamps",
          },
          {
            title: "Attachments",
            description: "Upload spec sheets, weaving diagrams, QA checklists",
          },
        ],
      },
    },
    {
      id: "recipe" as const,
      label: "Recipe Management",
      icon: Calculator,
      content: {
        title: "Recipe Management",
        description:
          "Define raw materials and quantities with automatic calculations",
        features: [
          {
            title: "Raw Material Mapping",
            description:
              "Link products to required raw materials with precise quantities",
          },
          {
            title: "Automatic Calculations",
            description:
              "Recipe calculator computes material needs based on production quantity",
          },
          {
            title: "Wastage & Shrinkage",
            description: "Factor in loss percentages to keep costs accurate",
          },
          {
            title: "Alternate Materials",
            description: "Define substitutes to avoid production stoppage",
          },
          {
            title: "Unit Conversions",
            description: "Support cones, kgs, meters, and SQM seamlessly",
          },
          {
            title: "Cost Roll-ups",
            description: "Show per-unit cost with raw material price updates",
          },
        ],
      },
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Define Recipe",
      desc: "Add raw materials and quantities per unit",
      image: "/images/recipe-1.png",
    },
    {
      step: 2,
      title: "Save & Use",
      desc: "Recipe saved and ready for calculations",
      image: "/images/recipe-2.png",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab)!;
  const ActiveIcon = activeTabData.icon;

  return (
    <section id="product-recipe" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Product Management
          </div>
          <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-primary">
            Product & Recipe Management
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Define products with detailed specifications and recipes
          </p>
        </motion.div>

        {/* Tab Navigation - Full Width */}
        <div className="mb-6">
          <div className="bg-white border border-primary/20 rounded-xl p-1.5 flex gap-2 shadow-sm max-w-2xl mx-auto lg:max-w-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-sm transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-6 lg:gap-8">
          {/* Left Column: Tab Content */}
          <div className="flex flex-col w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-primary/20 rounded-xl p-6 hover:border-primary/40 hover:shadow-lg transition-all h-full"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <ActiveIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {activeTabData.content.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {activeTabData.content.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {activeTabData.content.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-foreground mb-1">
                          {feature.title}
                        </div>
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Step Indicators and Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full"
          >
            {/* Step Indicators */}
            <div className="flex items-center justify-center gap-3 mb-5">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`relative flex flex-col items-center transition-all cursor-pointer ${
                      activeStep === index
                        ? "scale-110"
                        : "scale-100 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                        activeStep === index
                          ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                          : "bg-muted text-muted-foreground border-primary/30"
                      }`}
                    >
                      {step.step}
                    </div>
                    <span
                      className={`text-xs font-medium mt-2 text-center max-w-[80px] transition-colors ${
                        activeStep === index
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 w-6 transition-all ${
                        activeStep > index ? "bg-primary" : "bg-primary/20"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Large Featured Image with Browser Frame */}
            <div className="relative bg-white rounded-xl shadow-2xl shadow-primary/10 border border-primary/10 overflow-hidden w-full">
              {/* Image Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent z-10 pointer-events-none"></div>
                  <div className="relative w-full flex items-center justify-center p-4 min-h-[280px] sm:min-h-[320px] md:min-h-[360px]">
                    <Image
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      width={1200}
                      height={700}
                      className="w-full h-auto rounded-lg shadow-inner object-contain max-h-[300px] sm:max-h-[340px] md:max-h-[360px]"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Step Description */}
              <div className="px-5 py-3 bg-muted/50 border-t border-primary/10">
                <h4 className="font-semibold text-sm text-foreground mb-1">
                  {steps[activeStep].title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {steps[activeStep].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
