"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Početna", href: "/" },
  { label: "O Meni", href: "/o-meni" },
  { label: "Usluge", href: "/usluge" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-primary/80 backdrop-blur-xl border-b border-gold/10">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/svgs/transparent-logo-1.svg"
              alt="NutriEkspert"
              className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-bold text-white">NutriEkspert</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-silver hover:text-white font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-copper group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-3 bg-gradient-to-r from-gold to-copper text-white font-semibold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-gold/40 transition-all duration-300">
              Zakaži Konzultaciju
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-copper/20 border border-gold/30 flex items-center justify-center"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gold" />
            ) : (
              <Menu className="w-6 h-6 text-gold" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-gold/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-silver hover:text-white font-medium transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-6 py-3 bg-gradient-to-r from-gold to-copper text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300">
              Zakaži Konzultaciju
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}