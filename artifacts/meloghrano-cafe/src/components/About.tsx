import { motion } from "framer-motion";
import { ChefHat, LeafyGreen, Coffee, Award } from "lucide-react";

export default function About() {
  const features = [
    { icon: <ChefHat className="w-6 h-6 text-primary" />, title: "Authentic Italian", desc: "Traditional techniques, Italian heart." },
    { icon: <LeafyGreen className="w-6 h-6 text-secondary" />, title: "100% Pure Veg", desc: "Ethically sourced, fresh ingredients." },
    { icon: <Coffee className="w-6 h-6 text-accent" />, title: "Cozy Ambience", desc: "Your perfect spot for every occasion." },
    { icon: <Award className="w-6 h-6 text-yellow-500" />, title: "Award Winning", desc: "Best veg restaurant, Bangalore 2024." },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image section — simple on mobile, collage on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Mobile: single stacked images */}
            <div className="flex flex-col gap-4 lg:hidden">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80"
                  alt="Cafe Interior"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl flex-1 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500&q=80"
                    alt="Cafe Ambience"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="glass rounded-2xl px-4 py-4 shadow-xl border border-white/40 flex-1 flex flex-col justify-center">
                  <div className="text-xl font-display font-bold text-foreground">Since 2018</div>
                  <div className="text-sm text-muted-foreground mt-1">Serving Authentic Italian</div>
                </div>
              </div>
            </div>

            {/* Desktop: overlapping collage */}
            <div className="hidden lg:block relative h-[500px]">
              <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80"
                  alt="Cafe Interior"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl z-20">
                <img
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500&q=80"
                  alt="Cafe Ambience"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-20 left-[35%] glass rounded-2xl px-5 py-4 shadow-xl border border-white/40 z-30"
              >
                <div className="text-2xl font-display font-bold text-foreground">Since 2018</div>
                <div className="text-sm text-muted-foreground">Serving Authentic Italian</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="w-14 h-1 bg-primary rounded-full mb-6 sm:mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Born from a profound love of authentic Italian cuisine and strong vegetarian values, Meloghrano Cafe brings the vibrant, soul-comforting flavors of Italy to the heart of Banashankari, Bangalore.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10">
              From our meticulously proofed sourdough crusts to our vibrantly fresh gelato spun daily — every item celebrates taste, crafted entirely vegetarian, with zero compromise.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((f, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-muted/50 border border-border/50 rounded-2xl p-4 sm:p-5 hover:-translate-y-1 transition-transform duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-background flex items-center justify-center mb-2 sm:mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-xs sm:text-sm mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed hidden sm:block">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
