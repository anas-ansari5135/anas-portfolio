export default function GridOverlay() {
  return (
    <div
      className="fixed inset-0 -z-40 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}