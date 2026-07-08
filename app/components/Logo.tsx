export default function Logo({
  className = "h-10 w-auto",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const red = onDark ? "#e8455e" : "#c8102e";
  const green = onDark ? "#2f8a5c" : "#206040";
  return (
    <svg viewBox="0 0 120 64" className={className} aria-hidden="true">
      {/* three mountain peaks — green · red · green */}
      <path d="M22 30 L40 12 L46 24 L34 30 Z" fill={green} />
      <path d="M40 30 L55 6 L62 16 L70 30 Z" fill={red} />
      <path d="M64 26 L92 14 L80 30 L70 30 Z" fill={green} />
      {/* wordmark */}
      <text
        x="60"
        y="56"
        textAnchor="middle"
        fontFamily="var(--font-montserrat), sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="1"
        fill={red}
      >
        ARCO
      </text>
    </svg>
  );
}
