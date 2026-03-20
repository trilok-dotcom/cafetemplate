import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const categories = ["Gelato", "Pizzas", "Pasta", "Beverages", "Desserts"];

const menuItems = [
  { id: 1, category: "Gelato", name: "Lotus Biscoff Gelato", desc: "Creamy base swirled with caramelized biscuit spread", price: "₹240", rating: 4.9, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" },
  { id: 2, category: "Gelato", name: "Pistachio Crunch", desc: "Premium roasted Sicilian pistachios", price: "₹280", rating: 4.8, img: "https://images.unsplash.com/photo-1580502304784-8bacd7bdada4?w=400&q=80" },
  { id: 3, category: "Gelato", name: "Mango Sorbet", desc: "Dairy-free Alphonso mango delight", price: "₹220", rating: 4.7, img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80" },
  { id: 4, category: "Gelato", name: "Tiramisu Gelato", desc: "Coffee and mascarpone flavored frozen perfection", price: "₹260", rating: 4.9, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80" },

  { id: 5, category: "Pizzas", name: "Sourdough Farmhouse", desc: "Wood-fired crust, mozzarella, fresh garden veggies", price: "₹450", rating: 4.9, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" },
  { id: 6, category: "Pizzas", name: "Margherita Rustica", desc: "San Marzano tomatoes, basil, buffalo mozzarella", price: "₹380", rating: 4.8, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
  { id: 7, category: "Pizzas", name: "Truffle Mushroom", desc: "Wild mushrooms, truffle oil, white sauce base", price: "₹520", rating: 4.8, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
  { id: 8, category: "Pizzas", name: "Pesto Veggie", desc: "House basil pesto, cherry tomatoes, black olives", price: "₹480", rating: 4.7, img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80" },

  { id: 9, category: "Pasta", name: "Pesto Pasta", desc: "Penne tossed in creamy basil & pine nut pesto", price: "₹360", rating: 4.8, img: "https://images.unsplash.com/photo-1598866594230-a7c00e68b372?w=400&q=80" },
  { id: 10, category: "Pasta", name: "Mushroom Alfredo", desc: "Fettuccine in rich garlic mushroom parmesan sauce", price: "₹390", rating: 4.7, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80" },
  { id: 11, category: "Pasta", name: "Arrabbiata", desc: "Spicy tomato sauce, chili flakes, fresh parsley", price: "₹340", rating: 4.6, img: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400&q=80" },
  { id: 12, category: "Pasta", name: "Gnocchi Pomodoro", desc: "Potato dumplings in rustic tomato basil sauce", price: "₹420", rating: 4.7, img: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=400&q=80" },

  { id: 13, category: "Beverages", name: "Hot Chocolate", desc: "Thick Italian style dark hot chocolate", price: "₹220", rating: 4.9, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80" },
  { id: 14, category: "Beverages", name: "Italian Espresso", desc: "Double shot of premium arabica blend", price: "₹140", rating: 4.7, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
  { id: 15, category: "Beverages", name: "Lavender Latte", desc: "Smooth latte with floral lavender notes", price: "₹260", rating: 4.8, img: "https://images.unsplash.com/photo-1561882468-9110d70d1e87?w=400&q=80" },
  { id: 16, category: "Beverages", name: "Fresh Lemonade", desc: "Mint and lemon cooler", price: "₹160", rating: 4.6, img: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=400&q=80" },

  { id: 17, category: "Desserts", name: "Classic Tiramisu", desc: "Espresso soaked ladyfingers, mascarpone cream", price: "₹320", rating: 4.9, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80" },
  { id: 18, category: "Desserts", name: "Panna Cotta", desc: "Vanilla bean custard with berry compote", price: "₹280", rating: 4.8, img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80" },
  { id: 19, category: "Desserts", name: "Cannoli", desc: "Crispy shells filled with sweet ricotta", price: "₹250", rating: 4.7, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: 20, category: "Desserts", name: "Affogato", desc: "Vanilla gelato drowned in hot espresso", price: "₹240", rating: 4.8, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" },
];

const categoryEmojis: Record<string, string> = {
  "Gelato": "🍦",
  "Pizzas": "🍕",
  "Pasta": "🍝",
  "Beverages": "☕",
  "Desserts": "🍰",
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Gelato");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-24 bg-muted/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Our Signature <span className="text-gradient">Menu</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Carefully curated vegetarian Italian classics and artisanal treats.</p>
        </div>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="flex overflow-x-auto hide-scrollbar justify-start sm:justify-center gap-3 mb-12 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveTab(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`shrink-0 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              <span>{categoryEmojis[cat]}</span>
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Items grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                layout
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="card-3d bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredId === item.id ? "scale-115" : "scale-100"}`}
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.src = "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-white font-bold text-lg">{item.price}</span>
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-xs font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display font-bold text-foreground mb-1 text-lg leading-tight">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">{item.desc}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Add to Order
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}