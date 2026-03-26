import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-border/50 border-t">
    <div className="flex sm:flex-row flex-col justify-between items-center gap-4 px-4 container">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Faisal Abu Zakari. All rights reserved.
      </p>
      <div className="flex gap-4">
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
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
