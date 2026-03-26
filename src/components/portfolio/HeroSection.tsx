import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Available for new projects
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto"
        >
          I build scalable{" "}
          <span className="text-gradient">full-stack</span>{" "}
          web applications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          MERN Stack Developer specializing in building performant, user-centric web applications
          with clean architecture and modern design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-lg border border-border text-foreground font-display font-medium hover:bg-secondary transition-colors"
          >
            Hire Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:faisal@example.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button onClick={() => scrollTo("#about")} className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
