"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Package, BarChart3 } from "lucide-react";

export function Dashboard() {
  return (
    <section id="dashboard" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Your Business in One View
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Real-time insights and metrics at a glance
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">
                    Real-time Statistics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor products, orders, and revenue in real-time
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">
                    Performance Metrics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Track efficiency and trends with visual analytics
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20">
                  <BarChart3 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">
                    Automated Insights
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Proactive alerts for critical business events
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20">
                  <Package className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">
                    Activity Feed
                  </h3>
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
            className="relative"
          >
            <motion.div 
              className="relative bg-white border-2 border-primary/20 shadow-2xl overflow-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent z-10 pointer-events-none"></div>
              <div className="relative w-full flex items-center justify-center p-1">
                <img
                  src="/images/dashboard.png"
                  alt="ERP Dashboard Overview - Revenue, Active Orders, Sales Trends, Production Efficiency"
                  className="w-auto h-auto max-w-full block"
                />
              </div>
            </motion.div>
            {/* Decorative corner accent */}
            <div className="absolute -top-2 -right-2 w-24 h-24 bg-primary/10 border-2 border-primary/20 -z-10"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary/5 border-2 border-primary/20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
