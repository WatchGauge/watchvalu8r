export const metadata = { title: "WatchValu8r" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Arial" }}>
        <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
          <a href="/" style={{ fontWeight: 700, textDecoration: "none", color: "inherit" }}>
            WatchValu8r
          </a>
        </header>
        <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}

