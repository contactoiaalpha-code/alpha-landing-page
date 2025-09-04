"use client";

import React, { useEffect, useRef } from "react";

interface MatrixRainProps {
  isActive: boolean;
}

/**
 * Componente que renderiza el efecto de lluvia de Matrix
 * Usa Canvas API para crear caracteres cayendo
 */
const MatrixRain: React.FC<MatrixRainProps> = ({ isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configurar canvas para pantalla completa
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Caracteres Matrix (japoneses, números, símbolos)
    const matrixChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Inicializar gotas
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Limpiar canvas con transparencia para efecto de desvanecimiento
      ctx.fillStyle = "rgba(0, 17, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#0F0";

      for (let i = 0; i < drops.length; i++) {
        // Seleccionar caracter aleatorio
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        
        // Renderizar caracter
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reiniciar gota aleatoriamente o cuando llegue al final
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Limpiar canvas al iniciar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Animar
    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 50,
        opacity: 0.6,
      }}
    />
  );
};

export default MatrixRain;
