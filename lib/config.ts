/**
 * Application configuration
 * Centralized configuration management using environment variables
 */

// Contact Information
export const contactConfig = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "nick@wantace.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+44 658 695 1390",
  address: {
    line1: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_LINE1 || "123 Business Park, Industrial Area",
    line2: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_LINE2 || "City, State 123456",
    country: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_COUNTRY || "India",
  },
  get fullAddress(): string {
    return `${this.address.line1}\n${this.address.line2}\n${this.address.country}`;
  },
};

// Site Information
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Carpet ERP by Wantace",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Complete ERP solution for carpet manufacturing operations with production, inventory, orders, and analytics in one place.",
};

// API Configuration
export const apiConfig = {
  emailService: {
    apiKey: process.env.EMAIL_SERVICE_API_KEY,
    from: process.env.EMAIL_SERVICE_FROM || "noreply@yourdomain.com",
    to: process.env.EMAIL_SERVICE_TO || contactConfig.email,
  },
};

// Analytics Configuration
export const analyticsConfig = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
};

// Error Tracking Configuration
export const errorTrackingConfig = {
  sentryDsn: process.env.SENTRY_DSN,
  sentryEnvironment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || "development",
};

// Note: Environment variables are optional and have fallback values
// Set these in your .env.local file for production:
// - NEXT_PUBLIC_CONTACT_EMAIL
// - NEXT_PUBLIC_CONTACT_PHONE
// - NEXT_PUBLIC_SITE_URL

