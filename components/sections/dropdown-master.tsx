"use client";

import { motion } from "framer-motion";
import { Settings, Tag, Palette, Grid, Layers } from "lucide-react";
import Image from "next/image";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Dropdown Master
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
            Centrally manage all dropdown values, categories, colors, and patterns. One place to control all master data.
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
                className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors text-center bg-white"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 border border-primary/30">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-base font-medium mb-2 text-foreground">{type.title}</h3>
                <p className="text-xs text-muted-foreground">
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
          <div className="feature-image-container aspect-video flex items-center justify-center p-12 relative">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Settings className="h-12 w-12 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 font-semibold">Dropdown Master Interface</p>
              <p className="text-xs text-muted-foreground/70">Image: /images/dropdown-master.png</p>
              <p className="text-xs text-muted-foreground/70 mt-2">Shows: Categories, Colors, Patterns, Subcategories management</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
