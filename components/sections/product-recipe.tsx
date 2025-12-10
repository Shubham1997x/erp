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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Product & Recipe Management
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Define products with detailed specifications and recipes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 lg:gap-6">
          {/* Left Column: Product Catalog and Recipe Management stacked */}
          <div className="flex flex-col">
            <h4 className="text-xl font-bold mb-4 text-foreground text-center lg:text-left">
              Management Features
            </h4>
            <div className="flex flex-col gap-8">
              {/* Product Definition */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className=" border border-primary/20 rounded-lg p-4 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Product Catalog
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Complete product management with detailed specifications
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <div className="text-sm">
                      <strong className="text-foreground">
                        Product Information:
                      </strong>{" "}
                      Images, dimensions, weight, category, and unit (SQM,
                      pieces)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <div className="text-sm">
                      <strong className="text-foreground">
                        Dropdown Master:
                      </strong>{" "}
                      Centrally manage Categories, Subcategories, Colors, and
                      Patterns
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Recipe Management */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=" border border-primary/20 rounded-lg p-4 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Calculator className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Recipe Management
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Define raw materials and quantities with automatic
                  calculations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <div className="text-sm">
                      <strong className="text-foreground">
                        Raw Material Mapping:
                      </strong>{" "}
                      Link products to required raw materials with precise
                      quantities
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <div className="text-sm">
                      <strong className="text-foreground">
                        Automatic Calculations:
                      </strong>{" "}
                      Recipe calculator computes material needs based on
                      production quantity
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Recipe Setup Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h4 className="text-xl font-bold mb-4 text-foreground text-center lg:text-left">
              Recipe Setup Process
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  step: 1,
                  title: "Define Recipe",
                  desc: "Add raw materials and quantities per unit",
                  image: "/images/recipe-1.png",
                },
                {
                  step: 2,
                  title: "Save & Use",
                  desc: "Recipe saved and ready for calculations",
                  image: "/images/recipe-2.png",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=" border border-primary/20 rounded-lg transition-all group flex flex-col h-full"
                >
                  <div className="p-4 border-b-2 border-primary/10 shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary text-primary-foreground px-3 py-1.5 font-bold text-base shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="relative overflow-hidden flex-1 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-fit p-1 "
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
