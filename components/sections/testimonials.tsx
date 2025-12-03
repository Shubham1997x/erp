"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, Premium Carpets Ltd.",
    company: "Premium Carpets",
    content:
      "Carpet ERP has transformed our operations. Production efficiency increased by 35%, and we now have complete visibility into our entire supply chain.",
    rating: 5,
    image: "/placeholder-avatar-1.png",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager, Artisan Weavers",
    company: "Artisan Weavers",
    content:
      "The real-time monitoring and analytics features have been game-changers. We can now make data-driven decisions and respond to issues instantly.",
    rating: 5,
    image: "/placeholder-avatar-2.png",
  },
  {
    name: "Amit Patel",
    role: "Director, Heritage Carpets",
    company: "Heritage Carpets",
    content:
      "Implementation was smooth, and the support team is excellent. The system has helped us reduce inventory costs by 25% while improving customer satisfaction.",
    rating: 5,
    image: "/placeholder-avatar-3.png",
  },
  {
    name: "Sneha Reddy",
    role: "CFO, Modern Textiles Inc.",
    company: "Modern Textiles",
    content:
      "The financial management module is comprehensive and easy to use. We've streamlined our accounting processes and improved cash flow management significantly.",
    rating: 5,
    image: "/placeholder-avatar-4.png",
  },
  {
    name: "Vikram Singh",
    role: "Production Head, Quality Carpets",
    company: "Quality Carpets",
    content:
      "Production planning and scheduling have never been easier. The system optimizes our machine utilization and has reduced downtime by 40%.",
    rating: 5,
    image: "/placeholder-avatar-5.png",
  },
  {
    name: "Anjali Mehta",
    role: "Founder, Craft Weavers",
    company: "Craft Weavers",
    content:
      "As a growing business, we needed a scalable solution. Carpet ERP has grown with us and continues to add value as we expand our operations.",
    rating: 5,
    image: "/placeholder-avatar-6.png",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have transformed their
            operations with Carpet ERP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full rounded-lg shadow-none transition-all border border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-muted-foreground/70">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Replace placeholder avatars with actual customer
            photos or company logos. Consider adding video testimonials for more
            impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

