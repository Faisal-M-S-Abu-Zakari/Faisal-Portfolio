import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Freelance MERN Stack Developer",
    company: "Self-Employed",
    period: "2023 — Present",
    points: [
      "Delivered full-stack eCommerce platform with Stripe integration for a real client",
      "Built responsive landing pages with SEO optimization and conversion-focused design",
      "Managed end-to-end project lifecycle from requirements gathering to deployment",
    ],
  },
  {
    title: "Software Engineering Graduate",
    company: "University — SE & AI",
    period: "2020 — 2024",
    points: [
      "Graduated with 88.01% GPA in Software Engineering and Artificial Intelligence",
      "Led team projects with focus on full-stack web development",
      "Deep-dived into algorithms, databases, and system design",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="text-gradient">worked</span>
          </h2>

          <div className="relative max-w-2xl">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-2.5 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />

                  <div className="glass rounded-xl p-6 hover:glow-border transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-foreground">{exp.title}</h3>
                        <div className="flex items-center gap-1.5 text-sm text-primary">
                          <Briefcase size={13} />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((p) => (
                        <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
