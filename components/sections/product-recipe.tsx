"use client";

import { motion } from "framer-motion";
import { Package, Calculator } from "lucide-react";
import Image from "next/image";

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Every Masterpiece Begins with a Perfect Blueprint
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Rajdhani defines every product with granular detail, from categories to raw materials,
            ensuring consistency and quality in every piece you manufacture.
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
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Product Catalog</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Manage your complete product catalog with comprehensive details for each item.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
                <div className="text-base">
                  <strong>Product Information:</strong> Images, dimensions, weight, category, and unit
                  (SQM, pieces)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
                <div className="text-base">
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
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Recipe Management</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Define exact raw materials and quantities for each product with automatic calculations.
            </p>

            {/* Recipe Visual Card */}
            <div className="image-container-borders">
              <div className="feature-image-container border-2 border-primary/30 bg-linear-to-br from-background to-muted/50  shadow-sm">
                <div className="relative min-h-[300px] flex flex-col items-center justify-center">
                <Image
                  src="/images/product-recipe.png"
                  alt="Product Recipe Management"
                  fill
                  className="object-fill"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full">
                          <div class="flex justify-center mb-8">
                            <div class="w-20 h-20 rounded-lg flex items-center justify-center" style="background-color: hsl(var(--primary) / 0.1);">
                              <svg class="h-10 w-10" style="color: hsl(var(--primary));" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </div>
                          </div>
                          <div class="grid grid-cols-3 gap-6 mb-6">
                            <div class="text-center">
                              <div class="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-2" style="background-color: hsl(var(--primary) / 0.1);">
                                <svg class="h-8 w-8" style="color: hsl(var(--primary));" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                              </div>
                              <p class="text-sm font-medium">Wool</p>
                            </div>
                            <div class="text-center">
                              <div class="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-2" style="background-color: hsl(var(--primary) / 0.1);">
                                <svg class="h-8 w-8" style="color: hsl(var(--primary));" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                              </div>
                              <p class="text-sm font-medium">Dye</p>
                            </div>
                            <div class="text-center">
                              <div class="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-2" style="background-color: hsl(var(--primary) / 0.1);">
                                <svg class="h-8 w-8" style="color: hsl(var(--primary));" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                              </div>
                              <p class="text-sm font-medium">Backing</p>
                            </div>
                          </div>
                          <div class="space-y-2 text-sm text-muted-foreground text-center">
                            <p><strong>Product Recipes:</strong> Define exact raw materials and quantities</p>
                            <p><strong>Recipe Calculator:</strong> Automatically calculates total material requirements</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
