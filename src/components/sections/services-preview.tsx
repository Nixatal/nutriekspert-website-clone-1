"use client";

import React from 'react';

const servicesData = [
  {
    title: "Individualni nutricionistički programi",
    description: "Personalizirana podrška i stručno vodstvo prema vašim ciljevima – korak po korak.",
    href: "https://nutriekspert.com/services#individual",
    buttonText: "Kliknite Ovdje",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/homepage-usluge-1-14.webp",
    buttonClasses: "px-6 py-3",
  },
  {
    title: "Rješenja za poslovne partnere",
    description: "Prilagodljiva rješenja za poslovne partnere koja podižu standarde zdravlja.",
    href: "https://nutriekspert.com/services#partners",
    buttonText: "Kliknite Ovdje",
    image: null,
    buttonClasses: "px-6 py-3",
  },
  {
    title: "Preuzmite znanje: Seminari i E-knjige",
    description: "Proširite znanje uz stručne seminare i e-knjige koje možete odmah preuzeti.",
    href: "https://nutriekspert.com/shop",
    buttonText: "Kliknite ovdje",
    image: null,
    buttonClasses: "px-4 py-3",
  },
];

interface ServiceCardProps {
  backgroundImage: string | null;
  title: string;
  description: string;
  href: string;
  buttonText: string;
  buttonClasses: string;
}

const ServiceCard = ({ backgroundImage, title, description, href, buttonText, buttonClasses }: ServiceCardProps) => (
  <div
    className="relative group rounded-lg shadow-lg overflow-hidden h-[500px] bg-cover bg-center transition-all duration-300 hover:scale-105 hover:shadow-silver/30"
    style={{
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
      backgroundColor: !backgroundImage ? 'var(--color-card-background)' : undefined,
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-30 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex-grow flex flex-col justify-end items-center text-center px-6 pt-10">
        <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-lg text-silver-light">{description}</p>
      </div>
      <div className="p-6 flex justify-center items-center">
        <a
          href={href}
          className={`block w-1/2 text-center text-sm font-medium text-background-primary bg-gradient-to-r from-silver to-platinum rounded-xl hover:brightness-110 transition-all shadow-lg ${buttonClasses}`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  </div>
);

const ServicesPreview = () => {
  return (
    <section className="bg-background-primary py-16 pb-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white mb-16 text-center">
          Ekspertizam u službi tvog zdravlja
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              backgroundImage={service.image}
              title={service.title}
              description={service.description}
              href={service.href}
              buttonText={service.buttonText}
              buttonClasses={service.buttonClasses}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;