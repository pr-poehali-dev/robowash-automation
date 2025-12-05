import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  const [showVideo, setShowVideo] = useState(false);
  
  const advantages = [
    { number: "50+", label: "Установленных моек", icon: "CheckCircle2" },
    { number: "24/7", label: "Техподдержка", icon: "Clock" },
    { number: "4+", label: "Лет на рынке", icon: "Award" },
    { number: "99%", label: "Довольных клиентов", icon: "Users" }
  ];

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      
      <div className="container mx-auto text-center max-w-4xl px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Увеличьте прибыль автомойки в 3 раза
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Роботизированные мойки с окупаемостью за 8-12 месяцев. Установка под ключ за 7 дней
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 animate-glow shadow-lg"
              onClick={onOpenForm}
            >
              <Icon name="ArrowRight" size={20} className="mr-2" />
              Рассчитать окупаемость
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/50 text-lg px-8 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all"
              onClick={() => setShowVideo(!showVideo)}
            >
              <Icon name={showVideo ? "X" : "Play"} size={20} className="mr-2" />
              {showVideo ? "Закрыть видео" : "Смотреть видео"}
            </Button>
          </div>

          {showVideo && (
            <div className="max-w-3xl mx-auto mb-8 animate-fade-in">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-primary/30">
                <video 
                  controls 
                  autoPlay
                  className="w-full aspect-video bg-black"
                  poster="https://cdn.poehali.dev/files/73b4fb79-af64-41a2-8614-1a9f7e6ba02e.png"
                >
                  <source src="https://cdn.poehali.dev/your-video.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает видео
                </video>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up">
          {advantages.map((item, idx) => (
            <Card key={idx} className="border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 glow-card bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 text-center">
                <Icon name={item.icon as any} className="text-primary mx-auto mb-2" size={28} />
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{item.number}</div>
                <div className="text-xs md:text-sm text-foreground/70 leading-tight">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;