import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

export default function Carousel({ data = [], renderItem }) {
  return (
    <div className={styles.carouselWrap}>
      <button className={`swiper-button-prev-custom ${styles.navBtn}`} aria-label="Previous">
        ‹
      </button>

      <button className={`swiper-button-next-custom ${styles.navBtn}`} aria-label="Next">
        ›
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
        className={styles.swiper}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}