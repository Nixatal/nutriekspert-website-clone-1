import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const SocialCta = () => {
  return (
    <section 
      className="bg-background-primary py-16 sm:py-20 relative"
      // The original design appears to use a background image with a subtle pattern.
      // As no image asset was provided, a solid background color from the theme is used.
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Zaprati me na društvenim mrežama
        </h2>
        <div className="flex justify-center items-center gap-6 sm:gap-8">
          <a
            href="https://www.facebook.com/nikola.talan.nutricionist"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Facebook"
            className="bg-white rounded-full p-3 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
          >
            <Facebook className="text-zinc-900 w-7 h-7" fill="black" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikola-talan-ba15b0188"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on LinkedIn"
            className="bg-white rounded-full p-3 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
          >
            <Linkedin className="text-zinc-900 w-7 h-7" fill="black" />
          </a>
          <a
            href="https://www.instagram.com/nikola_talan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="bg-white rounded-full p-3 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
          >
            <Instagram className="text-zinc-900 w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialCta;