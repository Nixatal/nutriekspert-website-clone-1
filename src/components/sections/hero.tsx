import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background-primary">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
      >
        <source src="https://nutriekspert.com/gridwaves.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-10 bg-background-primary/50" />
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white md:items-start md:pl-40 md:text-left lg:pl-60">
        {/* Trust Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-silver/10 border border-silver/30 rounded-full backdrop-blur-sm">
          <CheckCircle2 className="w-5 h-5 text-silver-light" />
          <span className="text-sm font-semibold text-white">Povjerenje 200+ klijenata</span>
        </div>

        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Tvoj put do{' '}
          <span className="bg-gradient-to-r from-silver via-silver-light to-platinum bg-clip-text text-transparent">
            optimalnog zdravlja
          </span>{' '}
          počinje ovdje
        </h1>
        <p className="mt-4 max-w-3xl text-xl text-silver-light md:text-2xl lg:text-3xl">
          Znanstveni pristup. Individualni planovi. Dugoročni rezultati.
        </p>
        
        {/* Key Benefits */}
        <div className="mt-6 flex flex-col gap-3 text-left">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-silver-light flex-shrink-0" />
            <span className="text-white font-medium">Personalizirani pristup za tvoje potrebe</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-silver-light flex-shrink-0" />
            <span className="text-white font-medium">Podrška stručnjaka u svakom koraku</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-silver-light flex-shrink-0" />
            <span className="text-white font-medium">Održivi rezultati koji traju</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-gradient-to-r from-silver via-silver-light to-platinum px-8 py-4 text-center text-lg font-bold text-background-primary shadow-xl shadow-silver/20 transition-all duration-300 hover:brightness-110 hover:scale-105"
          >
            BESPLATNA KONZULTACIJA
          </Link>
          <Button
            variant="outline"
            className="h-auto rounded-xl border-2 border-silver-light bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-silver-light hover:text-background-primary hover:scale-105"
          >
            SAZNAJ VIŠE
          </Button>
        </div>

        {/* Soft CTA */}
        <p className="mt-6 text-sm text-silver-light">
          ✓ Bez obveza • 30 minuta razgovora • Personalizirani savjeti
        </p>
      </div>
    </section>
  );
};

export default HeroSection;