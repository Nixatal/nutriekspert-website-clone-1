"use client";

import { Target, Heart, Zap } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Jesi li spreman za promjenu?",
    description: "Prestani lutati zdravstvenim savjetima s interneta. Dobiješ personalizirani plan koji je osmišljen isključivo za tebe i tvoje jedinstvene potrebe.",
    color: "from-gold to-copper",
  },
  {
    icon: Heart,
    title: "Više energije, bolji san, manje stresa",
    description: "Klijenti prijavljuju dramatična poboljšanja energije, kvalitete sna i općeg blagostanja već nakon prvih tjedana programa.",
    color: "from-copper to-gold-light",
  },
  {
    icon: Zap,
    title: "Rezultati koji traju",
    description: "Ne radimo kratkoročne dijete koje se ne mogu održati. Fokusiram se na izgradnju zdravih navika koje će ti trajati cijeli život.",
    color: "from-gold-light to-gold",
  },
];

export default function ValueProposition() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary/20 to-background-primary" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
                Zašto Raditi Sa Mnom?
              </span>
            </h2>
            <p className="text-xl text-silver-light max-w-3xl mx-auto">
              Transformiraj svoje zdravlje uz znanstveno dokazane metode i personaliziranu podršku
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-background-secondary/40 to-background-secondary/20 backdrop-blur-xl border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-500 hover:scale-105"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-silver-light leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-copper/0 group-hover:from-gold/5 group-hover:to-copper/5 transition-all duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}