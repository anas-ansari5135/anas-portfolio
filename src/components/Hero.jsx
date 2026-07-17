import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0C0C0C] flex items-center justify-center"
    >
      {/* ================= Background Glow ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-32 left-10 w-80 h-80 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-500/20 blur-[120px]" />

        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full bg-pink-600/10 blur-[180px] -translate-x-1/2 -translate-y-1/2" />

      </div>

      {/* ================= Main Content ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="uppercase tracking-[5px] text-gray-400 mb-4"
          >
            Welcome To My Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-black leading-none"
          >
            <span className="bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent">
              HI,
            </span>

            <br />

            <span className="bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent">
              I'M
            </span>

            <br />

            <span className="text-white">
              ANAS
            </span>

            <br />

            <span className="text-purple-400">
              ANSARI
            </span>

          </motion.h1>

          <div className="mt-8 text-2xl text-orange-400 font-semibold h-12">

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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-8 max-w-xl leading-8 text-gray-400"
          >
            Full Stack Web Developer pursuing MCA with hands-on experience
            building responsive and secure web applications using React,
            Node.js, Express, MongoDB, ASP.NET MVC and Flutter. Passionate
            about solving real-world problems through modern technologies.
          </motion.p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold hover:scale-105 transition">

              Contact Me

            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 hover:border-purple-500 text-white transition">

              Download Resume

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Glow */}

          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 blur-[120px] opacity-30" />

          {/* Floating Image */}

          <motion.img
            animate={{
              y: [0, -20, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
            src={profile}
            alt="Anas Ansari"
            className="relative w-[340px] md:w-[470px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,.6)]"
          />

        </motion.div>

      </div>

      {/* Scroll Down */}

      <motion.div
        animate={{
          y: [0, 15, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >

        <span className="uppercase tracking-[4px] text-xs">

          Scroll

        </span>

        <ChevronDown size={24} />

      </motion.div>

    </section>
  );
};

export default Hero;