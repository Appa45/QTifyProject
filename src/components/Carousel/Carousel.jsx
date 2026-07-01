import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";

export default function Carousel({ data = [], renderItem }) {
  const swiperRef = useRef(null);

  // CRITICAL FIX: Reset slider back to index 0 whenever the dataset changes
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0, 0);
    }
  }, [data]);

  return (
    <div className={styles.carouselWrap}>
      <button
        className={`swiper-button-prev-custom ${styles.navBtn}`}
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        className={`swiper-button-next-custom ${styles.navBtn}`}
        aria-label="Next"
      >
        ›
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ".swiper-button-prev-custom";
          swiper.params.navigation.nextEl = ".swiper-button-next-custom";
        }}
        // CRITICAL FIX: Change to dynamic auto-sizing or a higher density match 
        // standard Qtify criteria (around 7 slides per view fits a 1280px screen perfectly)
        slidesPerView={"auto"}
        slidesPerGroup={1}
        spaceBetween={40} 
        allowTouchMove={true}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id || item.title}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}