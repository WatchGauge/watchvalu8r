// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://main.d20lxi865o23ah.amplifyapp.com"),
  title: "WatchGauge — Trusted Luxury Watch Valuations",
  description:
    "WatchGauge provides trusted market valuations for luxury watches using live comps, outlier filtering, and transparent methodology.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "WatchGauge — Trusted Luxury Watch Valuations",
    description:
      "Fair, data-driven watch values using live comps and robust filters.",
    url: "https://main.d20lxi865o23ah.amplifyapp.com/",
    siteName: "WatchGauge",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "WatchGauge" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WatchGauge — Trusted Luxury Watch Valuations",
    description:
      "Fair, data-driven watch values using live comps and robust filters.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



