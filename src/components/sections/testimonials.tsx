"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Uz plan prehrane i suplementacije Iskustvo s Nikolom je bilo iznad svih mojih očekivanja. Program koji je bio prilagođen mom životnom tempu mi je savršeno odgovarao i nisam niti osjetila kako uz jednostavne navike koje sam svakodnevno usvajala ustvari mijenjam svoju prehranu iz korijena. Sretna sam jer i nakon odrađenog programa znam kako se pravilno hraniti te tako održavam postignutu kilažu. maksimalno prilagođen meni osjećam se mnogo bolje te imam obilje energije za svakodnevne napore.",
    author: "Anđela Rončević",
  },
  {
    quote:
      "Izuzetno sam zadovoljna suradnjom. Susretljivost, strpljivist, razumjevanje u svakom trenutku. Zajednicko pracenje medicinske dokumentacije i stalna prilagodba jelovnika. Dostupnost informacija u svakom trenutku.",
    author: "Karmen S.",
  },
  {
    quote:
      "Posebno mi se svidjela dostupnost nutricionista (uvijek dostupan za savjet, pitanja i sl.), otvorenost za kritike na program prehrane i fleksibilnost oko samih jela. Jela su odlična i nisam nikada mislio da će mi se takve stvari svidjeti, ali sam se ugodno iznenadio! Zaista nemam kritika, sve je prošlo kako sam i zamislio!",
    author: "Vito S.",
  },
  {
    quote:
      "Sve je bilo super. I više sam nego zadovoljan sa jelovnikom i zahvaljujem se cijelom timu na pomoći. Nemam nikakvih kritika.",
    author: "Antonio B.",
  },
  {
    quote:
      "Svidjelo mi se sve. Nikola je pravi profesionalac u svome poslu i vodi računa i o najsitnijim detaljima. Sve pohvale. Nisam imao nikakva negativna iskustva.",
    author: "Vice M.",
  },
  {
    quote: "Sve je bilo iznad očekivanog. Nikola radi odličan posao. Samo tako dalje!",
    author: "Matija S.",
  },
  {
    quote:
      "Sve mi se svidjelo, komunikacija je brza i laka, planovi odlicno prilagodeni zajednickim dogovorima i najvaznije odlicni rezultati.",
    author: "Jakov B.",
  },
];

const QuoteIcon = () => (
  <svg className="w-10 h-10 mx-auto mb-3 text-silver" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
    <path d="M96 224C84.72 224 74.47 229.2 67.98 237.5c-11.43 14.28-11.43 35.72 0 50C74.47 295.8 84.72 300.8 96 300.8c25.19 0 46.5-23.43 46.5-52.25S121.2 196.2 96 196.2zM352 224c-11.28 0-21.53 5.25-28.02 13.5-11.43 14.28-11.43 35.72 0 50C330.5 295.8 340.7 300.8 352 300.8c25.19 0 46.5-23.43 46.5-52.25S377.2 196.2 352 196.2zM448 96v224c0 53.02-42.98 96-96 96H96C42.98 416 0 373 0 320V96C0 42.98 42.98 0 96 0h256C405 0 448 42.98 448 96zM96 352h256c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32H96C78.33 64 64 78.33 64 96v224C64 337.7 78.33 352 96 352z"/>
  </svg>
);


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="relative bg-background-primary py-16">
      <div className="max-w-screen-lg mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Što kažu moji klijenti
        </h2>
        
        <div className="relative h-[350px] sm:h-[300px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full px-6 h-full flex items-center justify-center">
                <figure className="max-w-screen-md mx-auto text-center">
                  <QuoteIcon />
                  <blockquote className="min-h-[200px] sm:min-h-[144px] flex items-center justify-center">
                    <p className="text-2xl italic font-medium text-silver-light">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6">
                    <cite className="pr-3 font-medium text-silver italic">
                      {testimonial.author}
                    </cite>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-4 bg-card-background text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-accent-teal transition duration-300 z-10"
          aria-label="Prethodni komentar"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 bg-card-background text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-accent-teal transition duration-300 z-10"
          aria-label="Sljedeći komentar"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;