// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
        spaceBetween={48}
        slidesPerView={3}
      >
        <SwiperSlide className={styles.slide}>
          <img
            src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dirt"
          />
          <h1>Title</h1>
          <h2 className={styles.date}>Edited on 2000-01-01</h2>
          <h2 className={styles.tags}>Tags</h2>
          <p className={styles.description}>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://plus.unsplash.com/premium_photo-1696839222555-39c55f77fe3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
            alt="crop"
          />
          <h1>Title</h1>
          <h2 className={styles.date}>Edited on 2000-01-01</h2>
          <h2 className={styles.tags}>Tags</h2>
          <p className={styles.description}>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://images.unsplash.com/photo-1741926376117-85ec2cef9714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
            alt="forest"
          />
          <h1>Title</h1>
          <h2 className={styles.date}>Edited on 2000-01-01</h2>
          <h2 className={styles.tags}>Tags</h2>
          <p className={styles.description}>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://images.unsplash.com/photo-1741877649919-4619ae378927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
            alt="leo"
          />
          <h1>Title</h1>
          <h2 className={styles.date}>Edited on 2000-01-01</h2>
          <h2 className={styles.tags}>Tags</h2>
          <p className={styles.description}>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://images.unsplash.com/photo-1566165226226-3cf49a1b3471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
            alt="flower"
          />
          <h1>Title</h1>
          <h2 className={styles.date}>Edited on 2000-01-01</h2>
          <h2 className={styles.tags}>Tags</h2>
          <p className={styles.description}>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://images.unsplash.com/photo-1741369425194-94ac3be7d63f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
            alt="coffee"
          />
          <h1>Title</h1>
          <h2 className={styles.date}>Edited on 2000-01-01</h2>
          <h2 className={styles.tags}>Tags</h2>
          <p className={styles.description}>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
