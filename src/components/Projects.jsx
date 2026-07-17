import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-6xl md:text-8xl font-black uppercase bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="text-center text-gray-400 mt-6 max-w-3xl mx-auto"
        >
          Some of my favorite full-stack and mobile application projects.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="rounded-[35px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
            >

              <div className="overflow-hidden">

                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: .5,
                  }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />

              </div>

              <div className="p-8">

                <span className="text-purple-400 uppercase tracking-[4px] text-xs">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold mt-3 text-white">
                  {project.title}
                </h3>

                <p className="mt-5 text-gray-400 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-white/10 text-sm text-white"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-5 mt-10">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-purple-500 transition"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}