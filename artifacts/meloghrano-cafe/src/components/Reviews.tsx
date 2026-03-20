import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    initial: "P",
    color: "#E26D5C",
    rating: 5,
    text: "The best sourdough pizza in Bangalore! The ambience is absolutely stunning and the Lotus Biscoff Gelato is to die for. Will visit every weekend!",
    date: "2 weeks ago",
    source: "Google",
  },
  {
    id: 2,
    name: "Rahul Menon",
    initial: "R",
    color: "#8BA888",
    rating: 5,
    text: "Finally a pure veg place that gets authentic Italian right. The pesto pasta was fresh, and the staff is incredibly polite. 10/10 recommend!",
    date: "1 month ago",
    source: "Google",
  },
  {
    id: 3,
    name: "Ananya Desai",
    initial: "A",
    color: "#F4A261",
    rating: 5,
    text: "Such a cozy cafe. Came here for a date and the pastel aesthetic made for perfect pictures. The hot chocolate is thick, rich, and absolutely divine.",
    date: "3 weeks ago",
    source: "Zomato",
  },
  {
    id: 4,
    name: "Vikram Rao",
    initial: "V",
    color: "#D2A679",
    rating: 5,
    text: "Impeccable quality. You can tell they use fresh ingredients. The truffle mushroom pizza blew my mind — never expected such depth of flavor from a veg place.",
    date: "2 months ago",
    source: "Swiggy",
  },
  {
    id: 5,
    name: "Meera Krishnan",
    initial: "M",
    color: "#E26D5C",
    rating: 5,
    text: "Discovered this gem last month and now it's my go-to spot. The tiramisu is world-class and the interiors are Instagram-worthy. Absolutely love it!",
    date: "3 weeks ago",
    source: "Google",
  },
  {
    id: 6,
    name: "Arjun Nair",
    initial: "A",
    color: "#8BA888",
    rating: 5,
    text: "Visited with family and everyone loved it. The Margherita Rustica was perfect and the gelato selection is impressive. Kids' menu is great too!",
    date: "1 month ago",
    source: "Google",
  },
];

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((p) => (p + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const visible = reviews.slice(currentPage * perPage, currentPage * perPage + perPage);

  return (
    <section id="reviews" className="py-24 bg-foreground/[0.03] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            What Our <span className="text-gradient">Guests</span> Say
          </motion.h2>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-card border border-border px-6 py-3 rounded-full shadow-lg mt-4"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-2xl text-foreground">4.8</span>
            <div className="w-px h-6 bg-border" />
            <span className="text-muted-foreground text-sm">600+ reviews</span>
          </motion.div>
        </div>

        {/* Reviews grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {visible.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Big quote */}
                <Quote className="absolute -top-2 -right-2 w-20 h-20 text-primary/5 group-hover:text-primary/10 transition-colors" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </motion.span>
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6 italic font-display">"{review.text}"</p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date} • {review.source}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => (p - 1 + totalPages) % totalPages)}
            className="w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === currentPage ? "w-8 bg-primary" : "w-2.5 bg-primary/20"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentPage((p) => (p + 1) % totalPages)}
            className="w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}