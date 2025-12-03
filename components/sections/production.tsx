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
    <section id="production" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Production Management
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Track production batches with multi-step workflow and machine assignments.
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
                className="p-6 border border-primary/20 hover:border-primary/40 transition-all  rounded-lg"
              >
                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Production Workflow - SaaS Style Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Production Workflow Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { step: 1, title: "Create Batch", desc: "Define production batch with target quantity", image: "/images/product-1.png" },
              { step: 2, title: "Track Progress", desc: "Monitor batch through each production stage", image: "/images/product-2.png" },
              { step: 3, title: "Complete & Quality", desc: "Finish production and quality checks", image: "/images/product-3.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=" border border-primary/20 rounded-lg transition-all group flex flex-col h-full"
              >
                <div className="p-4 border-b-2 border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-primary-foreground px-2.5 py-1 font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="relative bg-linear-to-br from-muted/50 to-white overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative w-full flex items-center justify-center p-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-auto h-auto max-w-full block"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
