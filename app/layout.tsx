import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Keploy Go Test Suite",
  description:
    "A hands-on tutorial for testing a Go + Echo + PostgreSQL application with Keploy.",
  keywords: [
    "Keploy",
    "Go",
    "Echo",
    "PostgreSQL",
    "API testing",
    "API testing tutorial",
    "Go testing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <div className="mx-auto flex w-full max-w-[1400px] gap-35 px-6">
          <Sidebar />

          <main className="min-w-0 flex-1">
            <div className="w-full py-10 lg:py-12">
              <article className="prose !max-w-none w-full">
                {children}
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}