"use client";

import { motion } from "framer-motion";
import { Users, Building2, CreditCard, History, FileText } from "lucide-react";
import Image from "next/image";

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            Customer & Supplier Management
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Maintain comprehensive databases of customers and suppliers with
            complete relationship tracking, credit management, and transaction
            history.
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
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Customer Management</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Customer Database</h4>
                  <p className="text-muted-foreground text-sm">
                    Complete customer profiles with contact information,
                    addresses, and preferences
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Credit Limits</h4>
                  <p className="text-muted-foreground text-sm">
                    Set and monitor credit limits with automatic alerts for
                    exceeded limits
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <History className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Order History</h4>
                  <p className="text-muted-foreground text-sm">
                    Complete transaction history with order tracking and payment
                    records
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
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Supplier Management</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Supplier Database</h4>
                  <p className="text-muted-foreground text-sm">
                    Maintain complete supplier information with contact details
                    and certifications
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Purchase History</h4>
                  <p className="text-muted-foreground text-sm">
                    Track all purchase orders, delivery performance, and payment
                    terms
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <History className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Performance Tracking</h4>
                  <p className="text-muted-foreground text-sm">
                    Monitor supplier performance metrics including delivery
                    times and quality ratings
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
          <div className="feature-image-container aspect-video bg-muted flex items-center justify-center p-12 relative">
            <Image
              src="/images/customers-suppliers.png"
              alt="Customers & Suppliers"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
