
import "./globals.css";
import Link from "next/link";
import Providers from "./providers";
import SignOutButton from "./SignOutButton";

export const metadata = {
  metadataBase: new URL("https://addiseats.et"),
  title: {
    template: "%s · Addis Eats",
    default: "Addis Eats — Food Delivery in Addis Ababa",
  },
  description:
    "Discover Ethiopian dishes and order food from kitchens across Addis Ababa.",
  openGraph: {
    siteName: "Addis Eats",
    title: "Addis Eats — Food Delivery in Addis Ababa",
    description:
      "Discover Ethiopian dishes and order food from kitchens across Addis Ababa.",
    type: "website",
    locale: "en_ET",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="site-header">
            <nav className="site-nav" aria-label="Main navigation">
              <Link href="/" className="site-brand">
                <span className="site-brand-mark" aria-hidden="true">
                  A
                </span>
                <span>Addis Eats</span>
              </Link>

              <div className="site-nav-links">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/cart">Cart</Link>

                <Link href="/dashboard">Dashboard</Link>
              </div>

              <div className="site-nav-account">
                <SignOutButton />
              </div>
            </nav>
          </header>

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            <div className="site-footer-inner">
              <Link href="/" className="site-footer-brand">
                Addis Eats
              </Link>
              <p>Good food, delivered across Addis Ababa.</p>
              <small>
                © {new Date().getFullYear()} Addis Eats
              </small>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
