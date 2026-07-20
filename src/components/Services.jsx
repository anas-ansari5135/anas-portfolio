import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe,
  Smartphone,
  Database,
} from "lucide-react";
import services from "../data/services";

const icons = [
  <Code2 size={42} />,
  <Globe size={42} />,
  <Smartphone size={42} />,
  <Database size={42} />,
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 bg-[#09090B] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-24 left-0 w-96 h-96 bg-purple-600/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-[140px] rounded-full" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-center uppercase tracking-[6px] text-purple-400 text-sm font-semibold"
        >
          What I Offer
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-4 text-center text-5xl md:text-7xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
        >
          My Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .25 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-gray-400 max-w-3xl mx-auto leading-8"
        >
          I create modern, scalable and responsive digital products
          using the latest technologies with a strong focus on
          performance, clean architecture and exceptional user
          experience.
        </motion.p>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {services.map((service, index) => (

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
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[28px]
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              transition-all duration-500
              hover:border-purple-500/40
              hover:shadow-[0_0_50px_rgba(168,85,247,.25)]"
            >

              {/* Gradient Overlay */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10" />

              <div className="relative z-10">

                {/* Top */}

                <div className="flex items-center justify-between">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center text-white shadow-lg">

                    {icons[index % icons.length]}

                  </div>

                  <span className="text-6xl font-black text-white/10 group-hover:text-purple-400/30 transition">
                    {service.id}
                  </span>

                </div>

                {/* Title */}

                <h3 className="mt-8 text-3xl font-bold text-white">

                  {service.title}

                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-400 leading-8">

                  {service.description}

                </p>

                {/* Features */}
                                <div className="flex flex-wrap gap-3 mt-7">

                  <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300">
                    Responsive
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300">
                    Modern UI
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300">
                    Scalable
                  </span>

                </div>

                {/* Learn More */}

                <div className="mt-10 flex items-center justify-between">

                  <span className="text-sm uppercase tracking-[4px] text-purple-400 font-semibold">
                    Explore Service
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: 45,
                      scale: 1.1,
                    }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center text-white shadow-lg"
                  >
                    <ArrowUpRight size={22} />
                  </motion.div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] backdrop-blur-xl px-10 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Have a Project in Mind?
              </h3>

              <p className="text-gray-400 mt-4 max-w-2xl leading-8">
                I'm available for freelance projects, internships,
                full-time opportunities, and collaborative work.
                Let's build something modern, scalable, and impactful together.
              </p>

            </div>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold hover:scale-105 transition duration-300 whitespace-nowrap"
            >
              Let's Talk
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
