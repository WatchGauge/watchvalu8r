export default function Logo({ width = 160, height = 40 }) {
  return (
    <img
      src="/watchgaugelogo"
      alt="WatchGauge"
      width={width}
      height={height}
      style={{ display: "block" }}
    />
  );
}
