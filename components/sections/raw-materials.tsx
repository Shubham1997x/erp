"use client";

import { motion } from "framer-motion";
import { Bell, FileText, CheckCircle, Warehouse, Users, Package, ArrowRight } from "lucide-react";

const workflowSteps = [
  {
    icon: Bell,
    title: "Low Stock Alert",
    description: "Automatic notification for materials below minimum threshold",
  },
  {
    icon: FileText,
    title: "Create Purchase Order",
    description: "Generate POs from suppliers in the system",
  },
  {
    icon: CheckCircle,
    title: "Approve PO",
    description: "Managerial approval workflow for purchases",
  },
  {
    icon: Package,
    title: "Mark as Delivered",
    description: "Receive goods against the purchase order",
  },
  {
    icon: Warehouse,
    title: "Stock Automatically Updated",
    description: "Inventory levels are updated in real-time",
  },
];

const features = [
  {
    icon: Users,
    title: "Suppliers Management",
    description: "Maintain a complete database of suppliers and track purchase history",
  },
  {
    icon: FileText,
    title: "Purchase Orders",
    description: "Create, approve, and track POs from pending to delivered",
  },
  {
    icon: Warehouse,
    title: "Raw Materials Management",
    description: "Monitor stock, thresholds, and view complete stock history",
  },
];

export function RawMaterials() {
  return (
    <section id="raw-materials" className="section-padding section-dark relative">
      {/* Overlay to block any background patterns */}
      <div className="absolute inset-0 bg-[hsl(0_0%_10%)] -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Sourcing the Finest Threads, with Complete Control
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Rajdhani manages the entire raw material lifecycle, from supplier management and purchasing
            to real-time stock monitoring and automated alerts. Eliminate shortages and optimize
            inventory value.
          </p>
        </motion.div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Procurement Workflow</h3>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center max-w-[180px]"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-2 text-center">{step.title}</h4>
                    <p className="text-xs text-muted-foreground text-center">{step.description}</p>
                  </motion.div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block mx-2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


