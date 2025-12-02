"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  FileText,
  Download,
} from "lucide-react";

export function Analytics() {
  return (
    <section id="analytics" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Analytics & Business Intelligence
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Data-driven decisions with comprehensive analytics and real-time insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: BarChart3,
              title: "Sales Analytics",
              description:
                "Track sales trends and performance metrics with interactive charts",
            },
            {
              icon: TrendingUp,
              title: "Production Metrics",
              description:
                "Monitor production efficiency and machine utilization",
            },
            {
              icon: PieChart,
              title: "Inventory Analysis",
              description:
                "Analyze stock levels and material consumption patterns",
            },
            {
              icon: FileText,
              title: "Custom Reports",
              description:
                "Generate detailed reports on any business operations",
            },
            {
              icon: Download,
              title: "Data Export",
              description:
                "Export data in multiple formats for further analysis",
            },
            {
              icon: TrendingUp,
              title: "KPI Dashboard",
              description:
                "Track key performance indicators with real-time updates",
            },
          ].map((feature, index) => {
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
                <h3 className="text-base font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
