import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import education from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#0C0C0C] py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-6xl md:text-8xl font-black uppercase bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="text-center text-gray-400 mt-6 max-w-3xl mx-auto"
        >
          My educational journey that built the foundation for my
          development career.
        </motion.p>

        {/* Timeline */}

        <div className="relative mt-28">

          {/* Center Line */}

          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 rounded-full"></div>

          {education.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .8,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-24 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >

              {/* Card */}

              <div className="w-full md:w-5/12 ml-16 md:ml-0">

                <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-500 transition">

                  <span className="text-purple-400 uppercase tracking-[4px] text-sm">
                    {item.year}
                  </span>

                  <h3 className="text-3xl font-bold mt-4 text-white">
                    {item.degree}
                  </h3>

                  <h4 className="mt-3 text-orange-400 font-medium">
                    {item.institute}
                  </h4>

                  {item.grade && (
                    <p className="mt-2 text-purple-300 font-semibold">
                      {item.grade}
                    </p>
                  )}

                  <p className="mt-5 text-gray-400 leading-8">
                    {item.description}
                  </p>

                </div>

              </div>

              {/* Icon */}

              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-lg shadow-purple-500/30">

                <GraduationCap size={22} className="text-white" />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}