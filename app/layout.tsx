import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Background from "@/components/layout/Background";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import PortfolioChatbot from "@/components/ui/PortfolioChatbot";
import CommandCenter from "@/components/ui/CommandCenter";
import SmoothScroll from "@/components/layout/SmoothScroll";
import type { Metadata } from "next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huma Muhammad Yousaf | AI Developer & Full-Stack Engineer",
  description: "Senior Portfolio of Huma Muhammad Yousaf, specialized in AI Integration, Next.js, and MERN stack development.",
  keywords: ["AI Developer", "Full-Stack Engineer", "Next.js", "React", "MERN Stack", "Huma Muhammad Yousaf", "Karachi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="font-inter bg-background text-foreground selection:bg-primary selection:text-primary-foreground antialiased overflow-x-hidden">
        <SmoothScroll>
          <div className="noise-overlay" />
          <LoadingScreen />
          <CustomCursor />
          <Background />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <PortfolioChatbot />
          <CommandCenter />
        </SmoothScroll>
      </body>
    </html>
  );
}
