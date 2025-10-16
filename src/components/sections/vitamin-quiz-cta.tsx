"use client";

import { ClipboardCheck, Sparkles } from "lucide-react";

export default function VitaminQuizCta() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Compact Glassmorphism Card */}
          <div className="relative bg-gradient-to-r from-background-secondary/60 to-background-secondary/40 backdrop-blur-xl border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all duration-500">
            <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-copper flex items-center justify-center shrink-0">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  Provjeri svoje vitamine i minerale
                  <Sparkles className="w-5 h-5 text-gold" />
                </h3>
                <p className="text-silver-light">
                  Besplatan upitnik u 2 minute • Personalizirani rezultati • Bez obveza
                </p>
              </div>

              {/* CTA Button */}
              <button className="group relative px-6 py-3 bg-gradient-to-r from-gold to-copper text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/40 whitespace-nowrap">
                <span className="relative z-10">Započni Test</span>
                <div className="absolute inset-0 bg-gradient-to-r from-copper to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/0 via-gold/5 to-copper/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}