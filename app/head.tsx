export default function Head() {
    return (
      <>
        <title>Portfolio – Louise Forsby</title>
        <meta name="description" content="Strategic marketer with hands-on UX/UI experience" />
  
        <link rel="icon" href="/favicon.ico" />
  
        {/* Open Graph (för Messenger, Facebook etc) */}
        <meta property="og:title" content="Portfolio – Louise Forsby" />
        <meta property="og:description" content="Strategic marketer with hands-on UX/UI experience" />
        <meta property="og:image" content="/social-share-preview.png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://louiseforsby.vercel.app/" />
  
        {/* Twitter (valfritt men bra) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio – Louise Forsby" />
        <meta name="twitter:description" content="Strategic marketer with hands-on UX/UI experience" />
        <meta name="twitter:image" content="/social-share-preview.png" />
      </>
    );
  }
  