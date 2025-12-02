"use client";

import { motion } from "framer-motion";
import { Settings, Tag, Palette, Grid, Layers } from "lucide-react";

const dropdownTypes = [
  {
    icon: Tag,
    title: "Categories",
    description: "Organize products into categories and subcategories",
  },
  {
    icon: Palette,
    title: "Colors",
    description: "Manage color palette for products",
  },
  {
    icon: Grid,
    title: "Patterns",
    description: "Define and manage design patterns",
  },
  {
    icon: Layers,
    title: "Subcategories",
    description: "Create hierarchical product classification",
  },
];

export function DropdownMaster() {
  return (
    <section id="dropdown-master" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Centrally manage all dropdown values, categories, colors, and patterns. One place to control all master data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {dropdownTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all text-center bg-white shadow-md hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2 text-foreground">{type.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dropdown Master UI Image - SaaS Style */}
        <motion.div
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-white border-2 border-primary/20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent z-10 pointer-events-none"></div>
            <motion.div 
              className="relative w-full flex items-center justify-center p-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src="/images/dropdown.png"
                alt="Dropdown Master Interface"
                className="w-auto h-auto max-w-full block"
              />
            </motion.div>
          </div>
          {/* Decorative accents */}
          <div className="absolute -top-2 -right-2 w-24 h-24 bg-primary/10 border-2 border-primary/20 -z-10"></div>
          <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary/5 border-2 border-primary/20 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
