"use client";

import { Navbar } from "@/components/navigation/navbar";
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
import { Analytics } from "@/components/sections/analytics";
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
      <ProductRecipe />
      <RawMaterials />
      <OrderManagement />
      <Production />
      <CustomersSuppliers />
      <StockManagement />
      <Analytics />
      <RecipeCalculator />
      <Pricing />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
