import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import AudioPlayer from "@/components/AudioPlayer";
import AppWrapper from "@/components/AppWrapper";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Zadokz Farm Stay | A Boutique Farm Retreat",
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
        <AppWrapper>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </AppWrapper>
        <AudioPlayer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
