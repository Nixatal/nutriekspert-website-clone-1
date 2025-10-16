"use client";

import { UserCheck, Briefcase, BookOpen, ArrowRight } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Individualni Nutricionistički Programi",
    description: "Personalizirani planovi prehrane temeljeni na detaljnoj analizi tvog zdravlja, genetike i životnog stila. Svaki plan je jedinstveno prilagođen tvojim ciljevima.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/homepage-usluge-1-14.webp",
    color: "from-gold to-copper",
  },
  {
    icon: Briefcase,
    title: "Rješenja za Poslovne Partnere",
    description: "Sveobuhvatne nutricionističke usluge za tvrtke - od corporate wellness programa do razvoja nutricionističkih proizvoda i edukacije zaposlenika.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/homepage-usluge-1-14.webp",
    color: "from-copper to-gold-light",
  },
  {
    icon: BookOpen,
    title: "Seminari i E-knjige",
    description: "Educiraj se kroz stručne seminare i detaljne e-knjige o prehrani, suplementaciji i optimizaciji zdravlja. Praktično znanje za tvoju svakodnevicu.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/homepage-usluge-1-14.webp",
    color: "from-gold-light to-gold",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary/30 to-background-primary" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-copper/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-copper/20 border border-gold/30 backdrop-blur-sm mb-6">
            <Briefcase className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Što Nudim</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
              Ekspertizam u Službi
            </span>
            <br />
            <span className="text-white">Tvog Zdravlja</span>
          </h2>
          <p className="text-xl text-silver-light max-w-3xl mx-auto">
            Sveobuhvatne nutricionističke usluge prilagođene tvojim individualnim potrebama - 
            od personalnih programa do poslovnih rješenja i edukacija.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 backdrop-blur-xl border border-gold/20 rounded-3xl overflow-hidden hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold/30"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-background-secondary/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-silver-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <button className={`group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/40`}>
                    <span>Saznaj Više</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-silver-light mb-6 text-lg">
            Nije ti jasno koja usluga je prava za tebe?
          </p>
          <button className="group relative px-10 py-5 bg-gradient-to-r from-gold via-copper to-gold-light text-background-primary font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/50 text-lg">
            <span className="relative z-10">Zakaži Besplatnu Konzultaciju</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}