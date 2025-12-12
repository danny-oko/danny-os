"use client";

import {
  Calendar,
  Facebook,
  Github,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { toast } from "sonner";
import { ConnectCard } from "./ConnectCard";

export function QuickConnect() {
  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`Copied ${label} to clipboard`, {
        description: text,
      });
    } catch (err) {
      toast.error(`Failed to copy ${label}`);
    }
  };

  const openLink = (url: string, label: string) => {
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (err) {
      toast.error(`Failed to open ${label}`);
    }
  };

  const openMail = () => {
    window.location.href = "mailto:danny.otgontsetseg@gmai.com";
  };

  const openPhone = () => {
    window.location.href = "tel:+97680296007";
  };

  const copyEmail = async () => {
    await copyToClipboard("danny.otgontsetseg@gmai.com", "email");
  };
  const copyPhone = async () => {
    await copyToClipboard("+976 80296007", "phone number");
  };

  return (
    <section className="grid gap-4 sm:grid-cols-2">
      <ConnectCard
        title="Email"
        hint="danny.otgontsetseg@gmai.com"
        icon={Mail}
        onClick={openMail}
        onAux={copyEmail}
        auxLabel="Copy"
      />

      <ConnectCard
        title="Phone"
        hint="+976 80296007"
        icon={Phone}
        onClick={openPhone}
        onAux={copyPhone}
        auxLabel="Copy"
      />

      <ConnectCard
        title="GitHub"
        hint="danny-oko"
        icon={Github}
        onClick={() => openLink("https://github.com/danny-oko", "GitHub")}
      />

      <ConnectCard
        title="Instagram"
        hint="@dnii_d"
        icon={Instagram}
        onClick={() =>
          openLink("https://www.instagram.com/dnii_d/", "Instagram")
        }
      />

      <ConnectCard
        title="Facebook"
        hint="dnii.dnii.0412"
        icon={Facebook}
        onClick={() =>
          openLink("https://www.facebook.com/dnii.dnii.0412", "Facebook")
        }
      />

      {/* Book a Call - only show if booking URL is configured */}
      {process.env.NEXT_PUBLIC_BOOK_URL && (
        <ConnectCard
          title="Book a Call"
          hint="Schedule 15–30 min"
          icon={Calendar}
          onClick={() => openLink(process.env.NEXT_PUBLIC_BOOK_URL!, "booking")}
        />
      )}
    </section>
  );
}
