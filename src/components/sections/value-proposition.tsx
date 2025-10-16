"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

const problems = [
  "Osjećate umor i nedostatak energije?",
  "Zbunjeni ste raznim savjetima o prehrani?",
  "Trebate vam individualni pristup?",
];

const solutions = [
  "Znanstveno utemeljeni planovi prehrane",
  "Detaljna analiza vaših potreba",
  "Kontinuirana podrška i prilagodba",
  "Rezultati koji se održavaju dugoročno",
];

const ValueProposition = () => {
  return (
    <section className="bg-background-secondary py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full">
              <span className="text-amber-400 font-semibold text-sm">MOŽDA VAM TREBA POMOĆ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Suočavate li se s izazovima u prehrani?
            </h2>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-silver-light">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-silver/10 border border-silver/30 rounded-full">
              <span className="text-silver-light font-semibold text-sm">OVDJE SMO DA POMOGNEMO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Zajedno ćemo razviti{" "}
              <span className="bg-gradient-to-r from-silver via-silver-light to-platinum bg-clip-text text-transparent">
                plan koji odgovara vama
              </span>
            </h2>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-silver-light flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-medium">{solution}</p>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-background-primary text-lg font-bold bg-gradient-to-r from-silver via-silver-light to-platinum rounded-xl hover:brightness-110 transition shadow-lg shadow-silver/20"
              >
                Razgovarajmo - Besplatna Konzultacija
              </Link>
              <p className="mt-3 text-sm text-silver-light">
                ✓ Bez obveza • 30 minuta • Personalizirani savjeti
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;