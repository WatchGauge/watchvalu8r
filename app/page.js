// app/page.js
import Image from "next/image";
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD for Organization + WebSite + potentialAction (SEO) */}
      <Script
        id="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "WatchGauge",
            url: "https://main.d20lxi865o23ah.amplifyapp.com/",
            logo: "https://main.d20lxi865o23ah.amplifyapp.com/watchgaugelogofinal.png",
          }),
        }}
      />
      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://main.d20lxi865o23ah.amplifyapp.com/",
            name: "WatchGauge",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://main.d20lxi865o23ah.amplifyapp.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            Know the true value of your timepiece
          </h1>
          <p className="hero-sub">
            Live comps, outlier filtering, and transparent methodology—built for
            collectors, sellers, and dealers.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#valuation">Get your free valuation</a>
            <a className="btn btn-ghost" href="#how-it-works">How it works</a>
          </div>
        </div>

        {/* Decorative watch silhouette (no external image needed) */}
        <div className="hero-art" aria-hidden="true">
          <div className="ring ring-lg" />
          <div className="ring ring-md" />
          <div className="ring ring-sm" />
        </div>
      </section>

      {/* TRUST / NUMBERS */}
      <section className="strip stats">
        <div className="stat">
          <div className="stat-num">500k+</div>
          <div className="stat-label">Comparable listings analyzed</div>
        </div>
        <div className="stat">
          <div className="stat-num">2.5M+</div>
          <div className="stat-label">Price points tracked</div>
        </div>
        <div className="stat">
          <div className="stat-num">98.7%</div>
          <div className="stat-label">Model coverage across top brands</div>
        </div>
      </section>

      {/* “BRANDS” grid */}
      <section className="section">
        <h2 className="section-title">Popular brands</h2>
        <ul className="pill-grid" aria-label="Popular brands">
          {[
            "Rolex",
            "Omega",
            "Patek Philippe",
            "Audemars Piguet",
            "Cartier",
            "Grand Seiko",
            "Tudor",
            "IWC",
            "TAG Heuer",
            "Breitling",
            "Vacheron Constantin",
            "Jaeger-LeCoultre",
          ].map((b) => (
            <li className="pill" key={b}>
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section">
        <h2 className="section-title">How it works</h2>
        <div className="cards">
          <div className="card">
            <h3>1. Ingest live comps</h3>
            <p>
              We aggregate current and historical listings from trusted venues.
            </p>
          </div>
          <div className="card">
            <h3>2. Clean &amp; filter</h3>
            <p>
              Outliers removed, condition normalized, and duplicates de-weighted.
            </p>
          </div>
          <div className="card">
            <h3>3. Deliver a fair value</h3>
            <p>
              Transparent estimate with low/high bands and market liquidity
              score.
            </p>
          </div>
        </div>
      </section>

      {/* VALUATION FORM (visual only; wires up later) */}
      <section id="valuation" className="section valuation">
        <h2 className="section-title">Get your free valuation</h2>
        <form className="val-form" action="#" onSubmit={(e)=>e.preventDefault()}>
          <label>
            Brand
            <input name="brand" placeholder="e.g. Rolex" autoComplete="off" />
          </label>
          <label>
            Model
            <input name="model" placeholder="e.g. Submariner 124060" autoComplete="off" />
          </label>
          <label>
            Year
            <input name="year" placeholder="e.g. 2021" inputMode="numeric" />
          </label>
          <label>
            Condition
            <select name="condition" defaultValue="Excellent">
              <option>Like New</option>
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </label>
          <button className="btn btn-primary" type="submit">Calculate</button>
        </form>
        <p className="muted">
          By continuing you agree to our <a href="#">Terms</a> and{" "}
          <a href="#">Privacy</a>.
        </p>
      </section>
    </>
  );
}




