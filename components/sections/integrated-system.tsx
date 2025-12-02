"use client";

import { motion } from "framer-motion";
import { Network, ArrowRight } from "lucide-react";

export function IntegratedSystem() {
  return (
    <section id="integrated" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Network className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Integrated Ecosystem Flow
              </h3>
              <p className="text-muted-foreground">
                Placeholder for system integration diagram
              </p>
            </div>

            {/* Simplified Flow Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white border border-primary/20">
                <h4 className="font-semibold mb-2 text-foreground">Input</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Procurement</div>
                  <div>Customers</div>
                </div>
              </div>
              <div className="text-center p-6 bg-primary/20 border border-primary/30">
                <h4 className="font-semibold mb-2 text-foreground">Core Operations</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Raw Materials</div>
                  <div>Production</div>
                  <div>Finished Goods</div>
                </div>
              </div>
              <div className="text-center p-6 bg-white border border-primary/20">
                <h4 className="font-semibold mb-2 text-foreground">Output</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Fulfillment</div>
                  <div>Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
