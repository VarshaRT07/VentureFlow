import 'easymde/dist/easymde.min.css';
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight:['400','700']
});


export const metadata: Metadata = {
  title: "Venture Flow",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
