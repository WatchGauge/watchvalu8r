// app/layout.js
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://main.d20lxi865o23ah.amplifyapp.com'),
  title: {
    default: 'WatchGauge — Luxury Watch Valuations',
    template: '%s | WatchGauge',
  },
  description:
    'Trusted market valuations for luxury watches using live comps, liquidity scoring, and robust outlier filtering.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'WatchGauge — Luxury Watch Valuations',
    description:
      'Real-time market valuations for luxury watches using live comps and robust outlier filtering.',
    url: 'https://main.d20lxi865o23ah.amplifyapp.com/',
    siteName: 'WatchGauge',
    images: [{ url: '/watchgaugelogofinal.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WatchGauge — Luxury Watch Valuations',
    description:
      'Real-time market valuations for luxury watches using live comps and robust outlier filtering.',
    images: ['/watchgaugelogofinal.png'],
  },
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



