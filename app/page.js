// app/page.js
export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      fontFamily: "sans-serif" 
    }}>
      <h1>Welcome to WatchValu8r</h1>
      <p>The fastest way to track and value your watch collection.</p>
      
      <div style={{ marginTop: "20px" }}>
        <a 
          href="/about" 
          style={{ 
            padding: "10px 20px", 
            background: "#000", 
            color: "#fff", 
            borderRadius: "6px", 
            textDecoration: "none" 
          }}
        >
          Learn More
        </a>
      </div>
    </main>
  );
}

