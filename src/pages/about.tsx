import LogoTitle from "@/components/LogoTitle"
import { usePageTransition } from "@/components/PageTransitionContext";
import { motion } from "framer-motion";
import React, { useEffect } from "react"
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import Image from "next/image";


export default function About() {
  const { setTransitionFrom } = usePageTransition();

  useEffect(() => {
    setTransitionFrom("about");
  }, []);

  return (
    <Inner>
      <LogoTitle />
      <AboutContents
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition:{ duration: 0.2, delay: 1}
        }}
      >
        <AboutImageWrapper>
          <Image src="/images/about.png" alt="森屋 敏" width={960} height={640} />
        </AboutImageWrapper>
        <AboutTextWrapper>
          <AboutTitle>
            <h2>森屋 敏</h2>
            <p>Web Engineer / Drummer</p>
          </AboutTitle>
          <AboutDescription>
            <p>山梨県出身、29歳。</p>
            <p>都内の受託系の開発会社でWebエンジニアをやっております。</p>
            <p>個人でWebサイト制作のお仕事もおこなっております。</p>
            <p>ドラムが好き。ドラマーとしても活動中。</p>
            <br />
            <p>お仕事のご依頼・ご相談などはメールや各SNSのDMからお気軽にお問い合わせください。</p>
          </AboutDescription>
        </AboutTextWrapper>
        <AboutExternalLinks>
          <AboutExternalLink href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <MdOutlineEmail />
            <span>Email</span>
          </AboutExternalLink>
          <AboutExternalLink href="https://twitter.com/_moriyas" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
            <span>X（旧Twitter）</span>
          </AboutExternalLink>
          <AboutExternalLink href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            <span>Instagram</span>
          </AboutExternalLink>
          <AboutExternalLink href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>GitHub</span>
          </AboutExternalLink>
          <AboutExternalLink href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <FaPencilAlt />
            <span>Blog</span>
          </AboutExternalLink>
          <AboutExternalLink href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
            <span>YouTube</span>
          </AboutExternalLink>
          <AboutExternalLink href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <MdComputer />
            <span>CrowdWorks</span>
          </AboutExternalLink>
        </AboutExternalLinks>
      </AboutContents>
    </Inner>
  )
}

const Inner = styled.div`
  height: 100%;
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
`;

const AboutContents = styled(motion.div)`
  margin-top: 140px; // headerの高さ100pxと余白40px
  padding: 0 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 40px;
`;

const AboutImageWrapper = styled.figure`
  grid-column: 1 / 2;
`;

const AboutTextWrapper = styled.div`
  grid-column: 2 / 3;
  line-height: 1.8;
`;

const AboutTitle = styled.div`
  position: relative;

  h2 {
    font-weight: 700;
    font-size: 24px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    opacity: 0.7;
  }

  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    background: #ffffff;
    opacity: 0.7;
  }
`;

const AboutDescription = styled.div`
  margin-top: 24px;
`;

const AboutExternalLinks = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px 20px;
  font-size: 20px;
`;

const AboutExternalLink = styled.a`
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

  svg {
    margin-right: 10px;
  }
`;