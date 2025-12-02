"use client";

import { motion } from "framer-motion";
import {
  Bell,
  FileText,
  CheckCircle,
  Warehouse,
  Users,
  Package,
  ArrowRight,
  ShoppingCart,
  Handshake,
  Layers,
  Droplet,
  Box,
  TrendingUp,
  BarChart3,
  Factory,
  ArrowDown,
} from "lucide-react";

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

const materialTypes = [
  {
    icon: Layers,
    name: "Yarn",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-400/40",
    iconColor: "text-blue-400",
  },
  {
    icon: Droplet,
    name: "Dye",
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-400/40",
    iconColor: "text-purple-400",
  },
  {
    icon: Box,
    name: "Fabric",
    color: "from-amber-500/20 to-amber-600/20",
    borderColor: "border-amber-400/40",
    iconColor: "text-amber-400",
  },
];

const features = [
  {
    icon: Users,
    title: "Suppliers Management",
    description: "Complete supplier database with purchase history tracking",
  },
  {
    icon: FileText,
    title: "Purchase Orders",
    description: "Create, approve, and track POs from pending to delivered",
  },
  {
    icon: Warehouse,
    title: "Raw Materials Management",
    description: "Monitor stock levels, thresholds, and complete history",
  },
];

export function RawMaterials() {
  return (
    <section id="raw-materials" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Raw Materials Management
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Complete lifecycle management from sourcing to inventory with
            seamless production integration.
          </p>
        </motion.div>

        {/* Integrated Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative bg-white border-2 border-primary/30 p-6 lg:p-12">
            {/* Dashboard & Analytics - Top Center */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="bg-[hsl(0_0%_98%)] border-2 border-amber-400/30 p-6 max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
                  Dashboard & Analytics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-amber-500/10 border border-amber-400/20">
                    <BarChart3 className="h-8 w-8 text-amber-400 mb-2" />
                    <span className="text-sm font-normal text-foreground">
                      Dashboard
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-amber-500/10 border border-amber-400/20">
                    <TrendingUp className="h-8 w-8 text-amber-400 mb-2" />
                    <span className="text-sm font-normal text-foreground">
                      Analytics
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Flow - Procurement to Raw Materials to Production */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {/* Procurement Module */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[hsl(0_0%_98%)] border-2 border-primary/20 p-6 relative"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Procurement
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-primary/10 border border-primary/20">
                    <ShoppingCart className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-normal text-foreground">
                      Suppliers
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-primary/10 border border-primary/20">
                    <Handshake className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-normal text-foreground">
                      Purchase Orders
                    </span>
                  </div>
                </div>
                {/* Arrow to Raw Materials */}
                <div className="absolute right-0 top-1/2 translate-x-full hidden lg:flex items-center">
                  <ArrowRight className="h-8 w-8 text-primary/60" />
                </div>
              </motion.div>

              {/* Raw Materials Inventory Module */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[hsl(0_0%_98%)] border-2 border-primary/30 p-6 relative"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Raw Materials Inventory
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {materialTypes.map((material, index) => {
                    const Icon = material.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        className={`flex flex-col items-center p-3 bg-gradient-to-br ${material.color} border ${material.borderColor}`}
                      >
                        <Icon
                          className={`h-6 w-6 ${material.iconColor} mb-1`}
                        />
                        <span className="text-xs font-medium text-foreground text-center">
                          {material.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
                {/* Arrow to Production */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full hidden lg:flex items-center justify-center w-full">
                  <ArrowDown className="h-8 w-8 text-primary/60" />
                </div>
                {/* Arrow from Dashboard to Raw Materials */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full hidden lg:flex items-center justify-center">
                  <ArrowDown className="h-8 w-8 text-amber-400/60" />
                </div>
                {/* Arrow to Production Ready */}
                <div className="absolute right-0 top-1/2 translate-x-full hidden lg:flex items-center">
                  <ArrowRight className="h-8 w-8 text-primary/60" />
                </div>
              </motion.div>

              {/* Production Preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[hsl(0_0%_98%)] border-2 border-primary/20 p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Production Ready
                </h3>
                <div className="flex flex-col items-center p-4 bg-primary/10 border border-primary/20">
                  <Factory className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm font-normal text-foreground">
                    Materials Flow to Production
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Production Connection - Below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="bg-[hsl(0_0%_98%)] border-2 border-primary/30 p-6 max-w-md">
                <div className="flex items-center justify-center gap-4">
                  <Factory className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Production Management
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Receives materials automatically
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Procurement Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Procurement Workflow
          </h3>
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
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-3 border border-primary/30">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-medium text-sm mb-2 text-center text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground text-center">
                      {step.description}
                    </p>
                  </motion.div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block mx-2">
                      <ArrowRight className="h-6 w-6 text-primary/60" />
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
                className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors bg-white"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
