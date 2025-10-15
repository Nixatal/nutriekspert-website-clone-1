"use client";

import { FileText, Calendar, Activity } from "lucide-react";

const quickWins = [
  {
    icon: FileText,
    title: "BESPLATNI VODIČ",
    subtitle: "E-knjiga o Prehrani",
    description: "Preuzmite besplatan vodič s korisnim savjetima",
    cta: "Preuzmi Besplatno",
    gradient: "from-accent-teal to-accent-cyan",
  },
  {
    icon: Calendar,
    title: "BESPLATNA KONZULTACIJA",
    subtitle: "30-Minutni Razgovor",
    description: "Individualni razgovor i personalizirani savjeti",
    cta: "Zakaži Razgovor",
    gradient: "from-accent-cyan to-accent-teal-light",
  },
  {
    icon: Activity,
    title: "PROCJENA VITAMINA",
    subtitle: "Upitnik za Vitamine",
    description: "Otkrijte potencijalne nedostatke vitamina i minerala",
    cta: "Započni Upitnik",
    gradient: "from-accent-teal-light to-accent-teal",
  },
];

const QuickWins = () => {
  return (
    <section className="bg-background-primary py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Započnite s besplatnim resursima
          </h2>
          <p className="text-xl text-silver">Odaberite način kako želite krenuti:</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {quickWins.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative group bg-card-background rounded-2xl p-8 text-center border border-accent-teal/20 hover:border-accent-teal/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-teal/20"
              >
                <div className={`mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="mb-4">
                  <p className={`text-sm font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                    {item.title}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.subtitle}</h3>
                  <p className="text-silver">{item.description}</p>
                </div>

                <button className={`w-full mt-4 px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r ${item.gradient} hover:brightness-110 transition shadow-lg`}>
                  {item.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-accent-teal/10 border border-accent-teal/30 rounded-full">
            <p className="text-accent-teal font-semibold">
              ✓ Bez registracije  •  ✓ Bez obveza  •  ✓ 100% besplatno
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickWins;