"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(0_0%_96%)]">
      {/* Subtle Background Pattern - Zoho Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

      {/* Soft Gradient Orbs - Professional Blue - Smaller on mobile */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-linear-to-br from-blue-50 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-linear-to-tr from-blue-50 to-transparent opacity-40 blur-3xl"></div>

      {/* Minimal Background Shapes - Strategically Placed */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {/* Subtle corner accent - top left - Hidden on mobile */}
        <div className="hidden sm:block absolute top-20 left-8 w-px h-32 bg-linear-to-b from-blue-500/30 to-transparent"></div>
        <div className="hidden sm:block absolute top-20 left-8 w-32 h-px bg-linear-to-r from-blue-500/30 to-transparent"></div>
        
        {/* Minimal circle - top right area - Smaller on mobile */}
        <div className="absolute top-32 right-1/4 w-16 h-16 sm:w-24 sm:h-24 border-2 border-blue-500/25 rounded-full opacity-50 sm:opacity-100"></div>
        
        {/* Subtle line accent - bottom left - Hidden on mobile */}
        <svg
          className="hidden sm:block absolute bottom-32 left-12 w-40 h-1"
          viewBox="0 0 200 2"
          fill="none"
        >
          <path
            d="M 0 1 L 200 1"
            stroke="rgb(37, 99, 235)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
        </svg>

        {/* Minimal geometric accent - center left - Hidden on mobile */}
        <div className="hidden sm:block absolute top-1/2 left-16 w-16 h-16 border-2 border-blue-500/20 rotate-45"></div>
        
        {/* Subtle dot pattern - scattered - Smaller on mobile */}
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500/40 rounded-full"></div>
        <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500/40 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Badge - Centered */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 border-2 border-primary/20 shadow-sm">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-primary text-center">
                Trusted by 500+ Manufacturing Companies
              </span>
            </div>
          </motion.div>

          {/* Mobile Layout - Centered Column */}
          <div className="flex flex-col items-center lg:hidden w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-2xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8"
            >
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-center"
              >
                <span className="text-foreground">Complete ERP Solution</span>
                <br />
                <span className="text-primary">for Carpet Manufacturing</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center px-4"
              >
                Streamline your entire manufacturing workflow—from raw materials
                to finished products—with real-time insights, automated
                processes, and comprehensive business management.
              </motion.p>

              {/* Key Features List - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden"
              >
                {[
                  "Real-time inventory & stock management",
                  "Automated production planning & scheduling",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-3 justify-center w-full max-w-md mx-auto"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-base text-foreground text-center flex-1">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center items-center"
              >
                <Button
                  size="lg"
                  className="group text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 mx-auto sm:mx-0"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                className="pt-6 border-t-2 border-primary/10 w-full"
              >
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <span className="font-medium">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <span className="font-medium">500+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <span className="font-medium">40% Efficiency Gain</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout - Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 text-left"
            >
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="text-foreground">Complete ERP Solution</span>
                <br />
                <span className="text-primary">for Carpet Manufacturing</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
              >
                Streamline your entire manufacturing workflow—from raw materials
                to finished products—with real-time insights, automated
                processes, and comprehensive business management.
              </motion.p>

              {/* Key Features List */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                {[
                  "Real-time inventory & stock management",
                  "Automated production planning & scheduling",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-base text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
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
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                className="pt-6 border-t-2 border-primary/10"
              >
                <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium">500+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium">40% Efficiency Gain</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Dashboard Image with Animations */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative flex items-center justify-center w-full">
                {/* Dashboard Image - SaaS Style */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  className="relative w-full max-w-[1000px] z-10"
                >
                  <div className="relative bg-white border-2 border-primary/20 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent z-10 pointer-events-none"></div>
                    <motion.div
                      className="relative w-full flex items-center justify-center p-2"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <img
                        src="/images/dashboard.png"
                        alt="ERP Dashboard Overview"
                        className="w-auto h-auto max-w-full block"
                      />
                    </motion.div>
                    {/* Shine effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-20 pointer-events-none"
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="absolute -top-4 -right-4 bg-primary text-white px-5 py-2.5 shadow-xl z-20 border-2 border-primary/30"
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-semibold">
                        Live Dashboard
                      </span>
                    </div>
                  </motion.div>

                  {/* Decorative corner accents */}
                  <div className="absolute -top-2 -right-2 w-24 h-24 bg-primary/10 border-2 border-primary/20 -z-10"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary/5 border-2 border-primary/20 -z-10"></div>
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
                    ease: "easeInOut",
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
                    delay: 1,
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
