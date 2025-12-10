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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 items-start">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-6">
            {/* Customer Management */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-primary/20 rounded-lg p-2 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 transition-all"
                >
                  <Users className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-base font-semibold text-foreground">
                  Customer Management
                </h3>
              </div>
              <div className="space-y-2.5">
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
                    className="flex items-start gap-2 p-1.5 rounded-md hover:bg-primary/5 transition-colors"
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                    />
                    <div className="text-sm flex-1 leading-relaxed">
                      <strong className="text-foreground">{item.title}</strong>{" "}
                      <span className="text-muted-foreground">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Supplier Management */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-primary/20 rounded-lg p-4 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 transition-all"
                >
                  <Building2 className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-base font-semibold text-foreground">
                  Supplier Management
                </h3>
              </div>
              <div className="space-y-2.5">
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
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    whileHover={{ x: -5 }}
                    className="flex items-start gap-2 p-1.5 rounded-md hover:bg-primary/5 transition-colors"
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                    />
                    <div className="text-sm flex-1 leading-relaxed">
                      <strong className="text-foreground">{item.title}</strong>{" "}
                      <span className="text-muted-foreground">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="relative bg-white border border-primary/20 rounded-lg overflow-hidden  h-full"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="absolute  z-10 pointer-events-none"></div>
              <div className="relative w-full flex items-center justify-center p-3 ">
                <img
                  src="/images/customer.png"
                  alt="Customers & Suppliers Management"
                  className="w-full h-full object-contain max-w-full max-h-full"
                />
              </div>
              {/* Shine effect overlay */}
              <motion.div
                className="absolute  z-20 pointer-events-none"
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
      </div>
    </section>
  );
}
