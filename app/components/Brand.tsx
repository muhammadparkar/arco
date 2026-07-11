import Image from "next/image";

/**
 * Full ARCO lockup (peaks mark + wordmark), pre-composed white PNG on a
 * transparent background. Use on dark surfaces only.
 *
 * Source image is 1536×1024 with wide transparent margins, so the visible
 * lockup sits roughly in a 3:1 band — height is what you control.
 */
export default function Brand({
  className = "",
  height = 40,
}: {
  className?: string;
  height?: number;
}) {
  // Tight-cropped lockup is 1318×405 (~3.25:1).
  const width = Math.round(height * (1318 / 405));
  return (
    <Image
      src="/arco-lockup.png"
      alt="ARCO Trading & Marketing"
      width={width}
      height={height}
      priority
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
