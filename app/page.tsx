"use client";

import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { Dashboard } from "@/components/sections/dashboard";
import { ProductRecipe } from "@/components/sections/product-recipe";
import { RawMaterials } from "@/components/sections/raw-materials";
import { OrderManagement } from "@/components/sections/order-management";
import { Production } from "@/components/sections/production";
import { CustomersSuppliers } from "@/components/sections/customers-suppliers";
import { StockManagement } from "@/components/sections/stock-management";
import { RecipeCalculator } from "@/components/sections/recipe-calculator";
import { DropdownMaster } from "@/components/sections/dropdown-master";
import { SystemCapabilities } from "@/components/sections/system-capabilities";
import { IntegratedSystem } from "@/components/sections/integrated-system";
import { CTASection } from "@/components/sections/cta-section";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Dashboard />
      <ProductRecipe />
      <RawMaterials />
      <OrderManagement />
      <Production />
      <CustomersSuppliers />
      <StockManagement />
      <RecipeCalculator />
      <DropdownMaster />
      <SystemCapabilities />
      <IntegratedSystem />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
