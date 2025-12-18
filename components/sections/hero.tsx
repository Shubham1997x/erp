"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { Globe } from "@/components/ui/features-section-demo-3";
import { useToast } from "@/components/ui/toast";
import { trackEvent } from "@/components/analytics";

export function Hero() {
  const { showToast } = useToast();

  const handleCTAClick = () => {
    trackEvent("cta_click", {
      button_text: "Book Free Demo Call",
      location: "hero",
    });
    window.open(
      "https://calendly.com/wantace-ai/discovery-call",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted"
    >
      {/* Subtle Background Pattern - Zoho Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

      {/* Soft Gradient Orbs - Professional Blue - Smaller on mobile */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-linear-to-br from-primary/10 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-linear-to-tr from-primary/10 to-transparent opacity-40 blur-3xl"></div>

      {/* Minimal Background Shapes - Strategically Placed */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle corner accent - top left - Hidden on mobile */}
        <div className="hidden sm:block absolute top-20 left-8 w-px h-32 bg-linear-to-b from-primary/30 to-transparent"></div>
        <div className="hidden sm:block absolute top-20 left-8 w-32 h-px bg-linear-to-r from-primary/30 to-transparent"></div>

        {/* Minimal geometric accent - center left - Hidden on mobile */}
        <div className="hidden sm:block absolute top-1/2 left-16 w-16 h-16 border border-primary/20 rotate-45"></div>

        {/* Subtle dot pattern - scattered - Smaller on mobile */}
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2  rounded-full"></div>
        <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2  rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-2xl mx-auto">
          {/* Badge - Centered */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mt-8 sm:mt-12 lg:mt-16 mb-6 sm:mb-8 lg:mb-12 px-4"
          >
            <div className="inline-flex items-center gap-2 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border border-primary/20 bg-white/80 w-full sm:w-auto sm:max-w-none">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse shrink-0" />
              <span className="text-xs sm:text-[14px] text-foreground font-medium text-center sm:text-left">
                Trusted by 500+ Manufacturing Companies
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-12 lg:gap-16 w-full">
            {/* Left Column - Content with Globe in Background */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 w-full relative"
            >
              {/* Globe in Background */}
              {/* <motion.div
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 hidden md:block"
              >
                <div className="scale-75 lg:scale-100 opacity-40">
                  <Globe />
                </div>
              </motion.div> */}

              {/* Content Section */}
              <div className="relative z-10 w-full space-y-6 sm:space-y-7 lg:space-y-8 text-center lg:text-left">
                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight"
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
                  className="text-[18px] text-muted-foreground leading-relaxed max-w-3xl mx-auto lg:mx-0"
                >
                  Streamline your entire manufacturing workflow—from raw
                  materials to finished products—with real-time insights,
                  automated processes, and comprehensive business management.
                </motion.p>

                {/* Key Features List */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-3 sm:space-y-4 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
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
                      className="flex items-start gap-3 justify-center lg:justify-start"
                    >
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-base sm:text-[18px] text-foreground leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start items-center"
                >
                  <button
                    onClick={handleCTAClick}
                    className="group inline-flex items-center justify-center text-xs sm:text-sm lg:text-base font-light px-6 sm:px-8 lg:px-9 py-4 sm:py-4 lg:py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 w-full sm:w-auto hover:scale-105 hover:shadow-xl active:scale-100 cursor-pointer "
                    aria-label="Start your free trial of Carpet ERP"
                  >
                    Book Free Demo Call
                    <ArrowRight
                      className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  className="pt-4 sm:pt-6 border-t-2 border-primary/10 max-w-3xl mx-auto lg:mx-0"
                >
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 text-[9px] xs:text-[10px] sm:text-xs lg:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Shield className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary shrink-0" />
                      <span className="font-medium">99.9% Uptime</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary shrink-0" />
                      <span className="font-medium">500+ Active Users</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary shrink-0" />
                      <span className="font-medium">40% Efficiency Gain</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Dashboard Image with Animations */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative flex-1 w-full max-w-full lg:max-w-[980px] xl:max-w-[1140px] overflow-visible self-start"
            >
              <div className="relative w-full flex flex-col gap-4 lg:gap-6">
                {/* KPI tiles */}
                <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Orders today", value: "182", trend: "+14%" },
                    { label: "On-time", value: "98.4%", trend: "+3%" },
                    {
                      label: "Inventory turns",
                      value: "11.2x",
                      trend: "+0.6x",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 * idx }}
                      className="rounded-xl border border-primary/15 bg-white/80 backdrop-blur p-4 shadow-sm shadow-primary/10"
                    >
                      <div className="text-[10px] text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="text-lg font-semibold text-foreground mt-1">
                        {item.value}
                      </div>
                      <div className="text-[10px] text-primary font-medium mt-1">
                        {item.trend} vs last week
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Main visual */}
                <div className="relative bg-white/80 backdrop-blur border border-primary/15 rounded-2xl shadow-[0_20px_80px_-40px_rgba(0,0,0,0.35)] overflow-hidden p-4 sm:p-6">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute -inset-8 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_32%)] pointer-events-none" />
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -skew-x-12 z-20 pointer-events-none"
                    animate={{ x: "160%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative w-full max-w-[1080px] mx-auto rounded-xl overflow-hidden border border-primary/20 bg-white shadow-inner p-3 sm:p-4">
                    <Image
                      src="/images/dashboard.png"
                      alt="ERP Dashboard Overview"
                      width={1300}
                      height={800}
                      className="w-full h-auto object-contain"
                      priority
                      quality={90}
                    />
                  </div>
                  {/* Floating mini cards */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
