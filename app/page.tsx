"use client";

import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { Dashboard } from "@/components/sections/dashboard";
import { Features } from "@/components/sections/features";
import { Modules } from "@/components/sections/modules";
import { ProductRecipe } from "@/components/sections/product-recipe";
import { RawMaterials } from "@/components/sections/raw-materials";
import { OrderManagement } from "@/components/sections/order-management";
import { Production } from "@/components/sections/production";
import { CustomersSuppliers } from "@/components/sections/customers-suppliers";
import { StockManagement } from "@/components/sections/stock-management";
import { RecipeCalculator } from "@/components/sections/recipe-calculator";
import { DropdownMaster } from "@/components/sections/dropdown-master";
import { Workflow } from "@/components/sections/workflow";
import { Analytics } from "@/components/sections/analytics";
import { SystemCapabilities } from "@/components/sections/system-capabilities";
import { Screenshots } from "@/components/sections/screenshots";
import { Benefits } from "@/components/sections/benefits";
import { Testimonials } from "@/components/sections/testimonials";
import { IntegratedSystem } from "@/components/sections/integrated-system";
import { Pricing } from "@/components/sections/pricing";
import { CTASection } from "@/components/sections/cta-section";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0F3F1]">
      <Navbar />
      <Hero />
      <Dashboard />
      <Features />
      <Modules />
      <ProductRecipe />
      <RawMaterials />
      <OrderManagement />
      <Production />
      <CustomersSuppliers />
      <StockManagement />
      <RecipeCalculator />
      <DropdownMaster />

      <SystemCapabilities />
      {/* <Benefits />
      <Testimonials /> */}
      {/* <IntegratedSystem /> */}
      {/* <Pricing /> */}
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
