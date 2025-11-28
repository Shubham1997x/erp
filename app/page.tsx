import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Modules } from "@/components/sections/modules";
import { Workflow } from "@/components/sections/workflow";
import { Screenshots } from "@/components/sections/screenshots";
import { Benefits } from "@/components/sections/benefits";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="modules">
        <Modules />
      </section>
      <section id="workflow">
        <Workflow />
      </section>
      <Screenshots />
      <Benefits />
      <section id="pricing">
        <Pricing />
      </section>
      <Testimonials />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
