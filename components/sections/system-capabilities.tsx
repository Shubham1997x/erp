"use client";

import { motion } from "framer-motion";
import {
  Users,
  Clock,
  QrCode,
  BookOpen,
  Trash2,
  Calculator,
  BarChart3,
  Bell,
  Download,
  FileText,
  Monitor,
  Smartphone,
  Shield,
  Search,
  Wrench,
} from "lucide-react";

const capabilities = {
  core: [
    { icon: Users, name: "Multi-user System" },
    { icon: Clock, name: "Real-time Tracking" },
    { icon: QrCode, name: "QR Code Integration" },
    { icon: BookOpen, name: "Recipe Management" },
    { icon: Trash2, name: "Waste Management" },
  ],
  automation: [
    { icon: Calculator, name: "Automated Calculations (GST, Materials)" },
    { icon: BarChart3, name: "Comprehensive Reporting" },
    { icon: Bell, name: "Real-time Notifications" },
    { icon: Download, name: "Data Export Capabilities" },
    { icon: FileText, name: "Full Audit Trails" },
  ],
  platform: [
    { icon: Monitor, name: "Responsive Design (Desktop, Mobile)" },
    { icon: Shield, name: "Role-based Security" },
    { icon: QrCode, name: "Cloudflare R2 Image Storage" },
    { icon: Search, name: "Search & Filter Functionality" },
    { icon: Wrench, name: "Graceful Error Handling" },
  ],
};

export function SystemCapabilities() {
  return (
    <section id="capabilities" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            System Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Core Functionality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground text-center md:text-left">Core Functionality</h3>
            {capabilities.core.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-primary/20 hover:border-primary/40 transition-colors  rounded-lg justify-center md:justify-start"
                >
                  <div className="w-10 h-10 rounded-lg  flex items-center justify-center shrink-0 border border-primary/30">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{cap.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Automation & Data */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground text-center md:text-left">Automation & Data</h3>
            {capabilities.automation.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-primary/20 hover:border-primary/40 transition-colors  rounded-lg justify-center md:justify-start"
                >
                  <div className="w-10 h-10 rounded-lg  flex items-center justify-center shrink-0 border border-primary/30">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{cap.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Platform & Technology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground text-center md:text-left">Platform & Technology</h3>
            {capabilities.platform.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-primary/20 hover:border-primary/40 transition-colors  rounded-lg justify-center md:justify-start"
                >
                  <div className="w-10 h-10 rounded-lg  flex items-center justify-center shrink-0 border border-primary/30">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{cap.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

