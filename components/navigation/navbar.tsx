"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "#dashboard", id: "dashboard", priority: "high" },
    { name: "Products", href: "#product-recipe", id: "product-recipe", priority: "high" },
    { name: "Raw Materials", href: "#raw-materials", id: "raw-materials", priority: "medium" },
    { name: "Orders", href: "#order-management", id: "order-management", priority: "high" },
    { name: "Production", href: "#production", id: "production", priority: "high" },
    {
      name: "Customers",
      href: "#customers-suppliers",
      id: "customers-suppliers",
      priority: "medium",
    },
    { name: "Stock", href: "#stock-management", id: "stock-management", priority: "medium" },
    { name: "Analytics", href: "#analytics", id: "analytics", priority: "low" },
    { name: "Calculator", href: "#recipe-calculator", id: "recipe-calculator", priority: "low" },
    { name: "Contact", href: "#contact", id: "contact", priority: "low" },
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
        <div className="flex h-14 items-center justify-between border border-primary/20 rounded-lg px-2 sm:px-4 lg:px-6 bg-white overflow-hidden">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className="relative shrink-0">
              <Image
                src="/logo.svg"
                alt="Carpet ERP Logo"
                width={32}
                height={32}
                className="h-7 w-7 sm:h-8 sm:w-8 group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-sm sm:text-base text-foreground leading-tight truncate">
                Carpet ERP
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight truncate">
                by Wantace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 min-w-0 flex-1 justify-end max-w-full">
            {/* High priority links - always visible on lg+ */}
            {navLinks
              .filter((link) => link.priority === "high")
              .map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.div
                    key={link.name}
                    className="relative shrink-0"
                    whileHover="hover"
                    initial="initial"
                  >
                    <Link
                      href={link.href}
                      className={`relative inline-block text-xs lg:text-sm font-medium transition-all duration-300 group px-2 lg:px-3 xl:px-4 py-2 whitespace-nowrap ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="relative inline-block">
                        {link.name}
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
            
            {/* Medium priority links - visible on xl+ */}
            {navLinks
              .filter((link) => link.priority === "medium")
              .map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.div
                    key={link.name}
                    className="relative hidden xl:block shrink-0"
                    whileHover="hover"
                    initial="initial"
                  >
                    <Link
                      href={link.href}
                      className={`relative inline-block text-xs lg:text-sm font-medium transition-all duration-300 group px-2 lg:px-3 xl:px-4 py-2 whitespace-nowrap ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="relative inline-block">
                        {link.name}
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
            
            {/* Low priority links - visible on 2xl+ */}
            {navLinks
              .filter((link) => link.priority === "low")
              .map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.div
                    key={link.name}
                    className="relative hidden 2xl:block shrink-0"
                    whileHover="hover"
                    initial="initial"
                  >
                    <Link
                      href={link.href}
                      className={`relative inline-block text-xs lg:text-sm font-medium transition-all duration-300 group px-2 lg:px-3 xl:px-4 py-2 whitespace-nowrap ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="relative inline-block">
                        {link.name}
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
            
            <div className="ml-1 xl:ml-2 2xl:ml-4 pl-1 xl:pl-2 2xl:pl-4 border-l border-primary/20 shrink-0">
              <button className="bg-primary text-xs lg:text-sm hover:bg-primary/90 cursor-pointer text-white rounded-lg transition-all px-2 lg:px-3 xl:px-4 py-2 whitespace-nowrap">Request Demo</button>
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
                <button className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 px-4 py-2 font-medium cursor-pointer">
                  Request Demo
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
