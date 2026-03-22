import { Star, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AccordionItem } from './components/Accordion';
import { ReviewSlider } from './components/Slider';

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-black font-sans selection:bg-[#FFE800]">
      {/* Header */}
      <header className="px-4 py-4 border-b-4 border-black bg-white sticky top-0 z-40 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
  <div className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter bg-[#FF5E00] text-white px-5 py-2 sm:px-8 md:px-12 border-4 border-black transform -rotate-2 whitespace-nowrap">
    логика ≠ Заучивание
  </div>
  <a 
    href="https://profi.ru/profile/KatasonovNA/share"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#FFE800] border-4 border-black px-8 py-2 font-black uppercase rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all text-base md:text-lg whitespace-nowrap"
  >
    Записаться
  </a>
</header>




      <main className="max-w-5xl mx-auto px-4 py-12 md:py-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="text-center mb-20 relative">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-tight break-words"

          >
            Математика и Информатика <br className="hidden md:block" />
            <span className="text-[#E62020] inline-block transform rotate-2 bg-[#FFE800] px-2 md:px-4 border-4 border-black mt-2 max-w-full">без зубрежки</span>
          </motion.h1>
          
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-3xl mx-auto bg-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            Я Катасонов Никита Андреевич, онлайн-репетитор по математике и информатике с опытом более 3 лет. Помогаю разобраться в сложных темах простым языком.
          </p>

          <p className="text-lg md:text-xl font-black uppercase tracking-wide mb-6 text-[#FF5E00]">
            Сначала посмотрите это видео, чтобы узнать немного о подходе к занятиям.
          </p>
        </section>

        <div className="w-full max-w-3xl mx-auto aspect-video rounded-3xl overflow-hidden border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mt-8 mb-8">
          <iframe
            src="https://vkvideo.ru/video_ext.php?oid=-236879348&id=456239017&hash=38fcb1c93fe98f9e&hd=4"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>

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
              src="/Photo2/photo2_1.jpg" 
              alt="Фото Никиты за рабочим столом" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-white border-4 border-black px-4 py-2 font-black text-xl uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                Фото за рабочим столом
              </span>
            </div>
          </div>
          <div className="aspect-square bg-[#00C2FF] border-8 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group">
            <img 
              src="/Photo2/photo2_2.jpg" 
              alt="Рабочее место для онлайн-занятий" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
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
              { icon: TrendingUp, title: "Успешно обучено учеников", value: "200+", color: "bg-[#FFE800]" },
              { icon: Clock, title: "Занятий проведено", value: "5 000+", color: "bg-[#00C2FF]" },
              { icon: Star, title: "Решено задач с учениками", value: "40 000+", color: "bg-[#00E676]" }
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
            Здесь вы можете увидеть результаты и отзывы.
          </p>

          <ReviewSlider />
        </section>

        {/* Accordion Section */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-10">
  <span className="inline-block bg-[#FF5E00] text-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 whitespace-nowrap">Частые вопросы</span>
</h2>

          <div className="space-y-4">
            <AccordionItem 
              title="Как проходят занятия?" 
              content="Занятия проходят полностью онлайн — никуда ехать не нужно. Работаем на интерактивной доске: я объясняю, рисую схемы и решаю задачи прямо у тебя на глазах, а ты можешь делать то же самое в реальном времени. Это живое, двустороннее общение, а не просмотр записи.

На каждый урок я готовлю материал заранее: структурированные объяснения, подобранные задачи по уровню ученика и разбор конкретных ошибок. Никаких скучных лекций — только практика, вопросы и моментальная обратная связь.

Также доступны готовые уроки в записи — удобно, если нужно повторить тему или разобрать пропущенный материал в удобное время." 
            />
            <AccordionItem 
              title="Сколько стоят занятия?" 
              content="Индивидуальные занятия начинаются от 1300 ₽ за 60 минут. Точные условия и акции можно уточнить на моем профиле на Профи.ру." 
            />
            <AccordionItem 
              title="С кем я работаю?" 
              content="Я работаю с учениками 5–9 классов, которые хотят лучше понимать математику и информатику, разобрать сложные темы или укрепить базу." 
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-white border-8 border-black p-8 md:p-16 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#00E676] border-b-4 border-black"></div>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 mt-4">
            После просмотра сайта есть вопросы?
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
