import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { dmSerif, poppins } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSerif.variable}`}>
      <body className="bg-background text-body font-sans">
        {children}
        <Footer />
      </body>
    </html>
  );
}
