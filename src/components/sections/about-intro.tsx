"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Users, TrendingUp, Briefcase, GraduationCap } from "lucide-react";

const AboutIntro = () => {
  return (
    <section className="bg-gradient-to-b from-background-secondary to-background-primary py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text & Stats */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bok, moje ime je{" "}
                <span className="bg-gradient-to-r from-emerald via-gold to-copper bg-clip-text text-transparent">
                  Nikola Talan
                </span>
              </h2>
              <p className="text-lg text-silver-light leading-relaxed mb-4">
                Magistar nutricionizma s više od 10 godina iskustva u kreiranju personalizednih programa prehrane.
              </p>
              <p className="text-lg text-silver-light leading-relaxed">
                Moj cilj je pomoći vam postići optimalno zdravlje kroz znanstveno utemeljen pristup prehrani, prilagođen vašim jedinstvenim potrebama i životnom stilu.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-emerald/10 to-card-background rounded-2xl border border-emerald/30 hover:border-gold/40 transition-all duration-300 hover:scale-105 group">
                <div className="p-3 bg-gradient-to-br from-emerald/20 to-emerald-dark/20 rounded-xl w-fit mb-3 border border-emerald/40 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-emerald-light" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent mb-1">200+</div>
                <div className="text-sm text-silver-light">Zadovoljnih klijenata</div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gold/10 to-card-background rounded-2xl border border-gold/30 hover:border-gold/50 transition-all duration-300 hover:scale-105 group">
                <div className="p-3 bg-gradient-to-br from-gold/20 to-copper/20 rounded-xl w-fit mb-3 border border-gold/40 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent mb-1">100+</div>
                <div className="text-sm text-silver-light">Stručnih članaka</div>
              </div>

              <div className="p-6 bg-gradient-to-br from-emerald/10 to-card-background rounded-2xl border border-emerald/30 hover:border-gold/40 transition-all duration-300 hover:scale-105 group">
                <div className="p-3 bg-gradient-to-br from-emerald/20 to-emerald-dark/20 rounded-xl w-fit mb-3 border border-emerald/40 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-emerald-light" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent mb-1">50+</div>
                <div className="text-sm text-silver-light">Održanih edukacija</div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gold/10 to-card-background rounded-2xl border border-gold/30 hover:border-gold/50 transition-all duration-300 hover:scale-105 group">
                <div className="p-3 bg-gradient-to-br from-gold/20 to-copper/20 rounded-xl w-fit mb-3 border border-gold/40 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent mb-1">1,000+</div>
                <div className="text-sm text-silver-light">Planova prehrane</div>
              </div>

              <div className="p-6 bg-gradient-to-br from-emerald/10 to-card-background rounded-2xl border border-emerald/30 hover:border-gold/40 transition-all duration-300 hover:scale-105 group">
                <div className="p-3 bg-gradient-to-br from-emerald/20 to-emerald-dark/20 rounded-xl w-fit mb-3 border border-emerald/40 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-emerald-light" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gold to-copper bg-clip-text text-transparent mb-1">8+</div>
                <div className="text-sm text-silver-light">Projekata s industrijom</div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gold/10 to-card-background rounded-2xl border border-gold/30 hover:border-gold/50 transition-all duration-300 hover:scale-105 group">
                <div className="p-3 bg-gradient-to-br from-gold/20 to-copper/20 rounded-xl w-fit mb-3 border border-gold/40 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-gold" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent mb-1">6+</div>
                <div className="text-sm text-silver-light">Završenih tečajeva</div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-copper rounded-xl text-background-primary font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-gold/30"
            >
              Saznaj više o meni →
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald to-gold rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-300" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/nikola-homepage-1.png"
                alt="Nikola Talan - Magistar Nutricionizma"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;