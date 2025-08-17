// components/Header.jsx
export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        {/* Centered Logo */}
        <a href="/" className="header__logo" aria-label="WatchGauge Home">
          <img
            src="/watchgaugelogofinal.png?v=logo7"
            alt="WatchGauge"
          />
        </a>

        {/* Optional centered nav below the logo (keep or remove) */}
        <nav className="header__nav" aria-label="Main">
          <a href="/" className="header__link">Home</a>
          <a href="/valuation" className="header__link">Valuation</a>
          <a href="/about" className="header__link">About</a>
          <a href="/contact" className="header__link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

