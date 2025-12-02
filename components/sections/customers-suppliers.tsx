"use client";

import { motion } from "framer-motion";
import { Users, Building2, CreditCard, History, FileText } from "lucide-react";

export function CustomersSuppliers() {
  return (
    <section id="customers-suppliers" className="section-padding section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Customer & Supplier Management
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
            Manage customers and suppliers with relationship tracking and credit management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Customer Management */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Customer Management</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">Customer Database</h4>
                  <p className="text-muted-foreground text-sm">
                    Complete customer profiles with contact information and preferences
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">Credit Limits</h4>
                  <p className="text-muted-foreground text-sm">
                    Set and monitor credit limits with automatic alerts
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <History className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">Order History</h4>
                  <p className="text-muted-foreground text-sm">
                    Complete transaction history with order and payment tracking
                  </p>
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
            className="space-y-6"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Supplier Management</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">Supplier Database</h4>
                  <p className="text-muted-foreground text-sm">
                    Complete supplier information with contact details and certifications
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">Purchase History</h4>
                  <p className="text-muted-foreground text-sm">
                    Track purchase orders, delivery performance, and payment terms
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <History className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">Performance Tracking</h4>
                  <p className="text-muted-foreground text-sm">
                    Monitor supplier performance including delivery times and quality ratings
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="image-container-borders mt-12"
        >
          <div className="feature-image-container relative">
            <img 
              src="/images/customers-suppliers.png" 
              alt="Customers & Suppliers Management" 
              className="w-full h-auto object-contain"
            />
            <div className="bg-white p-4 text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Customers & Suppliers Management
              </h3>
              <p className="text-sm text-muted-foreground">
                Customer database, Supplier management, Credit limits, Order history
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
