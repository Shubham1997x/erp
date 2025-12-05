"use client";

import { motion } from "framer-motion";
import { Users, Building2, CreditCard, History, FileText } from "lucide-react";

export function CustomersSuppliers() {
  return (
    <section id="customers-suppliers" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Customer & Supplier Management
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Manage customers and suppliers with relationship tracking and credit
            management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* Customer Management */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white border border-primary/20 rounded-lg p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 transition-all"
              >
                <Users className="h-7 w-7 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground">
                Customer Management
              </h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Customer Database:",
                  desc: "Complete customer profiles with contact information and preferences",
                },
                {
                  title: "Credit Limits:",
                  desc: "Set and monitor credit limits with automatic alerts",
                },
                {
                  title: "Order History:",
                  desc: "Complete transaction history with order and payment tracking",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-2 rounded-md hover:bg-primary/5 transition-colors"
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  />
                  <div className="text-sm flex-1">
                    <strong className="text-foreground">{item.title}</strong>{" "}
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Supplier Management */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white border border-primary/20 rounded-lg p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 transition-all"
              >
                <Building2 className="h-7 w-7 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground">
                Supplier Management
              </h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Supplier Database:",
                  desc: "Complete supplier information with contact details and certifications",
                },
                {
                  title: "Purchase History:",
                  desc: "Track purchase orders, delivery performance, and payment terms",
                },
                {
                  title: "Performance Tracking:",
                  desc: "Monitor supplier performance including delivery times and quality ratings",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  whileHover={{ x: -5 }}
                  className="flex items-start gap-3 p-2 rounded-md hover:bg-primary/5 transition-colors"
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  />
                  <div className="text-sm flex-1">
                    <strong className="text-foreground">{item.title}</strong>{" "}
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image Display - SaaS Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.div
            className="relative bg-white border border-primary/20 rounded-lg overflow-hidden shadow-sm"
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent z-10 pointer-events-none"></div>
            <div className="relative w-full flex items-center justify-center p-2">
              <img
                src="/images/customer.png"
                alt="Customers & Suppliers Management"
                className="w-auto h-auto max-w-full block rounded"
              />
            </div>
            {/* Shine effect overlay */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-20 pointer-events-none"
              animate={{ x: ["-200%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
