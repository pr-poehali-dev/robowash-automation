import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

interface SectionsProps {
  activeService: number;
  setActiveService: (index: number) => void;
}

const Sections = ({ activeService, setActiveService }: SectionsProps) => {
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

  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <>
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
              <Card key={idx} className="group glow-card transition-all duration-300 border-2 border-primary/30 hover:border-primary overflow-hidden flex flex-col bg-card/50 backdrop-blur-sm">
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
                className={`cursor-pointer transition-all duration-300 border-2 bg-card/50 backdrop-blur-sm ${
                  activeService === idx 
                    ? 'border-primary scale-105 glow-card shadow-[0_0_30px_rgba(14,165,233,0.4)]' 
                    : 'border-primary/30 hover:border-primary/50 glow-card'
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
            <Card className="border-2 border-primary/30 glow-card hover:border-primary transition-all bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Icon name="Percent" className="text-primary mb-3" size={32} />
                <h4 className="font-bold mb-2">Финансовые решения</h4>
                <p className="text-sm text-foreground/70">Лизинг на выгодных условиях</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-secondary/30 hover:border-secondary transition-all bg-card/50 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
              <CardContent className="p-6">
                <Icon name="GraduationCap" className="text-secondary mb-3" size={32} />
                <h4 className="font-bold mb-2">Обучение персонала</h4>
                <p className="text-sm text-foreground/70">Инструкции на русском языке и практическое обучение</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/30 hover:border-accent transition-all bg-card/50 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]">
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
            <Card className="border-2 border-primary/30 glow-card bg-card/50 backdrop-blur-sm">
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
                      <a href="https://t.me/robowash_official" target="_blank" rel="noopener noreferrer">
                        <Icon name="Send" size={20} />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary" asChild>
                      <a href="https://vk.com/robowash_rus" target="_blank" rel="noopener noreferrer">
                        <Icon name="MessageCircle" size={20} />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary" asChild>
                      <a href="https://www.youtube.com/@robowash" target="_blank" rel="noopener noreferrer">
                        <Icon name="Play" size={20} />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/30 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form className="space-y-4" onSubmit={handleContactFormSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      name="contact-name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors bg-background"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Город</label>
                    <input 
                      type="text" 
                      name="contact-city"
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors bg-background"
                      placeholder="Ваш город"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      name="contact-phone"
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors bg-background"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6 animate-glow shadow-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;