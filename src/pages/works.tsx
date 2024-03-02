import WorkList from "@/components/WorkList";
import { poppinsFont } from "../styles/fonts";
import styled from "styled-components";
import { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";
import { client } from "@/libs/client";
import { motion } from "framer-motion";

export type Work = {
  enTitle: string;
  title: string;
  mv?: MicroCMSImage;
  type: string[];
  release?: string;
  role?: string;
  url?: string;
  explanation: string;
  wholeImg?: MicroCMSImage;
} & MicroCMSDate & MicroCMSContentId;

export async function getStaticProps() {
  const works = await client.get({ endpoint: "works" });

  return {
    props: {
      works: works.contents || null,
    },
  };
};

export default function Works({
   works,
}: {
  works: Work[];
}) {

  const imageSrc = works.map((work, index) => (
    // ToDo no-imgを用意する？
    work.mv ? work.mv.url : "/no-img.png"
  ));

  return (
    <>
      <Title layoutId="logoTitle">
        <span><BigText>C</BigText>reating</span>
        <span>&nbsp;is&nbsp;</span>
        <BigPinkText>FUN !!</BigPinkText>
      </Title>
      <Container>
        <WorkList works={works} />
      </Container>
    </>
  );
}

const Title = styled(motion.div)`
  font-family: ${poppinsFont.style.fontFamily}, sans-serif;
  letter-spacing: 0.02px;
  font-size: 30px;
  font-weight: 700;
  white-space: nowrap;
  line-height: 1;
  position: fixed;
  // 25pxは検証ツールでメニューと比較していい感じの場所になった時の数値
  top: 25px;
  left: 50px;
`;

const BigText = styled.span`
  font-size: 50px;
`;

const BigPinkText = styled.span`
  font-size: 50px;
  color: #F4B9C5;
`;

const Container = styled.div`
  margin: 150px auto 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;