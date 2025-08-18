// components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="site-footer">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>© {year} WatchGauge. All rights reserved.</div>
        <div style={{ display: "flex", gap: 14 }}>
          <a href="#" aria-label="Terms">Terms</a>
          <a href="#" aria-label="Privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
