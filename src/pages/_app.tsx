import reset from "styled-reset";
import type { AppProps } from "next/app";
import { createGlobalStyle, css } from "styled-components";
import { AnimatePresence } from 'framer-motion'
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";

import Header from "@/components/Header";
import { PageTransitionProvider } from "@/components/PageTransitionContext";


export default function App({ Component, pageProps, router }: AppProps) {

  // こいつを入れないとworks/idからの遷移でおかしくなる
  // 正直意味はよくわかっていない
  useEffect(() => {
    history.scrollRestoration = 'manual';
    router.beforePopState((state) => {
      state.options.scroll = false;
      return true;
    });
  }, [router]);

  return (
    <>
      <GlobalStyle page={pageProps.layout} />
      <Header />
      <PageTransitionProvider>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </PageTransitionProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle<{ page: string }>`
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
    min-height: 100vh;
    height: 100vh;
    font-family: "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
    overflow-y: scroll;
  }

  #__next {
    height: inherit;
    // ToDo work個別ページのsmサイズ以下のためだけにつけるのは怖い
    position: relative;
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