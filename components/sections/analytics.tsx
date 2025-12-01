"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  FileText,
  Download,
} from "lucide-react";
import Image from "next/image";

export function Analytics() {
  return (
    <section id="analytics" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Analytics & Business Intelligence
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Make data-driven decisions with comprehensive analytics,
            customizable reports, and real-time insights into your business
            performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: BarChart3,
              title: "Sales Analytics",
              description:
                "Track sales trends, revenue, and performance metrics with interactive charts",
            },
            {
              icon: TrendingUp,
              title: "Production Metrics",
              description:
                "Monitor production efficiency, machine utilization, and throughput rates",
            },
            {
              icon: PieChart,
              title: "Inventory Analysis",
              description:
                "Analyze stock levels, turnover rates, and material consumption patterns",
            },
            {
              icon: FileText,
              title: "Custom Reports",
              description:
                "Generate detailed reports on any aspect of your business operations",
            },
            {
              icon: Download,
              title: "Data Export",
              description:
                "Export data in multiple formats (Excel, PDF, CSV) for further analysis",
            },
            {
              icon: TrendingUp,
              title: "KPI Dashboard",
              description:
                "Track key performance indicators with real-time updates and alerts",
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
                className="p-6 rounded-xl border-2 border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Analytics Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="image-container-borders"
        >
          <div className="feature-image-container aspect-video bg-muted flex items-center justify-center ">
      
              <Image
                src="/images/dashboard-overview.png"
                alt="Analytics Dashboard"
                fill
                className="object-contain"
              />
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}
