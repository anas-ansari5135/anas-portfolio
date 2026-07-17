import { motion } from "framer-motion";
import { useRef } from "react";

export default function Magnet({ children }) {
    const ref = useRef(null);

    function handleMove(e) {
        const element = ref.current;

        const rect = element.getBoundingClientRect();

        const x =
            e.clientX -
            rect.left -
            rect.width / 2;

        const y =
            e.clientY -
            rect.top -
            rect.height / 2;

        element.style.transform =
            `translate(${x * 0.2}px, ${y * 0.2}px)`;
    }

    function reset() {
        ref.current.style.transform =
            "translate(0px,0px)";
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            className="transition-transform duration-300 inline-block"
        >
            {children}
        </motion.div>
    );
}