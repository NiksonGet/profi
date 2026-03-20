import { Play, Star, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AccordionItem } from './components/Accordion';
import { ReviewSlider } from './components/Slider';

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-black font-sans selection:bg-[#FFE800]">
      {/* Header */}
      <header className="p-6 border-b-4 border-black bg-white flex justify-between items-center sticky top-0 z-40">
        <div className="text-2xl font-black uppercase tracking-tighter bg-[#FF5E00] text-white px-4 py-1 border-4 border-black transform -rotate-2">
          Никита Катасонов
        </div>
        <a 
          href="https://profi.ru/profile/KatasonovNA/share"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#FFE800] border-4 border-black px-6 py-2 font-black uppercase rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          Записаться
        </a>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <section className="text-center mb-20 relative">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-none"
          >
            Математика и Информатика <br className="hidden md:block" />
            <span className="text-[#E62020] inline-block transform rotate-2 bg-[#FFE800] px-4 border-4 border-black mt-2">без зубрежки</span>
          </motion.h1>
          
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-3xl mx-auto bg-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            Я Никита Катасонов, онлайн-репетитор по математике и информатике с опытом более 3 лет. Помогаю разобраться в сложных темах простым языком.
          </p>

          <p className="text-lg md:text-xl font-black uppercase tracking-wide mb-6 text-[#FF5E00]">
            Сначала посмотрите это видео, чтобы понять мой подход к занятиям.
          </p>

          {/* Video Block */}
          <div className="relative max-w-4xl mx-auto">
            {/* Decorative Arrows */}
            <div className="hidden md:block absolute -left-16 top-1/4 transform -rotate-12">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 90 Q 30 20 90 30" stroke="black" strokeWidth="8" fill="none" strokeLinecap="round" />
                <path d="M70 10 L 95 32 L 65 50" stroke="black" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="hidden md:block absolute -right-16 bottom-1/4 transform rotate-12 scale-x-[-1]">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 90 Q 30 20 90 30" stroke="black" strokeWidth="8" fill="none" strokeLinecap="round" />
                <path d="M70 10 L 95 32 L 65 50" stroke="black" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="relative aspect-video bg-[#00C2FF] border-8 border-black rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden group cursor-pointer w-full">
              <img 
                src="https://picsum.photos/seed/tutoring/1280/720" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 md:w-32 md:h-32 bg-[#FF5E00] border-8 border-black rounded-full flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Play className="w-12 h-12 md:w-16 md:h-16 text-white fill-white ml-2" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-20">
          <div className="bg-white border-8 border-black rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 transform -rotate-1 inline-block bg-[#FFE800] px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Обо мне
            </h2>
            
            <div className="text-xl md:text-2xl font-medium space-y-6 mb-10">
              <p>
                Я занимаюсь исключительно онлайн-репетиторством, что позволяет мне работать с учениками из любой точки мира. Моя специализация — математика и информатика.
              </p>
              <p>
                Я помогаю закрывать пробелы в школьной программе, качественно готовлю к ОГЭ и выстраиваю индивидуальный план обучения для каждого ученика, учитывая его уровень и цели.
              </p>
              <p>
                Для меня очень важно создавать спокойную и дружелюбную атмосферу на занятиях. Я уделяю максимум внимания каждому ученику, чтобы процесс обучения был комфортным и эффективным.
              </p>
            </div>

            {/* Key Facts Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#00C2FF] border-4 border-black px-6 py-3 rounded-xl font-black text-lg uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                Опыт репетиторства: 3+ года
              </div>
              <div className="bg-[#00E676] border-4 border-black px-6 py-3 rounded-xl font-black text-lg uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                Формат занятий: только онлайн
              </div>
              <div className="bg-[#FF5E00] text-white border-4 border-black px-6 py-3 rounded-xl font-black text-lg uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
                Направления: математика и информатика
              </div>
            </div>
          </div>
        </section>

        {/* Photo Placeholders */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="aspect-square bg-[#FFE800] border-8 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/photo1/800/800" 
              alt="Фото Никиты за рабочим столом" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-white border-4 border-black px-4 py-2 font-black text-xl uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                Фото за рабочим столом
              </span>
            </div>
          </div>
          <div className="aspect-square bg-[#00C2FF] border-8 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/photo2/800/800" 
              alt="Рабочее место для онлайн-занятий" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-white border-4 border-black px-4 py-2 font-black text-xl uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-3">
                Рабочее место
              </span>
            </div>
          </div>
        </section>

        {/* Social Proof & Reviews */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: TrendingUp, title: "Средний балл ОГЭ", value: "200+", color: "bg-[#FFE800]" },
              { icon: Clock, title: "Опыт работы", value: "5 000+", color: "bg-[#00C2FF]" },
              { icon: Star, title: "Довольных учеников", value: "40 000+", color: "bg-[#00E676]" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, rotate: i % 2 === 0 ? 2 : -2 }}
                className={`${stat.color} border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center`}
              >
                <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <stat.icon className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black uppercase mb-2">{stat.title}</h3>
                <p className="text-4xl font-black">{stat.value}</p>
              </motion.div>
            ))}
          </div>
          
          <p className="text-2xl font-bold text-center mb-10 max-w-2xl mx-auto bg-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            Здесь вы можете увидеть результаты и отзывы, чтобы понять, как я работаю.
          </p>

          <ReviewSlider />
        </section>

        {/* Accordion Section */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-10 transform -rotate-1">
            <span className="bg-[#FF5E00] text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Частые вопросы</span>
          </h2>
          <div className="space-y-4">
            <AccordionItem 
              title="Как проходят занятия?" 
              content="Занятия проходят полностью онлайн. Мы используем интерактивные доски и демонстрацию экрана. На уроках много практики и живого общения, чтобы материал усваивался легко и без скучных лекций." 
            />
            <AccordionItem 
              title="Сколько стоят занятия?" 
              content="Индивидуальные занятия начинаются от 1300 ₽ за 60 минут. Точные условия и акции можно уточнить на моем профиле на Профи.ру." 
            />
            <AccordionItem 
              title="С кем я работаю?" 
              content="Я работаю с учениками 5–9 классов, которые хотят лучше понимать математику и информатику, разобрать сложные темы и укрепить базу." 
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-white border-8 border-black p-8 md:p-16 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#00E676] border-b-4 border-black"></div>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 mt-4">
            Посмотрели видео и хотите задать вопросы?
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl mx-auto">
            Перейдите на мой профиль на Профи.ру, там можно написать мне сообщение, задать любые вопросы и записаться на занятия.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://profi.ru/profile/KatasonovNA/share"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-lg bg-[#FF5E00] text-white font-black text-xl md:text-2xl py-6 px-8 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-4"
            >
              Перейти к моему профилю на Профи.ру
              <ArrowRight className="w-8 h-8 stroke-[3]" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return <LandingPage />;
}
