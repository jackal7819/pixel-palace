'use client'

import HeroCard from "@/components/Main/Hero/components/HeroCard";
import {games} from "@/data";
import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';


const HeroMain = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const onBulletClick = (index:number) => {
    if (swiperRef.current){
      swiperRef.current.slideTo(index);
      setActiveIndex(index)
    }
  };

	return <section>
    <div className="relative mb-10 md:mb-20 ">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTotalSlides(swiper.slides.length);
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={700}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Pagination, Autoplay, EffectCreative]}
        spaceBetween={1}
        slidesPerView={1}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -300],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
      >
        {games.slice(0, 5).map(game => (
          <SwiperSlide key={game.id}>
            <HeroCard
              image={game.image}
              title={game.title}
              description={game.description}
              price={game.price}
              totalSlides={totalSlides}
              activeIndex={activeIndex}
              onBulletClick={onBulletClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>


    </div>

  </section>;
};

export default HeroMain;
