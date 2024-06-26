import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Work } from "@/pages/works";
import Link from "next/link";


export default function ImageSlider({
   works,
}: {
  works: Work[];
}) {

  return (
    <div style={{
        overflow: "hidden",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "relative",
        height: "100%",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          transform: "translate(0, 50%)",
        }}
        animate={{
          opacity: 1,
          transform: "translate(0, 0)",
          transition: {
            delay: 0.5,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)"
          }
        }}
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <StyledSwiper
          spaceBetween={200}
          slidesPerView={1.2}
          // ToDo 戻ってきた際に、前回のスライド位置を保持したい
          // initialSlide={2}
          loop={true}
          centeredSlides={true}
          mousewheel={
            {
              invert: true,
              eventsTarget: '#__next'
            }
          }
          navigation
          pagination={{
            clickable: true,
            type: "fraction"
          }}
          modules={[Mousewheel, Pagination, Navigation]}
        >
          {
            works.map(({ id, title, mv }) => (
              <StyledSwiperSlide key={id}>
                <StyledSwiperSlideLink href={`/works/${id}`} scroll={false}>
                  <ThumbnailWrap layoutId={`mv_${id}`}>
                    <Thumbnail src={mv?.url} alt={title} />
                  </ThumbnailWrap>
                </StyledSwiperSlideLink>
              </StyledSwiperSlide>
            ))
          }
        </StyledSwiper>
      </motion.div>
    </div>
  )
}

const StyledSwiper = styled(Swiper)`
  height: 100%;

  .swiper-pagination {
    text-align: center;
    position: relative;
    top: -94px; // 要素の高さ24px + swiper-buttonの高さ30px + 40pxの余白
    z-index: 1;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: relative;
    top: -94px;
    width: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .swiper-button-prev {
    transform: translateX(-200%);

    &::before {
      content: "prev";
      position: absolute;
    }
  }

  .swiper-button-next {
    transform: translateX(100%);

    &::before {
      content: "next";
      position: absolute;
    }
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  // ToDo 画面の高さと幅が変わった時に、常に比率を同じにしたい
  // JSで複雑な処理になりそうなので、一旦なしで対応
  height: 67vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 0;
  top: 50%;
  // ToDo importantをなくしたい
  transform: translateY(-50%) !important;
`;

const StyledSwiperSlideLink = styled(Link)`

`;

const ThumbnailWrap = styled(motion.figure)`

`;

const Thumbnail = styled.img`
  width: 100%;
  max-height: 720px;
  max-width: 1280px;
  object-fit: cover;
`;