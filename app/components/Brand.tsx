import Image from "next/image";

/**
 * ARCO wordmark — backlit-sign render on its own metallic backdrop panel
 * (not a transparent lockup). Renders as a self-contained rectangle image.
 */
export default function Brand({
  className = "",
  height = 40,
}: {
  className?: string;
  height?: number;
}) {
  // Tight-cropped sign panel is 790×300.
  const width = Math.round(height * (790 / 300));
  return (
    <Image
      src="/arco-badge.png"
      alt="ARCO Trading & Marketing"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
}
