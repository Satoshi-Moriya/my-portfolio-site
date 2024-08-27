import styled from "styled-components";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import LogoTitle from "@/components/LogoTitle";
import { type Work } from "@/pages/works";
import { poppinsFont } from "@/styles/fonts";
import { client } from "@/libs/client";
import { usePageTransition } from "@/components/PageTransitionContext";
import { media } from "@/utils/media";


export async function getStaticPaths() {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map(
    (content: { id: string }) => `/works/${content.id}`
  );
  return { paths, fallback: false };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const work = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      work: work,
    },
  };
};

export default function Work({
  work,
}: {
  work: Work;
}) {
  const { setTransitionFrom } = usePageTransition();
  const router = useRouter();
  const date = new Date(work.release)

  useEffect(() => {
    setTransitionFrom("work");
  }, []);

  // ToDo initialとanimateもこっちの処理で対応可能かも？
  const getExitAnimation = (route: string) => {
    if (route !== "/works") {
      return {
        opacity: 0,
        transition:{ duration: 0.2 }
      };
    } else {
      return ""
    }
  };

  return (
    <>
      <LogoTitle />
      <motion.div
        exit={getExitAnimation(router.route)}
      >

        <MvWrap
          layoutId={`mv_${work.id}`}
          transition={{ duration: 0.5 }}
        >
          <Mv
            src={work.mv?.url}
            alt={work.title}
          />
        </MvWrap>
        <WorkContents
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition:{ duration: 0.2, delay: 0.5}
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5}
          }}
        >
          <WorkDetails>
            <WorkDetailsHeader>
              <WorkDetailsHeaderTitle>{work.enTitle}</WorkDetailsHeaderTitle>
            </WorkDetailsHeader>
            <WorkDetailsBody>
              <WorkDetailsBodyTitle>
                <WorkDetailsBodyTitleMain>{work.title}</WorkDetailsBodyTitleMain>
                <WorkDetailsBodyTitleSub>{work.type}</WorkDetailsBodyTitleSub>
              </WorkDetailsBodyTitle>
              <WorkDetailsDesc>{work.explanation}</WorkDetailsDesc>
              <WorkDetailsData>
                <WorkDetailsDataItem><dt>Release</dt><dd>{date.getFullYear() + "/" + ("0"+(date.getMonth() + 1)).slice(-2)}</dd></WorkDetailsDataItem>
                <WorkDetailsDataItem><dt>Role</dt><dd>{work.role}</dd></WorkDetailsDataItem>
                <WorkDetailsDataItem><dt>Url</dt><dd><a href={work.url} target="_blank" rel="noopener noreferrer">{work.url}</a></dd></WorkDetailsDataItem>
              </WorkDetailsData>
            </WorkDetailsBody>
            { work.wholeImg?.url &&
              <WorkDetailsImageWrap>
                <img src={work.wholeImg?.url} alt="" />
              </WorkDetailsImageWrap>
            }
            <WorkDetailsExtLinkWrap>
              <a href={work.url} target="_blank" rel="noopener noreferrer">View Site</a>
            </WorkDetailsExtLinkWrap>
          </WorkDetails>
        </WorkContents>
      </motion.div>
    </>
  );
}

const MvWrap = styled(motion.figure)`
  position: relative;
  top: 100px;
  z-index: -1;

  ${media.sm`
    top: auto;
    position: fixed;
    display: block;
    background-color: #000000;
    height: 100vh;
    width: 100%;
  `}
`;

const Mv = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  ${media.sm`
    opacity: 0.3;
  `}
`;

const WorkContents = styled(motion.main)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  margin-top: 140px; // サムネ画像のtop: 100pxと40pxの余白

  ${media.sm`
    margin-top: 0;
  `}
`;

const WorkDetails = styled.div`
  width: 90%;
  max-width: 600px;

  ${media.sm`
    margin-top: 100px;
    width: 100%;
    max-width: none;
  `}
`;

const WorkDetailsHeader = styled.div`
  display: none;

  ${media.sm`
    display: block;
    height: calc(100vh - 100px);
    padding: 0 50px
  `}
`;

const WorkDetailsHeaderTitle = styled(motion.h1)`
  font-family: ${poppinsFont.style.fontFamily}, sans-serif;
  letter-spacing: 0.02px;
  font-size: 7vw;
  font-weight: 700;
  line-height: 1.25;
  height: inherit;
  display: grid;
  place-content: center;
  text-align: center;
`;

const WorkDetailsBody = styled.div`

  ${media.sm`
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 0 50px;
  `}
`;

const WorkDetailsBodyTitle = styled.div`
  position: relative;

  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    background: #FFFFFF;
    margin-top: 10px;
  }
`;

const WorkDetailsBodyTitleMain = styled.h2`
  font-size: 20px;

  ${media.sm`
    font-size: 32px;
  `}
`;

const WorkDetailsBodyTitleSub = styled.p`
  font-size: 16px;
  opacity: 0.6;

  ${media.sm`
    font-size: 20px;
  `}
`;

const WorkDetailsDesc = styled.p`
  line-height: 1.8;
  margin-top: 40px;
  font-size: 16px;

  ${media.sm`
    font-size: 18px;
  `}
`;

const WorkDetailsData = styled.div`
  margin-top: 40px;
`;

const WorkDetailsDataItem = styled.dl`
  display: flex;
  align-items: center;
  word-wrap: break-word;

  &:not(:first-child) {
    margin-top: 20px;
  }

  dt {
    font-weight: 700;
    width: 100px;
    white-space: nowrap;
    margin-right: 20px;

    ${media.sm`
      width: 150px;
      margin-right: 40px;
    `}
  }

  dd {
    // font-size: 0.875rem;
    width: calc(100% - 190px);

    a {
      background: linear-gradient(currentColor, currentColor) left bottom/100% 1px no-repeat;
      transition: background-size 0.5s;

      &:hover {
        background-position: right bottom;
        background-size: 0 1px;
      }
    }
  }
`;

const WorkDetailsImageWrap = styled.div`
  margin-top: 40px;

  ${media.sm`
    margin: 40px auto 0;
    width: 100%;
    max-width: 900px;
    padding: 0 50px;
  `}
`;

const WorkDetailsExtLinkWrap = styled.div`
  margin-top: 40px;
  text-align: center;

  a {
    position: relative;
    font-family: ${poppinsFont.style.fontFamily}, sans-serif;
    font-size: 24px;

    &::after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: -2px;
      width: calc(100% - 4px);
      height: 8px;
      border-bottom: 1px solid #FFFFFF;
      border-right: 1px solid #FFFFFF;
      transform: skew(45deg) translate(0%, 0%);
      transition: all 0.5s ease;
    }

    &:hover {
      &::after{
        transform: skew(45deg) translate(50%, 0%);
        transition: all 0.5s ease;
      }
    }
  }
`;