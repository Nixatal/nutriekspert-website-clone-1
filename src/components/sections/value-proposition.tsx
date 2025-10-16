"use client";

import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const ValueProposition = () => {
  return (
    <section className="bg-gradient-to-b from-background-primary to-background-secondary py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Možda vam{" "}
            <span className="bg-gradient-to-r from-emerald via-gold to-copper bg-clip-text text-transparent">
              treba stručna pomoć
            </span>
          </h2>
          <p className="text-xl text-silver-light max-w-3xl mx-auto">
            Suočavate li se s izazovima oko prehrane i zdravlja?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Challenges */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-silver-light mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-copper" />
              Česti Izazovi
            </h3>
            
            <div className="space-y-4">
              {[
                "Nedostatak energije i kronični umor",
                "Poteškoće s kontrolom tjelesne težine",
                "Confusing i kontradiktorni savjeti o prehrani",
                "Nezadovoljstvo trenutnim rezultatima",
                "Nedostatak personaliziranog plana",
                "Neznanje što zaista trebate vašem tijelu"
              ].map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card-background/60 rounded-xl border border-copper/20 hover:border-copper/40 transition-all duration-300">
                  <XCircle className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                  <span className="text-silver-light">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-light" />
              Naša Rješenja
            </h3>
            
            <div className="space-y-4">
              {[
                "Individualan plan temeljen na vašim potrebama",
                "Znanstveno podržani pristup prehrani",
                "Jasne i praktične preporuke",
                "Kontinuirana stručna podrška",
                "Dugoročni održivi rezultati",
                "Procjena vitamina i minerala s upitnikom"
              ].map((solution, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-br from-emerald/10 to-gold/5 rounded-xl border border-emerald/30 hover:border-gold/40 transition-all duration-300 hover:scale-105">
                  <CheckCircle2 className="w-5 h-5 text-emerald-light flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald to-emerald-light rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl shadow-emerald/30"
          >
            Zakaži Besplatnu Konzultaciju
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-silver-light text-sm">
            Bez obveza • 30 minuta razgovora • Personalizirani savjeti
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;