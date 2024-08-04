import styled from "styled-components";
import { motion } from "framer-motion";

import { poppinsFont } from "@/styles/fonts";
import { media } from '@/utils/media';


export default function LogoTitle() {
  return (
    <Title layoutId="logoTitle">
      <span><BigText>C</BigText>reating</span>
      <span>&nbsp;is&nbsp;</span>
      <BigPinkText>FUN !!</BigPinkText>
    </Title>
  )
}


const Title = styled(motion.h2)`
  font-family: ${poppinsFont.style.fontFamily}, sans-serif;
  letter-spacing: 0.02px;
  font-size: 25px;
  font-weight: 700;
  white-space: nowrap;
  line-height: 1;
  position: fixed;
  z-index: 10;
  top: 20px;
  left: 5%;

  ${media.sm`
    font-size: 30px;
    // 25pxは検証ツールでメニューと比較していい感じの場所になった時の数値
    top: 25px;
    left: 50px;
  `}
`;

const BigText = styled.span`
  font-size: 35px;

  ${media.sm`
    font-size: 50px;
  `}
`;

const BigPinkText = styled.span`
  font-size: 35px;
  color: #F4B9C5;

  ${media.sm`
    font-size: 50px;
  `}
`;
