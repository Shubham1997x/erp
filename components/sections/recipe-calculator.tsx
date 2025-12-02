"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export function RecipeCalculator() {
  return (
    <section id="recipe-calculator" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-primary">
            Recipe Calculator
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Automatically calculate material requirements for any production quantity.
          </p>
        </motion.div>

        {/* Features Section - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="bg-white border-2 border-primary/20 rounded-lg p-6 shadow-md max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Automatic Material Calculation
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Batch Quantity Input:</strong> Enter production quantity (SQM, pieces)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Recipe-Based Calculation:</strong> Auto-calculates material quantities from product recipe
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Real-time Updates:</strong> Material requirements update instantly
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Stock Availability Check:</strong> Automatically checks inventory availability
                </div>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Export Calculations:</strong> Download material requirement lists
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Calculation Process - Horizontal Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-center mb-6 text-foreground">Calculation Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { step: 1, title: "Input Batch Size", desc: "Enter production quantity (SQM/pieces)", image: "/images/recipe-1.png" },
              { step: 2, title: "View Results", desc: "See all material needs and stock status", image: "/images/recipe-2.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all group flex flex-col h-full"
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
                <div className="relative bg-linear-to-br from-muted/50 to-white overflow-hidden">
                  <div className="relative w-full flex items-center justify-center p-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-auto h-auto max-w-full block"
                    />
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
