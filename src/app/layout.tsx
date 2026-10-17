import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSerif = localFont({
  src: "./fonts/DMSerifDisplay-Regular.ttf",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olaf Farm | Rabbits raised in Abeokuta",
  description:
    "Breeders, weaners, fresh and smoked rabbit meat, feed, hay and mentorship from a working rabbit farm in Abeokuta, Ogun State. Join the waitlist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${GeistSans.variable}`}>
      <body className="min-h-screen antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
