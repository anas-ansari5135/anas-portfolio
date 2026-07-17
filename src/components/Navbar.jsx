import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0C0C0C]/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer text-2xl lg:text-3xl font-black tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"
          >
            ANAS
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  activeClass="text-purple-400"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="cursor-pointer uppercase text-sm tracking-[3px] font-medium text-[#D7E2EA] transition hover:text-purple-400 relative group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-3 rounded-full text-white text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-lg shadow-purple-600/30"
          >
            Hire Me
          </motion.button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-20 left-0 w-full bg-[#111111]/95 backdrop-blur-xl md:hidden z-40 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-8 gap-8">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="text-[#D7E2EA] uppercase tracking-[3px] text-lg cursor-pointer hover:text-purple-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}

          <button className="mt-4 px-8 py-3 rounded-full text-white font-semibold tracking-widest uppercase bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
            Hire Me
          </button>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;