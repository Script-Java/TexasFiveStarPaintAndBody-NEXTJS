// app/layout.jsx (Next.js App Router root layout)

import "./globals.css";
import React from "react";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata = {
  title: "Texas Five Star Paint & Body",
  description: "I-CAR Gold Class certified auto body shop in Garland, TX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body>
        {/* Scroll to top on route change */}
        <ScrollToTop />
        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
