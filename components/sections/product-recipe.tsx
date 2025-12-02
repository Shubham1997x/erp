"use client";

import { motion } from "framer-motion";
import { Package, Calculator } from "lucide-react";

export function ProductRecipe() {
  return (
    <section id="product-recipe" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Product & Recipe Management
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Define products with detailed specifications and recipes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Product Definition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-primary/20 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Product Catalog</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Complete product management with detailed specifications
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Product Information:</strong> Images, dimensions, weight, category, and unit
                  (SQM, pieces)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Dropdown Master:</strong> Centrally manage Categories, Subcategories, Colors,
                  and Patterns
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recipe Management */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-primary/20 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Recipe Management</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Define raw materials and quantities with automatic calculations.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Raw Material Mapping:</strong> Link products to required raw materials with precise quantities
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Automatic Calculations:</strong> Recipe calculator computes material needs based on production quantity
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recipe Setup Process - SaaS Style Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-bold mb-6 text-center text-foreground">Recipe Setup Process</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { step: 1, title: "Define Recipe", desc: "Add raw materials and quantities per unit", image: "/images/recipe-1.png" },
              { step: 2, title: "Save & Use", desc: "Recipe saved and ready for calculations", image: "/images/recipe-2.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="p-6 border-b-2 border-primary/10 shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 font-bold text-lg shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="relative bg-linear-to-br from-muted/50 to-white overflow-hidden flex-1 min-h-[400px] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
