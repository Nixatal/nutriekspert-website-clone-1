import React from 'react';
import { Fingerprint, Dna, FileText, TrendingUp } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const featuresData: FeatureCardProps[] = [
  {
    icon: Fingerprint,
    title: 'INDIVIDUALNOST',
    description: 'Znanstveni pristup koji uzima u obzir vaše jedinstvene potrebe, ciljeve i zdravstveno stanje. Svaki plan je posebno kreiran za vas.',
  },
  {
    icon: Dna,
    title: 'HOLISTIČKI PRISTUP',
    description: 'Uzimamo u obzir sve aspekte vašeg zdravlja - prehranu, životni stil, stres, san i fizičku aktivnost za sveobuhvatne rezultate.',
  },
  {
    icon: FileText,
    title: 'DETALJNA ANALIZA',
    description: 'Koristimo napredne kliničke, biokemijske i genetske testove za preciznu procjenu vašeg zdravstvenog stanja i potreba.',
  },
  {
    icon: TrendingUp,
    title: 'FOKUS NA REZULTATE',
    description: 'Pružamo konkretne, mjerljive preporuke s kontinuiranom podrškom za postizanje i održavanje vaših zdravstvenih ciljeva.',
  },
];

const ApproachFeatures = () => {
  return (
    <section className="bg-gradient-to-b from-background-secondary to-background-primary py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ekspertiza u{" "}
            <span className="bg-gradient-to-r from-emerald via-gold to-copper bg-clip-text text-transparent">
              službi vašeg zdravlja
            </span>
          </h2>
          <p className="text-xl text-silver-light max-w-3xl mx-auto">
            Holistički pristup koji donosi rezultate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald to-gold rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition-all duration-300" />
            <div className="relative p-8 bg-gradient-to-br from-card-background/80 to-[#1a2d24]/80 rounded-2xl border border-emerald/30 hover:border-gold/40 transition-all duration-300 backdrop-blur-sm shadow-xl hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="p-5 bg-gradient-to-br from-emerald/20 to-emerald-dark/20 rounded-full mb-6 border-2 border-emerald/40 group-hover:scale-110 transition-transform">
                  <Fingerprint className="w-12 h-12 text-emerald-light" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  INDIVIDUALNOST
                </h3>
                <p className="text-silver-light leading-relaxed">
                  Znanstveni pristup koji uzima u obzir vaše jedinstvene potrebe, ciljeve i zdravstveno stanje. Svaki plan je posebno kreiran za vas.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald to-gold rounded-full mt-6" />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-copper rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition-all duration-300" />
            <div className="relative p-8 bg-gradient-to-br from-card-background/80 to-[#1a2d24]/80 rounded-2xl border border-gold/30 hover:border-gold/50 transition-all duration-300 backdrop-blur-sm shadow-xl hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="p-5 bg-gradient-to-br from-gold/20 to-copper/20 rounded-full mb-6 border-2 border-gold/40 group-hover:scale-110 transition-transform">
                  <Dna className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  HOLISTIČKI PRISTUP
                </h3>
                <p className="text-silver-light leading-relaxed">
                  Uzimamo u obzir sve aspekte vašeg zdravlja - prehranu, životni stil, stres, san i fizičku aktivnost za sveobuhvatne rezultate.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-gold to-copper rounded-full mt-6" />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald to-emerald-dark rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition-all duration-300" />
            <div className="relative p-8 bg-gradient-to-br from-card-background/80 to-[#1a2d24]/80 rounded-2xl border border-emerald/30 hover:border-gold/40 transition-all duration-300 backdrop-blur-sm shadow-xl hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="p-5 bg-gradient-to-br from-emerald/20 to-emerald-dark/20 rounded-full mb-6 border-2 border-emerald/40 group-hover:scale-110 transition-transform">
                  <FileText className="w-12 h-12 text-emerald-light" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  DETALJNA ANALIZA
                </h3>
                <p className="text-silver-light leading-relaxed">
                  Koristimo napredne kliničke, biokemijske i genetske testove za preciznu procjenu vašeg zdravstvenog stanja i potreba.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald to-gold rounded-full mt-6" />
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-copper rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition-all duration-300" />
            <div className="relative p-8 bg-gradient-to-br from-card-background/80 to-[#1a2d24]/80 rounded-2xl border border-gold/30 hover:border-gold/50 transition-all duration-300 backdrop-blur-sm shadow-xl hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="p-5 bg-gradient-to-br from-gold/20 to-copper/20 rounded-full mb-6 border-2 border-gold/40 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  FOKUS NA REZULTATE
                </h3>
                <p className="text-silver-light leading-relaxed">
                  Pružamo konkretne, mjerljive preporuke s kontinuiranom podrškom za postizanje i održavanje vaših zdravstvenih ciljeva.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-gold to-copper rounded-full mt-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachFeatures;