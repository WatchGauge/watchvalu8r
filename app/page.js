// app/page.js
export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__badge">New • Instant Market Signals</div>
          <h1 className="hero__title">Trusted valuations for modern & vintage timepieces</h1>
          <p className="hero__subtitle">
            WatchGauge helps collectors and dealers price accurately with live comps, robust outlier filtering, and confidence scores.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="/valuation">Get your free valuation</a>
            <a className="btn btn--ghost" href="/about">Learn more</a>
          </div>
          <p className="hero__fineprint">No signup needed for basic checks.</p>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="strip">
        <div className="strip__inner">
          <div className="kpi">
            <div className="kpi__value">+120k</div>
            <div className="kpi__label">Recent sales indexed</div>
          </div>
          <div className="kpi">
            <div className="kpi__value">98.7%</div>
            <div className="kpi__label">Model detection accuracy</div>
          </div>
          <div className="kpi">
            <div className="kpi__value">&lt; 3 min</div>
            <div className="kpi__label">Average valuation time</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="features__inner">
          <h2 className="section__title">Why WatchGauge</h2>
          <div className="features__grid">
            <Feature
              title="Outlier-aware pricing"
              body="We down-weight shill bids and stale listings to surface the real clearing price."
            />
            <Feature
              title="Confidence scores"
              body="Know when to trust a number. We score coverage, spread, and recency so you see risk at a glance."
            />
            <Feature
              title="Collection tracking"
              body="Track cost basis, current value, and performance by brand, model, or era."
            />
            <Feature
              title="Dealer instant offers"
              body="Tap into verified dealers for instant bids. Watch authentication optional."
            />
            <Feature
              title="Insurance-ready docs"
              body="Generate valuation PDFs with comp tables for insurers and appraisers."
            />
            <Feature
              title="Global market data"
              body="eBay solds, dealer feeds, forums & boutiques—normalized and deduped."
            />
          </div>
          <div className="cta-card">
            <h3 className="cta-card__title">Ready to see your watch’s true value?</h3>
            <p className="cta-card__text">Start with a model number or upload a photo—no account required.</p>
            <a className="btn btn--primary" href="/valuation">Start a valuation</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ title, body }) {
  return (
    <div className="feature">
      <div className="feature__icon" aria-hidden>⌚️</div>
      <h3 className="feature__title">{title}</h3>
      <p className="feature__body">{body}</p>
    </div>
  );
}

