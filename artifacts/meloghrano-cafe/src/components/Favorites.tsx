import { motion } from "framer-motion";
import { Star } from "lucide-react";

const favorites = [
  { id: 1, name: "Lotus Biscoff Gelato", badge: "Most Loved", badgeColor: "bg-red-500", color: "from-amber-100 to-orange-200" },
  { id: 2, name: "Sourdough Farmhouse Pizza", badge: "Must Try", badgeColor: "bg-emerald-500", color: "from-red-50 to-rose-200" },
  { id: 3, name: "Hot Chocolate", badge: "Top Rated", badgeColor: "bg-yellow-500", color: "from-amber-50 to-yellow-200" },
  { id: 4, name: "Pesto Pasta", badge: "Staff Pick", badgeColor: "bg-purple-500", color: "from-emerald-50 to-green-200" },
  { id: 5, name: "Italian Nachos", badge: "Crowd Favorite", badgeColor: "bg-orange-500", color: "from-orange-50 to-amber-200" },
];

export default function Favorites() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Customer Favorites
          </h2>
          <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
        </div>
      </div>

      <div className="pl-4 sm:pl-6 lg:pl-8">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 hide-scrollbar">
          {favorites.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="shrink-0 snap-center w-[85vw] sm:w-[400px]"
            >
              <div className="relative bg-card rounded-[2rem] p-4 shadow-lg border border-border group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className={`absolute -top-4 -right-2 ${item.badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md z-10 rotate-3 group-hover:rotate-6 transition-transform`}>
                  {item.badge}
                </div>
                
                <div className={`w-full h-64 rounded-3xl bg-gradient-to-br ${item.color} mb-6 overflow-hidden relative`}>
                   {/* Abstract decoration */}
                   <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-white to-transparent" />
                </div>
                
                <div className="px-2 pb-2">
                  <h3 className="text-2xl font-bold font-display text-foreground">{item.name}</h3>
                  <button className="mt-4 text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Order Now <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Spacer for last item scroll padding */}
          <div className="shrink-0 w-4 sm:w-8" />
        </div>
      </div>
    </section>
  );
}
