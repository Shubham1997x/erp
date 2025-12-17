"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
} from "lucide-react";
import { contactConfig } from "@/lib/config";
import { trackEvent } from "@/components/analytics";
import { useToast } from "@/components/ui/toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

export function Contact() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, "");

    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const validateField = (
    name: keyof FormErrors,
    value: string
  ): string | undefined => {
    switch (name) {
      case "firstName":
        if (!value.trim()) return "First name is required";
        if (value.trim().length < 2)
          return "First name must be at least 2 characters";
        return undefined;
      case "lastName":
        if (!value.trim()) return "Last name is required";
        if (value.trim().length < 2)
          return "Last name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address";
        return undefined;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        const digitsOnly = value.replace(/\D/g, "");
        if (digitsOnly.length < 10) return "Please enter a valid phone number";
        return undefined;
      case "company":
        if (!value.trim()) return "Company name is required";
        return undefined;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldName = id as keyof FormData;

    // Format phone number
    let processedValue = value;
    if (fieldName === "phone") {
      processedValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [fieldName]: processedValue }));

    // Real-time validation
    const error = validateField(fieldName as keyof FormErrors, processedValue);
    if (error) {
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldName = id as keyof FormData;
    const error = validateField(fieldName as keyof FormErrors, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          data.message || "Thank you! We'll get back to you within 24 hours."
        );

        // Track successful form submission
        trackEvent("form_submission", {
          form_type: "contact",
          status: "success",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.error || "Failed to send message. Please try again."
        );

        // Track failed form submission
        trackEvent("form_submission", {
          form_type: "contact",
          status: "error",
          error_message: data.error,
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Network error. Please check your connection and try again."
      );

      // Track network error
      trackEvent("form_submission", {
        form_type: "contact",
        status: "error",
        error_type: "network_error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Contact
          </div>
          <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-primary">
            Request a Demo
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Schedule a personalized demo today.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className=" border-primary/20 rounded-lg">
              <CardHeader>
                <CardTitle className="text-foreground">Get in Touch</CardTitle>
                <CardDescription>
                  We'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium mb-2 block"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${
                          errors.firstName
                            ? "border-destructive focus:border-destructive focus:ring-destructive"
                            : "border-primary/20"
                        } transition-colors`}
                        disabled={isSubmitting}
                      />
                      {errors.firstName && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-destructive mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="h-3 w-3" />
                          {errors.firstName}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium mb-2 block"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${
                          errors.lastName
                            ? "border-destructive focus:border-destructive focus:ring-destructive"
                            : "border-primary/20"
                        } transition-colors`}
                        disabled={isSubmitting}
                      />
                      {errors.lastName && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-destructive mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="h-3 w-3" />
                          {errors.lastName}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium mb-2 block"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${
                        errors.email
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-primary/20"
                      } transition-colors`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-destructive mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium mb-2 block"
                    >
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={14}
                      className={`${
                        errors.phone
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-primary/20"
                      } transition-colors`}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-destructive mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-medium mb-2 block"
                    >
                      Company Name
                    </label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${
                        errors.company
                          ? "border-destructive focus:border-destructive focus:ring-destructive"
                          : "border-primary/20"
                      } transition-colors`}
                      disabled={isSubmitting}
                    />
                    {errors.company && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-destructive mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="h-3 w-3" />
                        {errors.company}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium mb-2 block"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={1000}
                        className={`${
                          errors.message
                            ? "border-destructive focus:border-destructive focus:ring-destructive"
                            : "border-primary/20"
                        } transition-colors pr-16`}
                        disabled={isSubmitting}
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                        {formData.message.length}/1000
                      </div>
                    </div>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-destructive mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Status Messages */}
                  <AnimatePresence mode="wait">
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-green-800">
                          {submitMessage}
                        </p>
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2"
                      >
                        <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-800">{submitMessage}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-300 px-4 py-2 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={
                      isSubmitting
                        ? "Sending your message"
                        : "Submit contact form"
                    }
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          className="mr-2 h-4 w-4 animate-spin"
                          aria-hidden="true"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send
                          className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className=" border border-primary/20 rounded-lg shadow-none">
              <CardHeader>
                <CardTitle className="text-foreground">
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Contact us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg  flex items-center justify-center shrink-0 border border-primary/30">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">
                      Email
                    </div>
                    <a
                      href={`mailto:${contactConfig.email}`}
                      className="text-primary hover:underline"
                    >
                      {contactConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg  flex items-center justify-center shrink-0 border border-primary/30">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">
                      Phone
                    </div>
                    <a
                      href={`tel:${contactConfig.phone.replace(/\s/g, "")}`}
                      className="text-primary hover:underline"
                    >
                      {contactConfig.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className=" border border-primary/30 rounded-lg shadow-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  Why Schedule a Demo?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>See the system in action with your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Get answers to your specific questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understand implementation timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Receive a customized pricing quote</span>
                  </li>
                </ul>
                <button
                  onClick={() => {
                    trackEvent("cta_click", {
                      button_text: "Book a Call with Team",
                      location: "why_schedule_demo_section",
                    });
                    window.open(
                      "https://calendly.com/wantace-ai/discovery-call",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  className="w-full group inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 px-4 py-2 font-medium cursor-pointer "
                  aria-label="Book a call with team"
                >
                  <span>Book a Call with Team</span>
                  <PhoneCall
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
