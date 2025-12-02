"use client";

import { motion } from "framer-motion";
import { Factory, Settings, Eye, Layers } from "lucide-react";

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
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Production Management
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Track production batches with multi-step workflow and machine assignments.
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
                className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors bg-white"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-medium mb-2 text-foreground">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Production Workflow - 3 Step Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">Production Workflow Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: 1, title: "Create Batch", desc: "Define production batch with target quantity", image: "/images/s1.png" },
              { step: 2, title: "Track Progress", desc: "Monitor batch through each production stage", image: "/images/s2.png" },
              { step: 3, title: "Complete & Quality", desc: "Finish production and quality checks", image: "/images/s3.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="image-container-borders flex flex-col h-full"
              >
                <div className="feature-image-container relative flex-1 flex flex-col">
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 font-bold text-sm z-10">
                    Step {item.step}
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="bg-white p-4 text-center">
                    <h4 className="font-bold text-lg mb-1 text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
