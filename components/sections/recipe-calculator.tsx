"use client";

import { motion } from "framer-motion";
import { Calculator, Layers, Package, ArrowRight } from "lucide-react";
import Image from "next/image";

export function RecipeCalculator() {
  return (
    <section id="recipe-calculator" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Recipe Calculator
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Automatically calculate material requirements for any production
            quantity. Input your batch size and get instant calculations for all
            raw materials needed.
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
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Automatic Material Calculation
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong>Batch Quantity Input:</strong> Enter your desired
                  production quantity (SQM, pieces, etc.)
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong>Recipe-Based Calculation:</strong> System
                  automatically calculates required quantities for each raw
                  material based on product recipe
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong>Real-time Updates:</strong> See material requirements
                  update instantly as you change batch quantities
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong>Stock Availability Check:</strong> Automatically
                  checks if sufficient materials are available in inventory
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <strong>Export Calculations:</strong> Download material
                  requirement lists for procurement planning
                </div>
              </div>
            </div>
          </motion.div>

          {/* Calculator Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="image-container-borders"
          >
            <div className="feature-image-container bg-background p-12 border-2 border-primary/30 w-full h-full relative">
              <Image
                src="/images/product-recipe.png"
                alt="Recipe Calculator"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
