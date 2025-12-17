"use client";

import { Navbar } from "@/components/navigation/navbar";
import { SkipLink } from "@/components/skip-link";
import { Hero } from "@/components/sections/hero";
import { Dashboard } from "@/components/sections/dashboard";
import { Features } from "@/components/sections/features";
import { ProductRecipe } from "@/components/sections/product-recipe";
import { RawMaterials } from "@/components/sections/raw-materials";
import { OrderManagement } from "@/components/sections/order-management";
import { Production } from "@/components/sections/production";
import { CustomersSuppliers } from "@/components/sections/customers-suppliers";
import { StockManagement } from "@/components/sections/stock-management";
import { RecipeCalculator } from "@/components/sections/recipe-calculator";
import { Pricing } from "@/components/sections/pricing";
import { CTASection } from "@/components/sections/cta-section";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Testimonials } from "@/components/sections/testimonials";
import { CustomerLogos } from "@/components/sections/customer-logos";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <SkipLink />
      <main id="main-content" className="min-h-screen bg-muted" tabIndex={-1}>
        <Navbar />
        <Hero />
        <CustomerLogos />
        <Dashboard />
        <Features />

        <div id="products-recipes" className="scroll-mt-28">
          <ProductRecipe />
          {/* <RecipeCalculator /> */}
        </div>

        <div id="inventory" className="scroll-mt-28">
          <RawMaterials />
          <StockManagement />
        </div>

        <div id="operations" className="scroll-mt-28">
          <OrderManagement />
          <Production />
        </div>

        <div id="customers" className="scroll-mt-28">
          <CustomersSuppliers />
        </div>

        <div id="testimonials" className="scroll-mt-28">
          <Testimonials />
        </div>

        {/* <Pricing /> */}
        <FAQ />
        <CTASection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
