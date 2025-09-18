import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Users, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Обо мне
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Меня зовут <span className="font-semibold text-foreground">Павел Узданов</span>, 
                  и я профессионально занимаюсь разблокировкой аккаунтов Вацап уже более 2 лет.
                </p>
                <p>
                  За это время я помог восстановить более <span className="font-semibold text-primary">5000 аккаунтов</span>, 
                  и все номера активны и радуют своих владельцев. <span className="font-semibold text-foreground">ВАЖНО!</span> Ни одного поражения за все время работы!
                </p>
                <p>
                  Я не восстанавливаю аккаунты, переписываясь с поддержкой. У меня есть 
                  <span className="font-semibold text-primary"> УНИКАЛЬНАЯ</span>, специально разработанная программа, 
                  которой нет ни у кого. Благодаря ей статистика восстановления аккаунта составляет 100%.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold text-foreground">5000+</div>
                  <div className="text-sm text-muted-foreground">Восстановленных аккаунтов</div>
                </div>
              </Card>
              <Card className="p-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Award className="h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Успешных восстановлений</div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="tel:+73832188048">
                  <MessageCircle className="h-5 w-5" />
                  Позвонить
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://t.me/bosnsk" target="_blank" rel="noopener noreferrer">
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Уникальная методика</h3>
                </div>
                <p className="text-muted-foreground">
                  Восстанавливаю сложные аккаунты, даже тогда, когда это кажется невозможным! 
                  Разработанная программа помогает восстановить доступ как для классического 
                  мессенджера, так и для Вацап Business.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-accent/50">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Гарантия результата</h3>
                <p className="text-muted-foreground">
                  Я нацелен на результат, поэтому верну деньги, если не разблокирую 
                  ваш Вацап за 70 дней. Восстанавливаю даже аккаунты, заблокированные 
                  навсегда без возможности обжалования.
                </p>
                <div className="text-sm text-primary font-medium">
                  ✓ Более 2 лет опыта
                  <br />
                  ✓ 0 неудачных случаев
                  <br />
                  ✓ Работа с любыми блокировками
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};