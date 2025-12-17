"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calculator, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function RecipeCalculator() {
  const [activeTab, setActiveTab] = useState<"input" | "results">("input");

  const tabs = [
    {
      id: "input" as const,
      label: "Input Batch Size",
      icon: Calculator,
      content: {
        title: "Input Batch Size",
        description: "Enter production quantity and let the system calculate material requirements",
        features: [
          {
            title: "Batch Quantity Input:",
            description: "Enter production quantity (SQM, pieces)",
          },
          {
            title: "Recipe-Based Calculation:",
            description: "Auto-calculates material quantities from product recipe",
          },
          {
            title: "Real-time Updates:",
            description: "Material requirements update instantly",
          },
          {
            title: "Unit Conversions:",
            description: "Switch between cones, kgs, meters, and SQM seamlessly",
          },
          {
            title: "Save Templates:",
            description: "Reuse common batch sizes and recipes with one click",
          },
        ],
      },
    },
    {
      id: "results" as const,
      label: "View Results",
      icon: CheckCircle2,
      content: {
        title: "View Results",
        description: "See all material needs and stock status at a glance",
        features: [
          {
            title: "Stock Availability Check:",
            description: "Automatically checks inventory availability",
          },
          {
            title: "Export Calculations:",
            description: "Download material requirement lists",
          },
          {
            title: "Detailed Breakdown:",
            description: "View complete material requirements with quantities",
          },
          {
            title: "Cost Estimate:",
            description: "Calculate material cost impact for the batch",
          },
          {
            title: "Exceptions Log:",
            description: "Highlight shortages, alternates, and approval needs",
          },
        ],
      },
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Input Batch Size",
      desc: "Enter production quantity (SQM/pieces)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&q=80",
    },
    {
      step: 2,
      title: "View Results",
      desc: "See all material needs and stock status",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop&q=80",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab)!;
  const ActiveIcon = activeTabData.icon;
  const activeStepIndex = activeTab === "input" ? 0 : 1;

  return (
    <section id="recipe-calculator" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Calculator
          </div>
          <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-primary">
            Recipe Calculator
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Automatically calculate material requirements for any production quantity.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="bg-white border border-primary/20 rounded-xl p-1.5 flex gap-2 shadow-sm max-w-2xl mx-auto lg:max-w-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-sm transition-all ${
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

          {/* Right Column: Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full"
          >
            {/* Large Featured Image */}
            <div className="relative bg-white rounded-xl shadow-2xl shadow-primary/10 border border-primary/10 overflow-hidden w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent z-10 pointer-events-none"></div>
                  <div className="relative bg-muted overflow-hidden aspect-4/3 flex items-center justify-center">
                    <Image
                      src={steps[activeStepIndex].image}
                      alt={steps[activeStepIndex].title}
                      width={1200}
                      height={700}
                      className="w-full h-full object-cover rounded-lg"
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
                  {steps[activeStepIndex].title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {steps[activeStepIndex].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
