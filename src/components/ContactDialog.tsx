import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

interface ContactDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  formData: { name: string; city: string; phone: string };
  setFormData: (data: { name: string; city: string; phone: string }) => void;
}

const ContactDialog = ({ isOpen, onOpenChange, formData, setFormData }: ContactDialogProps) => {
  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    
    if (digits.length === 0) return '';
    if (digits.length <= 1) return `+${digits}`;
    if (digits.length <= 4) return `+${digits.slice(0, 1)} (${digits.slice(1)}`;
    if (digits.length <= 7) return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 9) return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const isValidPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 11 && digits.startsWith('7');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidPhone(formData.phone)) {
      toast.error('Неверный формат номера', {
        description: 'Введите корректный российский номер телефона',
        duration: 3000,
      });
      return;
    }
    
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
        onOpenChange(false);
        setFormData({ name: '', city: '', phone: '' });
      } else {
        toast.error('Ошибка при отправке', {
          description: 'Попробуйте позже или позвоните нам: +7 (927) 454-32-32',
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Ошибка при отправке', {
        description: 'Попробуйте позже или позвоните нам: +7 (927) 454-32-32',
        duration: 5000,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Рассчитать окупаемость</DialogTitle>
          <DialogDescription>
            Получите бесплатный бизнес-план и смету за 24 часа
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
              onChange={handlePhoneChange}
              className="mt-2"
              maxLength={18}
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg animate-glow">
            <Icon name="Calculator" size={20} className="mr-2" />
            Получить расчёт прибыли
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;