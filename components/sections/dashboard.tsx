"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Package, DollarSign } from "lucide-react";
import Image from "next/image";

export function Dashboard() {
  return (
    <section id="dashboard" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Entire Business, Distilled into a Single View
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            The Rajdhani Dashboard provides real-time, high-level overviews of
            your entire operation, key performance metrics, and automated
            insights to keep you ahead of the curve.
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Real-time Statistics
                  </h3>
                  <p className="text-muted-foreground">
                    Monitor total products, materials, orders, and revenue at a
                    glance. All data updates in real-time as your business
                    operates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Performance Metrics
                  </h3>
                  <p className="text-muted-foreground">
                    Track production efficiency, order fulfillment rates, and
                    inventory levels with comprehensive visualizations and trend
                    analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Automated Insights
                  </h3>
                  <p className="text-muted-foreground">
                    Receive proactive alerts for low stock levels, pending
                    orders, production status changes, and critical business
                    events.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Activity Feed</h3>
                  <p className="text-muted-foreground">
                    Get a live look at recent activities across every module -
                    from new orders to production completions and inventory
                    updates.
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
            <div className="feature-image-container aspect-video bg-muted flex items-center justify-center p-12 relative">
              <Image
                src="/images/dashboard-overview.png"
                alt="Dashboard Overview"
                fill
                className="object-fill"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="text-center">
                        <div class="w-24 h-24 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                          <svg class="h-12 w-12 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <p class="text-sm text-muted-foreground mb-2">Dashboard Screenshot Placeholder</p>
                        <p class="text-xs text-muted-foreground/70">Replace with: /images/dashboard-overview.png</p>
                        <p class="text-xs text-muted-foreground/70 mt-2">Shows: Revenue (₹8,500,000), Active Orders (42), Sales Trends, Production Efficiency</p>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
