
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
