import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "Сколько времени занимает разблокировка?",
      answer: "В среднем процесс восстановления занимает 20 дней. В некоторых случаях удается разблокировать аккаунт быстрее, а сложные случаи могут потребовать до 30 дней.",
    },
    {
      question: "Гарантируете ли вы результат?",
      answer: "Да, я предоставляю 100% гарантию восстановления. За 2 года работы я восстановил доступ ко всем аккаунтам без исключения. Если не смогу разблокировать ваш WhatsApp, верну деньги полностью.",
    },
    {
      question: "Сохранятся ли мои сообщения и контакты?",
      answer: "Да, после разблокировки все ваши контакты, группы и история сообщений останутся на месте. Я восстанавливаю полный доступ к аккаунту без потери данных.",
    },
    {
      question: "Какую информацию нужно предоставить?",
      answer: "Для начала работы мне понадобится ваш номер телефона, привязанный к заблокированному аккаунту, и краткое описание обстоятельств блокировки.",
    },
    {
      question: "Работаете ли вы с бизнес-аккаунтами?",
      answer: "Да, я специализируюсь на восстановлении как личных, так и бизнес-аккаунтов WhatsApp. Процесс может отличаться, но результат гарантирован.",
    },
    {
      question: "Сколько стоит разблокировка?",
      answer: "Стоимость зависит от сложности случая и типа аккаунта. Точную цену назову после диагностики. Позвоните или напишите для получения персонального предложения.",
    },
    {
      question: "Можно ли разблокировать номер из другой страны?",
      answer: "Да, я работаю с номерами из любых стран. География не влияет на возможность восстановления доступа к WhatsApp.",
    },
    {
      question: "Что делать, если аккаунт заблокировали повторно?",
      answer: "После восстановления мы предоставляем рекомендации по безопасному использованию WhatsApp. При соблюдении моих советов повторная блокировка крайне маловероятна.",
    },
  ];

  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о разблокировке WhatsApp
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <div className="bg-background border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами, и мы ответим на все ваши вопросы лично
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://t.me/bosnsk" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Задать вопрос в Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};