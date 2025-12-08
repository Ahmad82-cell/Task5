import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";


export default function Slider({ items }) {
  return (
    <div className="slider-wrapper">
      <div className="slider-3d-container">
        <Swiper
          effect="coverflow"
          slidesPerView={3}
          centeredSlides
          grabCursor
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -15,
            depth: 250,
            modifier: 2,
            slideShadows: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = ".prev-btn";
            swiper.params.navigation.nextEl = ".next-btn";
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="swiper-box"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="slide-box">
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="btns-container">
        <button className="prev-btn nav-btn">&lt;</button>
        <button className="next-btn nav-btn">&gt;</button>
      </div>
    </div>
  );
}