import styled from "styled-components";
import { motion } from "framer-motion";

import { poppinsFont } from "@/styles/fonts";
import FixedBg from "@/components/FixedBg";
import { usePageTransition } from "@/components/PageTransitionContext";
import Loading from "@/components/Loading";


export async function getStaticProps() {
  return {
    props: {
      layout: "top",
    },
  };
}

export default function Top() {
  const { transitionFrom } = usePageTransition();

  return (
    <>
      {transitionFrom === "first load" && (
        <Loading />
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