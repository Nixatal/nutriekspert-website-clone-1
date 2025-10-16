"use client";

import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "Nikolin pristup je promijenio moj život. Nakon samo 3 mjeseca imam više energije, bolji san i izgubila sam 12kg na zdrav način. Najbolje od svega je što sada znam kako održati rezultate!",
    author: "Anđela Rončević",
    role: "Marketing Manager",
    rating: 5,
  },
  {
    text: "Kao sportaš, uvijek sam tražio personalizirani pristup prehrani. Nikola je s detaljnom analizom stvorio plan koji je dramatično poboljšao moje performanse i oporavak.",
    author: "Marko Kovač",
    role: "Profesionalni Sportaš",
    rating: 5,
  },
  {
    text: "Konačno sam pronašla nutricionista koji razumije moje zdravstvene probleme. Nikolin holistički pristup mi je pomogao riješiti probleme s kojima se godinama nisam mogla nositi.",
    author: "Ivana Jurić",
    role: "Poduzetnica",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary/30 to-background-primary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Što Kažu </span>
              <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
                Moji Klijenti
              </span>
            </h2>
            <p className="text-xl text-silver-light">
              Pročitaj iskustva ljudi koji su transformirali svoje zdravlje
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 backdrop-blur-xl border border-gold/30 rounded-3xl p-12 md:p-16">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-copper/20 flex items-center justify-center">
              <Quote className="w-8 h-8 text-gold" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-2xl text-white leading-relaxed text-center mb-8 font-light italic">
              "{current.text}"
            </p>

            {/* Author */}
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">{current.author}</div>
              <div className="text-silver">{current.role}</div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-copper/20 border border-gold/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-copper/20 border border-gold/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-gold to-copper"
                      : "bg-silver/30 hover:bg-silver/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}