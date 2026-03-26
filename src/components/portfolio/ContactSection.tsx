import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0nr0ofv", // service ID من EmailJS
        "template_dq3xiav", // template ID من EmailJS
        form,
        "BJlpoQrCku1yUSSsH", // user ID من EmailJS
      )
      .then(
        () => {
          toast({
            title: "Message sent successfully!",
            description:
              "Thank you for your inquiry. I'll get back to you soon.",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (err) => {
          toast({
            title: "Failed to send message",
            description: "Please try again or contact me directly.",
            variant: "destructive",
          });
          console.error(err);
        },
      );
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="px-4 container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 font-medium text-primary text-sm uppercase tracking-wider">
            Contact
          </p>
          <h2 className="mb-4 font-display font-bold text-3xl md:text-4xl">
            Let's build something{" "}
            <span className="text-gradient">together</span>
          </h2>
          <p className="mb-12 max-w-lg text-muted-foreground">
            Have a project in mind or looking for a developer? I'd love to hear
            from you.
          </p>

          <div className="gap-12 grid lg:grid-cols-2">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1.5 text-muted-foreground text-sm">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-secondary px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary w-full text-foreground placeholder:text-muted-foreground text-sm transition-all"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-muted-foreground text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-secondary px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary w-full text-foreground placeholder:text-muted-foreground text-sm transition-all"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-muted-foreground text-sm">
                  Message
                </label>
                <textarea
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  className="bg-secondary px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary w-full text-foreground placeholder:text-muted-foreground text-sm transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 bg-primary hover:opacity-90 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] px-8 py-3.5 rounded-lg font-display font-semibold text-primary-foreground transition-all"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>

            {/* Info */}
            <div className="space-y-6">
              <div className="p-6 hover:glow-border rounded-xl transition-all duration-300 glass">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a
                      href="mailto:zkryfysl@gmail.com"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      zkryfysl@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 hover:glow-border rounded-xl transition-all duration-300 glass">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="font-medium text-foreground">
                      Palestine — Gaza Strip
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/Faisal-M-S-Abu-Zakari"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-between items-center p-6 hover:glow-border rounded-xl transition-all duration-300 glass"
              >
                <div>
                  <p className="font-display font-semibold text-foreground">
                    Check out my GitHub
                  </p>
                  <p className="text-muted-foreground text-sm">
                    See all my open-source work
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
