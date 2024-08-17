import type { Metadata } from "next";
import { Baskervville } from "next/font/google";
import './style.css';
import { Nova_Cut } from "next/font/google";
import Navbar from "./components/navbar";

const baskerville = Baskervville({ subsets: ["latin"], weight: "400"});
const nova_cut = Nova_Cut({ subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "Verence",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[baskerville.className, nova_cut.className].join(" ")}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
