import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FC, ReactNode } from "react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps } from "swiper/react";

import { Swiper as SwiperObject } from "swiper";

interface Props2 extends SwiperProps {}

interface Props {
  props?: Props2;
  children?: ReactNode;
  sliders?: ReactNode[];
}

const SwiperWrapper: FC<Props> = ({ children, props, sliders }) => {
  return (
    <Swiper
      className="customSwiper"
      style={{ width: "100%" }}
      modules={[Pagination, Navigation, Keyboard]}
      keyboard
      pagination={{ clickable: true }}
      navigation
      {...props}
    >
      <div>{...sliders ?? []}</div>
      <div>{children}</div>
    </Swiper>
  );
};

export default SwiperWrapper;
