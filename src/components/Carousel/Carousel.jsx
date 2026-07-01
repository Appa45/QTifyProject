import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";

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
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ".swiper-button-prev-custom";
          swiper.params.navigation.nextEl = ".swiper-button-next-custom";
        }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        watchOverflow={false}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1440: { slidesPerView: 7 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}