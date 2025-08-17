// app/page.js
export default function Home() {
  return (
    <section style={{ padding: "16px 0 40px" }}>
      <h1 style={{ fontSize: 36, margin: 0 }}>Know the true value of your timepiece</h1>
      <p style={{ color: "#64748b", marginTop: 8, maxWidth: 720 }}>
        WatchGauge provides trusted market valuations for luxury watches using live comps and robust outlier filtering.
      </p>
      <div style={{ marginTop: 20 }}>
        <a
          href="/valuation"
          style={{
            background: "#0ea5e9",
            color: "white",
            padding: "10px 16px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Get your free valuation
        </a>
      </div>
    </section>
  );
}
