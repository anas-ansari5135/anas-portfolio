import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#09090B] py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 left-0 w-96 h-96 bg-purple-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-pink-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-6xl md:text-7xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-5 max-w-3xl mx-auto"
        >
          Technologies and tools I use to build modern,
          scalable, secure and high-performance applications.
        </motion.p>

        {/* Skill Cards */}

        <div className="mt-20 space-y-10">

          {skills.map((group, index) => {

            const Icon = group.icon;

            return (

              <motion.div
                key={group.category}
                initial={{
                  opacity: 0,
                  y: 80
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .12,
                  duration: .5
                }}
                whileHover={{
                  y: -6
                }}
                className="group relative overflow-hidden rounded-[36px]
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                hover:border-purple-500/40
                transition-all duration-500"
              >

                {/* Gradient Border */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10" />

                <div className="relative flex flex-col lg:flex-row items-center gap-10 p-10">

                  {/* Left */}

                  <div className="lg:w-[30%]">

                    <div
                      className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${group.color}
                      flex items-center justify-center shadow-xl`}
                    >

                      {Icon && (
                        <Icon
                          size={42}
                          className="text-white"
                        />
                      )}

                    </div>

                    <h3 className="text-4xl font-bold text-white mt-8">
                      {group.category}
                    </h3>

                    <p className="text-gray-400 mt-5 leading-8">
                      {group.description}
                    </p>

                  </div>

                  {/* Right */}

                  <div className="lg:w-[70%]">

                    <div className="flex flex-wrap gap-4">

                      {group.skills.map((skill, i) => (

                        <motion.div
                          key={skill.name}
                          initial={{
                            opacity: 0,
                            scale: .8
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1
                          }}
                          transition={{
                            delay: i * .05
                          }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.08
                          }}
                          className="group/skill px-5 py-4
                          rounded-2xl
                          bg-white/5
                          border border-white/10
                          hover:border-purple-500
                          transition-all duration-300
                          min-w-[170px]"
                        >

                          <div className="flex items-center justify-between">

                            <span className="text-white font-medium">
                              {skill.name}
                            </span>

                            <ArrowUpRight
                              size={18}
                              className="text-purple-400
                              group-hover/skill:translate-x-1
                              group-hover/skill:-translate-y-1
                              duration-300"
                            />

                          </div>

                          <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">

                            <motion.div
                              initial={{
                                width: 0
                              }}
                              whileInView={{
                                width: `${skill.level}%`
                              }}
                              transition={{
                                duration: 1
                              }}
                              viewport={{ once: true }}
                              className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                            />

                          </div>

                          <div className="mt-3 flex justify-between">

                            <span className="text-xs text-gray-500">
                              Proficiency
                            </span>

                            <span className="text-sm text-purple-400 font-semibold">
                              {skill.level}%
                            </span>

                          </div>

                        </motion.div>

                      ))}

                    </div>


                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Stats */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mt-24"
        >

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 text-center hover:border-purple-500/40 transition">

            <h3 className="text-5xl font-bold text-white">
              20+
            </h3>

            <p className="text-gray-400 mt-3">
              Technologies
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 text-center hover:border-purple-500/40 transition">

            <h3 className="text-5xl font-bold text-white">
              10+
            </h3>

            <p className="text-gray-400 mt-3">
              Projects Built
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 text-center hover:border-purple-500/40 transition">

            <h3 className="text-5xl font-bold text-white">
              1+
            </h3>

            <p className="text-gray-400 mt-3">
              Years Learning
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 text-center hover:border-purple-500/40 transition">

            <h3 className="text-5xl font-bold text-white">
              100%
            </h3>

            <p className="text-gray-400 mt-3">
              Passion
            </p>

          </div>

        </motion.div>

      </div>

      {/* Decorative Blobs */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-32 right-16 w-56 h-56 rounded-full bg-purple-600/10 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-20 left-16 w-72 h-72 rounded-full bg-pink-500/10 blur-[150px]"
      />

    </section>
  );
}
