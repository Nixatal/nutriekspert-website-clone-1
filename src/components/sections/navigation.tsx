"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O Meni" },
  { href: "/services", label: "Usluge" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled || isMenuOpen
            ? "bg-background-primary/95 backdrop-blur-sm shadow-lg shadow-silver/5"
            : "bg-transparent",
          isScrolled ? "h-[96px]" : "h-[128px]"
        )}
      >
        <div className="container flex h-full items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Nove-verzije-gradijenta-1760540125288.png"
              alt="NutriEkspert Logo"
              width={213}
              height={128}
              className={cn(
                "w-auto transition-all duration-300",
                isScrolled ? "h-16" : "h-24 md:h-[96px]"
              )}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-lg text-white transition-colors rounded-md hover:text-silver-light"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="ml-5 px-4 py-2 text-lg font-medium text-background-primary bg-gradient-to-r from-silver to-platinum rounded-md shadow-lg hover:brightness-110 transition-all"
            >
              Trgovina
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 text-white"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-[100] bg-background-primary transition-opacity duration-300 lg:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container flex h-full flex-col items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-9 right-4 p-2 text-white"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-white hover:text-silver-light transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 px-8 py-3 text-2xl font-medium text-background-primary bg-gradient-to-r from-silver to-platinum rounded-md shadow-lg hover:brightness-110 transition-all"
            >
              Trgovina
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}