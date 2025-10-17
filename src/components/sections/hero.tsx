"use client";

import { Sparkles, Award, Users, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://nutriekspert.com/gridwaves.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background-primary/80 via-background-primary/60 to-background-primary" />
      </div>

      <div className="container relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/20 to-copper/20 border border-gold/30 backdrop-blur-sm">
            <Award className="w-5 h-5 text-gold" />
            <span className="text-sm font-semibold text-gold">Znanstveni pristup • Individualni planovi • Vrhunski rezultati</span>
          </div>

          {/* DOMINANT HEADLINE - Value Proposition */}
          <h1 className="text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
            <span className="text-white">Posljednji</span>
            <br />
            <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
              Plan Prehrane
            </span>
            <br />
            <span className="text-white">koji ćeš ikada trebati</span>
          </h1>

          {/* Subheading - What We Offer */}
          <p className="text-2xl text-silver-light leading-relaxed max-w-3xl mx-auto">
            Personalizirani nutricionistički programi temeljeni na znanosti, 
            tvojim jedinstvenim potrebama i ciljevima. 
            <span className="text-white font-semibold"> Ne dijete. Lifestyle.</span>
          </p>

          {/* Primary CTA - Quiz */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-gold via-copper to-gold-light text-background-primary text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/50">
              <span className="relative z-10 flex items-center gap-2">
                ZAPOČNI BESPLATNI UPITNIK
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-10 py-5 border-2 border-silver/40 text-white text-lg font-semibold rounded-xl backdrop-blur-sm hover:bg-silver/10 hover:border-silver transition-all duration-300">
              BESPLATNA KONZULTACIJA
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-copper/10 rounded-2xl blur-xl" />
              <div className="relative bg-background-secondary/60 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent">200+</div>
                <div className="text-sm text-silver font-medium">Zadovoljnih Klijenata</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-copper/10 rounded-2xl blur-xl" />
              <div className="relative bg-background-secondary/60 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent">1000+</div>
                <div className="text-sm text-silver font-medium">Planova Prehrane</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-copper/10 rounded-2xl blur-xl" />
              <div className="relative bg-background-secondary/60 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent">8+</div>
                <div className="text-sm text-silver font-medium">Godina Iskustva</div>
              </div>
            </div>
          </div>

          {/* Social Proof Indicator */}
          <div className="flex items-center justify-center gap-3 pt-8">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald to-emerald-light border-2 border-background-primary" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-copper border-2 border-background-primary" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-silver to-platinum border-2 border-background-primary" />
            </div>
            <p className="text-sm text-silver-light">
              <span className="text-white font-semibold">200+ klijenata</span> već je transformiralo svoje zdravlje
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-copper/5 rounded-full blur-3xl" />
    </section>
  );
}