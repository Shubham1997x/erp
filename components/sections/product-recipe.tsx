"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Package, Calculator } from "lucide-react";

export function ProductRecipe() {
  return (
    <section id="product-recipe" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Product & Recipe Management
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Define products with detailed specifications and recipes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product Definition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Product Catalog</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Complete product management with detailed specifications
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
                <div className="text-sm">
                  <strong>Product Information:</strong> Images, dimensions, weight, category, and unit
                  (SQM, pieces)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
                <div className="text-sm">
                  <strong>Dropdown Master:</strong> Centrally manage Categories, Subcategories, Colors,
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
            className="flex flex-col"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Recipe Management</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Define raw materials and quantities with automatic calculations.
            </p>

            {/* Recipe Management - 2 Step Visualization */}
            <div className="space-y-4">
              <h4 className="text-base font-medium mb-4 text-foreground">Recipe Setup Process</h4>
              {[
                { step: 1, title: "Define Recipe", desc: "Add raw materials and quantities per unit", image: "/images/r1.png" },
                { step: 2, title: "Save & Use", desc: "Recipe saved and ready for calculations", image: "/images/r2.png" },
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
                    <div className="feature-image-container h-32 relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
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
