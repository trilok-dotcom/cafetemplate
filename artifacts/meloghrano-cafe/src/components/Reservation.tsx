import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Reservation() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    requests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Table Reserved Successfully! 🎉",
        description: `We look forward to hosting you on ${formData.date} at ${formData.time}.`,
      });
      setFormData({ name: "", phone: "", date: "", time: "19:00", guests: "2", requests: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate time slots
  const timeSlots = [];
  for (let i = 11; i <= 22; i++) {
    timeSlots.push(`${i}:00`);
    if (i !== 22) timeSlots.push(`${i}:30`);
  }

  return (
    <section id="reservation" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10"><img src="https://images.unsplash.com/photo-1559329007-45c4cb169b12?w=1200&q=60" alt="" className="w-full h-full object-cover opacity-20" /><div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-secondary/20" /></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-white/30"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Reserve Your Table
            </h2>
            <p className="text-muted-foreground">Book ahead to ensure a seamless dining experience.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-background/80 backdrop-blur-sm border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-background/80 backdrop-blur-sm border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Date
                </label>
                <input 
                  required
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background/80 backdrop-blur-sm border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground ml-1 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Time
                  </label>
                  <select 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background/80 backdrop-blur-sm border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none"
                  >
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground ml-1 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Guests
                  </label>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background/80 backdrop-blur-sm border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground ml-1">Special Requests (Optional)</label>
              <textarea 
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                placeholder="Anniversary, allergies, preferred seating..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-background/80 backdrop-blur-sm border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 hover:shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                </>
              ) : "Reserve Your Spot"}
            </button>
          </form>

        </motion.div>
      </div>
    </section>
  );
}