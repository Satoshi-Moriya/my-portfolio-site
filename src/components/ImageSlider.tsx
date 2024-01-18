import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css"

export default function ImageSlider({
   imgSrc,
}: {
  imgSrc: string[];
}) {

  return (
    <>
      <StyledSwiper
        spaceBetween={50}
        slidesPerView={2}
        loop={true}
        centeredSlides={true}
        mousewheel={
          {
            invert: true,
            eventsTarget: '#__next'
          }
        }
        pagination={{
          type: "fraction"
        }}
        modules={[Mousewheel, Pagination]}
      >
        <SwiperSlide><img src={imgSrc[0]} alt="" /></SwiperSlide>
        <SwiperSlide><img src={imgSrc[1]} alt="" /></SwiperSlide>
        <SwiperSlide><img src={imgSrc[2]} alt="" /></SwiperSlide>
        <SwiperSlide><img src={imgSrc[3]} alt="" /></SwiperSlide>
        <SwiperSlide><img src={imgSrc[4]} alt="" /></SwiperSlide>
      </StyledSwiper>
    </>
  )
}

const StyledSwiper = styled(Swiper)`
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  .swiper-pagination {
    text-align: center;
  }
`;