"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calculator, Layers, Package, ArrowRight } from "lucide-react";

export function RecipeCalculator() {
  return (
    <section id="recipe-calculator" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Recipe Calculator
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
            Automatically calculate material requirements for any production quantity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Automatic Material Calculation
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong>Batch Quantity Input:</strong> Enter production quantity (SQM, pieces)
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong>Recipe-Based Calculation:</strong> Auto-calculates material quantities from product recipe
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong>Real-time Updates:</strong> Material requirements update instantly
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong>Stock Availability Check:</strong> Automatically checks inventory availability
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong>Export Calculations:</strong> Download material requirement lists
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recipe Calculator - 3 Step Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Calculation Process</h3>
            <div className="space-y-4">
              {[
                { step: 1, title: "Input Batch Size", desc: "Enter production quantity (SQM/pieces)", image: "/images/r1.png" },
                { step: 2, title: "View Results", desc: "See all material needs and stock status", image: "/images/r2.png" },
              ].map((item, index) => (
                <div key={index} className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-primary text-primary-foreground px-3 py-1 font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="image-container-borders"
                  >
                    <div className="feature-image-container h-32 relative overflow-hidden flex items-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain object-left"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
