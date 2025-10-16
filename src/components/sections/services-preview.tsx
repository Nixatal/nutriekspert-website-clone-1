"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServicesPreview = () => {
  return (
    <section className="bg-gradient-to-br from-background-primary via-background-secondary to-background-primary py-20 border-y border-emerald/20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ekspertiza u{" "}
            <span className="bg-gradient-to-r from-emerald via-gold to-copper bg-clip-text text-transparent">
              službi vašeg zdravlja
            </span>
          </h2>
          <p className="text-xl text-silver-light max-w-3xl mx-auto">
            Personalizirane usluge prilagođene vašim potrebama
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald to-gold rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-card-background to-[#1a2d24] rounded-2xl overflow-hidden border border-emerald/30 hover:border-gold/50 transition-all duration-300 shadow-xl hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/homepage-usluge-1-14.webp"
                  alt="Individualni nutricionistički programi"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17] via-[#0d1f17]/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Individualni nutricionistički programi
                </h3>
                <p className="text-silver-light mb-6 leading-relaxed">
                  Personalizirani planovi prehrane temeljeni na vašim zdravstvenim ciljevima, životnom stilu i preferencijama.
                </p>
                <Link
                  href="/services/individual"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald to-emerald-light rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Kliknite Ovdje
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-copper rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-card-background to-[#1a2d24] rounded-2xl overflow-hidden border border-gold/30 hover:border-gold/50 transition-all duration-300 shadow-xl hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-emerald/20 to-gold/10 flex items-center justify-center">
                  <div className="text-6xl">💼</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17] via-[#0d1f17]/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Rješenja za poslovne partnere
                </h3>
                <p className="text-silver-light mb-6 leading-relaxed">
                  Nutricionističke usluge za tvrtke, wellness programe i sportske timove.
                </p>
                <Link
                  href="/services/business"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-copper rounded-xl text-background-primary font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Kliknite Ovdje
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald to-emerald-dark rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-card-background to-[#1a2d24] rounded-2xl overflow-hidden border border-emerald/30 hover:border-gold/50 transition-all duration-300 shadow-xl hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center">
                  <div className="text-6xl">📚</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17] via-[#0d1f17]/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Preuzmite znanje: Seminari i E-knjige
                </h3>
                <p className="text-silver-light mb-6 leading-relaxed">
                  Edukativni materijali i seminari za poboljšanje zdravlja i prehrane.
                </p>
                <Link
                  href="/services/education"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald to-emerald-light rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Kliknite Ovdje
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;