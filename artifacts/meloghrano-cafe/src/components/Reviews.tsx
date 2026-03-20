import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya S.",
    text: "The best sourdough pizza in Bangalore! The ambience is absolutely stunning and the Lotus Biscoff Gelato is to die for.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Rahul M.",
    text: "Finally a pure veg place that gets authentic Italian right. The pesto pasta was fresh, and the staff is incredibly polite.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Ananya D.",
    text: "Such a cozy cafe. Came here for a date and the pastel aesthetic made for perfect pictures. The hot chocolate is thick and rich.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Vikram R.",
    text: "Impeccable quality. You can tell they use fresh ingredients. The truffle mushroom pizza blew my mind.",
    date: "2 months ago"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          What Our Guests Say
        </h2>
        <div className="flex items-center justify-center gap-2 mb-12 bg-background/50 inline-flex mx-auto px-6 py-2 rounded-full border border-border">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="font-semibold text-foreground">4.8</span>
          <span className="text-muted-foreground text-sm">from 600+ reviews</span>
        </div>

        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <Quote className="w-12 h-12 text-primary/20 mb-4" />
              <p className="text-xl md:text-2xl font-display italic text-foreground mb-6 max-w-2xl">
                "{reviews[currentIndex].text}"
              </p>
              <div>
                <p className="font-bold text-foreground">{reviews[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{reviews[currentIndex].date}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-primary w-8" : "bg-primary/20"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
