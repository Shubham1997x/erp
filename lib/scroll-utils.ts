/**
 * Utility functions for smooth scrolling
 */

export function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    const offset = 80; // Account for navbar height
    const elementPosition = contactSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

