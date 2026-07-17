import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const paragraph =
  "I'm Anas Ansari, a Full Stack Web Developer currently pursuing my Master of Computer Applications. I enjoy designing modern user interfaces and building scalable web applications using the MERN Stack, ASP.NET Core MVC, Flutter, and REST APIs. I love solving real-world problems with clean architecture, responsive design, and user-focused experiences.";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0C0C0C] overflow-hidden py-28 px-6"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-[120px]" />

      {/* Floating Objects */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-16 left-8 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-24 right-8 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-30 blur-xl"
      />

      {/* Container */}

      <div className="relative max-w-6xl mx-auto flex flex-col items-center">

        {/* Section Title */}

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center text-6xl md:text-8xl font-black uppercase bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Divider */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 140 }}
          transition={{ duration: .8 }}
          className="h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mt-8"
        />

        {/* Description */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl text-center"
        >
          <p className="text-lg md:text-2xl leading-10 text-gray-300">
            {paragraph.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: .15 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: index * .012,
                }}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-24 w-full"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center">
            <h3 className="text-5xl font-black text-purple-400">5+</h3>
            <p className="text-gray-400 mt-3 uppercase tracking-[3px]">
              Projects Completed
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center">
            <h3 className="text-5xl font-black text-orange-400">10+</h3>
            <p className="text-gray-400 mt-3 uppercase tracking-[3px]">
              Technologies
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center">
            <h3 className="text-5xl font-black text-pink-400">MCA</h3>
            <p className="text-gray-400 mt-3 uppercase tracking-[3px]">
              Current Degree
            </p>
          </div>
        </motion.div>

        {/* CTA */}

        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
          className="mt-20 inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold tracking-widest uppercase shadow-lg shadow-purple-700/30"
        >
          <Mail size={20} />

          Contact Me

          <ArrowRight size={20} />
        </motion.a>

      </div>
    </section>
  );
}