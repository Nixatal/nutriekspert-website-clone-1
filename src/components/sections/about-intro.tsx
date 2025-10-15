import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const stats = [
  { value: "200+", label: "Zadovoljnih klijenata" },
  { value: "100+", label: "Stručnih članaka" },
  { value: "50+", label: "Održanih edukacija" },
  { value: "1,000+", label: "Planova prehrane" },
  { value: "8+", label: "Projekata s Industrijom" },
  { value: "6+", label: "Završenih tečajeva" },
];

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="flex justify-center items-center p-6 text-center bg-gradient-to-b from-card-background to-background-secondary rounded-xl">
      <div className="text-white">
        <p className="mb-2 text-4xl font-extrabold md:text-5xl">{value}</p>
        <h3 className="text-xl font-semibold text-silver">{label}</h3>
      </div>
    </div>
  );
};

const AboutIntro: FC = () => {
  return (
    <section id="achievements-section" className="bg-background-primary">
      <div className="gap-8 py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-5 xl:gap-16 lg:py-16 lg:px-6">
        <div className="lg:col-span-3 text-text-secondary">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white md:text-4xl">
            Bok, moje ime je Nikola Talan.
          </h2>
          <p className="mb-8 font-light lg:text-xl text-silver">
            Magistar sam nutricionizma s desetljećem iskustva u radu s klijentima na njihovim prehrambenim i zdravstvenim ciljevima. Moj rad temelji se na znanstvenim načelima, ali i praktičnom iskustvu čime osiguravam dugoročne i održive rezultate.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-accent-teal to-accent-cyan rounded-xl hover:brightness-110 transition shadow-lg"
            >
              Saznaj više o meni
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 hidden lg:flex justify-center items-center mt-8 lg:mt-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/nikola-homepage-1.png"
            alt="Nikola Talan Bio"
            width={485}
            height={728}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;