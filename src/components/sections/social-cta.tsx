"use client";

import { Facebook, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/nutriekspert", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/in/nikolatalan", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/nutriekspert", label: "Instagram" },
];

export default function SocialCta() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary/40 to-background-primary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Ostani </span>
            <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
              U Kontaktu
            </span>
          </h2>
          <p className="text-xl text-silver-light mb-12 max-w-2xl mx-auto">
            Prati me na društvenim mrežama za dnevne savjete o prehrani, 
            zdravlju i wellness-u
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-16 h-16 bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 backdrop-blur-xl border border-gold/30 rounded-2xl flex items-center justify-center hover:border-gold hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-7 h-7 text-silver group-hover:text-gold transition-colors duration-300" />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold to-copper opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}