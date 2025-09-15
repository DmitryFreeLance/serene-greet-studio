import { MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Разблокировка WhatsApp</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональная помощь в восстановлении доступа к WhatsApp. 
              Более 5000 успешно разблокированных аккаунтов.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Контакты</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Телефон: +7 (383) 218-80-48</p>
              <p>Telegram: @bosnsk</p>
              <p>Время работы: 9:00 - 21:00</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Услуги</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Разблокировка WhatsApp</p>
              <p>Восстановление WhatsApp Business</p>
              <p>Экстренная помощь</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Разблокировка WhatsApp. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};