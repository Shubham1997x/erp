"use client";

import { motion } from "framer-motion";
import {
  Warehouse,
  AlertTriangle,
  TrendingDown,
  Package,
  BarChart3,
} from "lucide-react";

export function StockManagement() {
  return (
    <section id="stock-management" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Stock Management
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Real-time inventory control with automated alerts and stock history tracking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 w-full lg:w-auto"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-5 justify-center lg:justify-start">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Warehouse className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">
                    Real-time Stock Levels
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor stock levels with instant updates as transactions occur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <AlertTriangle className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">
                    Low Stock Alerts
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic notifications when stock falls below minimum thresholds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <TrendingDown className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">Stock History</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete audit trail of all stock movements and adjustments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <BarChart3 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">
                    Stock Valuation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Track inventory value with multiple costing methods and valuation reports.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stock Management Image - SaaS Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div 
              className="relative  border border-primary/20 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent z-10 pointer-events-none"></div>
              <div className="relative w-full flex items-center justify-center p-1">
                <img
                  src="/images/stock.png"
                  alt="Stock Management"
                  className="w-auto h-auto max-w-full block"
                />
              </div>
            </motion.div>
            {/* Decorative accents */}
            <div className="absolute -top-2 -right-2 w-24 h-24 bg-primary/10 border border-primary/20 -z-10"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary/5 border border-primary/20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
