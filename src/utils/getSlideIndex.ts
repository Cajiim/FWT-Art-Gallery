import type { SwiperOptions } from "swiper";
import type { Dom7Array } from "dom7";

const getSlideDataIndex = ({
  activeIndex,
  slides,
  params,
}: {
  activeIndex: number;
  slides: Dom7Array;
  params: SwiperOptions;
}) => {
  let correctIndex = activeIndex;
  const slidesLen = slides.length;
  if (params.loop) {
    switch (activeIndex) {
      case 0:
        correctIndex = slidesLen - 3;
        break;
      case slidesLen - 1:
        correctIndex = 0;
        break;
      default:
        --correctIndex;
    }
  }
  return correctIndex;
};

export default getSlideDataIndex;
