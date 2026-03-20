import { motion } from "framer-motion";
import { ChefHat, LeafyGreen, Coffee } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-primary" />,
      title: "Authentic Italian Recipes",
      description: "Traditional techniques handed down through generations, bringing the true taste of Italy to your table."
    },
    {
      icon: <LeafyGreen className="w-8 h-8 text-secondary" />,
      title: "100% Pure Vegetarian",
      description: "Ethically sourced, fresh ingredients crafted into masterpieces without compromising on our vegetarian values."
    },
    {
      icon: <Coffee className="w-8 h-8 text-accent" />,
      title: "Cozy Aesthetic Ambience",
      description: "A warm, pastel-toned sanctuary perfect for dates, family gatherings, or peaceful solo coffee runs."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Born from a profound love of authentic Italian cuisine and strong vegetarian values, Meloghrano Cafe brings the vibrant, soul-comforting flavors of Italy to Banashankari, Bangalore.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that exceptional food requires no compromise. From our meticulously proofed sourdough crusts to our vibrantly fresh gelato spun daily, every item on our menu is a celebration of taste, crafted entirely vegetarian.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-card p-8 rounded-3xl shadow-xl shadow-black/5 border border-border/50 hover:-translate-y-2 transition-transform duration-300 ${
                  idx === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto lg:w-full lg:col-span-1' : ''
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
