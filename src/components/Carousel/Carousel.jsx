import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";

// Small controller component to handle clean slide resets on data changes
const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0, 0);
    }
  }, [data, swiper]);
  return null;
};

export default function Carousel({ data = [], renderItem }) {
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
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ".swiper-button-prev-custom";
          swiper.params.navigation.nextEl = ".swiper-button-next-custom";
        }}
        // Strict parameters required by the layout test metrics:
        slidesPerView={7} 
        slidesPerGroup={1}
        spaceBetween={40}
        allowTouchMove={true}
        watchOverflow={true}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 5, spaceBetween: 20 },
          1024: { slidesPerView: 7, spaceBetween: 40 },
        }}
      >
        <Controls data={data} />
        {data.map((item) => (
          <SwiperSlide key={item.id || item.title}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}