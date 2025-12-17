"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";

type Category = "All" | "General" | "Technical" | "Pricing" | "Support";

const faqs = [
  {
    question: "What is Carpet ERP and how does it help my business?",
    answer:
      "Carpet ERP is a comprehensive enterprise resource planning solution specifically designed for carpet manufacturing businesses. It streamlines your entire operations from raw materials procurement to finished product delivery, helping you reduce costs by up to 30%, increase efficiency by 40%, and gain complete visibility into your supply chain.",
    category: "General" as Category,
  },
  {
    question: "How long does it take to implement Carpet ERP?",
    answer:
      "Implementation time varies based on your business size and requirements. Typically, small to medium businesses can be up and running within 2-4 weeks, while larger enterprises may take 6-8 weeks. Our team provides dedicated support throughout the implementation process to ensure a smooth transition.",
    category: "General" as Category,
  },
  {
    question: "Can I customize the system to match my business processes?",
    answer:
      "Yes, absolutely! Carpet ERP is highly customizable. We offer flexible configuration options to match your specific workflows, and for Enterprise customers, we provide custom development services to build features tailored to your unique business needs.",
    category: "Technical" as Category,
  },
  {
    question: "Can I integrate Carpet ERP with my existing systems?",
    answer:
      "Yes, Carpet ERP offers API access and supports integrations with popular accounting software, e-commerce platforms, and other business tools. Professional and Enterprise plans include custom integration support to connect with your existing systems seamlessly.",
    category: "Technical" as Category,
  },
  {
    question: "What happens if I need to scale up or down?",
    answer:
      "Carpet ERP is designed to scale with your business. You can easily upgrade or downgrade your plan as your needs change. Our flexible pricing ensures you only pay for what you need, and we can accommodate businesses from small workshops to large manufacturing facilities.",
    category: "Pricing" as Category,
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer multiple support tiers. Starter plans include email support, Professional plans get priority support, and Enterprise customers receive dedicated support with a dedicated account manager. All plans include documentation, training materials, and access to our knowledge base.",
    category: "Support" as Category,
  },
  {
    question: "Do you offer training for my team?",
    answer:
      "Yes, we provide comprehensive training for all users. This includes onboarding sessions, video tutorials, documentation, and ongoing support. Enterprise customers receive dedicated training sessions tailored to their specific workflows and requirements.",
    category: "Support" as Category,
  },
  {
    question: "Is my data secure with Carpet ERP?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with industry standards. Your data is backed up daily and stored in secure, redundant data centers. We also offer on-premise deployment options for Enterprise customers who require additional control.",
    category: "Technical" as Category,
  },
];

const categories: Category[] = ["All", "General", "Technical", "Pricing", "Support"];

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [selectedCategory, searchQuery]);

  // Reset expanded items when filters change
  useEffect(() => {
    setExpandedItems([]);
  }, [selectedCategory, searchQuery]);

  const toggleExpandAll = () => {
    if (expandedItems.length === filteredFAQs.length) {
      setExpandedItems([]);
    } else {
      setExpandedItems(filteredFAQs.map((_, index) => `item-${index}`));
    }
  };

  const toggleItem = (itemValue: string) => {
    setExpandedItems((prev) => {
      if (prev.includes(itemValue)) {
        return prev.filter((v) => v !== itemValue);
      } else {
        return [...prev, itemValue];
      }
    });
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white relative"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-normal text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border-primary/20 focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-foreground hover:bg-muted border border-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Expand/Collapse All Button */}
          {filteredFAQs.length > 0 && (
            <div className="flex justify-center">
              <button
                onClick={toggleExpandAll}
                className="text-sm text-primary hover:underline font-medium transition-colors cursor-pointer"
              >
                {expandedItems.length === filteredFAQs.length
                  ? "Collapse All"
                  : "Expand All"}
              </button>
            </div>
          )}
        </div>

        <div>
          {/* White card container */}
          <div className="bg-white rounded-lg shadow-sm border border-primary/20 overflow-hidden">
            {filteredFAQs.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-muted-foreground">
                  No questions found matching your search.
                </p>
              </div>
            ) : (
              <div className="w-full">
                {filteredFAQs.map((faq, index) => {
                  const itemValue = `item-${index}`;
                  const isOpen = expandedItems.includes(itemValue);
                  
                  return (
                    <div
                      key={index}
                      className="border-b border-primary/10 last:border-b-0 hover:bg-muted/50 transition-colors duration-200"
                    >
                      <button
                        onClick={() => toggleItem(itemValue)}
                        className="w-full px-6 py-4 text-left flex items-center gap-3 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <motion.div
                          animate={{
                            rotate: isOpen ? 135 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="shrink-0"
                        >
                          <ArrowUpRight className="w-4 h-4 text-primary transition-transform duration-300" />
                        </motion.div>
                        <span className="text-foreground font-medium text-sm sm:text-base flex-1 text-left">
                          {faq.question}
                        </span>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-muted-foreground font-normal leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
