import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Find Us
          </h2>
          <p className="text-muted-foreground">Come say hello. We'd love to host you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden rounded-[2.5rem] bg-card border border-border shadow-xl">
          
          {/* Info Side */}
          <div className="p-8 md:p-12 lg:pr-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Meloghrano Cafe</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    42, 8th Main Road, Banashankari 2nd Stage,<br/>
                    Bangalore - 560070
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-secondary/10 rounded-xl shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Opening Hours</h4>
                  <p className="text-muted-foreground">Mon-Sun: 11:00 AM - 10:30 PM</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 80 4567 8901</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-muted rounded-xl shrink-0">
                  <Mail className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@meloghranocafe.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-[400px] lg:h-auto min-h-[400px] relative bg-muted">
            <iframe 
              src="https://maps.google.com/maps?q=Banashankari,+Bangalore&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Meloghrano Cafe Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
