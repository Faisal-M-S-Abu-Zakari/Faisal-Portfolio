import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Faisal Abu Zakari. All rights reserved.
      </p>
      <div className="flex gap-4">
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
