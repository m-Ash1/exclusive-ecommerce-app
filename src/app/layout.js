import { Poppins } from "next/font/google";
import Navbar from "./_components/Navbar";
import UpperHeader from "./_components/UpperHeader";
import "./globals.css";
export const metadata = {
  title: "Exclusive | get your exclusive deals",
  description: "offering the best exclusive deals on a wide range of products",
};

// If loading a variable font, you don't need to specify the font weight

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"], // Correct property name
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <UpperHeader />
        <Navbar />

        <main>
          <div className="container mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
