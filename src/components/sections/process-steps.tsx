"use client";

import { Search, FileEdit, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Istraživanje i analiza",
    description: "Detaljna procjena tvog zdravstvenog stanja, genetike, životnih navika i ciljeva kroz sveobuhvatnu konzultaciju i testove.",
  },
  {
    number: "02",
    icon: FileEdit,
    title: "Izrada optimalnog plana",
    description: "Kreiram personalizirani nutricionistički program temeljen na prikupljenim podacima i znanstvenim dokazima.",
  },
  {
    number: "03",
    icon: Headphones,
    title: "Podrška i edukacija",
    description: "Kontinuirana podrška, praćenje napretka i edukacija kako bi osigurao tvoj dugoročni uspjeh i održivost rezultata.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary/20 to-background-primary" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-copper/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Do Rezultata</span>
                <br />
                <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
                  U 3 Koraka
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-gold to-copper rounded-full mb-8" />
              <p className="text-xl text-silver-light leading-relaxed mb-8">
                Jednostavan i strukturiran proces koji te vodi od početne konzultacije 
                do ostvarenja tvojih zdravstvenih ciljeva.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-background-secondary/60 to-background-secondary/30 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 hover:border-gold/50 transition-all duration-500 hover:scale-105"
                  >
                    <div className="flex gap-6">
                      {/* Number Badge */}
                      <div className="shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-copper flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-6 h-6 text-gold" />
                          <h3 className="text-xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-silver-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <button className="group relative px-10 py-5 bg-gradient-to-r from-gold via-copper to-gold-light text-background-primary font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/50 text-lg">
              <span className="relative z-10">KRENI DANAS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/homepage-plate-1-9.png"
                alt="Nutrition Process"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-background-secondary/90 to-background-secondary/70 backdrop-blur-xl border border-gold/30 rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-sm text-silver-light">
                Klijenata postiže<br />svoje ciljeve
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}