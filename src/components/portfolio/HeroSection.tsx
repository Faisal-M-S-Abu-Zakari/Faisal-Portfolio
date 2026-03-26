import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex justify-center items-center min-h-screen overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="top-1/4 -left-32 absolute bg-primary/5 blur-3xl rounded-full w-96 h-96" />
      <div className="-right-32 bottom-1/4 absolute bg-primary/8 blur-3xl rounded-full w-96 h-96 animate-pulse-glow" />

      <div className="z-10 relative px-4 text-center container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 mb-8 px-4 py-1.5 border border-primary/20 rounded-full font-medium text-primary text-sm">
            <span className="bg-primary rounded-full w-2 h-2 animate-pulse-glow" />
            Available for new projects
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mx-auto max-w-4xl font-display font-bold text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight"
        >
          I build scalable <span className="text-gradient">full-stack</span> web
          applications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed"
        >
          MERN Stack Developer specializing in building performant, user-centric
          web applications with clean architecture and modern design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex sm:flex-row flex-col justify-center items-center gap-4 mt-10"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="bg-primary hover:opacity-90 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] px-8 py-3.5 rounded-lg font-display font-semibold text-primary-foreground transition-all"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="hover:bg-secondary px-8 py-3.5 border border-border rounded-lg font-display font-medium text-foreground transition-colors"
          >
            Hire Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center items-center gap-5 mt-10"
        >
          {[
            { icon: Github, href: "https://github.com/Faisal-M-S-Abu-Zakari" },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/faisal-zakari",
            },
            { icon: Mail, href: "mailto:zkryfysl@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center border border-border hover:border-primary/50 rounded-full w-10 h-10 text-muted-foreground hover:text-primary transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bottom-10 left-1/2 absolute -translate-x-1/2"
        >
          <button
            onClick={() => scrollTo("#about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
