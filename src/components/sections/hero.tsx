"use client";

import { Sparkles, Award, Users } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-copper/20 border border-gold/30 backdrop-blur-sm">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Master Nutricionizma • 200+ Klijenata</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-white">Nikola Talan,</span>
              <br />
              <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
                Tvoj Nutricionistički Partner
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-silver-light leading-relaxed max-w-xl">
              Znanstveni pristup. Individualni planovi. Vrhunski rezultati. 
              Pretvori svoje zdravstvene ciljeve u stvarnost uz personalizirane 
              nutricionističke programe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-gold via-copper to-gold-light text-background-primary font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/50">
                <span className="relative z-10">ZAKAŽI KONZULTACIJU</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="px-8 py-4 border-2 border-silver/40 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-silver/10 hover:border-silver transition-all duration-300">
                SAZNAJ VIŠE
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent">200+</div>
                <div className="text-sm text-silver">Zadovoljnih Klijenata</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent">1000+</div>
                <div className="text-sm text-silver">Planova Prehrane</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent">8+</div>
                <div className="text-sm text-silver">Godina Iskustva</div>
              </div>
            </div>
          </div>

          {/* Right: Image with Glassmorphism Card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/nikola-homepage-1.png"
                alt="Nikola Talan"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphism Card */}
            <div className="absolute -bottom-8 -left-8 bg-background-secondary/80 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-copper flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Personalizirani pristup</div>
                  <div className="text-xs text-silver">Za tvoje jedinstvene potrebe</div>
                </div>
              </div>
              <p className="text-sm text-silver-light">
                Svaki plan prehrane temelji se na detaljnoj analizi tvog zdravlja, životnog stila i ciljeva.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-copper/5 rounded-full blur-3xl" />
    </section>
  );
}