import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-64 h-64 rounded-full blur-[90px]"
      style={{
        left: position.x - 120,
        top: position.y - 120,
        background:
          "radial-gradient(circle, rgba(168,85,247,.18), transparent 70%)",
      }}
    />
  );
}