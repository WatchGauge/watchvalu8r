// components/Logo.jsx
import Image from "next/image";

export default function Logo({ width = 180, height = 40 }) {
  return (
    <Image
      src="/watchgaugelogofinal.png"  // <-- matches your public/ file name
      alt="WatchGauge"
      width={width}
      height={height}
      priority
      style={{ display: "block", height: "auto", width: "auto" }}
    />
  );
}
