import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Sora({
  weight : ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets : ['latin']
});

export const metadata: Metadata = {
  title: "Sargam Jain Portfolio",
  description: "Sargam Jain Portfolio with Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={font.className}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
