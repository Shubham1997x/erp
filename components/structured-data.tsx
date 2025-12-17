import { siteConfig, contactConfig } from "@/lib/config";

// FAQ Data (should match FAQ component)
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

export function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactConfig.phone,
      contactType: "Customer Service",
      email: contactConfig.email,
      areaServed: "IN",
      availableLanguage: ["en"],
    },
    sameAs: [
      // Add your social media profiles here
      // "https://www.facebook.com/yourpage",
      // "https://www.linkedin.com/company/yourcompany",
      // "https://twitter.com/yourhandle",
    ],
  };

  // Software Application Schema with Pricing
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        price: "299",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "299",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
      },
      {
        "@type": "Offer",
        name: "Professional Plan",
        price: "799",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "799",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
      },
      {
        "@type": "Offer",
        name: "Enterprise Plan",
        price: "0",
        priceCurrency: "USD",
        description: "Custom pricing available",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Production Management",
      "Inventory Management",
      "Order Management",
      "Customer & Supplier Management",
      "Recipe Calculator",
      "Analytics & Reporting",
      "Stock Management",
      "Raw Materials Tracking",
    ],
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // FAQPage Schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Product/Service Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: siteConfig.name,
    description:
      "Complete ERP solution for carpet manufacturing operations. Streamline production, manage inventory, track orders, and scale your business.",
    brand: {
      "@type": "Brand",
      name: "Wantace",
    },
    category: "Business Software",
    offers: {
      "@type": "AggregateOffer",
      offerCount: "3",
      lowPrice: "299",
      highPrice: "799",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
