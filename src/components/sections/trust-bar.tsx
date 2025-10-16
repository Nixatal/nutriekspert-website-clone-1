"use client";

import { Users, Star, Clock, TrendingUp } from "lucide-react";

const TrustBar = () => {
  return (
    <section className="bg-gradient-to-r from-card-background via-[#1a2d24] to-card-background py-12 border-y border-gold/20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Metric 1 */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 bg-gradient-to-br from-emerald/20 to-emerald-dark/20 rounded-2xl border border-emerald/30 group-hover:border-gold/50 transition-all duration-300 group-hover:scale-110">
              <Users className="w-8 h-8 text-emerald-light" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-gold via-gold-light to-copper bg-clip-text text-transparent">200+</div>
              <div className="text-sm text-silver mt-1">Zadovoljnih Klijenata</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 bg-gradient-to-br from-gold/20 to-copper/20 rounded-2xl border border-gold/30 group-hover:border-emerald/50 transition-all duration-300 group-hover:scale-110">
              <Star className="w-8 h-8 text-gold" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald via-emerald-light to-gold-light bg-clip-text text-transparent">5.0</div>
              <div className="text-sm text-silver mt-1">Prosječna Ocjena</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 bg-gradient-to-br from-emerald/20 to-emerald-dark/20 rounded-2xl border border-emerald/30 group-hover:border-gold/50 transition-all duration-300 group-hover:scale-110">
              <Clock className="w-8 h-8 text-emerald-light" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-gold via-gold-light to-copper bg-clip-text text-transparent">10+</div>
              <div className="text-sm text-silver mt-1">Godina Iskustva</div>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 bg-gradient-to-br from-gold/20 to-copper/20 rounded-2xl border border-gold/30 group-hover:border-emerald/50 transition-all duration-300 group-hover:scale-110">
              <TrendingUp className="w-8 h-8 text-gold" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald via-emerald-light to-gold-light bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-silver mt-1">Stopa Uspjeha</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;