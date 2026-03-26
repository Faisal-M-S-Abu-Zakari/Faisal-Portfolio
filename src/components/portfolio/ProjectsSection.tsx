import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "ShopVerse — eCommerce Platform",
    category: "Full-Stack",
    problem: "Businesses need a reliable, scalable online store with secure payments and real-time inventory management.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    features: [
      "User auth & role-based access",
      "Product catalog with search & filters",
      "Shopping cart & Stripe checkout",
      "Admin dashboard with analytics",
    ],
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Client Landing Page",
    category: "Frontend",
    problem: "A local business needed a fast, responsive, SEO-optimized website to increase online presence.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Pixel-perfect responsive design",
      "Smooth scroll animations",
      "Contact form integration",
      "SEO optimized with meta tags",
    ],
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "TaskFlow — Project Manager",
    category: "Full-Stack",
    problem: "Teams needed a lightweight tool to manage tasks and collaborate without bloated software.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Real-time task updates",
      "Drag & drop kanban board",
      "Team collaboration features",
      "Notification system",
    ],
    live: "#",
    github: "#",
    featured: false,
  },
];

const filters = ["All", "Full-Stack", "Frontend"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 relative">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">work</span>
          </h2>

          <div className="flex gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-all ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass rounded-xl overflow-hidden group hover:glow-border transition-all duration-500"
              >
                {/* Card header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers size={16} className="text-primary" />
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{project.problem}</p>
                </div>

                {/* Features */}
                <div className="px-6 pt-4">
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div className="px-6 pt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="p-6 flex gap-3 mt-2">
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
