"use client";

import { Instagram, Calendar } from "lucide-react";

const posts = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/medium-11.jpg",
    caption: "Omjer LDL/HDL kolesterola - ključni pokazatelj...",
    date: "5 dana ago",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/medium-12.jpg",
    caption: "6 Savjeta kako ojačati imunitet prirodnim putem",
    date: "1 tjedan ago",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/medium-10.jpg",
    caption: "Kvaliteta sna i suplementacija - sve što trebaš znati",
    date: "2 tjedna ago",
  },
];

export default function InstagramFeed() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-copper/20 border border-gold/30 backdrop-blur-sm mb-6">
            <Instagram className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Društvene Mreže</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Slijedi Me Na </span>
            <span className="bg-gradient-to-r from-gold via-copper to-gold-light bg-clip-text text-transparent">
              Instagramu
            </span>
          </h2>
          <p className="text-xl text-silver-light max-w-2xl mx-auto">
            Dnevni savjeti o prehrani, zdravlju i wellness-u
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com/nutriekspert"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-background-secondary/60 to-background-secondary/30 backdrop-blur-xl border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/50 hover:scale-105 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/50 to-transparent opacity-80" />
                
                {/* Instagram Icon Overlay */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-gold/80 to-copper/80 backdrop-blur-sm flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-white font-medium mb-3 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex items-center gap-2 text-sm text-silver">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-copper/0 group-hover:from-gold/10 group-hover:to-copper/10 transition-all duration-500 pointer-events-none" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/nutriekspert"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-copper text-white font-semibold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-gold/40 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span>Slijedi @nutriekspert</span>
          </a>
        </div>
      </div>
    </section>
  );
}