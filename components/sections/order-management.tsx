"use client";

import { motion } from "framer-motion";
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
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
            <div className=" border border-primary/20 rounded-lg p-4 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-base text-foreground">Order Creation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Create orders with multiple items, custom quantities, and discounts.
              </p>
            </div>

            <div className=" border border-primary/20 rounded-lg p-4 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Calculator className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-base text-foreground">
                  Automatic Calculations
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Automatic GST calculation and payment tracking with real-time summaries.
              </p>
            </div>

            <div className=" border border-primary/20 rounded-lg p-4 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-base text-foreground">
                  Customer Management
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Manage customers with credit limits, order history, and preferences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Order Process Steps - Horizontal Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Order Process Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { step: 1, title: "Create Order", desc: "Add items, quantities, and pricing", image: "/images/order-1.png" },
              { step: 2, title: "Calculate & Approve", desc: "Auto-calculate GST and totals", image: "/images/order-2.png" },
              { step: 3, title: "Link to Production", desc: "Send order to production workflow", image: "/images/order-3.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-primary/20 rounded-lg transition-all group flex flex-col h-full bg-white shadow-sm hover:shadow-md"
              >
                <div className="p-4 border-b border-primary/10 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-primary-foreground px-3 py-1.5 font-bold text-sm rounded shrink-0 min-w-8 text-center">
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-base text-foreground leading-tight">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="relative bg-linear-to-br from-muted/30 to-white overflow-hidden flex-1 flex items-center justify-center min-h-[200px] sm:min-h-[240px] md:min-h-[280px]"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain max-w-full max-h-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Status Flow */}
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
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {orderStatuses.map((status, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold border ${
                    status === "In Production"
                      ? "bg-primary text-primary-foreground border-primary rounded-lg"
                      : " text-foreground border-primary/30 hover:border-primary/50 transition-colors"
                  }`}
                >
                  {status}
                </motion.div>
                {index < orderStatuses.length - 1 && (
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-muted-foreground mx-1 sm:mx-2 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
