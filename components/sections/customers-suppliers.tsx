"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Building2 } from "lucide-react";

// Types
interface Feature {
  title: string;
  description: string;
}

interface ManagementCard {
  icon: typeof Users;
  title: string;
  features: Feature[];
}

// Data
const managementData: ManagementCard[] = [
  {
    icon: Users,
    title: "Customer Management",
    features: [
      {
        title: "Customer Database:",
        description:
          "Complete customer profiles with contact information and preferences",
      },
      {
        title: "Credit Limits:",
        description: "Set and monitor credit limits with automatic alerts",
      },
      {
        title: "Order History:",
        description:
          "Complete transaction history with order and payment tracking",
      },
    ],
  },
  {
    icon: Building2,
    title: "Supplier Management",
    features: [
      {
        title: "Supplier Database:",
        description:
          "Complete supplier information with contact details and certifications",
      },
      {
        title: "Purchase History:",
        description:
          "Track purchase orders, delivery performance, and payment terms",
      },
      {
        title: "Performance Tracking:",
        description:
          "Monitor supplier performance including delivery times and quality ratings",
      },
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
    },
  }),
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
    },
  }),
};

// Components
function SectionHeader() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
        Management
      </div>
      <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-primary">
        Customer & Supplier Management
      </h2>
      <p className="text-base text-muted-foreground max-w-3xl mx-auto">
        Manage customers and suppliers with relationship tracking and credit
        management.
      </p>
    </motion.div>
  );
}

function FeatureItem({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      variants={featureItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ x: 5 }}
      className="flex items-start gap-2 p-1.5 rounded-md hover:bg-primary/5 transition-colors"
    >
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.3,
        }}
      />
      <div className="text-sm flex-1 leading-relaxed">
        <strong className="text-foreground">{feature.title}</strong>{" "}
        <span className="text-muted-foreground">{feature.description}</span>
      </div>
    </motion.div>
  );
}

function ManagementCard({
  card,
  index,
}: {
  card: ManagementCard;
  index: number;
}) {
  const Icon = card.icon;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -5 }}
      className="bg-white border border-primary/20 rounded-xl p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 group"
    >
      <div className="flex items-center gap-4 mb-5">
        <motion.div
          whileHover={{ scale: 1.1, rotate: index === 0 ? 5 : -5 }}
          className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 transition-all group-hover:bg-primary/20"
        >
          <Icon className="h-7 w-7 text-primary" />
        </motion.div>
        <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
      </div>
      <div className="space-y-3">
        {card.features.map((feature, idx) => (
          <FeatureItem key={idx} feature={feature} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}

function ManagementImage() {
  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-primary/10 overflow-hidden">
        <div className="relative bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative w-full h-full flex items-center justify-center aspect-4/3">
            <Image
              src="/images/customer.png"
              alt="Customers & Suppliers Management"
              width={1200}
              height={700}
              sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 60vw, 1200px"
              className="w-full h-full object-contain rounded-lg"
              quality={85}
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
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
    </div>
  );
}

// Main Component
export function CustomersSuppliers() {
  return (
    <section id="customers-suppliers" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader />

        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-start">
          {/* Left Column: Management Cards */}
          <div className="flex flex-col gap-6">
            {managementData.map((card, index) => (
              <ManagementCard key={card.title} card={card} index={index} />
            ))}
          </div>

          {/* Right Column: Image in Device Mockup */}
          <ManagementImage />
        </div>
      </div>
    </section>
  );
}
