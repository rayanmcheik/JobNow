import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import SectionCards from "./components/SectionCards";
import Section2image from "./components/Section2image";
import Section3Cards from "./components/Section3Cards";
import Section4Cards from "./components/Section4Cards";
import Section5feedback from "./components/Section5feedback";


const momoTrust = localFont({
  src: "../public/fonts/MomoTrustSans-VariableFont_wght.ttf",
  variable: "--font-momoTrust", 
  weight: "200 800",           
  style: "normal",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (

    <html lang="en" className={momoTrust.variable}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="font-momo">
        <Header />
        <main className="relative min-h-screen">
          <SectionCards></SectionCards>
          <Section2image></Section2image>
          <Section3Cards></Section3Cards>
          <Section4Cards></Section4Cards>
          <Section5feedback></Section5feedback>
        </main>
        <Footer />
      </body>
    </html>
  );
}
