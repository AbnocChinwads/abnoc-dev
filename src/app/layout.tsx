import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "abnoc.dev",
  description:
    "A portfolio website to display my projects and act as a developer CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-green-300 font-mono">
        <div className="max-w-4xl mx-auto w-full border border-green-700 p-4 my-4">
        <header className="border-b border-green-700 p-4">
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/">[Home]</Link>
              </li>
              <li>
                <Link href="/projects">[Projects]</Link>
              </li>
              <li>
                <Link href="/about">[About]</Link>
              </li>
              <li>
                <Link href="/links">[Links]</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        </div>
      </body>
    </html>
  );
}
