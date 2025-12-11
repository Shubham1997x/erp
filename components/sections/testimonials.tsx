"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO",
    company: "Premium Carpets Ltd.",
    content: [
      "Carpet ERP has transformed our operations completely. Production efficiency increased by 35%, and we now have complete visibility into our entire supply chain.",
      "The ROI was evident within the first quarter. This is the best investment we've made for our manufacturing operations.",
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    companyInitials: "PC",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    company: "Artisan Weavers",
    content: [
      "The real-time monitoring and analytics features have been game-changers. We can now make data-driven decisions and respond to issues instantly.",
      "Our team productivity has improved significantly, and we've reduced operational costs by 28%.",
    ],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    companyInitials: "AW",
  },
  {
    name: "Amit Patel",
    role: "Director",
    company: "Heritage Carpets",
    content: [
      "Implementation was smooth, and the support team is excellent. The system has helped us reduce inventory costs by 25% while improving customer satisfaction.",
      "Highly recommended for any carpet manufacturing business looking to modernize their operations.",
    ],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    companyInitials: "HC",
  },
  {
    name: "Sneha Reddy",
    role: "CFO",
    company: "Modern Textiles Inc.",
    content: [
      "The financial management module is comprehensive and easy to use. We've streamlined our accounting processes and improved cash flow management significantly.",
      "The reporting features have given us insights we never had before, helping us make better financial decisions.",
    ],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
    companyInitials: "MT",
  },
  {
    name: "Vikram Singh",
    role: "Production Head",
    company: "Quality Carpets",
    content: [
      "Production planning and scheduling have never been easier. The system optimizes our machine utilization and has reduced downtime by 40%.",
      "Our production output has increased substantially, and we can now handle more orders without increasing our workforce.",
    ],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    companyInitials: "QC",
  },
  {
    name: "Anjali Mehta",
    role: "Founder",
    company: "Craft Weavers",
    content: [
      "As a growing business, we needed a scalable solution. Carpet ERP has grown with us and continues to add value as we expand our operations.",
      "The flexibility is exactly what we needed. It's helped us scale from a small workshop to a full manufacturing facility.",
    ],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces",
    companyInitials: "CW",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-5xl font-normal tracking-tight leading-tight text-foreground">
            What our <span className="text-primary">Clients</span> say
          </h2>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto min-h-[450px] sm:min-h-[500px]">
          {/* Left Side - Large Circular Profile Image */}
          <div className="relative flex items-center justify-center h-[450px] sm:h-[500px]">
            {/* Decorative Gradient Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-linear-to-br from-purple-200/40 via-blue-200/30 to-transparent blur-3xl"></div>
            </div>

            {/* Profile Image Circle with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  mass: 1.2,
                }}
                className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-2xl z-10"
              >
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={350}
                    height={350}
                    sizes="(max-width: 640px) 280px, 350px"
                    className="w-full h-full object-cover"
                    quality={90}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="relative h-[450px] sm:h-[500px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -40, y: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 35,
                  mass: 1.2,
                }}
                className="space-y-6 h-full flex flex-col justify-start pt-4"
              >
                {/* Company Logo/Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 mb-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 20 }}
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20"
                  >
                    <span className="text-primary font-bold text-lg">
                      {testimonials[currentIndex].companyInitials}
                    </span>
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-primary font-semibold text-lg"
                  >
                    {testimonials[currentIndex].company}
                  </motion.span>
                </motion.div>

                {/* Testimonial Quote - Multiple Paragraphs */}
                <div className="space-y-4">
                  {testimonials[currentIndex].content.map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.4 + idx * 0.15,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="text-foreground text-base sm:text-lg leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-4"
                >
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mt-12"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={false}
              animate={{
                width: index === currentIndex ? 12 : 8,
                height: index === currentIndex ? 12 : 8,
                backgroundColor: index === currentIndex ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.4)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                mass: 1,
              }}
              className="rounded-full transition-colors duration-300 hover:bg-primary/50"
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

