"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="section-padding section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            Request a Demo
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Schedule a personalized demo today.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground">Get in Touch</CardTitle>
                <CardDescription>
                  We'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium mb-2 block"
                      >
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium mb-2 block"
                      >
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
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
                      required
                    />
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
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-medium mb-2 block"
                    >
                      Company Name
                    </label>
                    <Input id="company" placeholder="Your Company" required />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium mb-2 block"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
            <Card className="bg-white border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Information</CardTitle>
                <CardDescription>
                  Contact us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">Email</div>
                    <a
                      href="mailto:info@rajdhanierp.com"
                      className="text-primary hover:underline"
                    >
                      info@rajdhanierp.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">Phone</div>
                    <a
                      href="tel:+911234567890"
                      className="text-primary hover:underline"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">Address</div>
                    <p className="text-muted-foreground">
                      123 Business Park, Industrial Area
                      <br />
                      City, State 123456
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/20 border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  Why Schedule a Demo?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
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
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

