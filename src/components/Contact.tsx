import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готов помочь разблокировать ваш WhatsApp прямо сейчас
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Позвонить</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Получите консультацию и начните процесс разблокировки
              </p>
              <div className="text-2xl font-bold text-primary">
                +7 (383) 218-80-48
              </div>
              <Button variant="call" size="lg" className="w-full" asChild>
                <a href="tel:+73832188048">
                  <Phone className="h-5 w-5" />
                  Позвонить сейчас
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Telegram</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Напишите в Telegram для быстрой связи
              </p>
              <div className="text-xl font-bold text-primary">
                @bosnsk
              </div>
              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a href="https://t.me/bosnsk" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Написать в Telegram
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-12">
          <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
            <Clock className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Время работы</h3>
              <p className="text-sm text-muted-foreground">Ежедневно 9:00 - 21:00</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
            <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Регион</h3>
              <p className="text-sm text-muted-foreground">Новосибирск, Россия</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};