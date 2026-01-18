"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80', // Electronics
    title: 'Next-Gen Tech',
    highlight: 'Electronics',
    desc: 'Explore the latest in high-performance computing, smart gadgets, and cutting-edge home entertainment.'
  },
  {
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80', // Fashion
    title: 'Define Your Style',
    highlight: 'Premium Fashion',
    desc: 'Discover curated collections that blend comfort with modern elegance for every occasion.'
  },
  {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80', // Accessories
    title: 'The Perfect Finish',
    highlight: 'Modern Accessories',
    desc: 'Complete your look with our exclusive range of watches, leather goods, and premium essentials.'
  }
];

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background Image with Ken Burns Effect */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] scale-110 active-slide-zoom"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              </div>

              {/* Hero Content */}
              <div className="container relative z-10 mx-auto px-6 text-left">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                    {slide.title} <br />
                    <span className="text-purple-400">{slide.highlight}</span>
                    </h1>
                    
                    <p className="max-w-xl text-lg md:text-xl text-gray-200 mb-10 leading-relaxed opacity-90">
                    {slide.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                    <Link href="/shop">
                        <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-md transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/30 w-full sm:w-auto">
                        Shop Collection
                        </button>
                    </Link>
                    <Link href="/categories">
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md transition-all hover:bg-white hover:text-black w-full sm:w-auto">
                        View Categories
                        </button>
                    </Link>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
        .swiper-pagination-bullet-active { 
            background: #a855f7 !important; 
            opacity: 1; 
            width: 35px !important; 
            border-radius: 5px; 
            transition: all 0.3s; 
        }
        /* Fix for the zoom effect transition */
        .swiper-slide-active .active-slide-zoom {
            transform: scale(1);
        }
      `}</style>
    </section>
  );
};

export default Hero;