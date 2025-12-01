"use client";

import { motion } from "framer-motion";
import { Factory, Settings, Eye, Layers } from "lucide-react";
import Image from "next/image";

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

export function Production() {
  return (
    <section id="production" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            From Raw Materials to Flawless Execution on the Factory Floor
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Rajdhani initiates and tracks production batches, offering a
            flexible, multi-step workflow to monitor progress, manage machine
            assignments, and ensure quality standards.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Production Workflow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="image-container-borders"
        >
          <div className="feature-image-container aspect-video bg-muted flex items-center justify-center max-h-[350px] w-full p-12 relative">
            <Image
              src="/images/production-workflow.png"
              alt="Production Workflow"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
