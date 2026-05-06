import React, { useState, useEffect } from 'react';
import { 
  Gem, FileText, CheckCircle, Smartphone, 
  MapPin, Clock, Star, Phone, CalendarHeart, Droplets, Leaf, 
  ShieldCheck, Wrench, Palette, ThumbsUp, Ruler, Wallet, Hammer, Key, X,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [area, setArea] = useState('');
  const [surfaceType, setSurfaceType] = useState('Дорожка');
  const [color, setColor] = useState('Песочный');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    '/images/gallery/A_bright_modern_swimming_pool_features_a_a0Vwvh7X.png',
    '/images/gallery/A_low-angle_shot_captures_a_smooth_light-colored_bWd8rrZM.png',
    '/images/gallery/A_modern_patio_features_a_light_wood_picnic_table_oB9LdUjR.png',
    '/images/gallery/A_modern_white-paneled_house_with_brick_accents_B0uoj33e.png',
    '/images/gallery/A_pathway_of_textured_aggregate_curves_through_a_DwEmYu0W.png',
    '/images/gallery/A_person_stands_at_the_top_of_a_modern_outdoor_ag2JR44v.png',
    '/images/gallery/A_winding_garden_path_with_a_resin-bound_gravel_12qVvd_N.png',
    '/images/gallery/In_a_realistic_style_a_construction_worker_with_R3s01m7J.png',
    '/images/gallery/In_a_realistic_style_this_image_showcases_a_NYc6B4ih.png',
    '/images/gallery/The_image_displays_a_modern_architectural_design_U7dITit.png'
  ];
  
  const mineralFillers = [
    {
      image: '/images/fillers/filler-1-white-marble.png',
      title: 'Мраморная крошка белая',
      fraction: 'Размер фракции: 5 - 10мм; 10 - 20мм',
    },
    {
      image: '/images/fillers/filler-2-blue-marble.png',
      title: 'Мраморная крошка голубая',
      fraction: 'Размер фракции: 5 - 10мм; 10 - 20мм',
    },
    {
      image: '/images/fillers/filler-3-gray-marble.png',
      title: 'Мраморная крошка серая',
      fraction: 'Размер фракции: 10 - 20мм',
    },
    {
      image: '/images/fillers/filler-4-jasper.png',
      title: 'Крошка из яшмы',
      fraction: 'Размер фракции: 5 - 10мм',
    },
    {
      image: '/images/fillers/filler-5-black-marble.png',
      title: 'Мраморная крошка черная',
      fraction: 'Размер фракции: 10 - 20мм',
    },
    {
      image: '/images/fillers/filler-6-raspberry-quartzite.png',
      title: 'Крошка, малиновый кварцит',
      fraction: 'Размер фракции: 10 - 20мм',
    },
    {
      image: '/images/fillers/filler-7-checkerboard-marble.png',
      title: 'Мраморная крошка "Шахматка"',
      fraction: 'Размер фракции: 5 - 10мм',
    },
    {
      image: '/images/fillers/filler-8-assorted-tumbled-marble.png',
      title: 'Мраморная крошка "Ассорти", галтованная',
      fraction: '',
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    if (isAboutOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isAboutOpen]);

  // Simple calculation logic for demo
  const calculateCost = () => {
    const numArea = parseInt(area) || 0;
    const basePrice = 3500;
    return numArea * basePrice;
  };

  const calculateDays = () => {
    const numArea = parseInt(area) || 1;
    return Math.max(1, Math.ceil(numArea / 50));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* Header — fixed: hero/content need offset so nothing sits under the bar */}
      <header className="fixed top-0 left-0 right-0 z-20 h-20 px-6 lg:px-10 flex items-center justify-between border-b border-white/5 bg-[#0a0a0a]">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo/terraquartz-logo.png"
            alt="Логотип TerraQuartz"
            className="w-10 h-10 rounded-sm object-cover shrink-0"
          />
          <span className="text-xl font-bold tracking-tighter uppercase hidden sm:inline-block">
            Терра<span className="text-[#C5A059]">кварц</span>
          </span>
        </div>
        <nav className="hidden lg:flex gap-6 text-[11px] uppercase tracking-widest font-medium text-white/70">
          <button 
            onClick={() => setIsAboutOpen(true)} 
            className="hover:text-[#C5A059] transition-colors uppercase"
          >
            О ПОКРЫТИИ
          </button>
          {['Галерея', 'Этапы', 'Контакты'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-[#C5A059] transition-colors">{item}</a>
          ))}
        </nav>
        <div className="text-right">
          <div className="text-lg font-semibold tracking-tight text-white mb-0.5">
             <a href="tel:+79667572434" className="hover:text-[#C5A059] transition-colors">+7 (966) 757-24-34</a>
          </div>
          <div className="text-[10px] text-white/40 uppercase tracking-wider">Ежедневно с 9:00 до 21:00</div>
        </div>
      </header>

      {/* Block 1: Hero Section — pt = header (5rem) + air; tighter on lg+ */}
      <section className="relative min-h-[600px] max-lg:min-h-[calc(100svh-5rem)] lg:h-[70vh] flex flex-col md:flex-row bg-[#0a0a0a] max-lg:pt-[calc(5rem+1.25rem)] lg:pt-20">
        {/* Background image — без оверлеев и фильтров */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero/hero-grand-stone-house.png")',
          }}
        />
        {/* Градиент слева направо: контраст под текстом, справа фото без сплошного затемнения */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] max-md:bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.42)_32%,rgba(0,0,0,0.18)_55%,transparent_78%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.12)_38%,transparent_52%)]"
        />

        {/* Hero Text Overlay */}
        <div className="relative z-10 w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center max-lg:min-h-[calc(100svh-5rem-1.25rem)]">
          <h1 className="text-5xl lg:text-7xl font-light leading-[0.9] mb-4 uppercase [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
            КАМЕННЫЙ <br/><span className="text-[#C5A059] font-bold">КОВЕР</span>
          </h1>
          <p className="text-white/60 text-sm max-w-sm mb-10 leading-relaxed uppercase [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
            ПРОЧНОЕ И КРАСИВОЕ ПОКРЫТИЕ ДЛЯ ВАШЕГО ЗАГОРОДНОГО ДОМА
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#b08b47] transition-colors rounded-sm">
              Рассчитать стоимость
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('Галерея');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden md:block px-8 py-3 border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors rounded-sm"
            >
              Смотреть галерею
            </button>
            <button 
              onClick={() => setIsAboutOpen(true)}
              className="md:hidden px-8 py-3 border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors rounded-sm"
            >
              О покрытии
            </button>
          </div>
        </div>
        

      </section>

      {/* Block 1.5: About (О покрытии) Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#0a0a0a]" 
          >
            <div className="py-16 md:py-24 relative min-h-screen">
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="fixed top-6 right-6 md:top-8 md:right-8 text-white hover:text-[#C5A059] transition-colors z-[110] p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10"
                title="Закрыть"
              >
                <X strokeWidth={2} className="w-6 h-6" />
              </button>
              <div className="container mx-auto px-6 lg:px-10 max-w-[1440px]">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 mt-8 md:mt-0">
                  <div className="w-full lg:w-1/2">
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-8">О покрытии</h2>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight sm:leading-none uppercase mb-8 tracking-tight break-words hyphens-auto">
                ЭСТЕТИКА ПРИРОДЫ И <br className="hidden sm:block" /> <span className="font-bold text-[#C5A059]">ТЕХНОЛОГИЧНОСТЬ</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-12">
                <strong className="text-white font-semibold">Каменный ковер</strong> — это премиальное монолитное покрытие, состоящее из натурального камня (мраморная галька, кварц) и высокопрочного полимерного связующего. Оно объединяет в себе эстетику дикой природы и технологичность современных материалов.
              </p>

              <h3 className="text-sm uppercase tracking-widest font-bold text-white mb-6">Почему это лучшее решение?</h3>
              <div className="space-y-6">
                {[
                  { title: 'Дренаж и чистота', text: 'Покрытие пористое, оно пропускает воду сквозь себя. Забудьте о лужах, грязи и скользких поверхностях после дождя.' },
                  { title: 'Никаких сорняков и муравьев', text: 'В отличие от плитки, здесь нет швов. Трава не прорастет, а песок из стыков не вымоется.' },
                  { title: 'Долговечность 20+ лет', text: 'Покрытие не трескается от морозов, не плавится на жаре и не выгорает на солнце (UV-стойкость).' },
                  { title: 'Безопасность', text: 'Шероховатая текстура камня исключает скольжение даже при полном намокании — идеальный вариант для зон у бассейна.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-1.5 shrink-0"></div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-bold text-white/90 mb-1">{item.title}</div>
                      <div className="text-sm text-white/50 leading-relaxed">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="w-full lg:w-1/2">
              <div className="w-full h-full min-h-[400px] border border-white/10 bg-[#151517] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-10 pointer-events-none"></div>
                <img src="/images/about/IMG_2159.JPG" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="О покрытии" />
              </div>
            </div>
          </div>

          {/* Sub-section: Where is it indispensable? */}
          <div className="mb-24">
             <h3 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-8 text-center">Где он незаменим?</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 { title: 'Парковки и въезды', text: 'Выдерживает вес тяжелых внедорожников, не продавливается и не деформируется.' },
                 { title: 'Зоны вокруг бассейна', text: 'Вода мгновенно уходит в дренаж, оставляя поверхность сухой и безопасной.' },
                 { title: 'Террасы и беседки', text: 'Натуральный камень приятен на ощупь и не нагревается так сильно, как бетон или плитка.' },
                 { title: 'Мангальные зоны', text: 'Устойчив к искрам, жару и легко отмывается от бытовых загрязнений.' }
               ].map((item, idx) => (
                 <div key={idx} className="bg-[#151517] border border-white/5 p-6 flex flex-col">
                   <div className="text-[10px] text-[#C5A059] font-mono mb-4">0{idx+1}</div>
                   <div className="text-xs uppercase tracking-widest font-bold text-white mb-2">{item.title}</div>
                   <div className="text-[10px] text-white/50 leading-relaxed uppercase">{item.text}</div>
                 </div>
               ))}
             </div>
          </div>

          {/* Table Comparison */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-8 border-b border-white/5 pb-4">Сравнение материалов</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="py-4 px-6 text-[10px] uppercase tracking-widest font-normal text-white/40 border-b border-white/10 w-1/6">Характеристика</th>
                    <th className="py-4 px-6 text-[10px] uppercase tracking-widest font-bold text-[#C5A059] border-b border-[#C5A059]/30 bg-[#C5A059]/5 w-1/6">Каменный ковер</th>
                    <th className="py-4 px-6 text-[10px] uppercase tracking-widest font-normal text-white/40 border-b border-white/10 w-1/6">Плитка</th>
                    <th className="py-4 px-6 text-[10px] uppercase tracking-widest font-normal text-white/40 border-b border-white/10 w-1/6">Бетон</th>
                    <th className="py-4 px-6 text-[10px] uppercase tracking-widest font-normal text-white/40 border-b border-white/10 w-1/6">Дерево (ДПК)</th>
                    <th className="py-4 px-6 text-[10px] uppercase tracking-widest font-normal text-white/40 border-b border-white/10 w-1/6">Асфальт</th>
                  </tr>
                </thead>
                <tbody className="text-xs uppercase tracking-wider text-white/70">
                  {[
                    { char: 'Срок службы', kover: '20+ лет', plitka: '5–8 лет', beton: '10–12 лет', derevo: '7–10 лет', asphalt: '5 лет' },
                    { char: 'Наличие швов', kover: 'Нет (Монолит)', plitka: 'Много (Сорняки)', beton: 'Трещины', derevo: 'Есть щели', asphalt: 'Нет' },
                    { char: 'Водопроницаемость', kover: 'Да (100%)', plitka: 'Нет', beton: 'Нет', derevo: 'Частично', asphalt: 'Нет' },
                    { char: 'Ремонтопригодность', kover: 'Легкая', plitka: 'Средняя', beton: 'Сложная', derevo: 'Средняя', asphalt: 'Заплатки' },
                    { char: 'Внешний вид', kover: 'Премиальный', plitka: 'Типовой', beton: 'Серый/Скучный', derevo: 'Стильный', asphalt: 'Технический' }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-bold text-white/90">{row.char}</td>
                      <td className="py-4 px-6 font-bold text-[#C5A059] bg-[#C5A059]/5">{row.kover}</td>
                      <td className="py-4 px-6">{row.plitka}</td>
                      <td className="py-4 px-6">{row.beton}</td>
                      <td className="py-4 px-6">{row.derevo}</td>
                      <td className="py-4 px-6">{row.asphalt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-16 bg-[#151517] border border-white/5 border-l-4 border-l-[#C5A059] p-8 lg:p-12 text-center shadow-2xl">
             <p className="text-lg lg:text-xl font-light uppercase tracking-widest text-white leading-relaxed">
               Каменный ковер — это инвестиция в комфорт и красоту вашего дома,<br className="hidden md:block"/> которая <span className="text-[#C5A059] font-bold">избавит вас от необходимости ремонта покрытия</span> на десятилетия.
             </p>
          </div>
          
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Block 2: Sections */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-10 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              { title: 'ПАРКОВКИ', text: 'Входные и въездные группы', img: '/images/sections/Untitled_A_modern_home_features_a_covered_porch_with_Ndxuiz3I.png' },
              { title: 'ЗАДНИЙ ДВОР', text: 'Покрытие вокруг бассейна и обустройство двора', img: '/images/sections/Отдых.JPG' },
              { title: 'МЕСТА ДЛЯ ОТДЫХА', text: 'Мангальные зоны и летние кухни', img: '/images/sections/Untitled_An_inviting_outdoor_patio_features_a_fire_pit_e0Z-gPDZ.png' }
            ].map((card, idx) => (
              <div key={idx} className="group relative h-96 overflow-hidden bg-[#151517] border border-white/5 flex flex-col justify-end p-8">
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                <div className="relative z-20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  <div className="text-[10px] uppercase text-[#C5A059] mb-2 font-bold">{card.text}</div>
                  <h3 className="text-2xl font-bold tracking-wider uppercase leading-none">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:items-center gap-8 pt-12 border-t border-white/5">
            {[
              { icon: ShieldCheck, title: 'СРОК СЛУЖБЫ', text: 'от 20 лет' },
              { icon: Wrench, title: 'БЫСТРЫЙ МОНТАЖ', text: 'от 1 дня' },
              { icon: Palette, title: 'РАЗНООБРАЗИЕ ЦВЕТОВ', text: 'и фракций камня' },
              { icon: ThumbsUp, title: 'ЛЕГКИЙ УХОД', text: 'и простота' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 border border-white/10 bg-[#151517] flex items-center justify-center text-[#C5A059] rounded-sm">
                  <item.icon strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[10px] tracking-widest uppercase mb-1">{item.title}</div>
                  <div className="text-[10px] text-white/50 uppercase">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 3: Gallery Container */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5" id="Галерея">
        <div className="container mx-auto px-6 lg:px-10 max-w-[1440px]">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-8">Галерея Образцов</h2>
          <div className="text-4xl lg:text-5xl font-light leading-none uppercase mb-12 tracking-tight">
            ОЦЕНИТЕ КАЧЕСТВО НАШИХ <br/><span className="font-bold text-[#C5A059]">РАБОТ</span>
          </div>

          <div className="relative aspect-square w-full max-w-3xl mx-auto group bg-[#151517] overflow-hidden rounded-[8px]">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={galleryImages[currentImageIndex]}
                className="absolute inset-0 w-full h-full object-cover"
                alt={`Галерея фото ${currentImageIndex + 1}`}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none"></div>
            
            <button 
              onClick={prevImage}
              className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
              title="Предыдущее фото"
            >
              <ChevronLeft strokeWidth={1.5} className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
              title="Следующее фото"
            >
              <ChevronRight strokeWidth={1.5} className="w-6 h-6" />
            </button>
            
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 md:gap-2 p-1.5 md:p-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 flex-nowrap justify-center">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-all shrink-0 ${currentImageIndex === idx ? 'bg-[#C5A059] !w-3 md:!w-4' : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Перейти к фото ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Split Panels: Workflow & Calculator */}
      <section className="border-y border-white/5 bg-[#0D0D0E] flex flex-col xl:flex-row">
        {/* Workflow */}
        <div className="w-full xl:w-1/2 p-8 lg:p-12 xl:p-16 border-b xl:border-b-0 xl:border-r border-white/5">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-12">Как мы работаем</h2>
          
          <div className="relative mt-8 pb-4">
            {/* Desktop continuous line */}
            <div className="hidden sm:block absolute top-5 left-10 right-10 h-px bg-white/10 z-0"></div>
            
            {/* Mobile lines */}
            <div className="sm:hidden absolute top-5 left-[16%] right-[16%] h-px bg-white/10 z-0"></div>
            <div className="sm:hidden absolute top-[calc(50%+4px)] left-[16%] right-[50%] h-px bg-white/10 z-0"></div>

            <div className="grid grid-cols-3 sm:flex justify-between gap-y-10 sm:gap-y-0">
              {[
                { title: 'Заявка', active: true },
                { title: 'Замер', active: false },
                { title: 'Договор', active: false },
                { title: 'Монтаж', active: false },
                { title: 'Сдача', active: false, highlight: true }
              ].map((step, idx) => (
                <div key={idx} className={`relative z-10 flex flex-col items-center gap-3 sm:gap-4 ${idx === 4 ? 'col-span-1' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs transition-colors mx-auto
                    ${step.highlight 
                      ? 'bg-[#C5A059] border-[#C5A059] text-black font-bold' 
                      : step.active 
                        ? 'bg-[#1A1A1C] border border-white/20 text-[#C5A059]' 
                        : 'bg-[#1A1A1C] border border-white/5 text-white/30'}`}
                  >
                    0{idx + 1}
                  </div>
                  <div className="text-[9px] uppercase font-bold text-center tracking-wider">{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="w-full xl:w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-10">Рассчитать стоимость</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 flex-1 items-center">
            
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] text-white/40 uppercase mb-2">Площадь (м²)</label>
                <input 
                  type="number" 
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Например, 50"
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors rounded-sm"
                />
              </div>
              
              <div>
                <label className="block text-[10px] text-white/40 uppercase mb-2">Цвет камня</label>
                <div className="flex gap-3">
                  {[
                    { id: 'Песочный', bg: 'bg-[#B4A08B]', border: 'border-white/20' },
                    { id: 'Серый', bg: 'bg-[#8B8D8F]', border: 'border-white/20' },
                    { id: 'Красный', bg: 'bg-[#A65B5B]', border: 'border-white/20' },
                    { id: 'Микс', bg: 'bg-[#6D6B60]', border: 'border-white/20' }
                  ].map((c) => (
                    <button 
                      key={c.id}
                      onClick={() => setColor(c.id)}
                      title={c.id}
                      className={`w-8 h-8 rounded-full border transition-all ${color === c.id ? 'ring-2 ring-offset-2 ring-offset-[#0D0D0E] ring-[#C5A059] border-transparent' : c.border} ${c.bg}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-white/40 uppercase mb-2">Тип поверхности</label>
                <select 
                  value={surfaceType}
                  onChange={(e) => setSurfaceType(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-[#C5A059] transition-colors appearance-none rounded-sm"
                >
                  <option className="bg-[#151517] text-white" value="Дорожка">Дорожка</option>
                  <option className="bg-[#151517] text-white" value="Патио">Патио</option>
                  <option className="bg-[#151517] text-white" value="Терраса">Терраса</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-white/5 p-8 border border-white/5 rounded-sm h-full max-h-[300px]">
              <div className="text-[10px] text-white/40 uppercase mb-2 tracking-widest">Примерная стоимость</div>
              <div className="text-3xl lg:text-4xl font-light text-[#C5A059] mb-2 tracking-tight">
                ~ {area ? calculateCost().toLocaleString('ru-RU') : '0'} ₽
              </div>
              <div className="text-[10px] text-white/60 mb-8 uppercase tracking-wider">
                Срок реализации: {calculateDays()} {calculateDays() === 1 ? 'день' : calculateDays() < 5 ? 'дня' : 'дней'}
              </div>
              <button className="w-full py-3 bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm mt-auto">
                Получить расчет
              </button>
            </div>

          </div>
        </div>
      </section>
      
      {/* Block 4.5: Mineral Filler Selection */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-10 max-w-[1440px]">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-6">
            Выбор минерального наполнителя
          </h2>
          <div className="text-4xl lg:text-5xl font-light leading-none uppercase mb-12 tracking-tight">
            ПОДБЕРИТЕ ОПТИМАЛЬНУЮ <br />
            <span className="font-bold text-[#C5A059]">ФРАКЦИЮ И ТЕКСТУРУ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {mineralFillers.map((item) => (
              <article
                key={item.title}
                className="bg-[#151517] border border-white/5 p-3 md:p-4 flex flex-col"
              >
                <div className="relative w-full aspect-square overflow-hidden border border-white/10 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm uppercase tracking-wide font-semibold text-white mb-2 min-h-[2.75rem]">
                  {item.title}
                </h3>
                {item.fraction ? (
                  <p className="text-[11px] text-white/60 uppercase tracking-wide leading-relaxed">
                    {item.fraction}
                  </p>
                ) : (
                  <div className="h-[1.35rem]" />
                )}
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm md:text-base text-white/80 uppercase tracking-wider border-l-2 border-[#C5A059] pl-4">
            Не понравился ни один вариант? Свяжитесь с нами и мы подберем подходящий!
          </p>
        </div>
      </section>

      {/* Block 5: Contacts */}
      <section className="py-24 bg-[#0a0a0a]" id="Контакты">
        <div className="container mx-auto px-6 lg:px-10 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-8">Контакты</h2>
              <div className="text-5xl lg:text-7xl font-light leading-none uppercase mb-8 tracking-tight">
                ОБСУДИМ ВАШ <br/><span className="font-bold text-[#C5A059]">ПРОЕКТ?</span>
              </div>
              <p className="text-white/60 text-sm max-w-md leading-relaxed uppercase tracking-widest mb-12">
                Свяжитесь с нами удобным для вас способом, и наши специалисты проконсультируют вас по всем вопросам.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12">
              <div>
                 <div className="text-[10px] text-white/40 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Телефон / Мессенджеры</div>
                 <a href="tel:+79667572434" className="text-4xl lg:text-6xl font-bold tracking-tighter hover:text-[#C5A059] transition-colors inline-block leading-none">+7 (966) 757-24-34</a>
                 <div className="flex gap-6 mt-6">
                   <a href="#" className="text-xs uppercase tracking-widest font-bold border-b border-transparent hover:border-[#C5A059] hover:text-[#C5A059] transition-all">Telegram</a>
                   <a href="#" className="text-xs uppercase tracking-widest font-bold border-b border-transparent hover:border-[#C5A059] hover:text-[#C5A059] transition-all">WhatsApp</a>
                 </div>
              </div>
              <div>
                 <div className="text-[10px] text-white/40 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Email</div>
                 <a href="mailto:info@terraquartz.ru" className="text-2xl lg:text-4xl font-light tracking-tight hover:text-[#C5A059] transition-colors leading-none">info@terraquartz.ru</a>
              </div>
              <div>
                 <div className="text-[10px] text-white/40 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Офис</div>
                 <div className="text-lg lg:text-2xl font-light tracking-widest uppercase leading-none text-white/80">Г. САНКТ-ПЕТЕРБУРГ, УЛ. ГАГАРИНСКАЯ, Д. 16</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-auto md:h-20 py-8 md:py-0 px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between bg-black border-t border-white/5 text-[10px] text-white/30 tracking-widest uppercase gap-6 md:gap-0">
        <div className="text-center md:text-left">© 2026 КАМЕННЫЙ КОВЕР.<br className="md:hidden" /> ALL RIGHTS RESERVED.</div>
        <div className="flex gap-6 lg:gap-8">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Telegram</a>
          <a href="#" className="hover:text-white transition-colors">VKontakte</a>
        </div>
        <div className="text-center md:text-right">Г. САНКТ-ПЕТЕРБУРГ, УЛ. ГАГАРИНСКАЯ, Д. 16</div>
      </footer>

    </div>
  );
}
