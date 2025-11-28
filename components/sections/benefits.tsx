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
      "Automate repetitive tasks and streamline workflows to boost productivity by up to 40%.",
    stat: "40%",
    statLabel: "Productivity Increase",
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description:
      "Optimize inventory levels, reduce waste, and minimize operational costs across all departments.",
    stat: "30%",
    statLabel: "Cost Savings",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description:
      "Eliminate manual data entry and paperwork, saving hours every day for your team.",
    stat: "50%",
    statLabel: "Time Saved",
  },
  {
    icon: Shield,
    title: "Data Security",
    description:
      "Enterprise-grade security with role-based access, encryption, and regular backups.",
    stat: "99.9%",
    statLabel: "Uptime SLA",
  },
  {
    icon: Zap,
    title: "Real-time Insights",
    description:
      "Make informed decisions with live dashboards and instant access to critical business data.",
    stat: "24/7",
    statLabel: "Monitoring",
  },
  {
    icon: Users,
    title: "Better Collaboration",
    description:
      "Connect all departments and teams on a single platform for seamless communication.",
    stat: "100%",
    statLabel: "Team Integration",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Advanced analytics and reporting help you identify trends and opportunities.",
    stat: "360°",
    statLabel: "Visibility",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description:
      "Integrated QC processes ensure consistent product quality and customer satisfaction.",
    stat: "95%+",
    statLabel: "Quality Score",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose Rajdhani ERP?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with a solution built specifically for carpet
            manufacturing excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-primary/20 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
    </section>
  );
}

