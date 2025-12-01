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
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-orange-500 to-red-500",
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
    color: "from-indigo-500 to-blue-500",
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
    color: "from-teal-500 to-cyan-500",
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
    color: "from-yellow-500 to-orange-500",
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
    color: "from-rose-500 to-pink-500",
  },
];

export function Modules() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group">
                  <CardHeader>
                    <div
                      className={`w-14 h-14 rounded-xl bg-linear-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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
