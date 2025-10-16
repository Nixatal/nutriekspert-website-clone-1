import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background-secondary text-white border-t border-silver/10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Column 1: Logo, Tagline, Socials */}
          <div className="lg:col-span-5 flex flex-col space-y-6 items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center space-x-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/cropped-transparent-logo-13.png"
                alt="NutriEkspert Logo"
                width={50}
                height={50}
                className="h-auto"
              />
              <span className="text-3xl font-bold">NutriEkspert</span>
            </div>
            <p className="text-silver-light max-w-xs">
              Posljednji plan prehrane koji ces trebati.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nutriekspert" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-silver-light hover:text-platinum transition-colors">
                <Facebook size={24} />
              </a>
               <a href="https://www.linkedin.com/in/nikola-talan-45a304a5/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-silver-light hover:text-platinum transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/nutriekspert" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-silver-light hover:text-platinum transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: Business Info */}
          <div className="lg:col-span-3 space-y-4 text-center lg:text-left">
            <h3 className="font-semibold text-white tracking-widest text-sm uppercase">PODACI O OBRTU</h3>
            <ul className="space-y-3 text-silver-light">
              <li>Nutriekspert</li>
              <li>Obrt za nutricionizam</li>
              <li>Vl. Nikola Talan</li>
              <li>Ulica Josipa Broza 66, Ivanovec</li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <h3 className="font-semibold text-white tracking-widest text-sm uppercase">Kontakt</h3>
            <ul className="space-y-3 text-silver-light">
              <li className="flex items-center space-x-3 justify-center lg:justify-start">
                <User size={20} />
                <span>Nikola Talan</span>
              </li>
              <li className="flex items-center space-x-3 justify-center lg:justify-start">
                <Mail size={20} />
                <a href="mailto:nikola@nutriekspert.com" className="hover:text-platinum transition-colors">nikola@nutriekspert.com</a>
              </li>
              <li className="flex items-center space-x-3 justify-center lg:justify-start">
                <Phone size={20} />
                <a href="tel:+385919496590" className="hover:text-platinum transition-colors">+385 91 949 6590</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-silver/10 pt-8 text-center text-silver-light text-sm">
          <p>
            Copyright © 2024 NutriEkspert | Powered by NutriEkspert™
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;