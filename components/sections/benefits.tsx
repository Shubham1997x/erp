"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Efficiency",
    description:
      "Automate tasks and streamline workflows to boost productivity.",
    stat: "40%",
    statLabel: "Productivity Increase",
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description:
      "Optimize inventory and reduce operational costs.",
    stat: "30%",
    statLabel: "Cost Savings",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description:
      "Eliminate manual data entry and save hours daily.",
    stat: "50%",
    statLabel: "Time Saved",
  },
  {
    icon: Shield,
    title: "Data Security",
    description:
      "Enterprise security with role-based access and encryption.",
    stat: "99.9%",
    statLabel: "Uptime SLA",
  },
  {
    icon: Zap,
    title: "Real-time Insights",
    description:
      "Live dashboards and instant access to business data.",
    stat: "24/7",
    statLabel: "Monitoring",
  },
  {
    icon: Users,
    title: "Better Collaboration",
    description:
      "Connect all departments on a single platform.",
    stat: "100%",
    statLabel: "Team Integration",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Advanced analytics to identify trends and opportunities.",
    stat: "360°",
    statLabel: "Visibility",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description:
      "Integrated QC processes for consistent quality.",
    stat: "95%+",
    statLabel: "Quality Score",
  },
];

export function Benefits() {
  return (
    <section className="py-24  relative isolation-isolate">
      <div className="relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground">
            Why Choose Carpet ERP?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Built specifically for carpet manufacturing excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div whileHover={{ y: -8 }}>
                  <Card className="h-full bg-white rounded-lg shadow-sm transition-all border border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/30 transition-all group-hover:bg-primary/20 group-hover:border-primary/40"
                        >
                          <Icon className="h-7 w-7 text-primary" />
                        </motion.div>
                        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {benefit.title}
                        </CardTitle>
                      </div>
                      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                        {benefit.description}
                      </p>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="pt-4 border-t border-primary/10"
                      >
                        <motion.div
                          className="text-3xl font-bold text-primary mb-1"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        >
                          {benefit.stat}
                        </motion.div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                          {benefit.statLabel}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 text-primary border border-primary/30 hover:border-primary/40 hover:bg-primary/10 transition-all shadow-sm"
          >
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">
              Trusted by 500+ carpet manufacturing companies
            </span>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}

