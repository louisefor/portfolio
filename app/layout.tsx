import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { dmSerif, poppins } from "./fonts";

export const metadata = {
  title: "Portfolio – Louise Forsby",
  description: "Strategic marketer with hands-on UX/UI experience",
  icons: {
    icon: "/favicon.ico",
  },
};

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
