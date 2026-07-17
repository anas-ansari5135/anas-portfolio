import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-purple-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-6xl md:text-8xl font-black uppercase bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mt-6 max-w-3xl mx-auto text-lg"
        >
          Let's build something amazing together.
          <br />
          I'm always open to internships, freelance work and exciting
          opportunities.
        </motion.p>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-3xl mx-auto rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14"
        >

          <div className="space-y-10">

            {/* Email */}

            <div className="flex items-center gap-6">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center shadow-lg">
                <Mail size={28} />
              </div>

              <div>
                <h4 className="text-white text-xl font-bold">
                  Email
                </h4>

                <a
                  href="mailto:anasff5135@gmail.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  anasff5135@gmail.com
                </a>

              </div>

            </div>

            {/* Phone */}

            <div className="flex items-center gap-6">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center shadow-lg">
                <Phone size={28} />
              </div>

              <div>
                <h4 className="text-white text-xl font-bold">
                  Phone
                </h4>

                <a
                  href="tel:+918488841313"
                  className="text-gray-400 hover:text-white transition"
                >
                  +91 8488841313
                </a>

              </div>

            </div>

            {/* Location */}

            <div className="flex items-center gap-6">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center shadow-lg">
                <MapPin size={28} />
              </div>

              <div>
                <h4 className="text-white text-xl font-bold">
                  Location
                </h4>

                <p className="text-gray-400">
                  Bardoli, Gujarat, India
                </p>

              </div>

            </div>

          </div>

          {/* Divider */}

          <div className="w-full h-px bg-white/10 my-12" />

          {/* Social Icons */}

          <div className="flex justify-center gap-6">

            <a
              href="https://github.com/anas-ansari5135"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-purple-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/anas-ansari5135"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <FaLinkedin size={24} />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}