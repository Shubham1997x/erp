"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Dashboard
          </div>
          <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-primary">
            Your Business in One View
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real-time insights and metrics at a glance
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-auto lg:max-w-md"
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
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2 text-foreground">
                      Real-time Statistics
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Monitor products, orders, and revenue in real-time
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
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2 text-foreground">
                      Performance Metrics
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Track efficiency and trends with visual analytics
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
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2 text-foreground">
                      Automated Insights
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Proactive alerts for critical business events
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
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base mb-2 text-foreground">
                      Activity Feed
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Live updates across all modules
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Browser Window Frame with Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full lg:flex-1 max-w-4xl"
          >
            {/* Browser Window Frame */}
            <div className="relative bg-white rounded-xl shadow-2xl shadow-primary/10 border border-primary/10 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-muted border-b border-primary/10 px-4 py-3 flex items-center gap-2">
                {/* Browser Controls */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                {/* Address Bar */}
                <div className="flex-1 mx-4 bg-white border border-primary/20 rounded-md px-3 py-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20"></div>
                    <span className="text-xs text-muted-foreground">
                      carpet@wantace.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative bg-white overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent z-10 pointer-events-none"></div>
                <div className="relative w-full flex items-center justify-center p-2 sm:p-4">
                  <Image
                    src="/images/dashboard.png"
                    alt="ERP Dashboard Overview - Revenue, Active Orders, Sales Trends, Production Efficiency"
                    width={1200}
                    height={700}
                    className="w-full h-auto rounded-lg shadow-inner"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
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
