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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Order Management
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Capture orders, calculate pricing, and link to production.
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
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">Order Creation</h3>
                  <p className="text-sm text-muted-foreground">
                    Create orders with multiple items, custom quantities, and discounts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">
                    Automatic Calculations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic GST calculation and payment tracking with real-time summaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-base mb-2 text-foreground">
                    Customer Management
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Manage customers with credit limits, order history, and preferences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Management - 3 Step Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Order Process Steps</h3>
            <div className="space-y-4">
              {[
                { step: 1, title: "Create Order", desc: "Add items, quantities, and pricing", image: "/images/p1.png" },
                { step: 2, title: "Calculate & Approve", desc: "Auto-calculate GST and totals", image: "/images/p2.png" },
                { step: 3, title: "Link to Production", desc: "Send order to production workflow", image: "/images/p3.png" },
              ].map((item, index) => (
                <div key={index} className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-primary text-primary-foreground px-3 py-1 font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="image-container-borders"
                  >
                    <div className="feature-image-container h-32 relative overflow-hidden flex items-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain object-left"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Status Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            Order Status Flow
          </h3>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {orderStatuses.map((status, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`px-6 py-3 font-semibold border-2 ${
                    status === "In Production"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white text-foreground border-primary/30"
                  }`}
                >
                  {status}
                </motion.div>
                {index < orderStatuses.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground mx-2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
