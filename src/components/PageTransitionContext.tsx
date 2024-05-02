import React, { ReactNode, createContext, useContext, useState } from 'react';


const PageTransitionContext = createContext(
  {
    transitionFrom: "",
    setTransitionFrom: (transitionFrom: string) => { },
  }
);

export const PageTransitionProvider = (
  { children }:
  {children: ReactNode}
) => {
  const [transitionFrom, setTransitionFrom] = useState("first load");

  return (
    <PageTransitionContext.Provider value={{ transitionFrom, setTransitionFrom }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => useContext(PageTransitionContext);
