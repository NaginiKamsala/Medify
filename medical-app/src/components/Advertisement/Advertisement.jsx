import styles from "./Advertisement.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import add1 from "../../assets/add1.png";
import add2 from "../../assets/add2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Advertisement = () => {
  const ads = [add1, add2, add1, add2];

  return (
    <div className={styles.ads_section}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {ads.map((add, ind) => {
          return (
            <SwiperSlide key={ind} className={styles.swiper_slide}>
              <img src={add} alt="add" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Advertisement;
