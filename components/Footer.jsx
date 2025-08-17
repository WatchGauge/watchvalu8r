export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e5e7eb", marginTop: 32 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px" }}>
        <p style={{ color: "#64748b" }}>© {new Date().getFullYear()} WatchGauge. All rights reserved.</p>
      </div>
    </footer>
  );
}
