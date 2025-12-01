"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Dashboard", href: "#dashboard", id: "dashboard" },
    { name: "Products", href: "#product-recipe", id: "product-recipe" },
    { name: "Raw Materials", href: "#raw-materials", id: "raw-materials" },
    { name: "Orders", href: "#order-management", id: "order-management" },
    { name: "Production", href: "#production", id: "production" },
    {
      name: "Customers",
      href: "#customers-suppliers",
      id: "customers-suppliers",
    },
    { name: "Stock", href: "#stock-management", id: "stock-management" },
    { name: "Analytics", href: "#analytics", id: "analytics" },
    { name: "Calculator", href: "#recipe-calculator", id: "recipe-calculator" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Also check on scroll for hero section
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Rajdhani ERP Logo"
              width={56}
              height={56}
              className="h-12 w-auto"
              priority
            />
            <span className="font-bold text-xl">Rajdhani</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <motion.div
                  key={link.name}
                  className="relative"
                  whileHover="hover"
                  initial="initial"
                >
                  <Link
                    href={link.href}
                    className="relative block text-sm font-medium transition-all duration-300 group py-2"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </span>
                    {/* Animated underline on hover and active */}
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                      variants={{
                        initial: { scaleX: isActive ? 1 : 0 },
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </Link>
                </motion.div>
              );
            })}
            <Button>Request Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-background"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative block text-sm font-medium transition-all duration-300 group py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </span>
                    {/* Animated left border on hover and active */}
                    <motion.span
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                      initial={{ scaleY: 0 }}
                      animate={{
                        scaleY: isActive ? 1 : 0,
                      }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    {/* Animated underline on hover and active */}
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                      }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </Link>
                );
              })}
              <Button className="w-full">Request Demo</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
