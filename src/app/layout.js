import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import UpperHeader from "./_components/UpperHeader";
import "./globals.css";
export const metadata = {
  title: "Exclusive | get your exclusive deals",
  description: "offering the best exclusive deals on a wide range of products",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UpperHeader />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
