export default function Logo({
  className = "h-10 w-auto",
  color = "currentColor",
  style,
}: {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 453"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <title>ARCO</title>
      <g transform="translate(0,453) scale(0.1,-0.1)" fill={color} stroke="none">
        <path d="M2829 3925 c-17 -9 -66 -76 -126 -172 -55 -87 -194 -306 -308 -488 -114 -181 -289 -458 -388 -615 -736 -1164 -796 -1261 -812 -1314 -21 -71 -19 -175 5 -247 14 -42 86 -158 237 -382 263 -392 266 -397 303 -397 25 0 45 26 237 318 241 364 283 429 592 912 281 438 653 1015 836 1297 107 166 136 218 131 236 -6 24 -222 355 -431 663 -66 96 -129 178 -145 187 -34 21 -96 21 -131 2z" />
        <path d="M3437 2548 c-386 -584 -377 -568 -377 -678 0 -33 7 -81 16 -107 9 -26 85 -154 169 -283 83 -129 205 -318 270 -420 147 -232 484 -733 499 -742 6 -4 23 -8 37 -8 24 0 49 33 232 308 333 500 328 490 329 617 2 119 -14 153 -248 525 -119 190 -271 430 -336 534 -331 527 -344 546 -373 546 -22 0 -49 -37 -218 -292z" />
      </g>
    </svg>
  );
}
