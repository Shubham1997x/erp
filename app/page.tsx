"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { Dashboard } from "@/components/sections/dashboard";
import { ProductRecipe } from "@/components/sections/product-recipe";
import { RawMaterials } from "@/components/sections/raw-materials";
import { OrderManagement } from "@/components/sections/order-management";
import { Production } from "@/components/sections/production";
import { CustomersSuppliers } from "@/components/sections/customers-suppliers";
import { StockManagement } from "@/components/sections/stock-management";
import { Analytics } from "@/components/sections/analytics";
import { RecipeCalculator } from "@/components/sections/recipe-calculator";
import { DropdownMaster } from "@/components/sections/dropdown-master";
import { SystemCapabilities } from "@/components/sections/system-capabilities";
import { IntegratedSystem } from "@/components/sections/integrated-system";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Loader } from "@/components/ui/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Hide loader after page loads
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000); // Show loader for 2 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
  //       <Loader />
  //     </div>
  //   );
  // }

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
      <Analytics />
      <RecipeCalculator />
      <DropdownMaster />
      <SystemCapabilities />
      <IntegratedSystem />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
