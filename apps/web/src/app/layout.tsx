import type { Metadata } from "next";
import { Annie_Use_Your_Telescope, Noto_Sans } from "next/font/google";
import "./globals.css";

const annieUseYourTelescope = Annie_Use_Your_Telescope({
  variable: "--font-annie",
  subsets: ["latin"],
  weight: "400",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "gttp",
  description: "gttp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${annieUseYourTelescope.variable} ${notoSans.variable} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}