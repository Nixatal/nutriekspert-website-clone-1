"use client";

import { Activity, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const VitaminQuizCta = () => {
  return (
    <section className="bg-gradient-to-br from-accent-teal/20 via-background-primary to-accent-cyan/20 py-16 border-y border-accent-teal/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Quiz CTA */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-teal/20 border border-accent-teal/40 rounded-full">
              <Activity className="w-5 h-5 text-accent-teal" />
              <span className="text-sm font-semibold text-accent-teal">BESPLATNA PROCJENA</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Nedostaju li vam{" "}
              <span className="bg-gradient-to-r from-accent-teal via-accent-cyan to-accent-teal-light bg-clip-text text-transparent">
                bitni vitamini ili minerali?
              </span>
            </h2>
            
            <p className="text-lg text-silver-light">
              Naš jednostavni upitnik vam pomoći će otkriti potencijalne nedostatke vitamina i minerala. 
              Dobijte personalizirane preporuke za vaše zdravlje.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-teal flex-shrink-0" />
                <span className="text-white">Upitnik traje samo 2 minute</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-teal flex-shrink-0" />
                <span className="text-white">Trenutni rezultati i preporuke</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-teal flex-shrink-0" />
                <span className="text-white">Bez obveza i 100% besplatno</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/vitamin-quiz"
                className="inline-block px-8 py-4 text-white text-lg font-bold bg-gradient-to-r from-accent-teal via-accent-cyan to-accent-teal-light rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-accent-teal/30 hover:scale-105"
              >
                Započni Upitnik →
              </Link>
              <p className="mt-3 text-sm text-silver">
                ✓ Bez registracije • Brzo i jednostavno
              </p>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative">
            <div className="bg-card-background/80 backdrop-blur-sm rounded-2xl p-8 border border-accent-teal/30 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-teal/20 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-accent-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Prepoznajte simptome</h4>
                    <p className="text-sm text-silver">
                      Umor, slaba koncentracija, ili gubitak energije mogu biti znakovi nedostatka vitamina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-cyan/20 rounded-lg">
                    <Activity className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Personalizirani uvidi</h4>
                    <p className="text-sm text-silver">
                      Dobijte prilagođene savjete na temelju vaših odgovora i životnih navika
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-teal-light/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-accent-teal-light" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Praktične preporuke</h4>
                    <p className="text-sm text-silver">
                      Saznajte koji vitamini i minerali su vam potrebni za optimalno zdravlje
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-accent-teal/20 text-center">
                <p className="text-silver text-sm italic">
                  "Over 85% naših klijenata otkrilo je nedostatke o kojima nisu bili svjesni"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitaminQuizCta;