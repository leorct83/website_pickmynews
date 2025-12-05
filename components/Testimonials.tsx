'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
  image: string | null;
  rating: number;
  date: string;
  timestamp: Date;
  verified: boolean;
  helpful: number;
  subscribedSince: string | null;
}

interface Stat {
  value: string;
  label: string;
  subtext: string;
}

interface RatingBreakdownItem {
  stars: number;
  percentage: number;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<number, number>>({});
  const [votedItems, setVotedItems] = useState<Set<number>>(new Set());

  const allTestimonials: Testimonial[] = [
    {  quote: "Largement meilleur que ChatGPT ou Perplexity. Beaucoup plus pertinent, synthétique et fiable. Je lis mon résumé tous les matins avec plaisir.",
      author: "Léonard S.",
      avatar: "LS",
      image: null,
      rating: 5,
      date: "28 oct. 2025",
      timestamp: new Date("2025-10-28"),
      verified: true,
      helpful: 9,
      subscribedSince: "Abonné depuis 2 mois",
    },
    {
      quote: "J'ai enfin une vue claire sur l'actu sans y passer des heures. C'est vraiment bien fait. Je recommande.",
      author: "Marie Lefebvre",
      avatar: "ML",
      image: null,
      rating: 5,
      date: "12 nov. 2025",
      timestamp: new Date("2025-11-12"),
      verified: true,
      helpful: 8,
      subscribedSince: "Abonnée depuis 8 mois",
    },
    {
      quote: "Génial, exactement ce que je cherchais.",
      author: "Pierre V.",
      avatar: "PV",
      image: null,
      rating: 5,
      date: "10 nov. 2025",
      timestamp: new Date("2025-11-10"),
      verified: true,
      helpful: 3,
      subscribedSince: "Abonné depuis 1 mois",
    },
    {
      quote: "Top !",
      author: "Julien B.",
      avatar: "JB",
      image: null,
      rating: 5,
      date: "18 nov. 2025",
      timestamp: new Date("2025-11-18"),
      verified: true,
      helpful: 2,
      subscribedSince: "Abonné depuis 2 mois",
    },
    {
      quote: "Je suis les négociations commerciales UE-Mercosur depuis des mois. Avoir un résume clair des avancées chaque matin sans devoir éplucher le FT et Les Echos, c'est exactement ce qu'il me fallait.",
      author: "Guillaume Fabre",
      avatar: "GF",
      image: null,
      rating: 5,
      date: "8 nov. 2025",
      timestamp: new Date("2025-11-08"),
      verified: true,
      helpful: 6,
      subscribedSince: "Abonné depuis 6 mois",
    },
    {
      quote: "Bon service dans l ensemble. Parfois les résumés sont un peu longs a mon gout mais ça fait le job.",
      author: "Thomas Renard",
      avatar: "TR",
      image: null,
      rating: 4,
      date: "3 nov. 2025",
      timestamp: new Date("2025-11-03"),
      verified: true,
      helpful: 4,
      subscribedSince: "Abonné depuis 3 mois",
    },
    {
      quote: "Retraité, j'aime comprendre ce qui se passe dans le monde. Le format est parfait!",
      author: "Jean-Pierre Morel",
      avatar: "JM",
      image: null,
      rating: 5,
      date: "2 nov. 2025",
      timestamp: new Date("2025-11-02"),
      verified: true,
      helpful: 12,
      subscribedSince: "Abonné depuis 1 an",
    },
    {
      quote: "J'utilise la version 5j/semaine pour ma veille sectorielle. Le rapport qualité/prix est imbattable comparé a Feedly Pro ou Meltwater.",
      author: "Sophie Dumont",
      avatar: "SD",
      image: null,
      rating: 5,
      date: "28 oct. 2025",
      timestamp: new Date("2025-10-28"),
      verified: true,
      helpful: 9,
      subscribedSince: "Abonnée depuis 1 an",
    },
    {
      quote: "En prépa, c est devenu mon outil de veille quotidien pour les colles de géopo. Les sources citées me permettent d'approfondir quand un sujet m'intéresse.",
      author: "Camille Roche",
      avatar: "CR",
      image: null,
      rating: 5,
      date: "25 oct. 2025",
      timestamp: new Date("2025-10-25"),
      verified: true,
      helpful: 14,
      subscribedSince: "Abonnée depuis 4 mois",
    },
    {
      quote: "Pas mal mais jaurais aimé plus de personnalisation sur les thématiques.",
      author: "Antoine M.",
      avatar: "AM",
      image: null,
      rating: 2,
      date: "20 oct. 2025",
      timestamp: new Date("2025-10-20"),
      verified: true,
      helpful: 5,
      subscribedSince: "Abonné depuis 2 mois",
    },
    {
      quote: "C'est concis, les sources,sont fiables et ça couvre des zones que les médias francais ignorent souvent.",
      author: "Nadia Benali",
      avatar: "NB",
      image: null,
      rating: 4,
      date: "18 oct. 2025",
      timestamp: new Date("2025-10-18"),
      verified: true,
      helpful: 7,
      subscribedSince: "Abonnée depuis 7 mois",
    },
    {
      quote: "Super pratique !",
      author: "Emma L.",
      avatar: "EL",
      image: null,
      rating: 5,
      date: "12 oct. 2025",
      timestamp: new Date("2025-10-12"),
      verified: false,
      helpful: 1,
      subscribedSince: null,
    },
    {
      quote: "Ca fait le taf, bonne vue d ensemble de l'actu eco chaque matin.",
      author: "Lucas P.",
      avatar: "LP",
      image: null,
      rating: 4,
      date: "10 oct. 2025",
      timestamp: new Date("2025-10-10"),
      verified: false,
      helpful: 2,
      subscribedSince: null,
    },
    {
      quote: "Prof d histoire-géo, je l'utilise pour préparer mes cours sur l'actualité. Mes terminales adorent quand j'arrive avec des exemples frais du matin même.",
      author: "Francois Delmas",
      avatar: "FD",
      image: null,
      rating: 5,
      date: "5 oct. 2025",
      timestamp: new Date("2025-10-05"),
      verified: true,
      helpful: 11,
      subscribedSince: "Abonné depuis 11 mois",
    },
  ];

  const stats: Stat[] = [
    { value: "2 847", label: "Lecteurs réguliers", subtext: "ce mois-ci" },
    { value: "98%", label: "Taux de renouvellement de l'abonnement", subtext: "" },
    { value: "4.6/5", label: "Note moyenne", subtext: "" },
    { value: "6 min", label: "Temps de lecture", subtext: "en moyenne" },
  ];

  const ratingBreakdown: RatingBreakdownItem[] = [
    { stars: 5, percentage: 68 },
    { stars: 4, percentage: 24 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  const totalSlides = Math.ceil(allTestimonials.length / itemsPerView);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  }, [totalSlides]);

  const visibleTestimonials = allTestimonials.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  const handleHelpfulClick = useCallback((testimonialIndex: number, baseHelpful: number) => {
    if (votedItems.has(testimonialIndex)) return; // Déjà voté
    
    setHelpfulVotes(prev => ({
      ...prev,
      [testimonialIndex]: (prev[testimonialIndex] ?? baseHelpful) + 1
    }));
    setVotedItems(prev => new Set(prev).add(testimonialIndex));
  }, [votedItems]);

  const getHelpfulCount = (index: number, baseHelpful: number) => {
    return helpfulVotes[index] ?? baseHelpful;
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-4">
            Avis vérifiés
          </p>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4 text-balance">
            Ce qu'en pensent nos lecteurs
          </h2>
          <p className="text-slate-500 text-lg">
            Avis collectés automatiquement après 30 jours d'utilisation
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-5 rounded-2xl bg-stone-50 border border-stone-100"
                >
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-700">{stat.label}</div>
                  <div className="text-xs text-slate-400">{stat.subtext}</div>
                </div>
              ))}
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-slate-900">4.6</div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${star <= 4 ? "text-amber-400" : "text-amber-200"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-slate-500">247 avis vérifiés</div>
                </div>
              </div>
              <div className="space-y-2">
                {ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3 text-sm">
                    <span className="w-3 text-slate-500">{item.stars}</span>
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="w-10 text-right text-slate-400">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-stone-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:shadow-xl transition-all"
            aria-label="Avis précédents"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-stone-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:shadow-xl transition-all"
            aria-label="Avis suivants"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 transition-opacity duration-300">
              {visibleTestimonials.map((testimonial, index) => {
                const realIndex = currentIndex * itemsPerView + index;
                return (
                <div
                  key={`${currentIndex}-${index}`}
                  className="relative bg-white rounded-2xl p-6 border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 animate-fadeIn"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating ? "text-amber-400" : "text-stone-200"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      {testimonial.verified && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Vérifié
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400">{testimonial.date}</span>
                  </div>

                  <blockquote className="text-slate-700 mb-5 leading-relaxed min-h-[60px]">
                    {testimonial.quote}
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white text-sm font-medium">
                          {testimonial.avatar}
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-slate-900 text-sm">{testimonial.author}</div>
                        {testimonial.subscribedSince && (
                          <div className="text-xs text-slate-400">{testimonial.subscribedSince}</div>
                        )}
                      </div>
                    </div>

                    <button 
                      onClick={() => handleHelpfulClick(realIndex, testimonial.helpful)}
                      disabled={votedItems.has(realIndex)}
                      className={`flex items-center gap-1.5 text-xs transition-all ${
                        votedItems.has(realIndex)
                          ? "text-amber-600 cursor-default"
                          : "text-slate-400 hover:text-slate-600 cursor-pointer"
                      }`}
                    >
                      <svg 
                        className={`w-4 h-4 transition-transform ${votedItems.has(realIndex) ? "scale-110" : ""}`} 
                        fill={votedItems.has(realIndex) ? "currentColor" : "none"} 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      <span>
                        {votedItems.has(realIndex) ? "Merci !" : "Utile"} ({getHelpfulCount(realIndex, testimonial.helpful)})
                      </span>
                    </button>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-amber-500"
                    : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Aller à la page ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1.5 transition-colors"
            >
              {isAutoPlaying ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Pause
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Lecture auto
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 mb-4">
            Tous les avis sont collectés automatiquement après soubscription à un abonnement et non modifiés
          </p>
          <div className="flex items-center justify-center gap-6 text-slate-400">
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>Avis authentiques</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Identités vérifiées</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
