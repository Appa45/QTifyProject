import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";

export default function Carousel({ data = [], renderItem }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      spaceBetween={20}
      slidesPerView={7}
      className={styles.swiper}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 7,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}