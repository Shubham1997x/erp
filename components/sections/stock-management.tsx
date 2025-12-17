"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Inventory
          </div>
          <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-primary">
            Stock Management
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Real-time inventory control with automated alerts and stock history tracking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-start">
          {/* Left: Enhanced Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border border-primary/20 rounded-xl p-5 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Warehouse className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2 text-foreground">
                      Real-time Stock Levels
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Monitor stock levels with instant updates as transactions occur.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white border border-primary/20 rounded-xl p-5 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2 text-foreground">
                      Low Stock Alerts
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Automatic notifications when stock falls below minimum thresholds.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white border border-primary/20 rounded-xl p-5 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <TrendingDown className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2 text-foreground">Stock History</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Complete audit trail of all stock movements and adjustments.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white border border-primary/20 rounded-xl p-5 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2 text-foreground">
                      Stock Valuation
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Track inventory value with multiple costing methods and valuation reports.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Large Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-primary/10 overflow-hidden">
              <div className="relative bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent z-10 pointer-events-none" />
                <div className="relative w-full h-full flex items-center justify-center aspect-4/3">
                  <Image
                    src="/images/stock.png"
                    alt="Stock Management"
                    width={1200}
                    height={700}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 1200px"
                    className="w-full h-full rounded-lg object-contain"
                    quality={85}
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 border border-primary/20 rounded-xl blur-sm -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/5 border border-primary/20 rounded-xl blur-sm -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
