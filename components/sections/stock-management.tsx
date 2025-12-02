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
    <section id="stock-management" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Stock Management
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
            Real-time inventory control with automated alerts and stock history tracking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Features */}
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
                  <Warehouse className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">
                    Real-time Stock Levels
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor stock levels with instant updates as transactions occur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">
                    Low Stock Alerts
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic notifications when stock falls below minimum thresholds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">Stock History</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete audit trail of all stock movements and adjustments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">
                    Stock Valuation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Track inventory value with multiple costing methods and valuation reports.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stock Management Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="image-container-borders"
          >
            <div className="feature-image-container relative">
              <img 
                src="/images/stock-management.png" 
                alt="Stock Management" 
                className="w-full h-auto object-contain"
              />
              <div className="bg-white p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Stock Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  Stock levels, Alerts, History, Valuation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
