"use client";

import { motion } from "framer-motion";
import { Network, ArrowRight } from "lucide-react";

export function IntegratedSystem() {
  return (
    <section id="integrated" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            One System, End-to-End
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Fully integrated ecosystem
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="image-container-borders"
        >
          <div className="feature-image-container p-12">
            <div className="text-center mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20 transition-all"
              >
                <Network className="h-10 w-10 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Integrated Ecosystem Flow
              </h3>
              <p className="text-muted-foreground">
                Seamless data flow across all modules
              </p>
            </div>

            {/* Simplified Flow Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Input",
                  items: ["Procurement", "Customers"],
                  bg: "bg-white",
                  border: "border-primary/20",
                },
                {
                  title: "Core Operations",
                  items: ["Raw Materials", "Production", "Finished Goods"],
                  bg: "bg-primary/10",
                  border: "border-primary/30",
                  highlight: true,
                },
                {
                  title: "Output",
                  items: ["Fulfillment", "Delivery"],
                  bg: "bg-white",
                  border: "border-primary/20",
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`text-center p-6 ${step.bg} border ${step.border} rounded-lg transition-all hover:shadow-lg ${
                    step.highlight ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  <h4 className="font-semibold mb-4 text-foreground text-lg">
                    {step.title}
                  </h4>
                  <div className="space-y-3">
                    {step.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                        className="text-sm text-muted-foreground px-3 py-2 rounded-md hover:bg-primary/5 transition-colors"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            One System. One Source of Truth.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
