import Image from "next/image";

const instagramPosts = [
  {
    id: 1,
    href: "https://www.instagram.com/p/DPMW4UZDHzw/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/medium-11.jpg",
    imageAlt: "Post about blood marker ratios and heart health",
    caption: "Jednostavan omjer izračunat iz standardnih krvnih ...",
    date: "9/29/2025",
  },
  {
    id: 2,
    href: "https://www.instagram.com/reel/DPHEbeQDOH8/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/medium-12.jpg",
    imageAlt: "Post about 8 tips to strengthen immunity_ with text '6 Savjeta kako ojačati'",
    caption: "Prehlada i gripa češće nas pogađaju zimi. Razlog? ...",
    date: "9/27/2025",
  },
  {
    id: 3,
    href: "https://www.instagram.com/p/DPCHZi0jDHX/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/medium-10.jpg",
    imageAlt: "Post about cherries and their effect on sleep quality",
    caption: "Ako tražite prirodnu pomoć za bolji san, znanost s...",
    date: "9/25/2025",
  },
];

const InstagramFeed = () => {
  return (
    <section className="bg-background-primary py-16 sm:py-24">
      <div className="container">
        <h2 className="text-center text-4xl font-bold text-white mb-16">
          Instagram Feed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-xl bg-card-background shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent-teal/30"
            >
              <Image
                src={post.imageSrc}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-semibold text-lg leading-tight">
                  {post.caption}
                </h3>
                <p className="mt-2 text-sm text-silver">{post.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;