import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { Work } from "@/pages/works";
import { usePageTransition } from "@/components/PageTransitionContext";


const easeInOutExpo = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function ImageSlider({
   works,
}: {
  works: Work[];
}) {
  const { transitionFrom, setTransitionFrom, swiperNowWork, setSwiperNowWork } = usePageTransition();
  const router = useRouter();

  const handleActiveWorkNum = (num: number) => {
    setSwiperNowWork(num);
  };

  const handleAnimationComplete = () => {
    // worksページworkページからor他のページからの遷移でアニメーションが違うため
    // アニメーション後にtransitionFromを設定する必要がある
    setTransitionFrom("works");
  };

  // ToDo useStateの方が良いかも？or別のやり方
  let initial;
  let animate;
  if (transitionFrom !== "work") {
    initial = {
      opacity: 0,
      transform: "translate(0, 50%)",
    };
    animate = {
      opacity: 1,
      transform: "translate(0, 0)",
      transition: {
        delay: 0.5,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    };
  } else {
    initial = "";
    animate = "";
  }

  // ToDo initialとanimateもこっちの処理で対応可能かも？
  const getAnimation = (route: string) => {
    if (route !== "/works/[id]") {
      return {
        opacity: 0,
        transition:{ duration: 0.2 }
      };
    } else {
      return ""
    }
  };

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
        initial={initial}
        animate={animate}
        exit={getAnimation(router.route)}
        style={{
          position: "relative",
          height: "100%",
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        <StyledSwiper
          spaceBetween={200}
          slidesPerView={1.2}
          initialSlide={swiperNowWork}
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
          speed={1000}
        >
          {
            works.map(({ id, title, mv }, index) => (
              <StyledSwiperSlide key={id}>
                <StyledSwiperSlideLink
                  href={`/works/${id}`}
                  passHref
                  legacyBehavior
                  scroll={false}
                >
                  <a href={`/works/${id}`} onClick={() => handleActiveWorkNum(index)}>
                    <ThumbnailWrap layoutId={`mv_${id}`}>
                      <Thumbnail src={mv?.url} alt={title} />
                    </ThumbnailWrap>
                  </a>
                </StyledSwiperSlideLink>
              </StyledSwiperSlide>
            ))
          }
        </StyledSwiper>
      </ motion.div>
    </div>
  )
}

const StyledSwiper = styled(Swiper)`
  height: 100%;

  .swiper-wrapper {
    transition-timing-function: ${easeInOutExpo};
  }

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
    width: 48px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    cursor: pointer;
  }

  .swiper-button-prev {
    transform: translateX(-200%);

    &::before {
      content: "< Prev";
      position: absolute;
    }
  }

  .swiper-button-next {
    transform: translateX(100%);

    &::before {
      content: "Next >";
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
  max-width: 1080px;
  object-fit: cover;
`;