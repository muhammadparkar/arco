import Image from "next/image";

/**
 * ARCO red badge logo (green border, white wordmark) on a transparent
 * background. Works on any surface — the badge carries its own colour.
 */
export default function Brand({
  className = "",
  height = 40,
}: {
  className?: string;
  height?: number;
}) {
  // Exact source image is 1536×1024.
  const width = Math.round(height * (1536 / 1024));
  return (
    <Image
      src="/arco-badge.png"
      alt="ARCO Trading & Marketing"
      width={width}
      height={height}
      priority
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
