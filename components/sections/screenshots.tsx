"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Monitor, Smartphone, Tablet } from "lucide-react";

const screenshots = [
  {
    title: "Dashboard Overview",
    description: "Real-time insights and KPIs at a glance",
    image: "/placeholder-dashboard.png",
    device: Monitor,
  },
  {
    title: "Production Monitoring",
    description: "Live production status and machine utilization",
    image: "/placeholder-production.png",
    device: Monitor,
  },
  {
    title: "Inventory Management",
    description: "Complete inventory tracking and control",
    image: "/placeholder-inventory.png",
    device: Tablet,
  },
  {
    title: "Mobile Access",
    description: "Access your ERP anywhere, anytime",
    image: "/placeholder-mobile.png",
    device: Smartphone,
  },
];

export function Screenshots() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the intuitive interface and powerful features of Carpet
            ERP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => {
            const DeviceIcon = screenshot.device;
            return (
              <motion.div
                key={index}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="image-container-borders">
                  <Card className="feature-image-container overflow-hidden border border-primary/30 hover:border-primary/50 transition-all group">
                    <div className="relative bg-linear-to-br from-muted to-muted/50 p-8 aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <DeviceIcon className="h-16 w-16 mx-auto mb-4 text-primary/30 group-hover:text-primary/50 transition-colors" />
                        <p className="text-sm text-muted-foreground mb-2">
                          {screenshot.title}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          Placeholder: {screenshot.image}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">
                        {screenshot.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {screenshot.description}
                      </p>
                    </div>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            <strong>Note:</strong> Replace placeholder images with actual
            screenshots or GIFs of your ERP system. Consider adding interactive
            demos or video walkthroughs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
