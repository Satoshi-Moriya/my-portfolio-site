import { ReactNode, createContext, useContext, useState } from 'react';


const PageTransitionContext = createContext(
  {
    transitionFrom: "",
    setTransitionFrom: (transitionFrom: string) => { },
    swiperNowWork: 0,
    setSwiperNowWork: (swiperNowWork: number) => { },
  }
);

export const PageTransitionProvider = (
  { children }:
  {children: ReactNode}
) => {
  const [transitionFrom, setTransitionFrom] = useState("first load");
  const [swiperNowWork, setSwiperNowWork] = useState(0);

  return (
    <PageTransitionContext.Provider value={{ transitionFrom, setTransitionFrom, swiperNowWork, setSwiperNowWork }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => useContext(PageTransitionContext);
