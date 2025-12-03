import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
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
          <div className="flex flex-wrap gap-4 justify-center">
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
              onClick={() => window.open('https://dzen.ru/video/watch/64ac2d3a1adca932f68feacd?share_to=link', '_blank')}
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
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