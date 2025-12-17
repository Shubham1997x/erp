 "use client";
 
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
 
 const testimonials = [
   {
     name: "David Martinez",
     handle: "@davidmartinez",
     company: "Solar Pro Inc.",
     companyUrl: "#",
     text: "Solar by Wantace increased our close rate by 40%. Being able to show homeowners instant visualizations is a game-changer for our sales team.",
     avatar:
       "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=faces",
     hashtags: ["#solar", "#AI"],
   },
   {
     name: "Jennifer Wong",
     handle: "@jenniferw",
     company: "Premier Realty",
     companyUrl: "#",
     text: "We integrated the API into our real estate platform. Now every property listing shows solar potential. Our agents love it and so do buyers.",
     avatar:
       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
     hashtags: ["#realestate", "#solar"],
   },
   {
     name: "Robert Thompson",
     handle: "@robertthompson",
     company: "Green Energy Solutions",
     companyUrl: "#",
     text: "The white-label solution pays for itself. We’re converting leads 3x faster and our team can handle twice as many consultations per week.",
     avatar:
       "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=200&h=200&fit=crop&crop=faces",
     hashtags: ["#solar", "#business"],
   },
   {
     name: "Sarah Johnson",
     handle: "@sarahj",
     company: "Solar Innovations",
     companyUrl: "#",
     text: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users. It’s transformed our workflow.",
     avatar:
       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces",
     hashtags: ["#recommended"],
   },
 ];
 
 export function Testimonials() {
   return (
     <section id="testimonials" className="py-16 sm:py-20 bg-white">
       <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         {/* Heading Section */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
             Testimonials
           </div>
           <h2 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-foreground">
             What Our Customers Say
           </h2>
           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
             Trusted by manufacturing companies worldwide
           </p>
         </motion.div>

         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
           {testimonials.map((item, index) => (
             <motion.article
               key={item.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: index * 0.05 }}
               whileHover={{ 
                 y: -6, 
                 scale: 1.01,
                 transition: { 
                   duration: 0.3, 
                   ease: [0.4, 0, 0.2, 1] 
                 }
               }}
               className="relative h-full rounded-2xl border border-primary/20 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 ease-out cursor-pointer group"
             >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.name}</p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.text}</p>
             </motion.article>
           ))}
         </div>
       </div>
     </section>
   );
 }
 
