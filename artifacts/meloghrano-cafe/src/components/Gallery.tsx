import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const galleryItems = [
  { id: 1, title: "Artisanal Gelato", img: "https://images.unsplash.com/photo-1580502304784-8bacd7bdada4?w=600&q=80", height: "h-64" },
  { id: 2, title: "Sourdough Pizza", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", height: "h-96" },
  { id: 3, title: "Cozy Interior", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80", height: "h-72" },
  { id: 4, title: "Tiramisu", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80", height: "h-64" },
  { id: 5, title: "Cappuccino Art", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", height: "h-80" },
  { id: 6, title: "Fresh Pasta", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80", height: "h-64" },
  { id: 7, title: "Cafe Ambience", img: "https://images.unsplash.com/photo-1559329007-45c4cb169b12?w=600&q=80", height: "h-72" },
  { id: 8, title: "Dessert Spread", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", height: "h-96" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Experience the <span className="text-gradient">Ambience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            A peek into our warm, aesthetic spaces and culinary creations.
          </motion.p>
        </div>

        <div className="masonry-grid">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
              className={`masonry-item relative group rounded-3xl overflow-hidden cursor-pointer ${item.height}`}
              onClick={() => setSelected(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-5">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-white">
                    <ZoomIn className="w-5 h-5" />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={selected.img} alt={selected.title} className="w-full max-h-[80vh] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-display font-bold">{selected.title}</h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}