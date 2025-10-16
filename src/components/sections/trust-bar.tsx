"use client";

import { Star, Award, Users, TrendingUp } from "lucide-react";

const trustMetrics = [
  {
    icon: Users,
    value: "200+",
    label: "Zadovoljnih klijenata",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Prosječna ocjena",
  },
  {
    icon: Award,
    value: "10+",
    label: "Godina iskustva",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Stopa uspjeha",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-gradient-to-r from-silver/5 via-silver-light/5 to-platinum/5 border-y border-silver/20">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-3 p-3 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-full border border-silver/30">
                  <Icon className="w-6 h-6 text-silver-light" />
                </div>
                <p className="text-3xl font-extrabold text-white mb-1">{metric.value}</p>
                <p className="text-sm text-silver-light">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;