"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Using placeholder company names - replace with actual customer logos
const customerLogos = [
  {
    name: "Premium Carpets Ltd.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop",
    initials: "PC",
  },
  {
    name: "Artisan Weavers",
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop",
    initials: "AW",
  },
  {
    name: "Heritage Carpets",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop",
    initials: "HC",
  },
  {
    name: "Modern Textiles Inc.",
    logo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=100&fit=crop",
    initials: "MT",
  },
  {
    name: "Quality Carpets",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop",
    initials: "QC",
  },
  {
    name: "Craft Weavers",
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop",
    initials: "CW",
  },
  {
    name: "Elite Manufacturing",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
    initials: "EM",
  },
  {
    name: "Textile Solutions",
    logo: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=100&fit=crop",
    initials: "TS",
  },
];

// Duplicate logos for seamless marquee loop
const marqueeLogos = [...customerLogos, ...customerLogos];

export function CustomerLogos() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Trusted by industry leaders
          </div>
          <h3 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-foreground">
            Join 500+ Manufacturing Companies
          </h3>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-6">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Marquee */}
          <motion.div
            className="flex gap-6 sm:gap-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* First Set */}
            <div className="flex gap-6 sm:gap-8 shrink-0">
              {marqueeLogos.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="relative flex items-center justify-center p-5 sm:p-7 bg-muted rounded-lg border border-primary/5 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group shrink-0 w-[160px] sm:w-[180px] md:w-[200px] h-[90px] sm:h-[110px] md:h-[120px] overflow-hidden"
                >
                  {company.logo ? (
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                        {company.initials}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Second Set (for seamless loop) */}
            <div className="flex gap-6 sm:gap-8 shrink-0">
              {marqueeLogos.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="relative flex items-center justify-center p-5 sm:p-7 bg-muted rounded-lg border border-primary/5 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group shrink-0 w-[160px] sm:w-[180px] md:w-[200px] h-[90px] sm:h-[110px] md:h-[120px] overflow-hidden"
                >
                  {company.logo ? (
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                        {company.initials}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">500+</span>
              <span>Active Companies</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">98%</span>
              <span>Customer Satisfaction</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">4.9/5</span>
              <span>Average Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

