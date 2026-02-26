const SectionDivider = () => {
  return (
    <div className="relative h-px w-full overflow-visible">
      {/* Center glow line */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsl(217 91% 60% / 0.08) 15%, hsl(217 91% 60% / 0.25) 50%, hsl(217 91% 60% / 0.08) 85%, transparent 100%)",
        }}
      />
      {/* Soft glow aura */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[60%] h-[40px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(217 91% 60% / 0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default SectionDivider;
