import { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

import LogoTitle from "@/components/LogoTitle";
import ImageSlider from "@/components/ImageSlider";
import { client } from "@/libs/client";


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
      <LogoTitle />
      <ImageSlider works={works} />
    </>
  );
}