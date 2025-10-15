import Image from 'next/image';
import Link from 'next/link';

const stepsData = [
  {
    number: 1,
    title: 'Istraživanje i analiza',
    description: 'Putem detaljnih istraživanja i analiza, uključujući kliničke, biokemijske i genetske testove, utvrđujemo tvoje stvarne prehrambene potrebe.',
  },
  {
    number: 2,
    title: 'Izrada optimalnog plana',
    description: 'Na temelju dobivenih rezultata, izrađujem personalizirani plan prehrane, potpuno prilagođen tvojim ciljevima i načinu života.',
  },
  {
    number: 3,
    title: 'Podrška i edukacija',
    description: 'Pratit ću tvoj napredak i pružiti stalnu podršku kako bi ti pomagao ostvariti dugoročne rezultate i optimalno zdravlje/performans.',
  },
];

const ProcessSteps = () => {
  return (
    <section className="bg-background-primary py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h2 className="text-5xl font-extrabold text-white leading-tight">
              Do rezultata
              <br />
              u 3 koraka
            </h2>
            <div className="w-24 h-1 bg-accent-teal mt-6 mb-8 mx-auto lg:mx-0" />
            <Link
              href="/shop"
              className="inline-block bg-accent-teal text-white font-semibold px-12 py-3 rounded-lg shadow-lg hover:bg-accent-teal-light transition-colors"
            >
              KRENI
            </Link>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-4 flex justify-center order-first lg:order-none">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/homepage-plate-1-9.png"
              alt="Nutrition workspace with DNA helix, fresh produce, and clipboard"
              width={400}
              height={710}
              className="rounded-xl shadow-2xl shadow-accent-teal/20 object-contain max-h-[700px] w-auto"
            />
          </div>

          {/* Steps Column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {stepsData.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-accent-teal rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-silver leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;