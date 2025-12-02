"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, TrendingUp, Package, BarChart3 } from "lucide-react";

export function Dashboard() {
  return (
    <section id="dashboard" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Your Business in One View
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Real-time insights and metrics at a glance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">
                    Real-time Statistics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor products, orders, and revenue in real-time
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">
                    Performance Metrics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Track efficiency and trends with visual analytics
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">
                    Automated Insights
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Proactive alerts for critical business events
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">Activity Feed</h3>
                  <p className="text-sm text-muted-foreground">
                    Live updates across all modules
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="image-container-borders"
          >
            <div className="feature-image-container aspect-video relative overflow-hidden">
              <Image
                src="/images/dashboard-overview.png"
                alt="ERP Dashboard Overview - Revenue, Active Orders, Sales Trends, Production Efficiency"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
