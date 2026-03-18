import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/(homepage)/Navbar";
import WhatsAppIcon from "@/component/WhatsappIcon";

import CommerceFooter from "@/component/footer";

import CommerceBackground from "@/component/CommerceBackground";
import ShareButton from "@/component/ShareButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Accountancy Coaching in Saharanpur | Class 11 & 12 Academy",
  description:
    "Looking for top-rated Accountancy coaching in Saharanpur? We offer expert classes for Class 11 & 12 Accountancy with strong conceptual learning and board exam preparation. Join the success batch now!",
  keywords:
    "Accountancy Coaching Saharanpur, Class 11 Accountancy Saharanpur, Class 12 Accounts Saharanpur, Best Accounts Tutor Saharanpur",
  openGraph: {
    title: "Saharanpur Accountancy Academy - Class 11 & 12 Batches",
    description:
      "Expert Accountancy faculty in Saharanpur. Boost your board exam scores with concept-based learning.",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Accountancy Institute in Saharanpur",
    description:
      "Achieve 95%+ in your board exams with expert Accountancy coaching in Saharanpur.",
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
        className={`${geistSans.variable} ${geistMono.variable}  bg-gray-100 antialiased`}
      >
   <CommerceBackground />
        <Navbar />
        {children}
        {/* This ensures the icon is global */}
        <ShareButton />
        <WhatsAppIcon />
        <CommerceFooter  />
      </body>
    </html>
  );
}
