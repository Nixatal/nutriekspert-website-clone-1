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
    <section className="bg-gradient-to-r from-accent-teal/10 via-accent-cyan/10 to-accent-teal-light/10 border-y border-accent-teal/30">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-3 p-3 bg-accent-teal/20 rounded-full">
                  <Icon className="w-6 h-6 text-accent-teal" />
                </div>
                <p className="text-3xl font-extrabold text-white mb-1">{metric.value}</p>
                <p className="text-sm text-silver">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;