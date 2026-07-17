import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100]"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        background:
          "linear-gradient(to right,#9333ea,#ec4899,#f97316)",
      }}
    />
  );
}