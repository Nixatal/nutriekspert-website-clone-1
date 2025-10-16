"use client";

import { Activity, Zap, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

const VitaminQuizCta = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-dark/20 via-background-primary to-gold/10 py-24 border-y border-gold/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold/20 via-gold-light/10 to-copper/20 border border-gold/50 rounded-full mb-6 shadow-xl shadow-gold/20">
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            <span className="text-sm font-bold text-gold tracking-wide">BESPLATNA PROCJENA - PRIMARNI KORAK</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Nedostaju li vam{" "}
            <span className="bg-gradient-to-r from-gold via-gold-light to-copper bg-clip-text text-transparent">
              ključni vitamini i minerali?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-silver-light max-w-3xl mx-auto leading-relaxed">
            Otkrijte što vašem tijelu nedostaje s našim stručnim upitnikom.<br/>
            <span className="text-emerald-light font-semibold">Dobijte instant personalizirane rezultate!</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Main CTA */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-copper rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-300 animate-pulse" />
            <div className="relative bg-gradient-to-br from-card-background to-[#1a2d24] rounded-3xl p-10 border-2 border-gold/40 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-gold to-copper rounded-2xl shadow-lg">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Brza Procjena</h3>
                    <p className="text-emerald-light font-semibold">Samo 2 minute</p>
                  </div>
                </div>

                <div className="space-y-4 pl-4 border-l-4 border-emerald/50">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-white text-lg">Trenutni personalizirani rezultati</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-white text-lg">Preporuke stručnjaka za vaše potrebe</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-white text-lg">100% besplatno i bez obveza</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-white text-lg">Bez registracije potrebno</span>
                  </div>
                </div>

                <Link
                  href="/vitamin-quiz"
                  className="group/btn relative inline-block w-full mt-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-copper rounded-xl blur-lg opacity-60 group-hover/btn:opacity-100 transition-all duration-300" />
                  <div className="relative px-10 py-5 bg-gradient-to-r from-gold via-gold-light to-copper rounded-xl font-bold text-xl text-background-primary shadow-2xl transition-all duration-300 group-hover/btn:scale-105 text-center">
                    🎯 ZAPOČNI UPITNIK SADA →
                  </div>
                </Link>
                
                <p className="text-center text-silver text-sm">
                  ⚡ Pridruži se s 200+ zadovoljnih klijenata
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-card-background/80 to-[#1a2d24]/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald/20 hover:border-gold/40 transition-all duration-300 shadow-xl group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald/30 to-emerald-dark/30 rounded-xl border border-emerald/40 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-emerald-light" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-2">Prepoznajte Simptome</h4>
                  <p className="text-silver-light leading-relaxed">
                    Umor, slaba koncentracija, gubitak energije - mogu biti znakovi nedostatka vitamina i minerala
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card-background/80 to-[#1a2d24]/80 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 shadow-xl group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-gold/30 to-copper/30 rounded-xl border border-gold/40 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-2">Personalizirani Uvidi</h4>
                  <p className="text-silver-light leading-relaxed">
                    Prilagođeni savjeti temeljeni na vašim odgovorima, životnim navikama i zdravstvenim ciljevima
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card-background/80 to-[#1a2d24]/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald/20 hover:border-gold/40 transition-all duration-300 shadow-xl group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald/30 to-gold/30 rounded-xl border border-gold/40 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-7 h-7 text-gold-light" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-2">Akcijski Plan</h4>
                  <p className="text-silver-light leading-relaxed">
                    Konkretne preporuke koje možete odmah primijeniti za poboljšanje zdravlja i energije
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-emerald/10 via-gold/5 to-copper/10 rounded-xl border border-gold/30 text-center backdrop-blur-sm">
              <p className="text-silver-light text-lg italic">
                "Preko <span className="text-gold font-bold">85%</span> naših klijenata otkrilo je nedostatke o kojima nisu bili svjesni"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitaminQuizCta;