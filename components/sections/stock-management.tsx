"use client";

import { motion } from "framer-motion";
import {
  Warehouse,
  AlertTriangle,
  TrendingDown,
  Package,
  BarChart3,
} from "lucide-react";
import Image from "next/image";

export function StockManagement() {
  return (
    <section id="stock-management" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stock Management
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete inventory control with real-time stock monitoring,
            automated alerts, and comprehensive stock history tracking for both
            raw materials and finished goods.
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Warehouse className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Real-time Stock Levels
                  </h3>
                  <p className="text-muted-foreground">
                    Monitor current stock levels for all materials and finished
                    products with instant updates as transactions occur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Low Stock Alerts
                  </h3>
                  <p className="text-muted-foreground">
                    Automatic notifications when stock levels fall below minimum
                    thresholds. Never run out of critical materials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Stock History</h3>
                  <p className="text-muted-foreground">
                    Complete audit trail of all stock movements including
                    receipts, issues, transfers, and adjustments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Stock Valuation
                  </h3>
                  <p className="text-muted-foreground">
                    Track inventory value with multiple costing methods (FIFO,
                    LIFO, Average) and generate valuation reports.
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
            <div className="feature-image-container aspect-video bg-muted flex items-center justify-center p-12">
              <div className="text-center">
                <Image
                  src="/images/stock-management.png"
                  alt="Stock Management"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
