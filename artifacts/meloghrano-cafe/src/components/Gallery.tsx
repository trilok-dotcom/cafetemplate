import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const galleryItems = [
  { id: 1, title: "Cozy Seating Area", height: "h-64", color: "from-orange-100 to-rose-100" },
  { id: 2, title: "Fresh Sourdough", height: "h-96", color: "from-amber-100 to-yellow-100" },
  { id: 3, title: "The Bar", height: "h-72", color: "from-stone-200 to-neutral-200" },
  { id: 4, title: "Gelato Display", height: "h-64", color: "from-pink-100 to-rose-200" },
  { id: 5, title: "Open Kitchen", height: "h-80", color: "from-slate-100 to-stone-200" },
  { id: 6, title: "Outdoor Patio", height: "h-64", color: "from-emerald-50 to-green-100" },
  { id: 7, title: "Coffee Art", height: "h-72", color: "from-amber-50 to-orange-100" },
  { id: 8, title: "Woodfired Oven", height: "h-96", color: "from-red-100 to-orange-200" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Experience the Ambience
          </h2>
          <p className="text-muted-foreground">A glimpse into our warm, aesthetic spaces and culinary creations.</p>
        </div>

        <div className="masonry-grid">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              className={`masonry-item relative group rounded-3xl overflow-hidden cursor-pointer ${item.height} bg-gradient-to-br ${item.color}`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 text-center">
                  <Maximize2 className="w-8 h-8 text-white mx-auto mb-2" />
                  <span className="text-white font-medium px-4">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
