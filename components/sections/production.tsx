"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Factory, Settings, Eye, Layers, ArrowRight } from "lucide-react";
import { useState } from "react";

const productionStages = ["Queue", "Weaving", "Washing", "Finishing"];

const features = [
  {
    icon: Factory,
    title: "Create Production Batch",
    description: "Define target quantity based on an order or for stock",
  },
  {
    icon: Layers,
    title: "Multi-Step Process",
    description:
      "Track the batch through each unique stage of your manufacturing process",
  },
  {
    icon: Settings,
    title: "Machine Management",
    description: "Assign and track the machines used at each step",
  },
  {
    icon: Eye,
    title: "Real-time Monitoring",
    description:
      "View the status and progress of all active production batches",
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "Create Batch",
    desc: "Define production batch with target quantity",
    image: "/images/product-1.png",
  },
  {
    step: 2,
    title: "Track Progress",
    desc: "Monitor batch through each production stage",
    image: "/images/product-2.png",
  },
  {
    step: 3,
    title: "Complete & Quality",
    desc: "Finish production and quality checks",
    image: "/images/product-3.png",
  },
];

export function Production() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="production" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Production
          </div>
          <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-primary">
            Production Management
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Track production batches with multi-step workflow and machine
            assignments.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-primary/20 rounded-xl p-6 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Production Workflow - Timeline Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Production Workflow Steps
          </h3>

          <div className="max-w-5xl mx-auto">
            {/* Timeline with Featured Image */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
              {/* Left: Timeline Steps */}
              <div className="flex flex-col justify-center">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/20 via-primary/40 to-primary/20"></div>

                  <div className="space-y-8">
                    {workflowSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative"
                      >
                        {/* Timeline Dot */}
                        <div className="hidden lg:block absolute left-6 top-6 -translate-x-1/2 z-10">
                          <button
                            onClick={() => setActiveStep(index)}
                            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                              activeStep === index
                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30 scale-110"
                                : "bg-white text-muted-foreground border-primary/30 hover:border-primary/50 hover:scale-105"
                            }`}
                          >
                            {step.step}
                          </button>
                        </div>

                        {/* Content Card */}
                        <div
                          className={`lg:ml-24 rounded-xl transition-all duration-300 overflow-hidden border ${
                            activeStep === index
                              ? "border-primary/40 bg-white shadow-lg"
                              : "border-primary/20 bg-white hover:border-primary/30"
                          }`}
                        >
                          <button
                            onClick={() => setActiveStep(index)}
                            className="w-full text-left p-5"
                          >
                            <div className="flex items-start gap-4">
                              {/* Mobile Step Number */}
                              <div
                                className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 shrink-0 ${
                                  activeStep === index
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-muted text-muted-foreground border-primary/30"
                                }`}
                              >
                                {step.step}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4
                                  className={`font-semibold text-base mb-2 transition-colors ${
                                    activeStep === index
                                      ? "text-primary"
                                      : "text-foreground"
                                  }`}
                                >
                                  {step.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {step.desc}
                                </p>
                              </div>
                              <ArrowRight
                                className={`h-5 w-5 shrink-0 mt-1 transition-transform ${
                                  activeStep === index
                                    ? "text-primary translate-x-1"
                                    : "text-muted-foreground"
                                }`}
                              />
                            </div>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Featured Image */}
              <div className="flex flex-col justify-center">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-white rounded-xl shadow-2xl shadow-primary/10 border border-primary/10 overflow-hidden"
                >
                  <div className="relative bg-white overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent z-10 pointer-events-none"></div>
                    <div className="relative w-full h-full flex items-center justify-center aspect-4/3">
                      <Image
                        src={workflowSteps[activeStep].image}
                        alt={workflowSteps[activeStep].title}
                        width={1200}
                        height={700}
                        className="w-full h-full rounded-lg object-contain"
                        quality={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 1200px"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Step Description */}
                  <div className="px-5 py-3 bg-white border-t border-primary/10">
                    <h4 className="font-semibold text-sm text-foreground mb-1">
                      {workflowSteps[activeStep].title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {workflowSteps[activeStep].desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
