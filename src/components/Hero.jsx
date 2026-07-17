import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const handleContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0C0C0C] overflow-hidden flex items-center justify-center pt-24"
    >
      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-500/20 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[180px]" />
      </div>

      {/* ================= Hero Content ================= */}

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Welcome */}

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[8px] text-gray-400 text-sm mb-8"
        >
          Welcome To My Portfolio
        </motion.p>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-black leading-[0.9] tracking-tight"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent">
            HI,
          </span>

          <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent">
            I'M
          </span>

          <span className="block text-6xl md:text-8xl lg:text-9xl text-white mt-3">
            ANAS
          </span>

          <span className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            ANSARI
          </span>
        </motion.h1>

        {/* Typewriter */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 h-12 flex justify-center items-center"
        >
          <div className="text-xl md:text-3xl font-semibold text-orange-400">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Node.js Developer",
                2000,
                "Flutter Developer",
                2000,
                "ASP.NET Developer",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </div>
        </motion.div>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 max-w-3xl mx-auto text-gray-400 text-lg leading-9"
        >
          Full Stack Web Developer pursuing MCA with hands-on experience
          building responsive and secure web applications using React,
          Node.js, Express, MongoDB, ASP.NET MVC and Flutter.
          Passionate about solving real-world problems through modern
          technologies.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-14 flex flex-wrap justify-center gap-6"
        >
          <button
            onClick={handleContact}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold hover:scale-105 duration-300 shadow-lg shadow-purple-500/20"
          >
            Contact Me
          </button>

          <a
            href="/MCA_ANAS_ANSARI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border border-white/20 hover:border-purple-500 hover:bg-white/5 text-white font-semibold duration-300"
          >
            My Resume
          </a>
        </motion.div>
      </div>

      {/* ================= Scroll ================= */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="uppercase tracking-[5px] text-xs mb-1">
          Scroll
        </span>

        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;