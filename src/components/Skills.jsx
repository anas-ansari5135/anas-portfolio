import { motion } from "framer-motion";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-6xl md:text-8xl font-black uppercase bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="text-center text-gray-400 mt-6 max-w-3xl mx-auto"
        >
          Technologies and tools I use to build modern, scalable and
          high-performance applications.
        </motion.p>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {skills.map((group, index) => (

            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              {/* Category */}

              <div
                className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${group.color} text-white font-semibold`}
              >
                {group.category}
              </div>

              {/* Skills */}

              <div className="mt-10 space-y-8">

                {group.skills.map((skill) => (

                  <div key={skill.name}>

                    <div className="flex justify-between mb-2">

                      <h4 className="text-white font-medium">
                        {skill.name}
                      </h4>

                      <span className="text-gray-400">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">

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

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}