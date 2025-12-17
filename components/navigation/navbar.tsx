"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/toast";
import { trackEvent } from "@/components/analytics";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showRectangle, setShowRectangle] = useState(false);
  const { showToast } = useToast();

  const navLinks = [
    { name: "Overview", href: "#overview", id: "overview" },
    {
      name: "Products & Recipes",
      href: "#products-recipes",
      id: "products-recipes",
    },
    {
      name: "Inventory & Stock",
      href: "#inventory",
      id: "inventory",
    },
    {
      name: "Orders & Production",
      href: "#operations",
      id: "operations",
    },
    { name: "Customers", href: "#customers", id: "customers" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    // { name: "Pricing", href: "#pricing", id: "pricing" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (!element) return;
    const offsetTop = (element as HTMLElement).offsetTop - 80;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      setShowRectangle(scrollY > viewportHeight * 0.7);

      let current = "";
      for (let i = navLinks.length - 1; i >= 0; i -= 1) {
        const item = navLinks[i];
        const el = document.querySelector(item.href);
        if (el) {
          const rect = (el as HTMLElement).getBoundingClientRect();
          const offset = 150;
          if (rect.top <= offset) {
            current = item.id;
            break;
          }
        }
      }
      if (scrollY < 100) current = "";
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav
      className={`${
        showRectangle
          ? "fixed top-0 left-0 right-0 bg-transparent"
          : "absolute top-0 left-0 right-0 bg-transparent"
      } z-50 w-full transition-all duration-300`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-14 sm:h-16 relative">
          {!showRectangle && (
            <>
              <motion.a
                href="/"
                className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="relative shrink-0">
                  <Image
                    src="/logo.svg"
                    alt="Carpet ERP Logo"
                    width={36}
                    height={36}
                    className="h-8 w-8 sm:h-9 sm:w-9 group-hover:scale-105 transition-transform duration-200"
                    priority
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-normal text-sm sm:text-base text-foreground leading-tight truncate">
                    Carpet ERP
                  </span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight truncate">
                    by Wantace
                  </span>
                </div>
              </motion.a>

              <div className="hidden md:flex items-center gap-2 lg:gap-3 absolute left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur rounded-md border border-primary/15 px-3 py-1 shadow-[0_8px_30px_rgba(0,0,0,0.05)] max-w-[calc(100vw-200px)] overflow-x-auto">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`group relative text-[13px] lg:text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? "text-primary"
                          : "text-slate-700 hover:text-foreground"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="hidden md:block">
                <button
                  onClick={() => {
                    trackEvent("cta_click", {
                      button_text: "Contact",
                      location: "navbar_desktop",
                    });
                    handleNavClick(new MouseEvent("click") as any, "#contact");
                  }}
                  className="rounded-md bg-primary text-white px-4 py-2 text-sm font-normal shadow-sm transition hover:bg-primary/90 cursor-pointer"
                  aria-label="Contact us"
                >
                  Contact
                </button>
              </div>
            </>
          )}

          {showRectangle && (
            <div className="hidden md:flex items-center w-full justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 flex items-center gap-2 lg:gap-3 shadow-sm max-w-[calc(100vw-140px)] overflow-x-auto"
              >
                <motion.a
                  href="/"
                  className="flex items-center gap-2 group shrink-0"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="relative shrink-0">
                    <Image
                      src="/logo.svg"
                      alt="Carpet ERP Logo"
                      width={32}
                      height={32}
                      className="h-8 w-8 group-hover:scale-105 transition-transform duration-200"
                      priority
                    />
                  </div>
                </motion.a>

                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`group relative text-[13px] lg:text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap px-1 ${
                        isActive
                          ? "text-primary"
                          : "text-slate-700 hover:text-foreground"
                      }`}
                      aria-label={`Navigate to ${link.name}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}

                <button
                  onClick={() => {
                    trackEvent("cta_click", {
                      button_text: "Contact",
                      location: "navbar_sticky",
                    });
                    handleNavClick(new MouseEvent("click") as any, "#contact");
                  }}
                  className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-1 py-0.5 rounded-md h-auto leading-tight transition cursor-pointer"
                  aria-label="Contact us"
                >
                  Contact
                </button>
              </motion.div>
            </div>
          )}

          <motion.button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 hover:border-primary/40 transition-colors ml-auto"
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

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="fixed right-0 top-0 h-full w-full bg-white z-50 lg:hidden shadow-xl overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex items-center justify-between p-4 border-b border-primary/15">
                <Link
                  href="/"
                  className="flex items-center gap-3 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative">
                    <Image
                      src="/logo.svg"
                      alt="Carpet ERP Logo"
                      width={32}
                      height={32}
                      className="h-8 w-8 group-hover:scale-105 transition-transform duration-200"
                      priority
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-normal text-base text-foreground leading-tight">
                      Carpet ERP
                    </span>
                    <span className="text-xs text-muted-foreground leading-tight">
                      by Wantace
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>

              <div className="p-4 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between text-base font-medium transition-all duration-200 group py-3 px-4 rounded-lg ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-slate-700 hover:text-foreground hover:bg-primary/5"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.span
                            className="h-2 w-2 bg-primary rounded-md"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="p-4 border-t border-primary/15">
                <Link
                  href="#contact"
                  className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-200 px-4 py-3 font-normal cursor-pointer"
                  onClick={() => {
                    trackEvent("cta_click", {
                      button_text: "Contact",
                      location: "navbar_mobile",
                    });
                    showToast(
                      "Thank you for your interest! We'll contact you soon.",
                      "success",
                      3000
                    );
                    setIsOpen(false);
                  }}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
