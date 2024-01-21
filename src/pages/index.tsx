import { poppinsFont } from "../styles/fonts";
import styled from "styled-components";
import FixedBg from "@/components/FixedBg";

export async function getStaticProps() {
  return {
    props: {
      layout: "top",
    },
  };
}

export default function Top() {
  return (
    <>
      <FixedBg>
        <TitleWrap>
          <Title>
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

// const Title = styled(motion.h2)`
const Title = styled.h2`
  font-family: ${poppinsFont.style.fontFamily}, sans-serif;
  letter-spacing: 0.02px;
  font-size: 7vw;
  font-weight: 700;
  white-space: nowrap;
  line-height: 1.25;
  position: fixed;
  /* scale: 1.0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important; */
`;

const BigText = styled.span`
  font-size: 14vw;
`;

const BigPinkText = styled.span`
  font-size: 14vw;
  color: #F4B9C5;
`;