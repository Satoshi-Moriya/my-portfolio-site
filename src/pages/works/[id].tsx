import { client } from "@/libs/client";
import { useRouter } from "next/router";
import React from "react";
import { Work } from "../works";
import styled from "styled-components";
import { motion } from "framer-motion";
import { poppinsFont } from "../../styles/fonts";

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
  const router = useRouter();

  return (
    <>
      <Title layoutId="logoTitle">
        <span><BigText>C</BigText>reating</span>
        <span>&nbsp;is&nbsp;</span>
        <BigPinkText>FUN !!</BigPinkText>
      </Title>
      <WorkContents>
        <MvWrap>
          <Mv
            src={work.mv?.url}
            alt=""
          />
        </MvWrap>
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
              <WorkDetailsDataItem><dt>Release</dt><dd>{work.release}</dd></WorkDetailsDataItem>
              <WorkDetailsDataItem><dt>Role</dt><dd>{work.role}</dd></WorkDetailsDataItem>
              <WorkDetailsDataItem><dt>Url</dt><dd><a href={work.url} target="_blank" rel="noopener noreferrer">{work.url}</a></dd></WorkDetailsDataItem>
            </WorkDetailsData>
          </WorkDetailsBody>
          <WorkDetailsImageWrap>
            <img src={work.wholeImg?.url} alt="" />
          </WorkDetailsImageWrap>
          <WorkDetailsExtLinkWrap>
            <a href={work.url} target="_blank" rel="noopener noreferrer">View Site</a>
          </WorkDetailsExtLinkWrap>
        </WorkDetails>
      </WorkContents>
    </>
  );
}

const Title = styled(motion.h2)`
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

const MvWrap = styled.figure`
  background-color: #000000;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -1;
`;

const Mv = styled(motion.img)`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

const WorkContents = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const WorkDetails = styled.div`
  margin-top: 100px;
  width: 60%;
`;

const WorkDetailsHeader = styled.div`
  height: calc(100vh - 100px);
`;

const WorkDetailsHeaderTitle = styled.h1`
  font-family: ${poppinsFont.style.fontFamily}, sans-serif;
  letter-spacing: 0.02px;
  font-size: 7vw;
  font-weight: 700;
  white-space: nowrap;
  line-height: 1;
  height: inherit;
  display: grid;
  place-content: center;
`;

const WorkDetailsBody = styled.div`

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
  font-size: 24px;
`;

const WorkDetailsBodyTitleSub = styled.p`
  font-size: 18px;
  opacity: 0.6;
`;

const WorkDetailsDesc = styled.p`
  line-height: 1.8;
  margin-top: 40px;
`;

const WorkDetailsData = styled.div`
  margin-top: 40px;
`;

const WorkDetailsDataItem = styled.dl`
  display: flex;
  word-wrap: break-word;

  &:not(:first-child) {
    margin-top: 20px;
  }

  dt {
    font-weight: 700;
    width: 150px;
    white-space: nowrap;
    margin-right: 40px;
  }

  dd {
    font-size: 0.875rem;
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