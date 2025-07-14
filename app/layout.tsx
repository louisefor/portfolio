import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // om du använder footer
import "./globals.css";
import { dmSerif, poppins } from "./fonts";


export const metadata = {
  title: "Your Portfolio",
  description: "Showcasing my work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSerif.variable}`}>
      <body className="bg-background text-body font-sans">
        {/* ✅ Allt innehåll ska ligga i <body> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
