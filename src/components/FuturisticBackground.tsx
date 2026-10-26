import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
}

interface ConnectionPulse {
  fromNode: number;
  toNode: number;
  progress: number; // 0 to 1
  speed: number;
  color: string;
}

interface FloatingSymbol {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  rotation: number;
  vRot: number;
}

export const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Detect touch / coarse pointer devices to simplify
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNetwork();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Mouse listeners for desktop
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    if (!isTouch) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    // Colors matching dark pink & neon pink theme
    const colors = [
      'rgba(244, 63, 114, ',  // Neon Hot Pink
      'rgba(236, 72, 153, ',  // Electric Pink
      'rgba(217, 70, 239, ',  // Rich Magenta
      'rgba(251, 113, 133, ', // Bright Coral-Pink highlight
    ];

    // Developer & AI symbols to float subtly in the background
    const symbolTokens = ['{ }', '=>', 'async', 'n8n', 'AI', '01', '< >', 'λ', 'API', '[ ]'];

    let particles: Particle[] = [];
    let pulses: ConnectionPulse[] = [];
    let symbols: FloatingSymbol[] = [];

    const initNetwork = () => {
      // Density-based node count
      const nodeCount = isTouch ? 30 : Math.min(Math.floor((width * height) / 22000), 65);
      particles = [];

      for (let i = 0; i < nodeCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.35),
          vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.35),
          radius: Math.random() * 1.8 + 1,
          baseAlpha: Math.random() * 0.35 + 0.25,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      // Initialize data flow pulses
      pulses = [];
      const pulseCount = isTouch ? 4 : 10;
      for (let p = 0; p < pulseCount; p++) {
        const from = Math.floor(Math.random() * nodeCount);
        const to = (from + 1 + Math.floor(Math.random() * (nodeCount - 1))) % nodeCount;
        pulses.push({
          fromNode: from,
          toNode: to,
          progress: Math.random(),
          speed: Math.random() * 0.007 + 0.003,
          color: colors[p % colors.length],
        });
      }

      // Initialize floating developer tokens
      symbols = [];
      const symbolCount = isTouch ? 4 : 8;
      for (let s = 0; s < symbolCount; s++) {
        symbols.push({
          text: symbolTokens[s % symbolTokens.length],
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          alpha: Math.random() * 0.08 + 0.06,
          size: Math.floor(Math.random() * 4 + 11),
          rotation: (Math.random() - 0.5) * 0.4,
          vRot: (Math.random() - 0.5) * 0.002,
        });
      }
    };

    initNetwork();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const maxConnectionDist = isTouch ? 110 : 140;
      const mouseDistThreshold = 180;
      const mouse = mouseRef.current;

      // 1. Draw subtle cursor spotlight on desktop (Neon Pink / Magenta)
      if (!isTouch && mouse.active) {
        const glowGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          260
        );
        glowGradient.addColorStop(0, 'rgba(244, 63, 114, 0.11)');
        glowGradient.addColorStop(0.5, 'rgba(217, 70, 239, 0.05)');
        glowGradient.addColorStop(1, 'rgba(14, 3, 11, 0)');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 260, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw floating dev & AI symbols with subtle rose/pink tint
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < symbols.length; i++) {
        const sym = symbols[i];
        sym.x += sym.vx;
        sym.y += sym.vy;
        sym.rotation += sym.vRot;

        if (sym.x < -40) sym.x = width + 40;
        if (sym.x > width + 40) sym.x = -40;
        if (sym.y < -40) sym.y = height + 40;
        if (sym.y > height + 40) sym.y = -40;

        ctx.save();
        ctx.translate(sym.x, sym.y);
        ctx.rotate(sym.rotation);
        ctx.font = `600 ${sym.size}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `rgba(244, 114, 182, ${sym.alpha})`;
        ctx.fillText(sym.text, 0, 0);
        ctx.restore();
      }

      // 3. Update & render network particles with neon pink / magenta glow
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion
        p.x += p.vx;
        p.y += p.vy;

        // Screen boundary wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle gentle mouse attraction
        if (!isTouch && mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouseDistThreshold && dist > 1) {
            const force = (1 - dist / mouseDistThreshold) * 0.08;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Pulse calculation
        p.pulsePhase += p.pulseSpeed;
        const currentAlpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.15;

        // Draw particle dot with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.1, currentAlpha)})`;
        ctx.shadowColor = `${p.color}0.85)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      }

      // 4. Interconnected network lines (neon pink / magenta tint)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);

          if (dist < maxConnectionDist) {
            const lineAlpha = (1 - dist / maxConnectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(217, 70, 239, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw line from particle to cursor if near (Neon Pink)
        if (!isTouch && mouse.active) {
          const distToMouse = Math.hypot(mouse.x - particles[i].x, mouse.y - particles[i].y);
          if (distToMouse < mouseDistThreshold) {
            const mouseLineAlpha = (1 - distToMouse / mouseDistThreshold) * 0.32;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(244, 63, 114, ${mouseLineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 5. Draw data pulses traveling along connections (Neon Pink / Hot Pink glow)
      for (let k = 0; k < pulses.length; k++) {
        const pulse = pulses[k];
        const n1 = particles[pulse.fromNode];
        const n2 = particles[pulse.toNode];

        if (!n1 || !n2) continue;

        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.fromNode = Math.floor(Math.random() * particles.length);
          pulse.toNode = (pulse.fromNode + 1 + Math.floor(Math.random() * (particles.length - 1))) % particles.length;
        }

        const px = n1.x + (n2.x - n1.x) * pulse.progress;
        const py = n1.y + (n2.y - n1.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `${pulse.color}0.95)`;
        ctx.shadowColor = `${pulse.color}0.95)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (!isTouch) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Deep Dark Pink & Magenta Base Canvas */}
      <div className="absolute inset-0 bg-[#0d020a]" />

      {/* 2. Soft, Large Glowing Neon Pink, Rich Magenta & Hot Pink Floating Orbs */}
      <div className="absolute -top-32 -left-32 w-[620px] h-[620px] bg-pink-600/22 rounded-full blur-[130px] animate-orb-1" />
      <div className="absolute top-1/3 -right-40 w-[680px] h-[680px] bg-fuchsia-600/20 rounded-full blur-[140px] animate-orb-2" />
      <div className="absolute -bottom-40 left-1/4 w-[540px] h-[540px] bg-rose-600/16 rounded-full blur-[130px] animate-orb-3" />
      <div className="absolute top-2/3 right-1/4 w-[420px] h-[420px] bg-pink-500/18 rounded-full blur-[120px] animate-orb-1" />

      {/* 3. Faint Digital Perspective Grid with Pink/Magenta Tint */}
      <div className="absolute inset-0 bg-digital-grid opacity-65" />

      {/* 4. Vignette / Depth Falloff */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center,_transparent_40%,_#0b0209_95%] opacity-90" />

      {/* 5. Moving Light Streaks in Neon Pink & Magenta */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/45 to-transparent animate-streak-1" />
      <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent animate-streak-2" />
      <div className="absolute top-5/6 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-400/35 to-transparent animate-streak-1" style={{ animationDelay: '9s' }} />

      {/* 6. High-Performance Particle Field & Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
};
