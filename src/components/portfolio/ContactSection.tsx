import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:faisal@example.com?subject=Project Inquiry from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's build something{" "}
            <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Have a project in mind or looking for a developer? I'd love to hear from you.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>

            {/* Info */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-6 hover:glow-border transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:faisal@example.com" className="text-foreground font-medium hover:text-primary transition-colors">
                      faisal@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6 hover:glow-border transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Remote — Available Worldwide</p>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-6 hover:glow-border transition-all duration-300 flex items-center justify-between group"
              >
                <div>
                  <p className="text-foreground font-display font-semibold">Check out my GitHub</p>
                  <p className="text-sm text-muted-foreground">See all my open-source work</p>
                </div>
                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
