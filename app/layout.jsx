import { Lato } from "next/font/google";
import "./globals.css";
import BackgroundZoom from "@/components/BackgroundZoom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const latoFont = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Revolve Green - Biodegradable Plastic Bags & Eco-Friendly Solutions",
  description: "Leading manufacturer of biodegradable plastic bags, compostable shopping bags, PLA biodegradable bags, and plant-based eco-friendly packaging. Certified industrial compostable bags and sustainable bioplastic solutions.",
  keywords: "biodegradable plastic bag, compostable plastic bag, biodegradable shopping bag, eco-friendly plastic bag, bioplastic grocery bag, PLA biodegradable bag, starch based biodegradable bag, PHA compostable bag, plant-based biodegradable bag, biodegradable trash bag, industrial compostable bags, certified compostable plastic bag, biodegradable carrier bags, biodegradable packaging bags, biodegradable plastic bag manufacturer, biodegradable vs compostable bags, biodegradable bag market growth, single-use biodegradable plastic, biodegradable bio-resin bags, biodegradable bag recycling challenges",
  openGraph: {
    title: "Revolve Green - Biodegradable Plastic Bags & Eco-Friendly Solutions",
    description: "Leading manufacturer of biodegradable plastic bags, compostable shopping bags, and sustainable packaging solutions",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${latoFont.variable} antialiased relative min-h-screen overflow-x-hidden flex flex-col`}
        style={{ fontFamily: 'var(--font-lato), sans-serif' }}
      >
        {/* Background with Zoom Effect */}
        <BackgroundZoom />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10 ">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
