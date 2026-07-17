import { motion } from "framer-motion";

const row1 = [
  {
    title: "React.js",
    subtitle: "Modern UI Development",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Node.js",
    subtitle: "Backend APIs",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "MongoDB",
    subtitle: "NoSQL Database",
    color: "from-green-700 to-lime-500",
  },
  {
    title: "Express.js",
    subtitle: "REST API",
    color: "from-zinc-600 to-zinc-800",
  },
  {
    title: "Flutter",
    subtitle: "Mobile Apps",
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "ASP.NET",
    subtitle: "Enterprise Apps",
    color: "from-violet-600 to-purple-700",
  },
];

const row2 = [
  {
    title: "HomeServeX",
    subtitle: "MERN Project",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Food Fusion",
    subtitle: "Flutter + Firebase",
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Hospital Management",
    subtitle: "ASP.NET MVC",
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Book Your Show",
    subtitle: "PHP Project",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Task Manager",
    subtitle: "React + Node",
    color: "from-purple-500 to-pink-600",
  },
];

const Card = ({ item }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      className={`w-[340px] h-[210px] rounded-3xl bg-gradient-to-br ${item.color}
      flex flex-col justify-end p-8 text-white shadow-xl shrink-0`}
    >
      <h2 className="text-3xl font-bold">{item.title}</h2>

      <p className="mt-2 text-white/80 tracking-wide">
        {item.subtitle}
      </p>
    </motion.div>
  );
};

export default function Marquee() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] py-24 overflow-hidden"
    >
      {/* Heading */}

      <div className="text-center mb-20">

        <p className="uppercase tracking-[6px] text-purple-400 text-sm">
          Technologies
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-black bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent">
          MY TECH STACK
        </h1>

      </div>

      {/* Row 1 */}

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-6 w-max"
      >
        {[...row1, ...row1].map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </motion.div>

      {/* Gap */}

      <div className="h-8" />

      {/* Row 2 */}

      <motion.div
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-6 w-max"
      >
        {[...row2, ...row2].map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </motion.div>
    </section>
  );
}