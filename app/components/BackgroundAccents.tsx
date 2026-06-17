const accent = "#0F9900";

export function BackgroundAccents() {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(15, 153, 0, 0.14) 0%, transparent 55%),
            radial-gradient(ellipse 60% 40% at 100% 30%, rgba(15, 153, 0, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 35% at 0% 80%, rgba(15, 153, 0, 0.06) 0%, transparent 50%)
          `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "fixed",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: accent,
          filter: "blur(140px)",
          opacity: 0.16,
          top: -200,
          right: -140,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "fixed",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: accent,
          filter: "blur(120px)",
          opacity: 0.1,
          bottom: -120,
          left: -80,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "fixed",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: accent,
          filter: "blur(80px)",
          opacity: 0.07,
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}
