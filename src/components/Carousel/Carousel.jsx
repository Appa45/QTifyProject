import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import styles from "./Carousel.module.css";

// 1. Accept 'id' here in the props destructuring!
export default function Carousel({ id = "default", data = [], renderItem }) {
  const swiperRef = useRef(null);

  // Clean the ID string so it creates a safe class name selector
  const cleanId = id.replace(/\s/g, "");

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0, 0);
    }
  }, [data]);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className={styles.carouselWrap}>
      <button
        className={`prev-${cleanId} ${styles.navBtn}`}
        aria-label="Previous"
        onClick={handlePrev}
      >
        ‹
      </button>

      <button
        className={`next-${cleanId} ${styles.navBtn}`}
        aria-label="Next"
        onClick={handleNext}
      >
        ›
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        // Bind the selectors cleanly to avoid Swiper overriding native layouts
        navigation={{
          prevEl: `.prev-${cleanId}`,
          nextEl: `.next-${cleanId}`,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = `.prev-${cleanId}`;
          swiper.params.navigation.nextEl = `.next-${cleanId}`;
        }}
        slidesPerView={7}
        slidesPerGroup={1}
        spaceBetween={40}
        allowTouchMove={true}
        watchOverflow={false} 
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 5, spaceBetween: 20 },
          1024: { slidesPerView: 7, spaceBetween: 40 },
        }}
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