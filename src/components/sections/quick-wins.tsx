"use client";

import { Download, Calendar, Mail } from "lucide-react";

const quickWins = [
  {
    icon: Download,
    title: "Besplatni E-Vodič",
    description: "Preuzmi moj vodič s praktičnim savjetima za optimizaciju prehrane i energije.",
    cta: "Preuzmi Vodič",
    color: "from-gold to-copper",
  },
  {
    icon: Calendar,
    title: "Besplatna Konzultacija",
    description: "Zakaži 30-minutni razgovor gdje ćemo razgovarati o tvojim ciljevima.",
    cta: "Zakaži Termin",
    color: "from-copper to-gold-light",
  },
  {
    icon: Mail,
    title: "Newsletter",
    description: "Pretplati se i primi tjedne savjete o prehrani i zdravlju u svoj inbox.",
    cta: "Pretplati Se",
    color: "from-gold-light to-gold",
  },
];

export default function QuickWins() {
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickWins.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-background-secondary/40 to-background-secondary/20 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 hover:border-gold/40 transition-all duration-500 hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-silver-light text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <button className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300`}>
                  {item.cta} →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}