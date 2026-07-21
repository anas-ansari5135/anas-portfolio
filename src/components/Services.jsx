import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe,
  Smartphone,
  Database,
  Sparkles,
  BadgeCheck,
  Rocket,
} from "lucide-react";

import services from "../data/services";

const icons = [
  Code2,
  Globe,
  Smartphone,
  Database,
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#09090B] py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-44 left-0 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-pink-600/15 blur-[170px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[6px] text-purple-400 font-semibold">
            What I Offer
          </span>

          <h2 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Services
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
            I build beautiful, scalable and high-performance digital
            experiences with modern technologies, responsive design,
            clean architecture and user-focused solutions.
          </p>

        </motion.div>

        {/* Top Stats */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >

          <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <Sparkles
              size={34}
              className="text-purple-400"
            />

            <h3 className="mt-6 text-5xl font-black text-white">
              {services.length}+
            </h3>

            <p className="mt-3 text-gray-400">
              Professional Services
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <BadgeCheck
              size={34}
              className="text-green-400"
            />

            <h3 className="mt-6 text-5xl font-black text-white">
              100%
            </h3>

            <p className="mt-3 text-gray-400">
              Client Focused
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <Rocket
              size={34}
              className="text-orange-400"
            />

            <h3 className="mt-6 text-5xl font-black text-white">
              Fast
            </h3>

            <p className="mt-3 text-gray-400">
              Modern Development
            </p>

          </div>

        </motion.div>

        {/* Services */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {services.map((service, index) => {

            const Icon = icons[index % icons.length];

            return (

              <motion.div
                key={service.id}
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
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_60px_rgba(168,85,247,.20)]"
              >

                {/* Hover Overlay */}

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />

                <div className="relative p-8 md:p-10">

                  {/* Top */}

                  <div className="flex items-start justify-between gap-6">

                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-xl"
                    >

                      <Icon
                        size={40}
                        className="text-white"
                      />

                    </div>

                    <span className="text-6xl font-black text-white/10">
                      {service.id}
                    </span>

                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-3xl md:text-4xl font-black text-white">

                    {service.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-5 text-gray-400 leading-8">

                    {service.description}

                  </p>

                  {/* Features */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                      Responsive Design
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                      Clean Code
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                      Performance
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                      Modern UI
                    </span>

                  </div>

                  {/* Continue in Part 2 */}
                                    <div className="mt-10 flex items-center justify-between">

                    <div>

                      <span className="text-sm uppercase tracking-[4px] text-purple-400 font-semibold">
                        Ready to Build
                      </span>

                      <p className="mt-2 text-sm text-gray-500">
                        Let's create something amazing together.
                      </p>

                    </div>

                    <motion.div
                      whileHover={{
                        rotate: 45,
                        scale: 1.1,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white shadow-xl"
                    >
                      <ArrowUpRight size={22} />
                    </motion.div>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Why Choose Me */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28"
        >

          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">

            <div className="text-center">

              <span className="uppercase tracking-[5px] text-purple-400 font-semibold">
                Why Choose Me
              </span>

              <h3 className="mt-5 text-4xl md:text-5xl font-black text-white">
                Delivering Quality That Matters
              </h3>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
                Every project is developed with attention to detail,
                clean architecture, responsive layouts, optimized
                performance and a user-first approach.
              </p>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600">

                  <Code2
                    size={30}
                    className="text-white"
                  />

                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  Clean Code
                </h4>

                <p className="mt-3 text-gray-400">
                  Structured, reusable and maintainable code.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-orange-500">

                  <Smartphone
                    size={30}
                    className="text-white"
                  />

                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  Responsive
                </h4>

                <p className="mt-3 text-gray-400">
                  Perfect experience across every device.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600">

                  <Database
                    size={30}
                    className="text-white"
                  />

                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  Scalable
                </h4>

                <p className="mt-3 text-gray-400">
                  Designed to grow with your business.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600">

                  <Globe
                    size={30}
                    className="text-white"
                  />

                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  SEO Ready
                </h4>

                <p className="mt-3 text-gray-400">
                  Optimized for visibility and performance.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Call To Action */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[40px] border border-white/10 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10 backdrop-blur-xl px-8 py-16 md:px-16 text-center"
        >

          <h2 className="text-4xl md:text-6xl font-black text-white">
            Have an Idea?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Whether you need a portfolio, business website,
            MERN stack application, admin dashboard or a custom web
            solution, I'm here to transform your ideas into reality.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="mt-10 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </button>

        </motion.div>

      </div>

      {/* Floating Background */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-32 right-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[170px]"
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
        className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-pink-600/10 blur-[170px]"
      />

    </section>
  );
}