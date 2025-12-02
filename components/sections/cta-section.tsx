"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: 'hsl(222 47% 11%)' }}>
      {/* Blue Gradient Circle in Center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-radial from-primary/30 via-primary/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary brightness-125" />
            <span className="text-sm font-medium text-primary brightness-125">Transform Your Manufacturing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg"
          >
            Ready to Streamline Your Operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
          >
            Join hundreds of manufacturers who have transformed their business with our comprehensive ERP solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="group text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-2 border-white/30 bg-transparent text-white hover:bg-white/20 hover:border-white/50 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary brightness-125"></div>
              <span className="text-white/90">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary brightness-125"></div>
              <span className="text-white/90">14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary brightness-125"></div>
              <span className="text-white/90">Cancel Anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

