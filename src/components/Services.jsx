import { motion } from "framer-motion";
import services from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[60px] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-6xl md:text-8xl font-black uppercase text-[#0C0C0C]"
        >
          Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 max-w-3xl mx-auto mt-6"
        >
          I design and develop modern digital products with scalable
          architecture, intuitive user experience and clean code.
        </motion.p>

        {/* Services */}

        <div className="mt-24">

          {services.map((service, index) => (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: "#111111",
                color: "#ffffff",
                transition: { duration: .35 },
              }}
              className="group border-b border-gray-300 py-12 cursor-pointer transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">

                {/* Number */}

                <div className="lg:col-span-2">

                  <h1 className="text-6xl md:text-8xl font-black text-gray-300 group-hover:text-purple-400 transition">
                    {service.id}
                  </h1>

                </div>

                {/* Title */}

                <div className="lg:col-span-4">

                  <h3 className="text-3xl md:text-4xl font-bold uppercase">
                    {service.title}
                  </h3>

                </div>

                {/* Description */}

                <div className="lg:col-span-6">

                  <p className="text-lg leading-8 text-gray-500 group-hover:text-gray-300 transition">
                    {service.description}
                  </p>

                </div>

              </div>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}