import { motion } from "framer-motion";
import { ChefHat, LeafyGreen, Coffee, Award } from "lucide-react";

export default function About() {
  const features = [
    { icon: <ChefHat className="w-7 h-7 text-primary" />, title: "Authentic Italian", desc: "Traditional techniques, Italian heart." },
    { icon: <LeafyGreen className="w-7 h-7 text-secondary" />, title: "100% Pure Veg", desc: "Ethically sourced, fresh ingredients." },
    { icon: <Coffee className="w-7 h-7 text-accent" />, title: "Cozy Ambience", desc: "Your perfect spot for every occasion." },
    { icon: <Award className="w-7 h-7 text-yellow-500" />, title: "Award Winning", desc: "Best veg restaurant, Bangalore 2024." },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px]"
          >
            {/* Main image */}
            <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80"
                alt="Cafe Interior"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Secondary image */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559329007-45c4cb169b12?w=500&q=80"
                alt="Cafe Ambience"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-16 left-[28%] glass rounded-2xl px-5 py-4 shadow-xl border border-white/40 z-10"
            >
              <div className="text-2xl font-display font-bold text-foreground">Since 2018</div>
              <div className="text-sm text-muted-foreground">Serving Authentic Italian</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Born from a profound love of authentic Italian cuisine and strong vegetarian values, Meloghrano Cafe brings the vibrant, soul-comforting flavors of Italy to the heart of Banashankari, Bangalore.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              From our meticulously proofed sourdough crusts to our vibrantly fresh gelato spun daily — every item celebrates taste, crafted entirely vegetarian, with zero compromise.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-muted/50 border border-border/50 rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}