import { motion } from "framer-motion";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import Image from "next/image";
import { useEffect } from "react";

import LogoTitle from "@/components/LogoTitle"
import { media } from "@/utils/media";
import { usePageTransition } from "@/components/PageTransitionContext";
import { generateMailToLink } from "@/utils/generateMailToLink";


const mailUser = process.env.MAIL_USER || "";
const mailDomain = process.env.MAIL_DOMAIN || "";

export default function About() {
  const { setTransitionFrom } = usePageTransition();
  const mailtoLink = generateMailToLink(mailUser, mailDomain)

  useEffect(() => {
    setTransitionFrom("about");
  }, []);

  return (
    <>
      <Inner>
        <LogoTitle />
        <AboutContents
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition:{ duration: 0.2, delay: 0.5}
          }}
          exit={{
            opacity: 0,
            transition:{ duration: 0.2 }
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
              <p>山梨県出身、30歳。</p>
              <p>都内の受託系の開発会社でWebエンジニアをやっております。</p>
              <p>個人でWebサイト制作のお仕事もおこなっております。</p>
              <p>ドラムが好き。ドラマーとしても活動中。</p>
              <br />
              <p>お仕事のご依頼・ご相談などはメールや各SNSのDMからお気軽にお問い合わせください。</p>
            </AboutDescription>
          </AboutTextWrapper>
          <AboutExternalLinks>
            <AboutExternalLink href={mailtoLink} target="_blank" rel="noreferrer">
              <MdOutlineEmail />
              <span>Email</span>
            </AboutExternalLink>
            <AboutExternalLink href="https://twitter.com/_moriyas" target="_blank" rel="noreferrer">
              <FaXTwitter />
              <span>X（旧Twitter）</span>
            </AboutExternalLink>
            <AboutExternalLink href="https://www.instagram.com/3104_moriya/" target="_blank" rel="noreferrer">
              <FaInstagram />
              <span>Instagram</span>
            </AboutExternalLink>
            <AboutExternalLink href="https://github.com/Satoshi-Moriya" target="_blank" rel="noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </AboutExternalLink>
            <AboutExternalLink href="https://satoshi-moriya.com/" target="_blank" rel="noreferrer">
              <FaPencilAlt />
              <span>Blog</span>
            </AboutExternalLink>
            <AboutExternalLink href="https://www.youtube.com/@moriyasdrums" target="_blank" rel="noreferrer">
              <FaYoutube />
              <span>YouTube</span>
            </AboutExternalLink>
            <AboutExternalLink href="https://crowdworks.jp/public/employees/3837075" target="_blank" rel="noreferrer">
              <MdComputer />
              <span>CrowdWorks</span>
            </AboutExternalLink>
          </AboutExternalLinks>
        </AboutContents>
      </Inner>
    </>
  )
}

const Inner = styled.div`
  height: 100%;
  width: 1040px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  ${media.xs`
    padding: 0 40px;
  `}
`;

const AboutContents = styled(motion.div)`
  margin-top: 140px; // headerの高さ100pxと余白40px
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto auto;
  gap: 40px;

  ${media.sm`
    grid-template-columns: 1fr 1fr;
  `}
`;

const AboutImageWrapper = styled.figure`
  grid-column: 1 / 2;
  grid-row: 1;

  ${media.sm`
    grid-row: auto;
  `}
`;

const AboutTextWrapper = styled.div`
  grid-row: 2;
  line-height: 1.8;

  ${media.sm`
    grid-row: auto;
    grid-column: 2 / 3;
  `}
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
  grid-row: 3;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px 20px;
  justify-content: center;
  font-size: 20px;

  ${media.xs`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.sm`
    grid-row: auto;
    grid-column: 1 / 3;
    grid-template-columns: 1fr 1fr 1fr;
  `}
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