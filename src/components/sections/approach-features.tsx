import React from 'react';
import { Fingerprint, Dna, FilePenLine, TrendingUp } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const featuresData: FeatureCardProps[] = [
  {
    icon: Fingerprint,
    title: 'INDIVIDUALNOST',
    description: 'Nutriekspert pristup je znanstveno utemeljen put do dugoročnih rezultata, prilagođen tvojim potrebama, ciljevima i načinu života.',
  },
  {
    icon: Dna,
    title: 'HOLISTIČKI PRISTUP',
    description: 'U obzir uzimam tvoje zdravlje, ciljeve i način života kako bih osmislio cjelovito rješenje koje će ti pomoći da se osjećaš, izgledaš i funkcioniraš najbolje moguće.',
  },
  {
    icon: FilePenLine,
    title: 'DETALJNA ANALIZA',
    description: 'Koristim najsuvremenije metode – kliničke, biokemijske i genetske testove – kako bih stvorio optimalan plan prehrane.',
  },
  {
    icon: TrendingUp,
    title: 'FOKUS NA REZULTATE',
    description: 'Svaka preporuka je usmjerena na tvoj uspjeh. U Nutriekspertu gradim dugoročna rješenja koja traju cijeli život.',
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative bg-card-background rounded-xl p-6 shadow-lg flex flex-col text-center transition-transform duration-300 hover:scale-105 hover:shadow-accent-teal/50">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-cyan rounded-full flex items-center justify-center shadow-lg">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="mt-8 text-2xl font-bold tracking-wider mb-3 uppercase text-white">{title}</h3>
      <p className="text-silver leading-relaxed flex-grow">{description}</p>
      <div className="w-1/3 h-1 mt-4 bg-accent-teal mx-auto"></div>
    </div>
  );
};

const ApproachFeatures = () => {
  return (
    <section className="bg-background-primary py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-12 pb-16">
          Ekspertizam u službi tvog zdravlja
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-24">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachFeatures;