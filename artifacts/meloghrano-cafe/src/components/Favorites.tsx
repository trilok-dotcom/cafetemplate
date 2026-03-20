import { motion } from "framer-motion";
import { useState } from "react";
import { Flame, Star, Zap, Heart, Trophy } from "lucide-react";

const favorites = [
  {
    id: 1,
    name: "Lotus Biscoff Gelato",
    desc: "Our #1 bestseller. Creamy biscuit perfection.",
    badge: "🔥 Most Loved",
    badgeGlow: "glow-primary",
    badgeBg: "bg-gradient-to-r from-red-500 to-orange-500",
    icon: <Flame className="w-4 h-4" />,
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80",
    color: "from-amber-400/20 to-orange-300/20",
    accent: "#E26D5C",
    price: "₹240",
  },
  {
    id: 2,
    name: "Sourdough Farmhouse Pizza",
    desc: "Wood-fired crust, garden fresh toppings.",
    badge: "⭐ Must Try",
    badgeGlow: "glow-gold",
    badgeBg: "bg-gradient-to-r from-emerald-500 to-teal-500",
    icon: <Star className="w-4 h-4" />,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
    color: "from-rose-400/20 to-red-300/20",
    accent: "#8BA888",
    price: "₹450",
  },
  {
    id: 3,
    name: "Rich Hot Chocolate",
    desc: "Thick Italian-style dark hot chocolate.",
    badge: "🏆 Top Rated",
    badgeGlow: "glow-gold",
    badgeBg: "bg-gradient-to-r from-yellow-500 to-amber-500",
    icon: <Trophy className="w-4 h-4" />,
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80",
    color: "from-amber-400/20 to-yellow-300/20",
    accent: "#D2A679",
    price: "₹220",
  },
  {
    id: 4,
    name: "Pesto Pasta",
    desc: "House basil pesto, pine nuts, parmesan.",
    badge: "⚡ Staff Pick",
    badgeGlow: "glow-primary",
    badgeBg: "bg-gradient-to-r from-purple-500 to-violet-500",
    icon: <Zap className="w-4 h-4" />,
    img: "https://images.unsplash.com/photo-1598866594230-a7c00e68b372?w=500&q=80",
    color: "from-emerald-400/20 to-green-300/20",
    accent: "#8BA888",
    price: "₹360",
  },
  {
    id: 5,
    name: "Italian Nachos",
    desc: "Crispy chips, cheese, salsa & jalapeño.",
    badge: "❤️ Crowd Fave",
    badgeGlow: "glow-primary",
    badgeBg: "bg-gradient-to-r from-pink-500 to-rose-500",
    icon: <Heart className="w-4 h-4" />,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    color: "from-orange-400/20 to-amber-300/20",
    accent: "#F4A261",
    price: "₹280",
  },
];

export default function Favorites() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Background blob */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Customer <span className="text-gradient">Favorites</span>
            </h2>
            <p className="text-muted-foreground mt-2">The dishes that keep our guests coming back.</p>
          </div>
          <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="font-bold text-sm text-yellow-700">4.8 / 5</span>
          </div>
        </motion.div>
      </div>

      <div className="pl-4 sm:pl-6 lg:pl-8 max-w-[100vw]">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-6 hide-scrollbar">
          {favorites.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="shrink-0 snap-center w-[300px] sm:w-[340px] cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                animate={hoveredId === item.id ? {
                  y: -16,
                  rotateX: 5,
                  rotateY: -3,
                } : { y: 0, rotateX: 0, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                className="relative bg-card rounded-[2rem] shadow-xl border border-border/50 overflow-hidden"
              >
                {/* Glowing badge */}
                <div className={`absolute -top-1 right-4 z-20 ${item.badgeBg} text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 ${hoveredId === item.id ? item.badgeGlow : ""} transition-all duration-300`}>
                  {item.icon}
                  {item.badge}
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredId === item.id ? "scale-110" : "scale-100"}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      (target.parentElement as HTMLElement).className += ` bg-gradient-to-br ${item.color}`;
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 ${hoveredId === item.id ? "opacity-100" : "opacity-0"}`} />
                  
                  {/* Price tag */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold font-display text-foreground mb-1">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2.5 rounded-xl bg-primary/10 text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Order Now →
                  </motion.button>
                </div>

                {/* Animated glow on hover */}
                {hoveredId === item.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 pointer-events-none rounded-[2rem] border-2"
                    style={{ borderColor: item.accent + "66", boxShadow: `inset 0 0 30px ${item.accent}11` }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
          <div className="shrink-0 w-4 sm:w-8" />
        </div>
      </div>
    </section>
  );
}