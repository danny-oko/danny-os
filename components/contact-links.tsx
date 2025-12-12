import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

interface ContactLinksProps {
  className?: string;
}

export function ContactLinks({ className }: ContactLinksProps) {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "danny.otgontsetseg@gmai.com",
      href: "mailto:danny.otgontsetseg@gmai.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+976 80296007",
      href: "tel:+97680296007",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@danny-oko",
      href: "https://github.com/danny-oko",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@dnii_d",
      href: "https://www.instagram.com/dnii_d/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "dnii.dnii.0412",
      href: "https://www.facebook.com/dnii.dnii.0412",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Danny Otgontsetseg",
      href: "https://www.linkedin.com/in/danny-otgontsetseg-baaa67260/",
    },
  ];

  return (
    <div className={className}>
      <div className="space-y-3">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <Icon
                className="w-5 h-5 text-gray-800 dark:text-emerald-600 group-hover:text-gray-900 dark:group-hover:text-emerald-700"
                strokeWidth={2}
              />
              <div>
                <div className="font-medium text-gray-900 dark:text-foreground">
                  {link.label}
                </div>
                <div className="text-sm text-gray-700 dark:text-muted-foreground">
                  {link.value}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
