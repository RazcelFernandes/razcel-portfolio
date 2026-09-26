import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Razcel Fernandes | Portfolio",
  description: "Portfolio of Razcel Fernandes — Data Analytics, Business Intelligence, and Machine Learning."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
