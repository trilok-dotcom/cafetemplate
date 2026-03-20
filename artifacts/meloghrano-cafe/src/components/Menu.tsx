import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Gelato", "Pizzas", "Pasta", "Beverages", "Desserts"];

const menuItems = [
  { id: 1, category: "Gelato", name: "Lotus Biscoff Gelato", desc: "Creamy base swirled with caramelized biscuit spread", price: "₹240", color: "from-amber-100 to-orange-100" },
  { id: 2, category: "Gelato", name: "Pistachio Crunch", desc: "Premium roasted Sicilian pistachios", price: "₹280", color: "from-green-50 to-emerald-100" },
  { id: 3, category: "Gelato", name: "Mango Sorbet", desc: "Dairy-free Alphonso mango delight", price: "₹220", color: "from-yellow-100 to-amber-100" },
  { id: 4, category: "Gelato", name: "Tiramisu Gelato", desc: "Coffee and mascarpone flavored frozen perfection", price: "₹260", color: "from-orange-50 to-amber-100" },
  
  { id: 5, category: "Pizzas", name: "Sourdough Farmhouse", desc: "Wood-fired crust, mozzarella, fresh garden veggies", price: "₹450", color: "from-red-50 to-rose-100" },
  { id: 6, category: "Pizzas", name: "Margherita Rustica", desc: "San Marzano tomatoes, fresh basil, buffalo mozzarella", price: "₹380", color: "from-rose-50 to-red-100" },
  { id: 7, category: "Pizzas", name: "Truffle Mushroom", desc: "Wild mushrooms, truffle oil, white sauce base", price: "₹520", color: "from-stone-100 to-gray-200" },
  { id: 8, category: "Pizzas", name: "Pesto Veggie", desc: "House basil pesto, cherry tomatoes, black olives", price: "₹480", color: "from-green-50 to-lime-100" },
  
  { id: 9, category: "Pasta", name: "Pesto Pasta", desc: "Penne tossed in creamy basil & pine nut pesto", price: "₹360", color: "from-emerald-50 to-green-100" },
  { id: 10, category: "Pasta", name: "Mushroom Alfredo", desc: "Fettuccine in rich garlic mushroom parmesan sauce", price: "₹390", color: "from-slate-100 to-stone-200" },
  { id: 11, category: "Pasta", name: "Arrabbiata", desc: "Spicy tomato sauce, chili flakes, fresh parsley", price: "₹340", color: "from-red-50 to-orange-100" },
  { id: 12, category: "Pasta", name: "Gnocchi al Pomodoro", desc: "Potato dumplings in rustic tomato basil sauce", price: "₹420", color: "from-orange-50 to-rose-100" },
  
  { id: 13, category: "Beverages", name: "Hot Chocolate", desc: "Thick Italian style dark hot chocolate", price: "₹220", color: "from-amber-100 to-yellow-700/20" },
  { id: 14, category: "Beverages", name: "Italian Espresso", desc: "Double shot of premium arabica blend", price: "₹140", color: "from-stone-200 to-neutral-300" },
  { id: 15, category: "Beverages", name: "Lavender Latte", desc: "Smooth latte with floral lavender notes", price: "₹260", color: "from-purple-50 to-fuchsia-100" },
  { id: 16, category: "Beverages", name: "Fresh Lemonade", desc: "Mint and lemon cooler", price: "₹160", color: "from-yellow-50 to-lime-100" },
  
  { id: 17, category: "Desserts", name: "Classic Tiramisu", desc: "Espresso soaked ladyfingers, mascarpone cream", price: "₹320", color: "from-stone-100 to-amber-100" },
  { id: 18, category: "Desserts", name: "Panna Cotta", desc: "Vanilla bean custard with berry compote", price: "₹280", color: "from-pink-50 to-rose-100" },
  { id: 19, category: "Desserts", name: "Cannoli", desc: "Crispy shells filled with sweet ricotta", price: "₹250", color: "from-orange-50 to-amber-100" },
  { id: 20, category: "Desserts", name: "Affogato", desc: "Vanilla gelato drowned in hot espresso", price: "₹240", color: "from-neutral-100 to-stone-200" },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Gelato");

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-24 bg-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Our Signature Menu
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore our carefully curated selection of vegetarian Italian classics and artisanal sweet treats.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat 
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                  : "bg-background text-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer h-full"
              >
                <div className="bg-card h-full rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 border border-border/50 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  {/* Visual Placeholder */}
                  <div className={`w-full h-40 rounded-2xl mb-6 bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300`}>
                    <span className="text-foreground/30 font-display italic text-lg">{item.category}</span>
                  </div>
                  
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-bold text-lg text-foreground leading-tight">{item.name}</h3>
                    <span className="font-semibold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm flex-grow">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
