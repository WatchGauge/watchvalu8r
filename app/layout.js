// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "WatchGauge",
  description: "Trusted market valuations for luxury watches.",
  openGraph: {
    title: "WatchGauge",
    description: "Trusted market valuations for luxury watches.",
    url: "https://your-amplify-url-or-domain",
    siteName: "WatchGauge",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "WatchGauge" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "WatchGauge",
    description: "Trusted market valuations for luxury watches.",
    images: ["/og.jpg"]
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
        }}
      >
        <Header />
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 20px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

