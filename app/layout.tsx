import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // om du använder footer
import "./globals.css";
import { dmSerif, poppins } from "./fonts";


export const metadata = {
  title: "Portfolio – Louise Forsby",
  description: "Strategic marketer with hands-on UX/UI experience",
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
