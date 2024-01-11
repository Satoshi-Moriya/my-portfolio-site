import Header from "@/components/Header";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    line-height: 1.5;
    background: #1A1A1A;
    color: #FFFFFF;
    letter-spacing: 0.4px;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;

    &:hover {
      text-decoration: none;
      color: #FFFFFF;
    }
  }
`;