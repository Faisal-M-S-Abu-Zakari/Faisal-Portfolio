import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Shop Store — eCommerce Platform",
    category: "Full-Stack",
    problem:
      "A complete MERN stack eCommerce platform enabling businesses to sell online with secure payments, real-time inventory, and smooth shopping experience.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    features: [
      "User authentication & role-based access",
      "Product catalog with search & filters",
      "Shopping cart & Stripe checkout",
      "Responsive modern UI",
    ],
    live: "https://ella-e-commerce-frontend.vercel.app",
    github:
      "https://github.com/Faisal-M-S-Abu-Zakari/Ella-E-commerce/tree/main/frontend",
    featured: true,
  },
  {
    title: "Shop Store — Admin Dashboard",
    category: "Full-Stack",
    problem:
      "Admin dashboard for the Shop Store eCommerce platform, providing analytics, inventory management, and user/order control in a secure Full-Stack environment.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
    features: [
      "Admin authentication & role-based access",
      "View and manage orders, products, and users",
      "Analytics dashboard with charts & reports",
      "Secure access with JWT",
      "Real-time inventory updates",
    ],
    live: "https://ella-e-commerce-admin.vercel.app/",
    github:
      "https://github.com/Faisal-M-S-Abu-Zakari/Ella-E-commerce/tree/main/admin",
    featured: true,
  },
  {
    title: "Phoenix — Movie Discovery Platform",
    category: "Frontend",
    problem:
      "A modern movie discovery platform using TMDB API, allowing users to explore trending movies & TV shows with detailed info and smooth UX. Frontend-focused project highlighting API integration and responsive design.",
    stack: ["React", "Next.js", "TMDB API", "Tailwind CSS"],
    features: [
      "Browse trending movies and TV shows",
      "Detailed movie pages (ratings, overview, release date)",
      "Search functionality",
      "Responsive modern UI",
      "Fast loading with optimized API calls",
    ],
    live: "https://phoenix-app-ebon.vercel.app/",
    github: "https://github.com/Faisal-M-S-Abu-Zakari/Phoenix-App",
    featured: true,
  },
  {
    title: "HRXEL Landing Page",
    category: "Frontend",
    problem:
      "A Saudi consulting firm landing page focusing on human capital, governance, and supply chain excellence, built with modern UI practices.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Pixel-perfect responsive design",
      "Smooth scroll animations",
      "Contact form integration",
      "SEO optimized with meta tags",
    ],
    live: "https://www.hrxel.com/",
    github: "https://github.com/Faisal-M-S-Abu-Zakari/Hrxel",
    featured: true,
  },
  {
    title: "Luxury Gym Management System (Fit-Hub)",
    category: "Full-Stack SaaS Application",
    problem:
      "Developed a premium, dark-themed gym management CRM and member portal to streamline subscription tracking, payments, and user authentication for modern fitness centers.",
    stack: [
      "React (Vite)",
      "Supabase",
      "Tailwind CSS",
      "Shadcn UI",
      "React Query",
    ],
    features: [
      "Interactive Admin Dashboard for Comprehensive Member & Subscription Management",
      "Secure Multi-role Authentication System (Admin vs. Gym Member)",
      "Dynamic Member Portal featuring Virtual Membership Cards (QR-enabled)",
      "Bilingual Landing Page (AR/EN) with Integrated Payment Guidelines",
    ],
    live: "https://fit-hub-global.vercel.app/",
    github: "https://github.com/Faisal-M-S-Abu-Zakari/fit-hub-global",
    featured: true,
  },
];

const filters = ["All", "Full-Stack", "Frontend"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28">
      <div className="px-4 container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 font-medium text-primary text-sm uppercase tracking-wider">
            Projects
          </p>
          <h2 className="mb-4 font-display font-bold text-3xl md:text-4xl">
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

          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group hover:glow-border rounded-xl overflow-hidden transition-all duration-500 glass"
              >
                {/* Card header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers size={16} className="text-primary" />
                    <span className="font-medium text-primary text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="bg-primary/10 ml-auto px-2 py-0.5 rounded-full text-[10px] text-primary">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-gradient text-lg transition-all">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Features */}
                <div className="px-6 pt-4">
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-muted-foreground text-xs"
                      >
                        <span className="bg-primary mt-1.5 rounded-full w-1 h-1 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 px-6 pt-4">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="bg-secondary px-2.5 py-1 rounded-md text-[11px] text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-2 p-6">
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-primary text-sm hover:underline"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm transition-colors"
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
