import { useMemo } from 'react';

interface AnimatedBackgroundProps {
  scrollY: number;
}

const AnimatedBackground = ({ scrollY }: AnimatedBackgroundProps) => {
  const stars = useMemo(() => {
    const result = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = Math.random() * 2 + 2;
      result.push(
        <div
          key={`star-${i}`}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }
    return result;
  }, []);

  const particles = useMemo(() => {
    const result = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 40 + 20;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 6;
      const duration = Math.random() * 4 + 4;
      result.push(
        <div
          key={`particle-${i}`}
          className="particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }
    return result;
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {stars}
      {particles}
      
      <div 
        className="absolute top-0 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse transition-transform duration-300"
        style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)` }}
      />
      <div 
        className="absolute top-40 right-20 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000 transition-transform duration-300"
        style={{ transform: `translate(${-scrollY * 0.12}px, ${scrollY * 0.08}px)` }}
      />
      <div 
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse delay-2000 transition-transform duration-300"
        style={{ transform: `translate(${scrollY * 0.08}px, ${-scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl transition-transform duration-300"
        style={{ transform: `translate(${-scrollY * 0.05}px, ${scrollY * 0.12}px)` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95" />
    </div>
  );
};

export default AnimatedBackground;
