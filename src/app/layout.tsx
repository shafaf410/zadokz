import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import AudioPlayer from "@/components/AudioPlayer";

export const metadata: Metadata = {
  title: "Zadokz Farm Stay | Luxury Forest Retreat",
  description: "Escape to nature. Wake up to misty mornings and discover unforgettable moments at Zadokz Farm Stay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-charcoal text-cream font-sans overflow-x-hidden selection:bg-forest selection:text-cream">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <AudioPlayer />
      </body>
    </html>
  );
}
