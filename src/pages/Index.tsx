import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      title: "Цветочная вышивка",
      description: "Нежная ботаническая вышивка на льняной ткани",
      price: "3 500 ₽",
      image: "/img/a757c8d8-d5b9-4c6f-84f1-2e5610421ad7.jpg"
    },
    {
      id: 2,
      title: "Пяльцы с розами",
      description: "Винтажная вышивка роз в деревянных пяльцах",
      price: "2 800 ₽",
      image: "/img/e68748ea-13e3-4fb7-8584-455d3573bd2d.jpg"
    },
    {
      id: 3,
      title: "Декоративная подушка",
      description: "Геометрический узор в земляных тонах",
      price: "4 200 ₽",
      image: "/img/f1cc3859-2d21-41bd-997d-45af2900cd7d.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Scissors" className="text-primary" size={24} />
              <h1 className="text-2xl font-bold text-tertiary" style={{fontFamily: 'Playfair Display, serif'}}>
                Вышивка Ручной Работы
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-tertiary hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-tertiary hover:text-primary transition-colors">Каталог</a>
              <a href="#contacts" className="text-tertiary hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-tertiary mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Уникальные изделия<br />ручной вышивки
          </h2>
          <p className="text-xl text-tertiary/70 mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Source Sans Pro, sans-serif'}}>
            Каждое изделие создается с любовью и вниманием к деталям. 
            Откройте для себя мир традиционного рукоделия в современном исполнении.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
            Посмотреть каталог
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-tertiary text-center mb-12" style={{fontFamily: 'Playfair Display, serif'}}>
            Популярные работы
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-tertiary mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                    {product.title}
                  </h4>
                  <p className="text-tertiary/70 mb-4" style={{fontFamily: 'Source Sans Pro, sans-serif'}}>
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-tertiary mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                О мастерской
              </h3>
              <p className="text-tertiary/80 mb-6 text-lg leading-relaxed" style={{fontFamily: 'Source Sans Pro, sans-serif'}}>
                Наша мастерская специализируется на создании уникальных изделий ручной вышивки. 
                Мы используем только качественные материалы и традиционные техники, 
                передаваемые из поколения в поколение.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-tertiary/70">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-tertiary/70">изделий</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-tertiary/70">ручная работа</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <Icon name="Scissors" size={48} className="text-primary" />
                <Icon name="Heart" size={48} className="text-primary" />
                <Icon name="Sparkles" size={48} className="text-primary" />
                <Icon name="Award" size={48} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-tertiary text-center mb-12" style={{fontFamily: 'Playfair Display, serif'}}>
            Свяжитесь с нами
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold text-tertiary mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Контактная информация
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span className="text-tertiary">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <span className="text-tertiary">info@embroidery-shop.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span className="text-tertiary">Москва, ул. Мастеров, д. 15</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-primary" size={20} />
                  <span className="text-tertiary">Пн-Пт: 10:00-18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-tertiary mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Отправить сообщение
              </h4>
              <form className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="border-tertiary/20 focus:border-primary"
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="border-tertiary/20 focus:border-primary"
                />
                <Textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="border-tertiary/20 focus:border-primary"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tertiary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Scissors" size={20} />
            <span className="font-semibold" style={{fontFamily: 'Playfair Display, serif'}}>
              Вышивка Ручной Работы
            </span>
          </div>
          <p className="text-white/70">© 2024. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;