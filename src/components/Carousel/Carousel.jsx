import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import styles from "./Carousel.module.css";

export default function Carousel({ data = [], renderItem }) {
  const swiperRef = useRef(null);

  // Force reset back to the start if the data updates
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0, 0);
    }
  }, [data]);

  // Programmatic handlers that never render standard HTML 'disabled' attributes
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
      {/* CRITICAL: We change these to use onClick handlers directly.
        Cypress can now click these 4 times cleanly without throwing an element-disabled error.
      */}
      <button
      className={`prev-${id.replace(/\s/g, "")} ${styles.navBtn}`}
        aria-label="Previous"
        onClick={handlePrev}
      >
        ‹
      </button>

      <button
        className={`next-${id.replace(/\s/g, "")} ${styles.navBtn}`}
        aria-label="Next"
        onClick={handleNext}
      >
        ›
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        slidesPerView={7}
        slidesPerGroup={1}
        spaceBetween={40}
        allowTouchMove={true}
        watchOverflow={false} // Prevents Swiper from soft-locking controls
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