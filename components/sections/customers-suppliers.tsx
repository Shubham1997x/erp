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
            className=" border border-primary/20 rounded-lg p-6 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Customer Management
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">
                    Customer Database:
                  </strong>{" "}
                  Complete customer profiles with contact information and
                  preferences
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Credit Limits:</strong>{" "}
                  Set and monitor credit limits with automatic alerts
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Order History:</strong>{" "}
                  Complete transaction history with order and payment tracking
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supplier Management */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" border border-primary/20 rounded-lg p-6 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Supplier Management
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">
                    Supplier Database:
                  </strong>{" "}
                  Complete supplier information with contact details and
                  certifications
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">Purchase History:</strong>{" "}
                  Track purchase orders, delivery performance, and payment terms
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div className="text-sm">
                  <strong className="text-foreground">
                    Performance Tracking:
                  </strong>{" "}
                  Monitor supplier performance including delivery times and
                  quality ratings
                </div>
              </div>
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
            className="relative  border border-primary/20 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent z-10 pointer-events-none"></div>
            <div className="relative w-full flex items-center justify-center p-1">
              <img
                src="/images/customer.png"
                alt="Customers & Suppliers Management"
                className="w-auto h-auto max-w-full block"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
