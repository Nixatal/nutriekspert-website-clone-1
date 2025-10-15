"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const partners = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-1-2.png",
    alt: "Active Fitness Centar",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-2-3.png",
    alt: "klikaj.hr",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-3-4.png",
    alt: "Kinezis Fizioterapija",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-4-5.png",
    alt: "F@F",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-5-6.png",
    alt: "Partner 5",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-6-7.png",
    alt: "Partner 6",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f37c2340-72df-4d80-975e-c1069e7c98b7-nutriekspert-com/assets/images/portfolio-partners-7-8.png",
    alt: "Partner 7",
  },
];

const PartnersCarousel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number }[] = [];
    let starCount = 400;
    
    const resizeCanvas = () => {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      stars = [];
      starCount = Math.floor((canvas.clientWidth * canvas.clientHeight) / 2000);
      const focalLength = canvas.clientWidth;
      for (let i = 0; i < starCount; i++) {
        stars[i] = {
            x: Math.random() * canvas.clientWidth - canvas.clientWidth / 2,
            y: Math.random() * canvas.clientHeight - canvas.clientHeight / 2,
            z: Math.random() * focalLength,
        };
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, false);

    const draw = () => {
      if (!ctx || !canvas) return;
      const focalLength = canvas.clientWidth;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";

      ctx.save();
      ctx.translate(canvas.clientWidth / 2, canvas.clientHeight / 2);

      for (let i = 0; i < starCount; i++) {
        let star = stars[i];
        star.z -= 0.5;

        if (star.z <= 0) {
          star.x = Math.random() * canvas.clientWidth - canvas.clientWidth / 2;
          star.y = Math.random() * canvas.clientHeight - canvas.clientHeight / 2;
          star.z = focalLength;
        }

        const k = focalLength / star.z;
        const px = star.x * k;
        const py = star.y * k;

        const size = (1 - star.z / focalLength) * 1.5;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const animate = () => {
      draw();
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas, false);
    };
  }, []);

  return (
    <section
      id="partners-section"
      className="bg-background-primary relative pt-8 pb-16 overflow-x-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      />
      <div className="absolute inset-0 bg-background-primary/50" />
      
      <style>{`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-${partners.length} * (300px + 2rem))); }
          }
      `}</style>
      
      <div className="relative z-10">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
            Moji Partneri
          </h2>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-[infinite-scroll_40s_linear_infinite]">
              {partners.map((partner, index) => (
                <li key={index} className="flex-shrink-0 w-[300px] h-[200px] bg-card rounded-lg shadow-lg flex items-center justify-center p-6">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={200}
                    height={100}
                    className="object-contain w-full h-full filter invert"
                  />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-[infinite-scroll_40s_linear_infinite]" aria-hidden="true">
              {partners.map((partner, index) => (
                <li key={index} className="flex-shrink-0 w-[300px] h-[200px] bg-card rounded-lg shadow-lg flex items-center justify-center p-6">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={200}
                    height={100}
                    className="object-contain w-full h-full filter invert"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;