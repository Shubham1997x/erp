"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Products & Recipes", href: "#products-recipes" },
  { label: "Inventory & Stock", href: "#inventory" },
  { label: "Orders & Production", href: "#operations" },
  { label: "Customers", href: "#customers" },
  { label: "Testimonials", href: "#testimonials" },
  // { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRectangle, setShowRectangle] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      setShowRectangle(scrollY > viewportHeight * 0.8);

      let currentSection = "";
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150;
          if (rect.top <= offset) {
            currentSection = item.href.replace("#", "");
            break;
          }
        }
      }

      if (scrollY < 100) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      className={`${
        showRectangle ? "fixed" : "absolute"
      } top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !showRectangle ? "bg-muted/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo - Hide when scrolled past first page */}
          {!showRectangle && (
            <motion.a
              href="/"
              className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative shrink-0">
              <Image
                src="/logo.svg"
                alt="Carpet ERP Logo"
                width={40}
                height={40}
                className="h-7 w-7 sm:h-10 sm:w-10 group-hover:scale-110 transition-transform duration-300 object-contain"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-sm sm:text-base text-foreground leading-tight truncate">
                Carpet ERP
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight truncate">
                by Wantace
              </span>
            </div>
            </motion.a>
          )}

          {/* Mobile Hamburger Menu - Always visible on mobile, positioned on right */}
          <div className="xl:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          {!showRectangle && (
            <div className="hidden border border-gray-200 rounded-md px-4 py-1 xl:flex items-center gap-4 xl:gap-5 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-sm xl:text-base font-medium transition-colors duration-200 cursor-pointer group whitespace-nowrap focus:outline-none ${
                      isActive
                        ? "text-primary"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                );
              })}
            </div>
          )}

          {/* Contact Button - Right - Desktop only */}
          {!showRectangle && (
            <div className="hidden xl:block">
              <button
                onClick={handleContact}
                className="bg-primary hover:bg-primary/90 text-white text-base font-medium px-4 py-2 h-auto rounded-md transition-colors cursor-pointer"
                aria-label="Contact us"
              >
                Contact
              </button>
            </div>
          )}

          {/* Rectangle Navbar Layout when Scrolling */}
          {showRectangle && (
            <div className="hidden xl:flex items-center w-full justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 border border-gray-200 rounded-lg px-2 py-1 flex items-center gap-3 xl:gap-4"
              >
                {/* Logo inside rectangle */}
                <motion.a
                  href="/"
                  className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative shrink-0">
                    <Image
                      src="/logo.svg"
                      alt="Carpet ERP Logo"
                      width={40}
                      height={40}
                      className="h-7 w-7 sm:h-8 sm:w-8 group-hover:scale-110 transition-transform duration-300 object-contain"
                      priority
                    />
                  </div>
                </motion.a>

                {/* Navigation Links */}
                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative text-sm xl:text-base font-medium transition-colors duration-200 cursor-pointer group whitespace-nowrap focus:outline-none rounded px-1 ${
                        isActive
                          ? "text-primary"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                      aria-label={`Navigate to ${item.label} section`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                        aria-hidden="true"
                      ></span>
                    </a>
                  );
                })}

                {/* Contact Button inside rectangle */}
                <button
                  onClick={handleContact}
                  className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-3 py-1.5 rounded-sm h-auto leading-tight transition-colors cursor-pointer"
                  aria-label="Contact us"
                >
                  Contact
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[60] xl:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed right-0 top-0 h-screen w-[300px] sm:w-[400px] bg-white shadow-xl z-[70] xl:hidden flex flex-col"
            >
              {/* Header with Logo */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <Image
                      src="/logo.svg"
                      alt="Carpet ERP Logo"
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                      priority
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-gray-900">
                      Carpet ERP
                    </span>
                    <span className="text-xs text-gray-600">
                      by Wantace
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-gray-900" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 py-6 px-4 bg-white flex flex-col justify-center">
                <div className="space-y-2">
                  {navItems.map((item) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`block text-base font-medium px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? "text-primary bg-blue-50"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Contact Button at Bottom */}
              <div className="p-4 border-t border-gray-200 bg-white shrink-0">
                <button
                  className="bg-primary hover:bg-primary/90 font-medium text-white text-base w-full py-3 rounded-md transition-colors"
                  onClick={() => {
                    handleContact();
                    setMobileMenuOpen(false);
                  }}
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
