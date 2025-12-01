"use client";

import { motion } from "framer-motion";
import { Settings, Tag, Palette, Grid, Layers } from "lucide-react";
import Image from "next/image";

const dropdownTypes = [
  {
    icon: Tag,
    title: "Categories",
    description: "Organize products into main categories and subcategories",
  },
  {
    icon: Palette,
    title: "Colors",
    description: "Manage color palette for products and materials",
  },
  {
    icon: Grid,
    title: "Patterns",
    description: "Define and manage design patterns for carpet products",
  },
  {
    icon: Layers,
    title: "Subcategories",
    description: "Create hierarchical product classification system",
  },
];

export function DropdownMaster() {
  return (
    <section id="dropdown-master" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Dropdown Master
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Centrally manage all dropdown values, categories, colors, patterns,
            and classification systems used throughout your ERP. One place to
            control all master data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dropdownTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-border hover:border-primary/30 transition-colors text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dropdown Master UI Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="image-container-borders"
        >
          <div className="feature-image-container aspect-video bg-muted flex items-center justify-center p-12 relative">
            <Image
              src="/images/dropdown-master.png"
              alt="Dropdown Master"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
