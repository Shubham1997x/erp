"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export function RecipeCalculator() {
  return (
    <section id="recipe-calculator" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Recipe Calculator
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Automatically calculate material requirements for any production quantity.
          </p>
        </motion.div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
          {/* Left Side: Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="border border-primary/20 rounded-lg p-6 bg-white shadow-sm h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-primary/20 bg-primary/10">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Automatic Material Calculation
                </h3>
              </div>
              <div className="space-y-4">
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
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div className="text-sm">
                    <strong className="text-foreground">Export Calculations:</strong> Download material requirement lists
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Calculation Process Images */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { step: 1, title: "Input Batch Size", desc: "Enter production quantity (SQM/pieces)", image: "/images/recipe-1.png" },
              { step: 2, title: "View Results", desc: "See all material needs and stock status", image: "/images/recipe-2.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-primary/20 rounded-lg transition-all group flex flex-col h-full bg-white shadow-sm hover:shadow-md"
              >
                <div className="p-4 border-b border-primary/10 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-primary-foreground px-3 py-1.5 font-bold text-sm rounded shrink-0 min-w-8 text-center">
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-base text-foreground leading-tight">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="relative bg-linear-to-br from-muted/30 to-white overflow-hidden flex-1 flex items-center justify-center min-h-[140px] sm:min-h-[168px] md:min-h-[196px]"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain max-w-full max-h-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
