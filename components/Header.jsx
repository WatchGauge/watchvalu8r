// components/Header.jsx
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary">
        <Link href="/" className="brand" aria-label="WatchGauge home">
          <Logo size={220} />
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="#valuation">Valuation</Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}



