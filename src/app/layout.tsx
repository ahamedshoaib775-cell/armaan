import type { Metadata } from "next";
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BinSense - Smart Bins. Smarter Cities.",
  description:
    "BinSense is an intelligent IoT device that tracks garbage levels in real time and helps build cleaner, smarter and more sustainable communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Keep the page hidden from users permanently (maintenance mode)
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="fixed inset-0 flex items-center justify-center bg-[#050505] text-white">
        <h1 className="text-4xl font-bold">Site is currently unavailable</h1>
      </body>
    </html>
  );
}
