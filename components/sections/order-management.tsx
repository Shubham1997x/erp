"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Calculator, Users, ArrowRight } from "lucide-react";

const orderStatuses = [
  "Pending",
  "Accepted",
  "In Production",
  "Ready",
  "Dispatched",
  "Delivered",
];

export function OrderManagement() {
  return (
    <section id="order-management" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Orders
          </div>
          <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-primary">
            Order Management
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Capture orders, calculate pricing, and link to production.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-primary/20 rounded-xl p-5 hover:border-primary/40 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base text-foreground">
                  Order Creation
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Create orders with multiple items, custom quantities, and
                discounts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-primary/20 rounded-xl p-5 hover:border-primary/40 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base text-foreground">
                  Automatic Calculations
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Automatic GST calculation and payment tracking with real-time
                summaries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-primary/20 rounded-xl p-5 hover:border-primary/40 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base text-foreground">
                  Customer Management
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Manage customers with credit limits, order history, and
                preferences.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Order Process Steps - Horizontal Grid with Browser Frames */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Order Process Steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: 1,
                title: "Create Order",
                desc: "Add items, quantities, and pricing",
                image:
                  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&q=80",
              },
              {
                step: 2,
                title: "Calculate & Approve",
                desc: "Auto-calculate GST and totals",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
              },
              {
                step: 3,
                title: "Link to Production",
                desc: "Send order to production workflow",
                image:
                  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&q=80",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-primary/20 rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col h-full overflow-hidden group"
              >
                {/* Content Header */}
                <div className="px-5 py-4 bg-white shrink-0">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center font-bold text-sm rounded shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-base text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative bg-muted overflow-hidden flex-1">
                  <div className="relative w-full h-full flex items-center justify-center aspect-4/3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-full rounded-lg object-cover"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      unoptimized
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Status Flow - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Order Status Flow
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4">
            {orderStatuses.map((status, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold border rounded-lg transition-all ${
                    status === "In Production"
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                      : "bg-white text-foreground border-primary/30 hover:border-primary/50 hover:bg-primary/5 hover:shadow-sm"
                  }`}
                >
                  {status}
                </motion.div>
                {index < orderStatuses.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary/60 mx-1 sm:mx-2 shrink-0" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
