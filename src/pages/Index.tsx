import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import Sections from "@/components/Sections";
import ContactDialog from "@/components/ContactDialog";

const Index = () => {
  const [activeService, setActiveService] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', city: '', phone: '' });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground scrollY={scrollY} />
      <Toaster position="top-center" richColors />
      
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/73b4fb79-af64-41a2-8614-1a9f7e6ba02e.png" 
              alt="RoboWash Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-primary">
              RoboWash
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О компании</a>
            <a href="#equipment" className="text-foreground/80 hover:text-primary transition-colors">Оборудование</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-xs md:text-sm"
            asChild
          >
            <a href="tel:+79274543232">
              <Icon name="Phone" size={16} className="sm:mr-1" />
              <span className="hidden sm:inline">Связаться</span>
            </a>
          </Button>
        </div>
      </nav>

      <HeroSection onOpenForm={() => setIsFormOpen(true)} />
      <Sections activeService={activeService} setActiveService={setActiveService} />
      <ContactDialog 
        isOpen={isFormOpen} 
        onOpenChange={setIsFormOpen} 
        formData={formData} 
        setFormData={setFormData} 
      />

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/73b4fb79-af64-41a2-8614-1a9f7e6ba02e.png" 
                  alt="RoboWash Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold">RoboWash</span>
              </div>
              <p className="text-background/70 text-sm">
                Автоматические мойки нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#about" className="hover:text-background transition-colors">О нас</a></li>
                <li><a href="#equipment" className="hover:text-background transition-colors">Оборудование</a></li>
                <li><a href="#services" className="hover:text-background transition-colors">Услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#contact" className="hover:text-background transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>+7 (927) 454-32-32</li>
                <li>info@robowash.ru</li>
                <li>Республика Татарстан, г.Елабуга, Окружное шоссе 11б</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-background/20 text-center text-sm text-background/70">
            <p>© 2020 RoboWash. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://t.me/robowash_official"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform animate-glow"
        >
          <Icon name="Send" size={24} />
        </a>
        <a
          href="https://wa.me/79274543232"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        >
          <Icon name="MessageCircle" size={24} />
        </a>
      </div>
    </div>
  );
};

export default Index;
