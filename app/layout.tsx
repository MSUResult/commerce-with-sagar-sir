import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/(homepage)/Navbar";
import WhatsAppIcon from "@/component/WhatsappIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Commerce Coaching in Saharanpur | Class 11 & 12 Academy",
  description:
    "Looking for top-rated commerce coaching in Saharanpur? We offer expert classes for Class 11 & 12 Accountancy, Economics, and Business Studies. Join the success batch now!",
  keywords:
    "Commerce Coaching Saharanpur, Class 11 Commerce, Class 12 Accounts Saharanpur, Best Tutors Saharanpur",
  openGraph: {
    title: "Saharanpur Commerce Academy - Class 11 & 12 Batches",
    description:
      "Expert faculty for Commerce in Saharanpur. Boost your board exam scores.",
    images: ["/images/og-image.jpg"], // Make sure to create a shareable image
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Commerce Institute in Saharanpur",
    description:
      "Achieve 95% in your Board exams with our Saharanpur based experts.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} md:px-52 md:py-4 bg-gray-100 antialiased`}
      >
        <Navbar />
        {children}
        {/* This ensures the icon is global */}
        <WhatsAppIcon />
      </body>
    </html>
  );
}
