"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Calculator, Users, ArrowRight } from "lucide-react";
import Image from "next/image";

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Transforming a Customer Order into a Production Mandate
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Capture customer order details, automatically calculate pricing and
            taxes, and seamlessly link the order to your production queue with a
            single status change.
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
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Order Creation</h3>
                  <p className="text-muted-foreground">
                    Create new orders with multiple items and specific pricing.
                    Support for custom quantities, discounts, and special
                    instructions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Automatic Calculations
                  </h3>
                  <p className="text-muted-foreground">
                    Automatic GST calculation and payment tracking (paid vs.
                    outstanding). Real-time financial summaries and tax
                    compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Customer Management
                  </h3>
                  <p className="text-muted-foreground">
                    Manage customer database with credit limits and order
                    history. Track relationships and preferences for better
                    service.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order UI Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="image-container-borders"
          >
            <div className="feature-image-container aspect-video bg-muted flex items-center justify-center p-12 relative">
              <Image
                src="/images/order-management.png"
                alt="Order Management"
                fill
                className="object-contain"
              />
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
          <h3 className="text-2xl font-bold text-center mb-8">
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
                  className={`px-6 py-3 rounded-lg font-semibold ${
                    status === "In Production"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
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
