import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Favorites from "@/components/Favorites";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <Favorites />
      <Menu />
      <Reviews />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />

      {/* Sticky Reserve Table button — mobile only */}
      <div className="mobile-cta">
        <a
          href="#reservation"
          className="w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-bold text-base text-center shadow-lg shadow-primary/30 pulse-glow"
        >
          Reserve a Table
        </a>
      </div>
    </main>
  );
}
