import { Leaf, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-3xl tracking-wider">
                Meloghrano
              </span>
            </a>
            <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
              Pure veg Italian indulgence. Handcrafted gelato, sourdough pizzas, and aesthetic vibes in Banashankari.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#menu" className="hover:text-primary transition-colors">Our Menu</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#reservation" className="hover:text-primary transition-colors">Reservations</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Allergen Info</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Meloghrano Cafe. All rights reserved.</p>
          <p>Made with <span className="text-primary">❤</span> in Bangalore</p>
        </div>
      </div>
    </footer>
  );
}
