"use client";

import { motion } from "framer-motion";
import { Network, ArrowRight } from "lucide-react";

export function IntegratedSystem() {
  return (
    <section id="integrated" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            A Single, Woven System for End-to-End Control
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Rajdhani ERP is more than a collection of modules; it is a fully
            integrated ecosystem where data flows seamlessly from one stage to
            the next. This unified approach eliminates data silos, reduces
            errors, and provides a single source of truth for your entire
            business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="image-container-borders"
        >
          <div className="feature-image-container p-12 bg-background">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Network className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Integrated Ecosystem Flow
              </h3>
              <p className="text-muted-foreground">
                Placeholder for system integration diagram
              </p>
            </div>

            {/* Simplified Flow Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Input</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Procurement</div>
                  <div>Customers</div>
                </div>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <h4 className="font-semibold mb-2">Core Operations</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Raw Materials</div>
                  <div>Production</div>
                  <div>Finished Goods</div>
                </div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Output</h4>
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
          <h3 className="text-3xl font-bold mb-4">
            One System. One Source of Truth. One Masterpiece.
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rajdhani ERP transforms operational complexity into competitive
            clarity. By weaving every aspect of your business—from the first
            thread of raw material to the final customer delivery—into a single,
            intelligent platform, we empower you to create your finest work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
