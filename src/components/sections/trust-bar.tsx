"use client";

import { Award, Shield, Users, Star } from "lucide-react";

const trustItems = [
  { icon: Award, text: "Master Nutricionizma" },
  { icon: Shield, text: "Znanstveni Pristup" },
  { icon: Users, text: "200+ Klijenata" },
  { icon: Star, text: "8+ God. Iskustva" },
];

export default function TrustBar() {
  return (
    <section className="relative py-12 border-y border-gold/10">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-copper/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-silver font-medium group-hover:text-white transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}