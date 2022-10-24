import { FC, useState, useRef } from "react";
import { Slide } from "../Slide";
import { ReactComponent as Prev } from "../../assets/img/prev.svg";
import { ReactComponent as Next } from "../../assets/img/next.svg";
import sliderArr from "../../data/slider";
import getSlideDataIndex from "../../utils/getSlideIndex";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as TSwiper } from "swiper";
import "swiper/scss";
import "./Slider.scss";

type TSlider = {
  isDarkTheme?: boolean;
};

const Slider: FC<TSlider> = ({ isDarkTheme }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const swiperRef = useRef<TSwiper | null>(null);
  return (
    <div className="slider">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        centeredSlides
        speed={700}
        centeredSlidesBounds
        loop
        lazy
        onSwiper={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
          swiperRef.current = swiper;
        }}
        onSlideChange={(swipe) => setCurrentSlide(getSlideDataIndex(swipe) + 1)}
      >
        {sliderArr.map(({ id, year, name, img }) => (
          <SwiperSlide key={id}>
            <Slide
              year={year}
              name={name}
              img={img}
              isDarkTheme={isDarkTheme}
              currentSlide={currentSlide}
              sliderLength={sliderArr.length}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="slider__button-prev"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-hidden
      >
        <Prev />
      </div>
      <div
        className="slider__button-next"
        onClick={() => swiperRef.current?.slideNext()}
        aria-hidden
      >
        <Next />
      </div>
    </div>
  );
};

export default Slider;
