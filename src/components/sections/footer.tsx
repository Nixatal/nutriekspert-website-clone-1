"use client";

import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/nutriekspert" },
  { icon: Instagram, href: "https://instagram.com/nutriekspert" },
  { icon: Linkedin, href: "https://linkedin.com/in/nikolatalan" },
];

export default function Footer() {
  return (
    <footer className="relative bg-background-secondary/50 border-t border-gold/10">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/cropped-transparent-logo-13.png"
                alt="NutriEkspert"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">NutriEkspert</span>
            </div>
            <p className="text-silver-light text-sm leading-relaxed">
              Posljednji plan prehrane koji ćeš ikada trebati. Znanstveni pristup. 
              Individualni planovi. Vrhunski rezultati.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-copper/20 border border-gold/30 flex items-center justify-center hover:border-gold hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-gold" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Business Info Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-gold to-copper rounded-full" />
              Podaci o Obrtu
            </h3>
            <div className="space-y-4 text-silver-light text-sm">
              <div>
                <div className="font-semibold text-white mb-1">Nutriekspert</div>
                <div>Obrt za nutricionizam</div>
                <div>Vl. Nikola Talan</div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  Ulica Josipa Broza 66<br />
                  Ivanovec, Hrvatska
                </div>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-gold to-copper rounded-full" />
              Kontakt
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-copper/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <a
                  href="mailto:nikola@nutriekspert.com"
                  className="text-silver-light hover:text-white transition-colors duration-300 text-sm"
                >
                  nikola@nutriekspert.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-copper/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <a
                  href="tel:+385919496590"
                  className="text-silver-light hover:text-white transition-colors duration-300 text-sm"
                >
                  +385 91 949 6590
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-silver">
            <p>
              Copyright © {new Date().getFullYear()} NutriEkspert | Powered by NutriEkspert™
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">
                Privatnost
              </a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">
                Uvjeti
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}