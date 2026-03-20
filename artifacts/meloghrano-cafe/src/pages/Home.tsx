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
    <main className="w-full flex flex-col min-h-screen">
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
    </main>
  );
}
