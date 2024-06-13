import { Link } from "react-router-dom";
import "../../../assets/styles/ui/banner.scss";
import images from "../../../assets/images/images";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

const Banner = () => {
  return (
    <div className="mf-container flex py-5">
      <div className="mf-section__left">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={images.slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.slider2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mf-section__right flex flex-col gap-[30px]">
        <Link to={"/shop"}>
          <img src={images.bannerPromotion1} alt="" />
        </Link>
        <Link to={"/shop"}>
          <img src={images.bannerPromotion2} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
