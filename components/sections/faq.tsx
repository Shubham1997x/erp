"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Carpet ERP and how does it help my business?",
    answer:
      "Carpet ERP is a comprehensive enterprise resource planning solution specifically designed for carpet manufacturing businesses. It streamlines your entire operations from raw materials procurement to finished product delivery, helping you reduce costs by up to 30%, increase efficiency by 40%, and gain complete visibility into your supply chain.",
  },
  {
    question: "How long does it take to implement Carpet ERP?",
    answer:
      "Implementation time varies based on your business size and requirements. Typically, small to medium businesses can be up and running within 2-4 weeks, while larger enterprises may take 6-8 weeks. Our team provides dedicated support throughout the implementation process to ensure a smooth transition.",
  },
  {
    question: "Can I customize the system to match my business processes?",
    answer:
      "Yes, absolutely! Carpet ERP is highly customizable. We offer flexible configuration options to match your specific workflows, and for Enterprise customers, we provide custom development services to build features tailored to your unique business needs.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer multiple support tiers. Starter plans include email support, Professional plans get priority support, and Enterprise customers receive dedicated support with a dedicated account manager. All plans include documentation, training materials, and access to our knowledge base.",
  },
  {
    question: "Is my data secure with Carpet ERP?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with industry standards. Your data is backed up daily and stored in secure, redundant data centers. We also offer on-premise deployment options for Enterprise customers who require additional control.",
  },
  {
    question: "Can I integrate Carpet ERP with my existing systems?",
    answer:
      "Yes, Carpet ERP offers API access and supports integrations with popular accounting software, e-commerce platforms, and other business tools. Professional and Enterprise plans include custom integration support to connect with your existing systems seamlessly.",
  },
  {
    question: "What happens if I need to scale up or down?",
    answer:
      "Carpet ERP is designed to scale with your business. You can easily upgrade or downgrade your plan as your needs change. Our flexible pricing ensures you only pay for what you need, and we can accommodate businesses from small workshops to large manufacturing facilities.",
  },
  {
    question: "Do you offer training for my team?",
    answer:
      "Yes, we provide comprehensive training for all users. This includes onboarding sessions, video tutorials, documentation, and ongoing support. Enterprise customers receive dedicated training sessions tailored to their specific workflows and requirements.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            FAQ
          </div>
          <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Carpet ERP
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-primary/20 rounded-lg overflow-hidden bg-white hover:border-primary/40 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-foreground pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-base text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Contact our team
            <ChevronDown className="ml-2 h-4 w-4 -rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

