import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

      {/* Purple Blob */}

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full bg-purple-600/15 blur-[150px]"
      />

      {/* Blue Blob */}

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-20 top-1/3 w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[160px]"
      />

      {/* Orange Blob */}

      <motion.div
        animate={{
          x: [0, 90, -120, 0],
          y: [0, 100, -120, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 left-1/3 w-[350px] h-[350px] rounded-full bg-orange-500/15 blur-[140px]"
      />
    </div>
  );
}