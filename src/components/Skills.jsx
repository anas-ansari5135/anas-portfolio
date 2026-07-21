import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Award,
  Layers3,
} from "lucide-react";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#09090B] py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-44 left-0 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-pink-600/15 blur-[180px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[6px] text-purple-400 font-semibold">
            Professional Skills
          </span>

          <h2 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Technologies I Use
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
            I enjoy building modern, scalable and high-performance
            web applications using today's most powerful technologies
            and development tools.
          </p>

        </motion.div>

        {/* Top Stats */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >

          <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <Sparkles className="text-purple-400" size={34} />

            <h3 className="mt-6 text-4xl font-black text-white">
              {skills.reduce((a, b) => a + b.skills.length, 0)}+
            </h3>

            <p className="mt-2 text-gray-400">
              Technologies
            </p>

          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <Layers3 className="text-pink-400" size={34} />

            <h3 className="mt-6 text-4xl font-black text-white">
              {skills.length}
            </h3>

            <p className="mt-2 text-gray-400">
              Skill Categories
            </p>

          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <Award className="text-orange-400" size={34} />

            <h3 className="mt-6 text-4xl font-black text-white">
              2026
            </h3>

            <p className="mt-2 text-gray-400">
              Latest Technologies
            </p>

          </div>

        </motion.div>

        {/* Categories */}

        <div className="mt-20 space-y-10">

          {skills.map((group, index) => {

            const Icon = group.icon;

            return (

              <motion.div
                key={group.category}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_60px_rgba(168,85,247,.20)]"
              >

                {/* Hover Gradient */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10" />

                <div className="relative grid gap-10 p-8 lg:grid-cols-[320px_1fr] lg:p-12">

                  {/* Left */}

                  <div>

                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-r ${group.color} shadow-xl`}
                    >
                      {Icon && (
                        <Icon
                          size={42}
                          className="text-white"
                        />
                      )}
                    </div>

                    <h3 className="mt-8 text-4xl font-black text-white">
                      {group.category}
                    </h3>

                    <p className="mt-5 text-gray-400 leading-8">
                      {group.description}
                    </p>

                  </div>

                  {/* Right */}

                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

                    {group.skills.map((skill, i) => (

                      <motion.div
                        key={skill.name}
                        initial={{
                          opacity: 0,
                          scale: .85,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: i * .05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          y: -6,
                        }}
                        className="group/skill rounded-3xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:border-purple-500 hover:bg-[#181818]"
                      >

                        <div className="flex items-center justify-between">

                          <h4 className="font-semibold text-white">
                            {skill.name}
                          </h4>

                          <ArrowUpRight
                            size={18}
                            className="text-purple-400 transition duration-300 group-hover/skill:translate-x-1 group-hover/skill:-translate-y-1"
                          />

                        </div>

                        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${skill.level}%`,
                            }}
                            transition={{
                              duration: 1,
                            }}
                            viewport={{ once: true }}
                            className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                          />

                        </div>

                        <div className="mt-4 flex items-center justify-between">

                          <span className="text-sm text-gray-500">
                            Proficiency
                          </span>

                          <span className="font-semibold text-purple-400">
                            {skill.level}%
                          </span>

                        </div>

                        {/* Continue in Part 2 */}
                                                <div className="mt-6 flex flex-wrap gap-2">

                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                            Responsive
                          </span>

                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                            Modern
                          </span>

                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                            Optimized
                          </span>

                        </div>

                      </motion.div>

                    ))}

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

    

        {/* CTA Section */}

  

      </div>

      {/* Floating Background Blobs */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-24 right-16 h-64 w-64 rounded-full bg-purple-600/10 blur-[150px]"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute bottom-20 left-16 h-72 w-72 rounded-full bg-pink-600/10 blur-[170px]"
      />

    </section>
  );
}