import { poppinsFont } from "../styles/fonts";
import styled from "styled-components";
import FixedBg from "@/components/FixedBg";
import { motion } from "framer-motion";
import { usePageTransition } from "@/components/PageTransitionContext";
import { useState } from "react";


const topLoading = {
  // whenを使ってアニメーションに順番をつけたい場合、
  // 下記のhiddenという名前を合わせてあげる必要がある
  visible: {
    right: '0%'
  },
  hidden: {
    right: '-100%',
    transition: {
      when: "afterChildren",
      duration: 0.5,
      delay: 0.5,
      ease: [0.8, 0, 0.5, 1]
    }
  }
}

const topLoadingText = {
  visible: {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    transition: {
      ease: [0.22, 1, 0.36, 1],
      delay: 1.7,
      duration: 1.2,
    }
  },
  hidden: {
    transform: "matrix(1, 0, 0, 1, 0, 100)",
    transition: {
      ease: [0.22, 1, 0.36, 1],
      delay: 1.2,
      duration: 1.2,
    }
  }
}

const topLoadingLine = {
  visible: {
    right: "0%",
    transition: {
      delay: 0.5,
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  hidden: {
    right: "-100%",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    }
  }
}

export async function getStaticProps() {
  return {
    props: {
      layout: "top",
    },
  };
}

export default function Top() {
  const { transitionFrom } = usePageTransition();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {transitionFrom === "first load" && (
        <motion.div
          variants={topLoading}
          animate={isVisible ? "visible" : "hidden"}
          style={{
            position: "fixed",
            right: "0%",
            zIndex: "101",
            backgroundColor: "#000000",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <SlimyUpText>
              <SlimyUpTextInnerWrap>
                <motion.span
                  variants={topLoadingText}
                  style={{
                    overflow: "hidden",
                    transform: "matrix(1, 0, 0, 1, 0, 100)",
                    display: "block",
                    fontFamily : `${poppinsFont.style.fontFamily}, sans-serif`
                  }}
                  onAnimationComplete={() => setIsVisible(false)}
                >
                  Satoshi Moriya
                </motion.span>
                <motion.span
                  variants={topLoadingLine}
                  style={{
                    marginTop: "30px",
                    background: "#FFFFFF",
                    opacity: "0.5",
                    display: "block",
                    height: "1px",
                    width: "100%",
                    right: "100%",
                    position: "relative",
                    backfaceVisibility: "hidden",
                  }}
                ></motion.span>
              </SlimyUpTextInnerWrap>
            </SlimyUpText>
          </div>
        </motion.div>
      )}
      <FixedBg>
        <TitleWrap>
          <Title layoutId="logoTitle">
            <span><BigText>C</BigText>reating</span>
            <span>&nbsp;is&nbsp;</span>
            <BigPinkText>FUN !!</BigPinkText>
          </Title>
        </TitleWrap>
      </FixedBg>
    </>
  );
}

const TitleWrap = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled(motion.h2)`
  font-family: ${poppinsFont.style.fontFamily}, sans-serif;
  letter-spacing: 0.02px;
  font-size: 7vw;
  font-weight: 700;
  white-space: nowrap;
  line-height: 1;
  position: fixed;
`;

const BigText = styled.span`
  font-size: 14vw;
`;

const BigPinkText = styled.span`
  font-size: 14vw;
  color: #F4B9C5;
`;

const SlimyUpText = styled.p`

`;

const SlimyUpTextInnerWrap = styled.span`
  overflow: hidden;
  display: block;
`;

// const SlimyUpTextInner = styled(motion.span)`
//   overflow: hidden;
//   transform: matrix(1, 0, 0, 1, 0, 100);
//   transition: 1.2s cubic-bezier(0.22, 1, 0.36, 1);
//   display: block;
//   font-family : ${poppinsFont.style.fontFamily}, sans-serif;
// `;