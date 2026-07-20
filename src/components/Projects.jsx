import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const total = projects.length;

  const previous = current === 0 ? total - 1 : current - 1;

  const next = current === total - 1 ? 0 : current + 1;

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevProject = () => {
    setCurrent((prev) =>
      prev === 0 ? total - 1 : prev - 1
    );
  };

  const project = projects[current];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#09090B] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-6xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-400 mt-5 max-w-2xl mx-auto leading-7"
        >
          Some of my best full-stack and mobile
          applications with modern UI,
          scalable architecture and real-world
          functionality.
        </motion.p>

        {/* ================= Cards ================= */}

        <div className="relative h-[560px] mt-16 flex justify-center items-center">

          {/* LEFT CARD */}

          <motion.div
            animate={{
              x: -250,
              scale: 0.82,
              opacity: 0.35,
              rotate: -8,
            }}
            transition={{ duration: 0.45 }}
            className="absolute
            w-[300px]
            h-[420px]
            rounded-[28px]
            overflow-hidden
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            z-10"
          >
            <img
              src={projects[previous].image}
              alt={projects[previous].title}
              className="w-full h-44 object-cover"
            />

            <div className="p-5">

              <p className="uppercase tracking-[3px] text-[11px] text-purple-400">
                {projects[previous].category}
              </p>

              <h3 className="text-xl font-bold text-white mt-3">
                {projects[previous].title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-6 line-clamp-3">
                {projects[previous].description}
              </p>

            </div>
          </motion.div>

          {/* RIGHT CARD */}

          <motion.div
            animate={{
              x: 250,
              scale: 0.82,
              opacity: 0.35,
              rotate: 8,
            }}
            transition={{ duration: 0.45 }}
            className="absolute
            w-[300px]
            h-[420px]
            rounded-[28px]
            overflow-hidden
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            z-10"
          >
            <img
              src={projects[next].image}
              alt={projects[next].title}
              className="w-full h-44 object-cover"
            />

            <div className="p-5">

              <p className="uppercase tracking-[3px] text-[11px] text-purple-400">
                {projects[next].category}
              </p>

              <h3 className="text-xl font-bold text-white mt-3">
                {projects[next].title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-6 line-clamp-3">
                {projects[next].description}
              </p>

            </div>
          </motion.div>

          {/* ACTIVE CARD */}

          <AnimatePresence mode="wait">

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.45,
              }}
              className="
              relative
              z-20
              w-[560px]
              rounded-[32px]
              overflow-hidden
              bg-[#111]
              border border-purple-500/30
              backdrop-blur-xl
              shadow-[0_0_60px_rgba(168,85,247,.18)]"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[250px] object-cover"
              />

              <div className="p-7">
                              <span className="uppercase tracking-[4px] text-[11px] text-purple-400">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold text-white mt-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-5 text-[15px]">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-xs hover:border-purple-500 transition"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 mt-7">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-purple-500 transition-all duration-300 text-white"
                  >
                    <FaGithub size={18} />

                    <span>GitHub</span>

                    <ArrowUpRight
                      size={17}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
                    />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white hover:scale-105 duration-300"
                  >
                    <ExternalLink size={17} />

                    <span>Live Demo</span>

                    <ArrowUpRight
                      size={17}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
                    />
                  </a>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>
                    {/* Previous Button */}

          <button
            onClick={prevProject}
            className="absolute left-0 lg:left-16 top-1/2 -translate-y-1/2 z-30
            w-12 h-12 rounded-full
            bg-white/10 backdrop-blur-xl
            border border-white/10
            hover:border-purple-500
            hover:bg-purple-600/20
            transition-all duration-300
            flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-white" />
          </button>

          {/* Next Button */}

          <button
            onClick={nextProject}
            className="absolute right-0 lg:right-16 top-1/2 -translate-y-1/2 z-30
            w-12 h-12 rounded-full
            bg-white/10 backdrop-blur-xl
            border border-white/10
            hover:border-purple-500
            hover:bg-purple-600/20
            transition-all duration-300
            flex items-center justify-center"
          >
            <ArrowRight size={20} className="text-white" />
          </button>

        </div>

        {/* Pagination */}

        <div className="flex justify-center items-center gap-3 mt-10">

          {projects.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-8 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />

          ))}

        </div>

        {/* Counter */}

        <div className="flex justify-center mt-6">

          <span className="text-gray-500 tracking-[4px] text-sm">

            {String(current + 1).padStart(2, "0")}

            <span className="mx-2 text-purple-500">/</span>

            {String(total).padStart(2, "0")}

          </span>

        </div>

      </div>

    </section>
  );
}
