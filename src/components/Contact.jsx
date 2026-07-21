import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#09090B] py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-44 left-0 h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[160px]" />

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
            Get In Touch
          </span>

          <h2 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
            Have an idea, internship opportunity, freelance project,
            or full-time role? I'd love to hear from you.
            Let's build something meaningful together.
          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="mt-20 grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px]
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8 md:p-10"
          >

            <h3 className="text-3xl font-bold text-white">
              Contact Information
            </h3>

            <p className="mt-4 text-gray-400 leading-8">
              Feel free to contact me anytime.
              I'm always excited to discuss new projects,
              creative ideas and opportunities.
            </p>

            {/* Availability */}

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/10 p-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500 text-white">

                <Clock3 size={28} />

              </div>

              <div>

                <h4 className="text-white font-semibold">
                  Available for Work
                </h4>

                <p className="text-green-400 text-sm">
                  Open for Internship • Freelance • Full-Time
                </p>

              </div>

            </div>

            {/* Contact Cards */}

            <div className="mt-10 space-y-6">

              {/* Email */}

              <motion.a
                whileHover={{ x: 8 }}
                href="mailto:anasff5135@gmail.com"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-purple-500/40 hover:bg-white/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">

                  <Mail size={28} />

                </div>

                <div className="flex-1">

                  <h4 className="font-semibold text-white">
                    Email
                  </h4>

                  <p className="text-gray-400 break-all">
                    anasff5135@gmail.com
                  </p>

                </div>

                <ArrowUpRight className="text-gray-500 group-hover:text-white transition" />

              </motion.a>

              {/* Phone */}

              <motion.a
                whileHover={{ x: 8 }}
                href="tel:+918488841313"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-purple-500/40 hover:bg-white/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">

                  <Phone size={28} />

                </div>

                <div className="flex-1">

                  <h4 className="font-semibold text-white">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +91 8488841313
                  </p>

                </div>

                <ArrowUpRight className="text-gray-500 group-hover:text-white transition" />

              </motion.a>

              {/* Location */}

              <motion.div
                whileHover={{ x: 8 }}
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-purple-500/40 hover:bg-white/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white">

                  <MapPin size={28} />

                </div>

                <div className="flex-1">

                  <h4 className="font-semibold text-white">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Bardoli, Gujarat, India
                  </p>

                </div>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
                    <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >

            {/* Resume Card */}

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

              <h3 className="text-3xl font-bold text-white">
                Resume
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Download my latest resume to learn more about my
                education, technical skills, projects and experience.
              </p>

              <a
                href="/MCA_ANAS_ANSARI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>

            </div>

            {/* Social Cards */}

            <div className="grid sm:grid-cols-2 gap-6">

              {/* GitHub */}

              <motion.a
                whileHover={{ y: -8 }}
                href="https://github.com/anas-ansari5135"
                target="_blank"
                rel="noreferrer"
                className="group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,.25)]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">

                  <FaGithub size={30} />

                </div>

                <h4 className="mt-6 text-2xl font-bold text-white">
                  GitHub
                </h4>

                <p className="mt-3 text-gray-400 leading-7">
                  Explore my open-source projects, React applications,
                  MERN stack work and source code.
                </p>

              </motion.a>

              {/* LinkedIn */}

              <motion.a
                whileHover={{ y: -8 }}
                href="https://www.linkedin.com/in/anas-ansari-6509013a7/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,.25)]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white">

                  <FaLinkedin size={30} />

                </div>

                <h4 className="mt-6 text-2xl font-bold text-white">
                  LinkedIn
                </h4>

                <p className="mt-3 text-gray-400 leading-7">
                  Connect with me professionally and stay updated with
                  my latest work and achievements.
                </p>

              </motion.a>

            </div>

            {/* Quick Actions */}

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] backdrop-blur-xl p-8">

              <h3 className="text-2xl font-bold text-white">
                Quick Actions
              </h3>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <a
                  href="mailto:anasff5135@gmail.com"
                  className="flex-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 py-4 text-center font-semibold text-white transition hover:scale-105"
                >
                  Email Me
                </a>

                <a
                  href="tel:+918488841313"
                  className="flex-1 rounded-full border border-white/10 bg-white/5 py-4 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Call Me
                </a>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[40px] border border-white/10 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10 backdrop-blur-xl px-8 py-16 md:px-16 text-center"
        >

          <h2 className="text-4xl md:text-6xl font-black text-white">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Whether it's a web application, MERN stack project,
            portfolio website, internship opportunity, or freelance
            collaboration, I'm ready to turn your ideas into reality.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

            <a
              href="mailto:anasff5135@gmail.com"
              className="rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              Start a Conversation
            </a>

            <a
              href="/MCA_ANAS_ANSARI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              View Resume
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}