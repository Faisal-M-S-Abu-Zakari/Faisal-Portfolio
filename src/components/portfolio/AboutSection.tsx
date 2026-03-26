import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Users, Zap } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "GPA 88.01%", desc: "Software Engineering & AI" },
  { icon: Code2, label: "Full-Stack", desc: "MERN Stack Specialist" },
  { icon: Users, label: "Team Leader", desc: "Communication & discipline" },
  { icon: Zap, label: "Fast Learner", desc: "Adaptable & driven" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Turning ideas into{" "}
            <span className="text-gradient">reality</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm Faisal Abu Zakari, a Software Engineering and Artificial Intelligence graduate
                with a strong passion for building web applications that are both technically robust
                and beautifully designed. My GPA of 88.01% reflects my dedication and discipline.
              </p>
              <p>
                As a MERN Stack Developer, I specialize in creating end-to-end solutions—from
                designing intuitive user interfaces to architecting scalable backend systems with
                MongoDB, Express.js, React, and Node.js.
              </p>
              <p>
                I've delivered real-world projects including a full-featured eCommerce platform and
                client-based landing pages, always focusing on performance, clean code, and
                exceptional user experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass rounded-xl p-5 hover:glow-border transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <p className="font-display font-semibold text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
