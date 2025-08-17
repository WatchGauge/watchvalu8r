// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          © {new Date().getFullYear()} WatchGauge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
