"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  Factory,
  ShoppingCart,
  Calculator,
  BarChart3,
  Settings,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Real-time tracking with automated reorder points and batch management.",
  },
  {
    icon: Factory,
    title: "Production Planning",
    description:
      "Advanced scheduling with machine allocation and workflow optimization.",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Order Management",
    description: "Complete order lifecycle from quotation to delivery.",
  },
  {
    icon: Calculator,
    title: "Accounting & Finance",
    description:
      "Financial management with invoicing, payments, and reporting.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Business intelligence with customizable dashboards and KPI tracking.",
  },
  {
    icon: Settings,
    title: "Quality Control",
    description: "QC processes with inspection workflows and defect tracking.",
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description: "Live production monitoring with instant alerts.",
  },
  {
    icon: Target,
    title: "Demand Forecasting",
    description:
      "AI-powered demand prediction for inventory and production optimization.",
  },
  {
    icon: TrendingUp,
    title: "Cost Management",
    description:
      "Track costs, material usage, and profitability by product line.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Features() {
  return (
    <section id="features" className="section-padding section-gray relative isolation-isolate">
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Features
            </div>
            <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-foreground">
              Comprehensive ERP Features
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Complete ERP solution for carpet manufacturing operations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-transparent rounded-lg shadow-sm transition-all border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/30 transition-all group-hover:bg-primary/20"
                        >
                          <Icon className="h-7 w-7 text-primary" />
                        </motion.div>
                        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
