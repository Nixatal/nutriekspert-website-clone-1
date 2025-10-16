"use client";

import { FileText, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

const QuickWins = () => {
  return (
    <section className="bg-gradient-to-br from-background-secondary via-card-background to-background-secondary py-20 border-y border-emerald/20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tri načina da{" "}
            <span className="bg-gradient-to-r from-gold via-gold-light to-emerald-light bg-clip-text text-transparent">
              započnete danas
            </span>
          </h2>
          <p className="text-xl text-silver-light">
            Odaberite način koji vam najviše odgovara - sve je besplatno!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Upitnik - PRIMARY */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-copper rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-card-background to-[#1a2d24] rounded-2xl p-8 border-2 border-gold/50 hover:border-gold transition-all duration-300 shadow-2xl hover:scale-105">
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-gold to-copper rounded-full text-xs font-bold text-background-primary shadow-lg animate-pulse">
                PREPORUČENO
              </div>
              
              <div className="p-4 bg-gradient-to-br from-gold/20 to-copper/20 rounded-2xl w-fit mx-auto mb-6 border border-gold/40">
                <Sparkles className="w-10 h-10 text-gold" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                Besplatni Upitnik
              </h3>
              
              <p className="text-silver-light text-center mb-6 leading-relaxed">
                Otkrijte nedostatke vitamina i minerala u samo 2 minute. Instant personalizirani rezultati!
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-silver-light">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Brza procjena (2 min)
                </li>
                <li className="flex items-center gap-2 text-sm text-silver-light">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Trenutni rezultati
                </li>
                <li className="flex items-center gap-2 text-sm text-silver-light">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Bez registracije
                </li>
              </ul>
              
              <Link
                href="/vitamin-quiz"
                className="block w-full py-3 bg-gradient-to-r from-gold via-gold-light to-copper rounded-xl text-background-primary font-bold text-center hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Započni Upitnik →
              </Link>
            </div>
          </div>

          {/* Konzultacije */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald to-emerald-dark rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-card-background to-[#1a2d24] rounded-2xl p-8 border border-emerald/30 hover:border-emerald/60 transition-all duration-300 shadow-xl hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-emerald/20 to-emerald-dark/20 rounded-2xl w-fit mx-auto mb-6 border border-emerald/40">
                <Calendar className="w-10 h-10 text-emerald-light" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                Besplatna Konzultacija
              </h3>
              
              <p className="text-silver-light text-center mb-6 leading-relaxed">
                30 minuta razgovora s nutricionistom. Dobijte personalizirane savjete za vaše potrebe.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-silver-light">
                  <div className="w-1.5 h-1.5 bg-emerald-light rounded-full" />
                  30 min razgovora
                </li>
                <li className="flex items-center gap-2 text-sm text-silver-light">
                  <div className="w-1.5 h-1.5 bg-emerald-light rounded-full" />
                  Stručni savjeti
                </li>
                <li className="flex items-center gap-2 text-sm text-silver-light">
                  <div className="w-1.5 h-1.5 bg-emerald-light rounded-full" />
                  Bez obveza
                </li>
              </ul>
              
              <Link
                href="/contact"
                className="block w-full py-3 bg-gradient-to-r from-emerald to-emerald-light rounded-xl text-white font-semibold text-center hover:scale-105 transition-all duration-300 shadow-lg border border-emerald/50"
              >
                Zakaži Konzultaciju
              </Link>
            </div>
          </div>

          {/* Vodič */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-silver to-platinum rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-card-background to-[#1a2d24] rounded-2xl p-8 border border-silver/20 hover:border-silver/40 transition-all duration-300 shadow-xl hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-silver/10 to-platinum/10 rounded-2xl w-fit mx-auto mb-6 border border-silver/30">
                <FileText className="w-10 h-10 text-silver-light" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                Besplatni Vodič
              </h3>
              
              <p className="text-silver-light text-center mb-6 leading-relaxed">
                Preuzmite naš stručni vodič za optimalno zdravlje i poboljšanje energije.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-silver-light">
                  <div className="w-1.5 h-1.5 bg-silver-light rounded-full" />
                  Praktični savjeti
                </li>
                <li className="flex items-center gap-2 text-sm text-silver-light">
                  <div className="w-1.5 h-1.5 bg-silver-light rounded-full" />
                  Odmah dostupno
                </li>
                <li className="flex items-center gap-2 text-sm text-silver-light">
                  <div className="w-1.5 h-1.5 bg-silver-light rounded-full" />
                  Bez troškova
                </li>
              </ul>
              
              <Link
                href="/resources"
                className="block w-full py-3 bg-gradient-to-r from-silver/20 to-platinum/20 rounded-xl text-silver-light font-semibold text-center hover:scale-105 transition-all duration-300 shadow-lg border border-silver/40 hover:bg-silver/10"
              >
                Preuzmi Vodič
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickWins;