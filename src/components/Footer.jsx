import { motion } from "framer-motion";
import {
    Mail,
    ArrowUp,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative bg-[#050505] overflow-hidden border-t border-white/10">

            {/* Background Glow */}

            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

                {/* Big Name */}

                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
                >
                    ANAS
                    <br />
                    ANSARI
                </motion.h1>

                {/* Subtitle */}

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .3 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-400 max-w-3xl mx-auto mt-10 text-lg"
                >
                    Passionate Full Stack Developer creating modern,
                    scalable and high-performance web applications using
                    MERN Stack, ASP.NET Core MVC and Flutter.
                </motion.p>

                {/* Social Icons */}

                <div className="flex justify-center gap-6 mt-14">

                    <a
                        href="https://github.com/anas-ansari5135"
                        target="_blank"
                        rel="noreferrer"
                        className="w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600 transition flex items-center justify-center"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 transition flex items-center justify-center"
                    >
                        <FaLinkedin size={22} />
                    </a>

                    <a
                        href="mailto:anasff5135@gmail.com"
                        className="w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 transition flex items-center justify-center"
                    >
                        <Mail size={22} />
                    </a>

                </div>

                {/* Navigation */}

                <div className="flex flex-wrap justify-center gap-8 mt-14 uppercase tracking-[3px] text-sm text-gray-400">

                    <a href="#home" className="hover:text-white transition">
                        Home
                    </a>

                    <a href="#about" className="hover:text-white transition">
                        About
                    </a>

                    <a href="#skills" className="hover:text-white transition">
                        Skills
                    </a>

                    <a href="#projects" className="hover:text-white transition">
                        Projects
                    </a>

                    <a href="#education" className="hover:text-white transition">
                        Education
                    </a>

                    <a href="#contact" className="hover:text-white transition">
                        Contact
                    </a>

                </div>

                {/* Divider */}

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-14" />

                {/* Bottom */}

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <p className="text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} Anas Ansari.
                        All Rights Reserved.
                    </p>

                    
                    {/* Scroll Top */}

                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            rotate: 360,
                        }}
                        whileTap={{
                            scale: .9,
                        }}
                        onClick={scrollToTop}
                        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center shadow-lg shadow-purple-600/30"
                    >
                        <ArrowUp size={22} />
                    </motion.button>

                </div>

            </div>
        </footer>
    );
}