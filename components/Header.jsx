// components/Header.jsx
export default function Header() {
  const linkStyle = { color: "#0f172a", textDecoration: "none", fontWeight: 500 };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "white",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
        }}
      >
        <a
          href="/"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}
        >
          {/* Plain <img> to avoid any next/image issues */}
          <img
            src="/watchgaugelogofinal.png?v=logo5"
            alt="WatchGauge"
            width="180"
            style={{ height: "auto", display: "block" }}
          />
        </a>

        <nav style={{ display: "flex", gap: 16 }}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/valuation" style={linkStyle}>Valuation</a>
          <a href="/about" style={linkStyle}>About</a>
          <a href="/contact" style={linkStyle}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

