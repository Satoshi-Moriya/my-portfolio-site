import { poppinsFont } from "../styles/fonts";
import styled from "styled-components";
import { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";
import { client } from "@/libs/client";
import LogoTitle from "@/components/LogoTitle";
import ImageSlider from "@/components/ImageSlider";
import { motion } from "framer-motion";
import { usePageTransition } from "@/components/PageTransitionContext";


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
  const { transitionFrom } = usePageTransition();
  console.log(transitionFrom)

  const imageSrc = works.map((work, index) => (
    // ToDo no-imgを用意する？
    work.mv ? work.mv.url : "/no-img.png"
  ));

  return (
    <>
      {transitionFrom === "work" && (
        <motion.div
          initial={{
            right: '0%',
          }}
          animate={{
            right: '-100%',
            transition: {
              duration: 1,
              ease: [0.8, 0, 0.5, 1]
            },
          }}
          style={{
            position: "fixed",
            zIndex: "101",
            backgroundColor: "#000000",
            height: "100%",
            width: "100%",
          }}
        />
      )}
      <LogoTitle />
      <ImageSlider works={works} />
    </>
  );
}

const Title = styled.h2`
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