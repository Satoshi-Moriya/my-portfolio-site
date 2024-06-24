import { motion } from "framer-motion";
import { usePageTransition } from "./PageTransitionContext";

export default function TransitionAnimeStart(
  { prevPageName }: { prevPageName: string }
) {
  const { transitionFrom, setTransitionFrom } = usePageTransition();

  const handleAnimationComplete = () => {
    setTransitionFrom(prevPageName);
  };

  return (
    <>
      {transitionFrom === "work" && (
        <motion.div
          initial={{
            right: '0%',
          }}
          animate={{
            right: '-100%',
            transition: {
              duration: 1,
              ease: [0.8, 0, 0.5, 1]
            },
          }}
          onAnimationComplete={handleAnimationComplete}
          style={{
            position: "fixed",
            zIndex: "101",
            backgroundColor: "#000000",
            height: "100%",
            width: "100%",
            top: 0,
          }}
        />
      )}
    </>
  )
}
