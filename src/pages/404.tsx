import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

import LogoTitle from "@/components/LogoTitle";


export default function Custom404() {
  return (
    <>
      <LogoTitle />
      <PageNotContents
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition:{ duration: 0.2, delay: 1}
        }}
      >
        <PageNotTitle>404 - Page Not Found</PageNotTitle>
        <p>お探しのページは一時的にアクセスできない状況にあるか、移動もしくは削除された可能性がございます。</p>
        <BackToTopLink href={"/"} scroll={false}>
          Topページへ戻る
        </BackToTopLink>
      </PageNotContents>
    </>
  )
}

const PageNotContents = styled(motion.div)`
  padding: 0 50px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > *:not(:first-child) {
    margin-top: 40px;
  }
`;

const PageNotTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
`

const BackToTopLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #FFFFFF;
  background-color: #1A1A1A;
  padding: 10px 20px;
  transition: background-color 0.5s, color 0.5s;

  &:hover,
  &:focus {
    background-color: #FFFFFF;
    color: #1A1A1A;
  }
`;