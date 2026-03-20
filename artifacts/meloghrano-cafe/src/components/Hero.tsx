import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Star, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Floating particle
function Particle({ style }: { style: React.CSSProperties }) {
  return <div className="absolute rounded-full pointer-events-none" style={style} />;
}

// Animated 3D food visual using CSS transforms
function AnimatedFoodVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setMouse({
        x: ((e.clientX - cx) / rect.width) * 30,
        y: ((e.clientY - cy) / rect.height) * -30,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Main rotating plate */}
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          transform: `perspective(800px) rotateX(${mouse.y * 0.3}deg) rotateY(${mouse.x * 0.3}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* Outer glow ring */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -m-12"
        />

        {/* Main gelato cone */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          {/* Cone shape via CSS */}
          <div className="flex flex-col items-center">
            {/* Top scoop (red) */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#E26D5C] via-[#d05545] to-[#be4030] shadow-2xl relative overflow-hidden flex items-center justify-center text-5xl -mb-4 z-20">
              <div className="absolute top-2 left-4 w-6 h-6 rounded-full bg-white/25" />
              <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-white/15" />
              🍓
            </div>
            {/* Bottom scoop (green) */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#8BA888] via-[#7a9e77] to-[#6a8d65] shadow-2xl relative overflow-hidden flex items-center justify-center text-6xl z-10">
              <div className="absolute top-3 left-5 w-8 h-8 rounded-full bg-white/20" />
              <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-white/10" />
              🍦
            </div>
            {/* Cone */}
            <div
              className="w-0 h-0 z-30 -mt-2"
              style={{
                borderLeft: "50px solid transparent",
                borderRight: "50px solid transparent",
                borderTop: "90px solid #D2A679",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Orbiting items */}
      {[
        { emoji: "🍕", color: "#E26D5C", size: 64, orbit: 180, speed: 12, delay: 0 },
        { emoji: "🍝", color: "#8BA888", size: 56, orbit: 200, speed: 15, delay: -5 },
        { emoji: "☕", color: "#D2A679", size: 48, orbit: 160, speed: 10, delay: -3 },
        { emoji: "🍰", color: "#F4A261", size: 52, orbit: 220, speed: 18, delay: -7 },
      ].map((item, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: item.speed, repeat: Infinity, ease: "linear", delay: item.delay }}
          className="absolute inset-0 flex items-start justify-center"
          style={{ transformOrigin: "center center" }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: item.speed, repeat: Infinity, ease: "linear", delay: item.delay }}
            className="rounded-full flex items-center justify-center text-2xl shadow-xl"
            style={{
              width: item.size,
              height: item.size,
              backgroundColor: item.color + "33",
              border: `2px solid ${item.color}66`,
              marginTop: -item.orbit / 2,
              backdropFilter: "blur(8px)",
            }}
          >
            {item.emoji}
          </motion.div>
        </motion.div>
      ))}

      {/* Floating sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: ["#E26D5C", "#8BA888", "#F4A261", "#D2A679"][i % 4],
            left: `${10 + (i * 7) % 80}%`,
            top: `${5 + (i * 13) % 90}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 2 + (i * 0.3),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
    >
      {/* Animated multi-gradient background */}
      <div
        className="absolute inset-0 -z-20 animate-gradient"
        style={{
          background: "linear-gradient(135deg, hsl(40 50% 98%), hsl(3 72% 95%), hsl(40 50% 97%), hsl(114 18% 93%), hsl(16 88% 96%))",
        }}
      />

      {/* Floating background particles */}
      {[
        { width: 320, height: 320, top: "10%", left: "5%", color: "rgba(226,109,92,0.08)", blur: "80px", duration: "8s", delay: "0s" },
        { width: 400, height: 400, top: "60%", right: "5%", color: "rgba(139,168,136,0.08)", blur: "100px", duration: "10s", delay: "-3s" },
        { width: 250, height: 250, bottom: "10%", left: "20%", color: "rgba(244,162,97,0.08)", blur: "60px", duration: "7s", delay: "-5s" },
        { width: 200, height: 200, top: "30%", right: "30%", color: "rgba(210,166,121,0.06)", blur: "50px", duration: "9s", delay: "-2s" },
      ].map((p, i) => (
        <Particle
          key={i}
          style={{
            width: p.width,
            height: p.height,
            top: p.top,
            left: (p as any).left,
            right: (p as any).right,
            bottom: (p as any).bottom,
            backgroundColor: p.color,
            filter: `blur(${p.blur})`,
            ["--duration" as any]: p.duration,
            ["--delay" as any]: p.delay,
            zIndex: -1,
          } as React.CSSProperties}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16">

        {/* Text Side */}
        <div className="text-center lg:text-left z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 glass border border-primary/20"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-foreground">Bangalore's Premier Veg Italian</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] text-foreground mb-6"
          >
            Pure Veg{" "}
            <span className="text-gradient italic">Italian</span>
            <br />
            Indulgence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Handcrafted artisanal gelato, authentic sourdough pizzas & cozy aesthetic vibes right in the heart of Banashankari.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <a
              href="#reservation"
              className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg pulse-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-primary/30"
            >
              Reserve Table
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </a>
            <a
              href="#menu"
              className="px-8 py-4 rounded-full glass border-2 border-primary/20 text-foreground font-semibold text-lg hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-6 justify-center lg:justify-start"
          >
            {[
              { number: "600+", label: "Happy Reviews" },
              { number: "4.8★", label: "Google Rating" },
              { number: "50+", label: "Italian Dishes" },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-2xl font-display font-bold text-primary">{stat.number}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[300px] sm:h-[400px] lg:h-[580px] w-full relative"
        >
          <AnimatedFoodVisual />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}