import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function SiteFooter() {
  const links = [
    {
      href: "https://github.com/KristianElde",
      label: "GitHub",
      icon: <FaGithub className="h-6 w-6" />,
    },
    {
      href: "https://linkedin.com/in/kristian-elde-johansen",
      label: "LinkedIn",
      icon: <FaLinkedin className="h-6 w-6" />,
    },
    {
      href: "mailto:kristian.elde.johansen@gmail.com",
      label: "Email",
      icon: <MdEmail className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="-mx-5 -mb-5 mt-20 border-t border-border/20 bg-background-shade px-5 pb-6 pt-12 text-foreground transition-colors duration-500">
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.label}
            className="grid h-11 w-11 place-items-center rounded-full border border-border/30 bg-background text-foreground shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
