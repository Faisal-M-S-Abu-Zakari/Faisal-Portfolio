import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Skill = { name: string; level: number };

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "Authentication", level: 82 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
      { name: "UI/UX Design", level: 78 },
      { name: "Deployment", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: Skill & { delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-300"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            My <span className="text-gradient">tech stack</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.15 }}
                className="glass rounded-xl p-6 space-y-5"
              >
                <h3 className="font-display font-semibold text-lg text-foreground">{cat.title}</h3>
                {cat.skills.map((s, si) => (
                  <SkillBar key={s.name} {...s} delay={0.3 + si * 0.1} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
