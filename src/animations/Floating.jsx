import { motion } from "framer-motion";

export default function Floating({ children }) {
    return (
        <motion.div
            animate={{
                y: [0, -20, 0],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
}