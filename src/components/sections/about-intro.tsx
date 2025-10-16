"use client";

import { Award, BookOpen, Users, FileText, Building, GraduationCap } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Zadovoljnih klijenata", color: "from-gold to-copper" },
  { icon: FileText, value: "100+", label: "Stručnih članaka", color: "from-copper to-gold" },
  { icon: Award, value: "50+", label: "Održanih edukacija", color: "from-gold to-copper" },
  { icon: BookOpen, value: "1,000+", label: "Planova prehrane", color: "from-copper to-gold-light" },
  { icon: Building, value: "8+", label: "Projekata s Industrijom", color: "from-gold to-copper" },
  { icon: GraduationCap, value: "6+", label: "Završenih tečajeva", color: "from-copper to-gold" },
];

export default function AboutIntro() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-copper/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-copper/20 border border-gold/30 backdrop-blur-sm mb-6">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">O Meni</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Bok, moje ime je </span>
              <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
                Nikola Talan
              </span>
            </h2>
            <p className="text-xl text-silver-light max-w-3xl mx-auto leading-relaxed">
              Diplomirao sam prehrambenu tehnologiju i nutritivnu znanost na Prehrambeno-biotehnološkom 
              fakultetu u Zagrebu. Kao Master nutricionizma, posvećen sam pomaganju ljudima da postignu 
              svoje zdravstvene ciljeve kroz individualizirane nutricionističke programe.
            </p>
          </div>

          {/* Stats Grid with Premium Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-background-secondary/60 to-background-secondary/40 backdrop-blur-xl border border-gold/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold/20"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className={`text-5xl font-extrabold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-silver-light font-medium">
                    {stat.label}
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-copper/0 group-hover:from-gold/5 group-hover:to-copper/5 transition-all duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-gold via-copper to-gold-light text-background-primary font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/50 text-lg">
              <span className="relative z-10">Saznaj više o meni</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}