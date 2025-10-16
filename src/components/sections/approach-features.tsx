"use client";

import { Fingerprint, Dna, FileSearch, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "INDIVIDUALNOST",
    description: "Tvoje tijelo je jedinstveno. Zato koristim znanstveni pristup prilagođen isključivo tvojoj genetici, biokemiji i životnom stilu.",
    color: "from-gold to-copper",
  },
  {
    icon: Dna,
    title: "HOLISTIČKI PRISTUP",
    description: "Zdravlje je više od prehrane. Uzimam u obzir tvoj san, stres, aktivnost i mentalno zdravlje za cjelovite rezultate.",
    color: "from-copper to-gold-light",
  },
  {
    icon: FileSearch,
    title: "DETALJNA ANALIZA",
    description: "Koristim kliničke, biokemijske i genetičke testove kako bih stvorio najoptimalniji plan za tvoje zdravlje.",
    color: "from-gold-light to-gold",
  },
  {
    icon: TrendingUp,
    title: "FOKUS NA REZULTATE",
    description: "Praćenje napretka i prilagodba plana temeljem tvog feedback-a i izmjerenih rezultata. Tvoj uspjeh je moj uspjeh.",
    color: "from-gold to-copper",
  },
];

export default function ApproachFeatures() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-copper/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Moj </span>
            <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
              Pristup
            </span>
          </h2>
          <p className="text-xl text-silver-light max-w-2xl mx-auto">
            Četiri stupa mojeg rada koji te vode do trajnih rezultata
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-background-secondary/60 to-background-secondary/30 backdrop-blur-xl border border-gold/20 rounded-3xl p-10 hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold/20"
              >
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-silver-light leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div className={`mt-6 h-1 w-20 bg-gradient-to-r ${feature.color} rounded-full`} />

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}