import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Star, IceCream, Pizza } from "lucide-react";
import { useRef, useState, Suspense } from "react";
import * as THREE from "three";

function GelatoModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={groupRef} position={[0, -0.5, 0]} scale={1.2}>
        <mesh position={[0, -1.2, 0]}>
          <coneGeometry args={[1, 2.5, 32]} />
          <meshStandardMaterial color="#D2A679" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[1.05, 32, 32]} />
          <meshStandardMaterial color="#8BA888" roughness={0.3} />
        </mesh>
        <mesh position={[0.2, 1.4, -0.2]} rotation={[0.2, 0, 0.1]}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial color="#E26D5C" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.0, 0.15, 16, 32]} />
          <meshStandardMaterial color="#4A3B32" roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

function ThreeDScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFFBF5" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#E26D5C" />
      <Suspense fallback={null}>
        <GelatoModel />
        <Stars radius={20} depth={50} count={500} factor={4} saturation={0.5} fade speed={1} />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}

function GelatoFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#8BA888] to-[#6a9168] shadow-2xl shadow-green-300/40 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-white/20 rounded-t-full" />
            <IceCream className="w-20 h-20 text-white drop-shadow-lg" />
          </div>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#E26D5C] to-[#c45240] shadow-xl shadow-red-300/40 flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-white/20 rounded-t-full" />
            <Pizza className="w-14 h-14 text-white drop-shadow-lg" />
          </div>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-16 -right-16 w-24 h-24 rounded-full bg-gradient-to-br from-[#F4A261] to-[#e8893d] shadow-lg opacity-80 flex items-center justify-center text-3xl"
        >
          🍕
        </motion.div>
        <motion.div
          animate={{ scale: [1.05, 1, 1.05] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute -bottom-8 -left-16 w-20 h-20 rounded-full bg-gradient-to-br from-[#8BA888] to-[#6a9168] shadow-lg opacity-80 flex items-center justify-center text-2xl"
        >
          🍝
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute top-8 -left-20 w-16 h-16 rounded-full bg-gradient-to-br from-[#D2A679] to-[#b8864d] shadow-lg opacity-80 flex items-center justify-center text-xl"
        >
          🍦
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-4 -right-12 w-14 h-14 rounded-full bg-gradient-to-br from-[#E26D5C] to-[#c45240] shadow-lg opacity-70 flex items-center justify-center text-xl"
        >
          ☕
        </motion.div>
      </div>
    </div>
  );
}

class WebGLErrorBoundary extends Error {}

function ThreeDCanvasWithFallback() {
  const [webglFailed, setWebglFailed] = useState(false);

  if (webglFailed) {
    return <GelatoFallback />;
  }

  return (
    <div className="w-full h-full" onError={() => setWebglFailed(true)}>
      <div className="w-full h-full" style={{ position: 'relative' }}>
        {(() => {
          try {
            return <ThreeDScene />;
          } catch {
            return <GelatoFallback />;
          }
        })()}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 pb-16 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-primary/5 -z-20" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] -z-10" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="pt-12 lg:pt-0 z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
          >
            <Star className="w-4 h-4 fill-primary" />
            <span>Bangalore's Premier Veg Italian</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-foreground mb-6"
          >
            Pure Veg <span className="text-primary italic">Italian</span> <br />
            Indulgence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Handcrafted artisanal gelato, authentic sourdough pizzas, and cozy aesthetic vibes right in the heart of Banashankari.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="#reservation"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Reserve Table
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-background border-2 border-primary/20 text-foreground font-semibold text-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explore Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 justify-center lg:justify-start"
          >
            <div className="flex -space-x-3">
              {["#E26D5C", "#8BA888", "#F4A261", "#D2A679"].map((color, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: color }}>
                  {["A", "R", "S", "M"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">4.6</strong> from 600+ reviews</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[420px] lg:h-[560px] w-full relative"
        >
          <GelatoFallback />
        </motion.div>
      </div>
    </section>
  );
}
