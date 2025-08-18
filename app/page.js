export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px"
    }}>
      <img
        src="/watchgaugelogofinal.png"
        alt="WatchGauge"
        style={{ width: 240, height: "auto", marginBottom: 24 }}
      />
      <h1 style={{ margin: 0 }}>Welcome to WatchGauge</h1>
      <p style={{ opacity: 0.8, marginTop: 8 }}>Static build is live.</p>
    </main>
  );
}



