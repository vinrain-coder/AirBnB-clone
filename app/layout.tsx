import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Airbnb Clone - Vacation Rentals & Unique Stays",
    template: "%s | Airbnb Clone",
  },
  description:
    "Discover and book unique vacation rentals, homes, and apartments worldwide. Plan your next adventure with our Airbnb clone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
