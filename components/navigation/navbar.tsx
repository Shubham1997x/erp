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
  const [scrolled, setScrolled] = useState(false);

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

    // Handle scroll for hero section and navbar background
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
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
    <nav className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex h-14 items-center justify-between border border-primary/20 rounded-lg px-6 bg-white">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.svg"
                alt="Carpet ERP Logo"
                width={32}
                height={32}
                className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base text-foreground leading-tight">
                Carpet ERP
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                by Wantace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
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
                    className={`relative inline-block text-sm font-medium transition-all duration-300 group px-4 py-2 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="relative inline-block">
                      {link.name}
                      {/* Bottom underline - only under text */}
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                        variants={{
                          initial: { scaleX: isActive ? 1 : 0 },
                          hover: { scaleX: 1 },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
            <div className="ml-4 pl-4 border-l border-primary/20">
              <button className="bg-primary text-sm hover:bg-blue-600 cursor-pointer text-white rounded-xl transition-all px-4 py-2">Request Demo</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border border-primary/20 rounded-lg mt-2 mx-4"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`relative block text-sm font-medium transition-all duration-300 group py-3 px-4 rounded-lg ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10 flex items-center justify-between">
                        {link.name}
                        {isActive && (
                          <motion.span
                            className="h-2 w-2 bg-primary rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg">
                  Request Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
