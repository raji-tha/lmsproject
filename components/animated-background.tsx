"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  type: "dot" | "book" | "page";
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        const types: Particle["type"][] = ["dot", "dot", "dot", "book", "page"];
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.3 - 0.2,
          opacity: Math.random() * 0.5 + 0.1,
          type: types[Math.floor(Math.random() * types.length)],
        });
      }
    };

    initParticles();

    const drawBookIcon = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      opacity: number
    ) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = "#f97316";
      ctx.lineWidth = 1;
      ctx.beginPath();
      // Book shape
      ctx.moveTo(x - size, y - size);
      ctx.lineTo(x + size, y - size);
      ctx.lineTo(x + size, y + size);
      ctx.lineTo(x - size, y + size);
      ctx.closePath();
      ctx.stroke();
      // Spine
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.lineTo(x, y + size);
      ctx.stroke();
      ctx.restore();
    };

    const drawPageIcon = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      opacity: number
    ) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = "#fb923c";
      ctx.lineWidth = 1;
      ctx.beginPath();
      // Page with corner fold
      ctx.moveTo(x - size, y - size);
      ctx.lineTo(x + size * 0.5, y - size);
      ctx.lineTo(x + size, y - size * 0.5);
      ctx.lineTo(x + size, y + size);
      ctx.lineTo(x - size, y + size);
      ctx.closePath();
      ctx.stroke();
      // Corner fold
      ctx.beginPath();
      ctx.moveTo(x + size * 0.5, y - size);
      ctx.lineTo(x + size * 0.5, y - size * 0.5);
      ctx.lineTo(x + size, y - size * 0.5);
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        if (particle.type === "dot") {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(249, 115, 22, ${particle.opacity})`;
          ctx.fill();
        } else if (particle.type === "book") {
          drawBookIcon(
            ctx,
            particle.x,
            particle.y,
            particle.size * 4,
            particle.opacity * 0.6
          );
        } else if (particle.type === "page") {
          drawPageIcon(
            ctx,
            particle.x,
            particle.y,
            particle.size * 3,
            particle.opacity * 0.5
          );
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />

      {/* Floating library images */}
      <div className="absolute inset-0">
        <div className="animate-float-slow absolute left-[5%] top-[10%] h-48 w-64 rotate-[-8deg] opacity-10 blur-sm">
          <Image
            src="/images/bg-bookshelf.jpg"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="animate-float-medium absolute right-[10%] top-[20%] h-40 w-56 rotate-[5deg] opacity-8 blur-sm">
          <Image
            src="/images/bg-library.jpg"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="animate-float-fast absolute bottom-[20%] left-[15%] h-36 w-48 rotate-[12deg] opacity-8 blur-sm">
          <Image
            src="/images/bg-lecturehall.jpg"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="animate-float-medium absolute bottom-[30%] right-[5%] h-44 w-60 rotate-[-5deg] opacity-10 blur-sm">
          <Image
            src="/images/bg-books1.jpg"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
    </div>
  );
}
