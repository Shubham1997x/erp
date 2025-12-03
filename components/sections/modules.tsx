"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package2,
  Cog,
  FileText,
  DollarSign,
  UserCheck,
  LineChart,
  CheckCircle2,
  Warehouse,
} from "lucide-react";

const modules = [
  {
    icon: Warehouse,
    title: "Inventory Management",
    description:
      "Complete inventory control for yarn, dyes, chemicals, and finished carpets with real-time stock levels.",
    features: [
      "Multi-location warehouse management",
      "Batch and serial number tracking",
      "Automated reorder points",
      "Stock valuation and costing",
      "Material requirement planning (MRP)",
    ],
  },
  {
    icon: Cog,
    title: "Production Management",
    description:
      "End-to-end production planning and execution for weaving operations with machine scheduling.",
    features: [
      "Production planning and scheduling",
      "Machine allocation and utilization",
      "Work order management",
      "Production tracking and monitoring",
      "Waste and defect management",
    ],
  },
  {
    icon: FileText,
    title: "Sales & CRM",
    description:
      "Streamline your sales process from lead generation to order fulfillment and customer service.",
    features: [
      "Lead and opportunity management",
      "Quotation and order processing",
      "Customer relationship management",
      "Sales analytics and forecasting",
      "Delivery and shipping management",
    ],
  },
  {
    icon: DollarSign,
    title: "Accounting & Finance",
    description:
      "Comprehensive financial management with integrated accounting, invoicing, and reporting.",
    features: [
      "General ledger and chart of accounts",
      "Accounts payable and receivable",
      "Financial reporting and statements",
      "Tax management and compliance",
      "Budget planning and control",
    ],
  },
  {
    icon: UserCheck,
    title: "Human Resources",
    description:
      "Complete HR management system for employee lifecycle, payroll, and performance tracking.",
    features: [
      "Employee database and profiles",
      "Attendance and leave management",
      "Payroll processing",
      "Performance appraisals",
      "Training and development",
    ],
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description:
      "Advanced analytics and reporting to make data-driven decisions and track business performance.",
    features: [
      "Customizable dashboards",
      "KPI tracking and metrics",
      "Advanced reporting tools",
      "Data visualization",
      "Export and sharing capabilities",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Quality Control",
    description:
      "Integrated quality management system to ensure product standards and compliance.",
    features: [
      "Inspection workflows",
      "Defect tracking and analysis",
      "Quality certificates",
      "Supplier quality management",
      "Compliance documentation",
    ],
  },
  {
    icon: Package2,
    title: "Supply Chain",
    description:
      "Optimize your supply chain with vendor management, procurement, and logistics tracking.",
    features: [
      "Vendor and supplier management",
      "Purchase order processing",
      "Procurement analytics",
      "Logistics and transportation",
      "Supplier performance tracking",
    ],
  },
];

export function Modules() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Integrated ERP Modules
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful modules that work together seamlessly to manage every
            aspect of your carpet manufacturing business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={index}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full rounded-lg shadow-none transition-all duration-300 border border-primary/20 hover:border-primary/40  group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {module.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm mb-4">
                      {module.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
