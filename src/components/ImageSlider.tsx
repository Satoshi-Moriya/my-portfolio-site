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
        spaceBetween={800}
        slidesPerView={1.2}
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
        <StyledSwiperSlide><img src={imgSrc[0]} alt="" /></StyledSwiperSlide>
        <StyledSwiperSlide><img src={imgSrc[1]} alt="" /></StyledSwiperSlide>
        <StyledSwiperSlide><img src={imgSrc[2]} alt="" /></StyledSwiperSlide>
        <StyledSwiperSlide><img src={imgSrc[3]} alt="" /></StyledSwiperSlide>
        <StyledSwiperSlide><img src={imgSrc[4]} alt="" /></StyledSwiperSlide>
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

const StyledSwiperSlide = styled(SwiperSlide)`
  // ToDo 画面の高さと幅が変わった時に、常に比率を同じにしたい
  height: 75vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-height: 720px;
    max-width: 1280px;
    object-fit: cover;
  }
`;