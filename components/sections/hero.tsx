"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

// Cache busting version - increment this when images are updated
const IMAGE_VERSION = "v2";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Background Pattern - Zoho Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

      {/* Soft Gradient Orbs - Professional Blue */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-br from-blue-50 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-tr from-blue-50 to-transparent opacity-40 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Badge - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Trusted by 500+ Manufacturing Companies
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
              >
                <span className="text-foreground">Complete ERP Solution</span>
                <br />
                <span className="text-primary">for Carpet Manufacturing</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                Streamline your entire manufacturing workflow—from raw materials
                to finished products—with real-time insights, automated
                processes, and comprehensive business management.
              </motion.p>

              {/* Key Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3"
              >
                {[
                  "Real-time inventory & stock management",
                  "Automated production planning & scheduling",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-base text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  size="lg"
                  className="group text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="pt-6 border-t border-border"
              >
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>500+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span>40% Efficiency Gain</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Two Images with Animations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative flex items-center justify-center w-full">
                {/* First Image - Dashboard Overview */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                  className="relative w-full max-w-[900px] z-10"
                >
                  <div className="relative bg-white border-2 border-blue-100 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent z-10 pointer-events-none"></div>
                    <Image
                      src={`/images/dashboard-overview.png?v=${IMAGE_VERSION}`}
                      alt="ERP Dashboard Overview"
                      width={1200}
                      height={900}
                      className="w-full h-auto object-contain"
                      priority
                      unoptimized
                      quality={100}
                    />
                    {/* Shine effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-20 pointer-events-none"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 shadow-lg z-20"
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">Live Dashboard</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative floating elements */}
                <motion.div
                  className="absolute top-20 -right-8 w-32 h-32 bg-primary/10 blur-3xl z-0"
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-20 -left-8 w-40 h-40 bg-blue-200/20 blur-3xl z-0"
                  animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
