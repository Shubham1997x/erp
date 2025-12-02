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
    <section className="py-24 bg-white relative isolation-isolate">
      <div className="relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground">
            Why Choose Rajdhani ERP?
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all border-2 border-primary/20 hover:border-primary/40 group bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors border border-primary/30">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-medium mb-2 text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {benefit.description}
                    </p>
                    <div className="pt-4 border-t">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {benefit.stat}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">
              Trusted by 500+ carpet manufacturing companies
            </span>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}

