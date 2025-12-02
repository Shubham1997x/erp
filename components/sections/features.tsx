"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Package,
  Factory,
  ShoppingCart,
  Calculator,
  Users,
  BarChart3,
  Settings,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Clock,
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
    description:
      "Complete order lifecycle from quotation to delivery.",
  },
  {
    icon: Calculator,
    title: "Accounting & Finance",
    description:
      "Financial management with invoicing, payments, and reporting.",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    description:
      "Employee management, attendance, and payroll processing.",
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
    description:
      "QC processes with inspection workflows and defect tracking.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise security with role-based access and audit trails.",
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description:
      "Live production monitoring with instant alerts.",
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
  {
    icon: Clock,
    title: "Time Tracking",
    description:
      "Time tracking for production processes and machine utilization.",
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
    <section className="section-padding section-gray relative isolation-isolate">
      <div className="relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground">
            Comprehensive ERP Features
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
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
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow border-2 border-primary/20 hover:border-primary/40 bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-medium text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
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

