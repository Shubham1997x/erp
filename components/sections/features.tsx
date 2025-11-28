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
      "Real-time tracking of yarn, raw materials, and finished goods with automated reorder points and batch management.",
  },
  {
    icon: Factory,
    title: "Production Planning",
    description:
      "Advanced scheduling and capacity planning for weaving operations with machine allocation and workflow optimization.",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Order Management",
    description:
      "Complete order lifecycle management from quotation to delivery with customer relationship tracking.",
  },
  {
    icon: Calculator,
    title: "Accounting & Finance",
    description:
      "Comprehensive financial management including invoicing, payments, expenses, and financial reporting.",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    description:
      "Employee management, attendance tracking, payroll processing, and performance evaluation systems.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Powerful business intelligence with customizable dashboards, KPI tracking, and data visualization.",
  },
  {
    icon: Settings,
    title: "Quality Control",
    description:
      "Integrated QC processes with inspection workflows, defect tracking, and quality assurance protocols.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with role-based access control, audit trails, and compliance management.",
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description:
      "Live production monitoring, machine status tracking, and instant alerts for operational issues.",
  },
  {
    icon: Target,
    title: "Demand Forecasting",
    description:
      "AI-powered demand prediction to optimize inventory levels and production schedules.",
  },
  {
    icon: TrendingUp,
    title: "Cost Management",
    description:
      "Track production costs, material usage, labor expenses, and profitability analysis by product line.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description:
      "Precise time tracking for production processes, machine utilization, and labor efficiency metrics.",
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Comprehensive ERP Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your carpet manufacturing operations
            efficiently and profitably.
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
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

