import Header from "@/components/Header";
import type { AppProps } from "next/app";
import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import { AnimatePresence } from 'framer-motion'
import { useEffect } from "react";
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
        <AnimatePresence mode="wait" initial={false}>
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
  }

  #__next {
    height: inherit;
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

  ${(props) =>
    props.page == "top"
    // props.page == "top" || "works"
      ? css`
        body {
          overflow-y: scroll;
          position: fixed;
        }
      ` : css`
        body {
          overflow-y: scroll;
        }
      `
  }
`;