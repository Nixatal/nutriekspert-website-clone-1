"use client";

import { Building2 } from "lucide-react";

const partners = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-1-2.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-2-3.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-3-4.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-4-5.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-5-6.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-6-7.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-7-8.png",
];

export default function PartnersCarousel() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary/20 to-background-primary" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-copper/20 border border-gold/30 backdrop-blur-sm mb-6">
            <Building2 className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Suradnje</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
              Poslovni Partneri
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {/* First set */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 h-32 bg-gradient-to-br from-background-secondary/60 to-background-secondary/30 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 flex items-center justify-center hover:border-gold/50 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for infinite scroll */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 h-32 bg-gradient-to-br from-background-secondary/60 to-background-secondary/30 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 flex items-center justify-center hover:border-gold/50 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background-primary to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background-primary to-transparent pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}