import { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";
import { client } from "@/libs/client";
import LogoTitle from "@/components/LogoTitle";
import ImageSlider from "@/components/ImageSlider";
import { motion } from "framer-motion";
import { usePageTransition } from "@/components/PageTransitionContext";
import { useEffect } from "react";


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
  const { transitionFrom, setTransitionFrom } = usePageTransition();

  const imageSrc = works.map((work, index) => (
    // ToDo no-imgを用意する？
    work.mv ? work.mv.url : "/no-img.png"
  ));

  useEffect(() => {
    setTransitionFrom("works");
  }, []);

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