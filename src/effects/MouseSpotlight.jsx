import { useEffect, useState } from "react";

export default function MouseSpotlight() {

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const handleMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );

  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30"
      style={{
        background: `radial-gradient(
          400px at ${mouse.x}px ${mouse.y}px,
          rgba(255,255,255,.05),
          transparent 80%
        )`,
      }}
    />
  );
}