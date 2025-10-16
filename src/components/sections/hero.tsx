import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Award, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0d1f17] via-[#1a2d24] to-[#0f2419]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 z-0 h-full w-full object-cover opacity-20"
      >
        <source src="https://nutriekspert.com/gridwaves.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0d1f17]/80 via-transparent to-[#0d1f17]/60" />
      
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center py-20">
        {/* Trust Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald/20 via-gold/10 to-emerald/20 border border-gold/40 rounded-full backdrop-blur-md shadow-2xl shadow-gold/20">
          <Award className="w-5 h-5 text-gold" />
          <span className="text-sm font-bold text-gold-light tracking-wide">POUZDANO OD 200+ KLIJENATA</span>
        </div>

        <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl max-w-6xl mb-6">
          Otkrijte vaš put do{' '}
          <span className="bg-gradient-to-r from-emerald via-emerald-light to-gold-light bg-clip-text text-transparent">
            optimalnog zdravlja
          </span>
        </h1>
        
        <p className="mt-6 max-w-3xl text-xl md:text-2xl lg:text-3xl text-silver-light font-light leading-relaxed">
          Personalizirani nutricionistički pristup temeljen na znanosti.<br/>
          <span className="text-emerald-light font-semibold">Započnite s besplatnim upitnikom.</span>
        </p>
        
        {/* Key Benefits */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-12">
          <div className="flex flex-col items-center gap-3 p-6 bg-card-background/60 backdrop-blur-sm rounded-2xl border border-emerald/30 hover:border-gold/50 transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="p-3 bg-gradient-to-br from-emerald to-emerald-dark rounded-full">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-semibold text-center">Individualan Plan</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-6 bg-card-background/60 backdrop-blur-sm rounded-2xl border border-gold/30 hover:border-gold/70 transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="p-3 bg-gradient-to-br from-gold to-copper rounded-full">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-semibold text-center">Stručna Podrška</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-6 bg-card-background/60 backdrop-blur-sm rounded-2xl border border-emerald/30 hover:border-emerald/60 transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="p-3 bg-gradient-to-br from-emerald-light to-emerald rounded-full">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-semibold text-center">Dugoročni Rezultati</span>
          </div>
        </div>

        {/* Primary CTA - Upitnik */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <Link
            href="/vitamin-quiz"
            className="group relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-copper rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            <div className="relative px-12 py-6 bg-gradient-to-r from-gold via-gold-light to-copper rounded-2xl font-bold text-xl text-background-primary shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-gold/50">
              ✨ ZAPOČNI BESPLATNI UPITNIK ✨
            </div>
          </Link>
          
          <p className="text-silver-light text-sm">
            ⚡ 2 minute • Personalizirani rezultati • Bez obveza
          </p>
        </div>

        {/* Secondary CTA */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-emerald rounded-xl text-emerald-light font-semibold hover:bg-emerald/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Zakaži Besplatnu Konzultaciju →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;