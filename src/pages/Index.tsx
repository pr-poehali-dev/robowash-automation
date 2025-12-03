import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";

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

  const equipment = [
    {
      name: "RoboWash-Car",
      image: "https://cdn.poehali.dev/files/48697cc8-281c-44fa-a95a-633495e55baa.jpg",
      description: "Полностью автоматическая роботизированная мойка для легковых автомобилей",
      features: ["Мойка днища и колёс", "Активная пена", "Воск и эмульсия", "Турбо-сушка"]
    },
    {
      name: "RoboWash-Bus",
      image: "https://cdn.poehali.dev/files/be91b3ee-ea91-4d8f-af66-d5da38a4a365.jpg",
      description: "Мощная портальная мойка для автобусов и крупногабаритного транспорта",
      features: ["Увеличенный портал", "Высокие щетки", "Мощная система мойки", "Автоматическая сушка"]
    },
    {
      name: "RoboWash-Self",
      image: "https://cdn.poehali.dev/files/34482b7a-213b-4fab-8512-c048dafa2cda.jpeg",
      description: "Мойка самообслуживания с терминалом оплаты и удобными постами",
      features: ["Круглосуточная работа", "Безналичная оплата", "5 программ мойки", "Датчики контроля"]
    }
  ];

  const services = [
    {
      icon: "Hammer",
      title: "Производство",
      description: "Собственное производство с контролем качества. Гарантия 1 год на всё оборудование"
    },
    {
      icon: "Wrench",
      title: "Установка за 7 дней",
      description: "Быстрый монтаж и запуск. Помощь с документами и разрешениями"
    },
    {
      icon: "Settings",
      title: "Поддержка 24/7",
      description: "Удалённая диагностика и выезд специалиста в течение 24 часов"
    },
    {
      icon: "TrendingUp",
      title: "Бизнес под ключ",
      description: "От выбора участка до первой прибыли. Обучение персонала в подарок"
    }
  ];

  const advantages = [
    { number: "50+", label: "Установленных моек", icon: "CheckCircle2" },
    { number: "24/7", label: "Техподдержка", icon: "Clock" },
    { number: "4+", label: "Лет на рынке", icon: "Award" },
    { number: "99%", label: "Довольных клиентов", icon: "Users" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Modern Animated Background with Parallax */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
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

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        
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
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
                onClick={() => setIsFormOpen(true)}
              >
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Рассчитать окупаемость
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 text-lg px-8"
                onClick={() => window.open('https://dzen.ru/video/watch/64ac2d3a1adca932f68feacd?share_to=link', '_blank')}
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up">
            {advantages.map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:scale-105">
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

      <section id="about" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/8 via-transparent to-accent/8 -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">⭐ НАДЁЖНЫЙ ПРОИЗВОДИТЕЛЬ</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают RoboWash?</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              50+ запущенных моек в России. Полный цикл от производства до сервиса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">Получите готовый бизнес за 7 дней</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Собственное производство</h4>
                    <p className="text-foreground/70 text-sm">Контролируем качество на каждом этапе. Гарантия 1 год на все оборудование</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Быстрая установка</h4>
                    <p className="text-foreground/70 text-sm">Монтаж и запуск мойки за 7 дней. Помогаем с получением всех документов</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Поддержка 24/7</h4>
                    <p className="text-foreground/70 text-sm">Удалённая диагностика и выезд специалиста в течение 24 часов</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span className="font-medium">Гарантия 1 год</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                  <Icon name="Zap" size={20} className="text-secondary" />
                  <span className="font-medium">Быстрый монтаж</span>
                </div>
                <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                  <Icon name="Headphones" size={20} className="text-accent" />
                  <span className="font-medium">24/7 поддержка</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <Icon name="Target" className="text-primary mb-3" size={40} />
                  <h4 className="font-bold mb-2">Точность</h4>
                  <p className="text-sm text-foreground/70">Датчики определяют габариты и позицию авто на мойке</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-secondary transition-all">
                <CardContent className="p-6">
                  <Icon name="Sparkles" className="text-secondary mb-3" size={40} />
                  <h4 className="font-bold mb-2">Качество</h4>
                  <p className="text-sm text-foreground/70">Мойка под разными углами с высоким давлением</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-accent transition-all">
                <CardContent className="p-6">
                  <Icon name="Battery" className="text-accent mb-3" size={40} />
                  <h4 className="font-bold mb-2">Экономия</h4>
                  <p className="text-sm text-foreground/70">Контроль моющих средств</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <Icon name="Cpu" className="text-primary mb-3" size={40} />
                  <h4 className="font-bold mb-2">Своё ПО</h4>
                  <p className="text-sm text-foreground/70">Гибкие настройки мойки</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/8 to-transparent -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">💎 ПРЕМИУМ ОБОРУДОВАНИЕ</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите свою мойку</h2>
            <p className="text-xl text-foreground/70">От компактных станций до промышленных комплексов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {equipment.map((item, idx) => (
              <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary overflow-hidden flex flex-col">
                <div className="overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-foreground/70 text-sm mb-3">{item.description}</p>
                  <div className="space-y-1.5 flex-grow">
                    {item.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2">
                        <Icon name="Check" size={14} className="text-primary flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/8 via-transparent to-primary/8 -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">🚀 ВСЁ ВКЛЮЧЕНО</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Бизнес под ключ</h2>
            <p className="text-xl text-foreground/70">От проекта до первой прибыли — мы делаем всё</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  activeService === idx 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'hover:border-primary/50'
                }`}
                onClick={() => setActiveService(idx)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    activeService === idx 
                      ? 'bg-gradient-to-br from-primary to-secondary' 
                      : 'bg-muted'
                  }`}>
                    <Icon 
                      name={service.icon as any} 
                      size={32} 
                      className={activeService === idx ? 'text-white' : 'text-foreground/70'}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <Icon name="Percent" className="text-primary mb-3" size={32} />
                <h4 className="font-bold mb-2">Финансовые решения</h4>
                <p className="text-sm text-foreground/70">Лизинг на выгодных условиях</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <Icon name="GraduationCap" className="text-secondary mb-3" size={32} />
                <h4 className="font-bold mb-2">Обучение персонала</h4>
                <p className="text-sm text-foreground/70">Инструкции на русском языке и практическое обучение</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <Icon name="BarChart" className="text-accent mb-3" size={32} />
                <h4 className="font-bold mb-2">Программы лояльности</h4>
                <p className="text-sm text-foreground/70">Онлайн-отчёты и интеграция с терминалами оплаты</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-foreground/70">Ответим на все вопросы и рассчитаем проект за 1 день</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Телефон</div>
                      <a href="tel:+79274543232" className="text-primary hover:underline">+7 (927) 454-32-32</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-secondary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a href="mailto:info@robowash.ru" className="text-secondary hover:underline">info@robowash.ru</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Адрес</div>
                      <div className="text-foreground/70">Республика Татарстан, г. Елабуга, Окружное шоссе 11б</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <div className="font-medium mb-3">Мы в соцсетях</div>
                  <div className="flex gap-3">
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary" asChild>
                      <a href="https://www.instagram.com/robowash_rus" target="_blank" rel="noopener noreferrer">
                        <Icon name="Instagram" size={20} />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary" asChild>
                      <a href="https://t.me/robowash_rus" target="_blank" rel="noopener noreferrer">
                        <Icon name="Send" size={20} />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary" asChild>
                      <a href="https://dzen.ru/robowash" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                        </svg>
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary" asChild>
                      <a href="https://vk.com/robowash_rus" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.39 14.74c-.26.38-.74.53-1.07.55h-1.47c-.5 0-.97-.27-1.42-.72-.37-.37-.7-.7-1.04-.7-.06 0-.12.01-.18.03-.44.14-.99.94-.99 2.14 0 .46-.37.83-.83.83h-1.21c-.85 0-3.23-.13-5.42-2.36-2.71-2.76-5.31-8.27-5.33-8.32-.17-.41.02-.89.43-1.06.09-.04.19-.06.29-.06h1.98c.38 0 .72.26.82.63.11.43.31 1.03.6 1.73.74 1.79 1.35 2.64 1.85 2.64.09 0 .17-.03.25-.08.67-.44.57-3.19.54-3.72 0-.17-.01-.96-.39-1.38-.26-.29-.66-.38-1.01-.44.26-.35.63-.53 1.17-.53h2.09c.49 0 .67.27.67.82v4.38c0 .49.22.62.36.62.28 0 .6-.19 1.42-1.01 1.18-1.18 2.02-3.01 2.04-3.06.12-.24.35-.42.62-.42h1.98c.59 0 .73.3.62.71-.18.66-.83 1.79-1.45 2.58l-.63.83c-.25.32-.31.48 0 .84.22.27.96.95 1.45 1.53.88.99 1.55 1.82 1.72 2.4.18.57-.09.86-.66.86z"/>
                        </svg>
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary" asChild>
                      <a href="https://www.youtube.com/@robowash_rus" target="_blank" rel="noopener noreferrer">
                        <Icon name="Youtube" size={20} />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form className="space-y-4" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = {
                    name: (form.elements.namedItem('contact-name') as HTMLInputElement).value,
                    city: (form.elements.namedItem('contact-city') as HTMLInputElement).value,
                    phone: (form.elements.namedItem('contact-phone') as HTMLInputElement).value,
                  };

                  if (!formData.name || !formData.city || !formData.phone) {
                    toast.error('Заполните все поля');
                    return;
                  }

                  try {
                    const response = await fetch('https://functions.poehali.dev/e54a91ec-3eda-4c5b-a862-03cc22f670d2', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(formData),
                    });

                    const result = await response.json();

                    if (response.ok) {
                      toast.success('Заявка отправлена!', {
                        description: 'Мы свяжемся с вами в ближайшее время',
                        duration: 5000,
                      });
                      form.reset();
                    } else {
                      toast.error('Ошибка при отправке', {
                        description: 'Попробуйте позже или позвоните нам: +7 (927) 454-32-46',
                        duration: 5000,
                      });
                    }
                  } catch (error) {
                    console.error('Error:', error);
                    toast.error('Ошибка при отправке', {
                      description: 'Попробуйте позже или позвоните нам: +7 (927) 454-32-46',
                      duration: 5000,
                    });
                  }
                }}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      name="contact-name"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Город</label>
                    <input 
                      type="text" 
                      name="contact-city"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors"
                      placeholder="Ваш город"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      name="contact-phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>


                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Рассчитать окупаемость</DialogTitle>
            <DialogDescription>
              Получите бесплатный бизнес-план и смету за 24 часа
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={async (e) => {
            e.preventDefault();
            
            try {
              const response = await fetch('https://functions.poehali.dev/e54a91ec-3eda-4c5b-a862-03cc22f670d2', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
              });
              
              const result = await response.json();
              
              if (response.ok) {
                toast.success(`Спасибо, ${formData.name}!`, {
                  description: 'Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.',
                  duration: 5000,
                });
                setIsFormOpen(false);
                setFormData({ name: '', city: '', phone: '' });
              } else {
                toast.error('Ошибка при отправке', {
                  description: 'Попробуйте позже или позвоните нам: +7 (927) 454-32-32',
                  duration: 5000,
                });
              }
            } catch (error) {
              console.error('Error:', error);
              toast.error('Ошибка при отправке', {
                description: 'Попробуйте позже или позвоните нам: +7 (927) 454-32-32',
                duration: 5000,
              });
            }
          }}>
            <div>
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                type="text"
                required
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="city">Город *</Label>
              <Input
                id="city"
                type="text"
                required
                placeholder="Ваш город"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="phone">Номер телефона *</Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2"
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Получить расчёт прибыли
            </Button>
          </form>
        </DialogContent>
      </Dialog>

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

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Telegram Button */}
        <a
          href="https://t.me/+79274543246"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#0088cc] hover:bg-[#0077b5] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Написать в Telegram"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.098.155.23.171.324.016.094.037.308.02.475z"/>
          </svg>
        </a>
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/79274543246"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Написать в WhatsApp"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Index;