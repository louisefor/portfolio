import NavSwitcher from "@/components/NavSwitcher"; 
import Footer from "@/components/Footer";
import "./globals.css";
import { dmSerif, poppins } from "./fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSerif.variable}`}>
      <head>
        <title>Portfolio – Louise Forsby</title>
        <meta name="description" content="Strategic marketer with hands-on UX/UI experience" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:title" content="Portfolio – Louise Forsby" />
        <meta property="og:description" content="Strategic marketer with hands-on UX/UI experience" />
        <meta property="og:image" content="https://louiseforsby.vercel.app/social-share-preview.png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://louiseforsby.vercel.app/" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio – Louise Forsby" />
        <meta name="twitter:description" content="Strategic marketer with hands-on UX/UI experience" />
        <meta name="twitter:image" content="https://louiseforsby.vercel.app/social-share-preview.png" />
      </head>
      <body className="bg-background text-body font-sans">
        <NavSwitcher />
        {children}
        <Footer />
      </body>
    </html>
  );
}
