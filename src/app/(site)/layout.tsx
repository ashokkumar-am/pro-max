import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pro Max",
  description: "Pro Max",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Theme>

        <div className="flex flex-col justify-between w-full h-full min-h-screen">
          <Header />
          <main className="flex-auto w-full max-w-3xl px-4 py-4 mx-auto sm:px-6 md:py-6">
            {children}
          </main>
          <Footer />
        </div>
        </Theme>
      </body>
    </html>
  );
}
