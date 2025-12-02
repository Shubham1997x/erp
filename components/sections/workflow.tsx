"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const workflowSteps = [
  {
    step: 1,
    title: "Order Received",
    description:
      "Customer orders are automatically captured and processed through the sales module.",
    image: "/placeholder-workflow-1.png",
  },
  {
    step: 2,
    title: "Production Planning",
    description:
      "System generates production schedules based on capacity, materials, and priorities.",
    image: "/placeholder-workflow-2.png",
  },
  {
    step: 3,
    title: "Material Allocation",
    description:
      "Automated material requirement planning ensures all resources are available.",
    image: "/placeholder-workflow-3.png",
  },
  {
    step: 4,
    title: "Weaving Operations",
    description:
      "Real-time monitoring of production with machine status and progress tracking.",
    image: "/placeholder-workflow-4.png",
  },
  {
    step: 5,
    title: "Quality Inspection",
    description:
      "Integrated QC processes verify product quality before final approval.",
    image: "/placeholder-workflow-5.png",
  },
  {
    step: 6,
    title: "Delivery & Invoicing",
    description:
      "Automated delivery scheduling, invoicing, and payment tracking.",
    image: "/placeholder-workflow-6.png",
  },
];

export function Workflow() {
  return (
    <section className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Streamlined Workflow
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Rajdhani ERP transforms your manufacturing process from order
            to delivery.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {workflowSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 mb-12`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Automated Process</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="image-container-borders">
                  <div className="feature-image-container relative overflow-hidden border-2 border-primary/30 bg-muted aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="h-12 w-12 text-primary/50" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Placeholder for workflow UI image
                      <br />
                      <span className="text-xs">Replace with: {item.image}</span>
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            <strong>Note:</strong> Replace placeholder images with actual UI screenshots
            or mockups of your ERP system showing each workflow step.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

