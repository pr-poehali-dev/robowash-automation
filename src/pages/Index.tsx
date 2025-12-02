import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeService, setActiveService] = useState(0);

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
      name: "RoboWash Truck",
      image: "https://cdn.poehali.dev/projects/13dbc0b0-e959-4466-b7fd-12ab07142fb1/files/b5f8ebc5-f2ae-4309-b699-598ef45f6bb0.jpg",
      description: "Мощное оборудование для грузового транспорта",
      features: ["Увеличенный портал", "Высокое давление", "Система рециркуляции", "Удалённая диагностика"]
    }
  ];

  const services = [
    {
      icon: "Hammer",
      title: "Производство",
      description: "Выпускаем роботизированные мойки с собственным ПО и системами управления"
    },
    {
      icon: "Wrench",
      title: "Установка",
      description: "Монтаж и настройка оборудования с гарантией качества работ"
    },
    {
      icon: "Settings",
      title: "Обслуживание",
      description: "Техподдержка 24/7, удалённая диагностика и исправление ошибок"
    },
    {
      icon: "TrendingUp",
      title: "Бизнес под ключ",
      description: "Полный цикл создания автомоечного комплекса от проекта до запуска"
    }
  ];

  const advantages = [
    { number: "50+", label: "Установленных моек", icon: "CheckCircle2" },
    { number: "24/7", label: "Техподдержка", icon: "Clock" },
    { number: "4+", label: "Лет на рынке", icon: "Award" },
    { number: "99%", label: "Довольных клиентов", icon: "Users" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Droplets" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              RoboWash
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О компании</a>
            <a href="#equipment" className="text-foreground/80 hover:text-primary transition-colors">Оборудование</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Роботизированные автомойки нового поколения
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Производство, установка и обслуживание автоматических моек для вашего бизнеса
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-2 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up">
            {advantages.map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Icon name={item.icon as any} className="text-primary mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-primary mb-1">{item.number}</div>
                  <div className="text-sm text-foreground/70">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О компании RoboWash</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Научно-производственное объединение с базой в Елабуге (Республика Татарстан)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Наша миссия</h3>
              <p className="text-foreground/80 mb-4">
                RoboWash специализируется на разработке, производстве, поставке, установке и обслуживании 
                автоматических моек и сопутствующего оборудования.
              </p>
              <p className="text-foreground/80 mb-6">
                Мы предлагаем решения для бизнеса, включая полный цикл создания автомоечного комплекса «под ключ» 
                с собственным программным обеспечением и системами управления.
              </p>
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

      <section id="equipment" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наше оборудование</h2>
            <p className="text-xl text-foreground/70">Современные решения для любого типа транспорта</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((item, idx) => (
              <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary overflow-hidden">
                <div className="overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-foreground/70 mb-4">{item.description}</p>
                  <div className="space-y-2 mb-4">
                    {item.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-foreground/70">Полный цикл от разработки до обслуживания</p>
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
                <p className="text-sm text-foreground/70">Рассрочка, кредит или лизинг на выгодных условиях</p>
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
            <p className="text-xl text-foreground/70">Готовы ответить на все ваши вопросы</p>
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
                      <div className="text-foreground/70">г. Елабуга, Республика Татарстан</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <div className="font-medium mb-3">Мы в соцсетях</div>
                  <div className="flex gap-3">
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                      <Icon name="Send" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                      <Icon name="Youtube" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                      <Icon name="MessageCircle" size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Расскажите о вашем проекте"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Droplets" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">RoboWash</span>
              </div>
              <p className="text-background/70 text-sm">
                Роботизированные автомойки нового поколения
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
                <li><a href="#" className="hover:text-background transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>+7 (927) 454-32-32</li>
                <li>info@robowash.ru</li>
                <li>г. Елабуга, РТ</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-background/20 text-center text-sm text-background/70">
            <p>© 2024 RoboWash. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;