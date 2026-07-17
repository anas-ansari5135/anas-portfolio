import { motion } from "framer-motion";

export default function AnimatedText({ text }) {
    return (
        <h2 className="flex flex-wrap justify-center">
            {text.split("").map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: index * 0.03,
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </h2>
    );
}