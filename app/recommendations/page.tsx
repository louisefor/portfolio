"use client";

import React from "react";
import Image from "next/image";
import { dmSerif, poppins } from "@/app/fonts";

const Hero: React.FC = () => (
  // Ytterpadding matchar undersektionen
  <section className="relative w-full bg-[#ebddd7] px-0 sm:px-6 pt-28 pb-16 sm:pt-36 sm:pb-32 min-h-[50vh] sm:min-h-[60vh] flex items-center">
    {/* Centrerad container + samma max-bredd + innerpadding */}
    <div className="sm:max-w-5xl mx-auto w-full z-10 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 sm:gap-6 items-center justify-items-start px-6">
      {/* Bild */}
      <div className="justify-self-start">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-2 ring-[#d7c3b9] shadow-sm">
          <Image
            src="/images/Louise-Forsby.jpg"
            alt="Louise Forsby"
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Text */}
      <div className="text-left">
        <h1
          className={`${dmSerif.className} text-4xl sm:text-6xl md:text-7xl`}
          style={{ color: "#624b4b" }}
        >
          Recommendations
        </h1>
        <p
          className={`${poppins.className} text-lg sm:text-xl mt-4`}
          style={{ color: "#624b4b" }}
        >
          Kind words from people I’ve worked with.
        </p>
      </div>
    </div>

    {/* Vågen – desktop (matchar desktopfärgen #9d8080) */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 hidden sm:block -mb-px">
      <svg
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-[80px] block"
      >
        <path
          fill="#9d8080"
          d="M0,60 C300,120 600,0 900,60 C1200,120 1440,60 1440,60 L1440,150 L0,150 Z"
        />
      </svg>
    </div>

    {/* Vågen – mobil (matchar mobilfärgen #917474) */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 sm:hidden -mb-px">
      <svg
        viewBox="0 0 360 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-[40px] block"
      >
        <path
          fill="#917474"
          d="M0,20 C60,40 120,0 180,20 C240,40 300,20 360,20 L360,60 L0,60 Z"
        />
      </svg>
    </div>
  </section>
);

const RecommendationSection: React.FC = () => (
  // Mobil: #917474, Desktop: #9d8080
  <section className="bg-[#917474] sm:bg-[#9d8080] text-[#ebddd7] px-0 sm:px-6 pt-12 pb-20 sm:pt-12 sm:pb-20">
    <div className="sm:max-w-5xl mx-auto px-6">
      <h2 className={`${dmSerif.className} text-3xl sm:text-5xl mb-4`}>
        Exelement
      </h2>

      <p className={`${poppins.className} text-lg sm:text-xl mb-8 max-w-3xl`}>
        Recommendation from Exelement, where I worked as a marketing consultant
        focused on digital visibility, content and UX.
      </p>

      <blockquote className="border-l-4 border-[#ebddd7] pl-4 italic mb-8 max-w-3xl">
        “Her blend of strategic insight, technical adaptability, bilingual
        skills, and cooperative spirit make her an outstanding asset to any
        team.”
        <br />— Fritjof Andresen, Senior Consultant, Exelement
      </blockquote>

      <article className={`${poppins.className} text-base sm:text-lg leading-relaxed space-y-6 max-w-3xl`}>
        <p>
          We at Exelement would be delighted to recommend Louise, who has made a great addition to the internal marketing team at Exelement.
        </p>

        <div>
          <h3 className={`${dmSerif.className} text-xl sm:text-2xl mb-2`}>
            Contributions and Responsibilities
          </h3>
          <p>
            As part of our team, Louise made a big impact in starting and running our marketing operations. Her responsibilities included:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Content creation &amp; optimization:</strong> Produced and refined a variety of content, webpages, blog posts, campaign materials, and gated assets; these were written in an industry-standard way that usually requires a few years in the industry to understand.
            </li>
            <li>
              <strong>Translation &amp; market adaptation:</strong> Expertly translated and localized technical copy, ensuring content was both accurate and locally adapted to make sense for the Swedish market.
            </li>
            <li>
              <strong>UX/UI improvements &amp; structural guidance:</strong> Provided great feedback on content structure and user experience.
            </li>
          </ul>
        </div>

        <div>
          <h3 className={`${dmSerif.className} text-xl sm:text-2xl mb-2`}>
            Impact and Strengths
          </h3>
          <p>
            With her contributions, Louise helped improve the content, user experience, and delivery of our digital marketing. Her contributions helped us to communicate complex CRM and MarTech ideas in a way that strengthens our brand presence and supports our sales processes.
          </p>
        </div>

        <div>
          <h3 className={`${dmSerif.className} text-xl sm:text-2xl mb-2`}>
            Key strengths include:
          </h3>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>Strategic content thinking:</strong> Seamlessly integrated marketing goals, audience needs, and technical information into content that informs and engages.</li>
            <li><strong>Bilingual precision:</strong> Maintained the nuance and tone of our messaging across two languages, demonstrating both linguistic talent and cultural understanding.</li>
            <li><strong>Quality-driven UX sensibility:</strong> Recognized and addressed friction points in content layout and navigation, improving reader engagement and comprehension.</li>
            <li><strong>Collaborative professionalism:</strong> Fostered constructive cooperation between internal and external teams, consistently delivering high-quality outcomes on time.</li>
          </ul>
        </div>

        <div>
          <h3 className={`${dmSerif.className} text-xl sm:text-2xl mb-2`}>
            Recommendation
          </h3>
          <p>
            I wholeheartedly endorse Louise for any role involving content development, UX/content strategy, translation, or marketing communications. Her blend of strategic insight, technical adaptability, bilingual skills, and cooperative spirit make her an outstanding asset to any team.
          </p>
        </div>

        <hr className="my-6 border-[#ebddd7]/30" />
        <address className="not-italic mt-6">
          <div className="font-semibold">Fritjof Andresen</div>
          <div className="italic opacity-90">Senior Consultant, Exelement</div>
          <div className="mt-2 text-sm">
            <a className="underline hover:opacity-80" href="https://exelement.co" target="_blank" rel="noopener">
              Exelement.co
            </a>
          </div>
          <div className={`${poppins.className} text-sm opacity-90 mt-1`}>
            Contact details available on request.
          </div>
        </address>
      </article>

      {/* --- Avdelare mellan rekommendationer --- */}
      <hr className="my-12 border-[#ebddd7]/30" />

      {/* --- New Customers --- */}
      <h2 className={`${dmSerif.className} text-3xl sm:text-5xl mb-4`}>
        new customers
      </h2>

      <p className={`${poppins.className} text-lg sm:text-xl mb-8 max-w-3xl`}>
        Recommendation from new customers, where I supported their content work during a limited period.
      </p>

      <article className={`${poppins.className} text-base sm:text-lg leading-relaxed space-y-6 max-w-3xl`}>
        <p>
          I truly appreciate how quickly you understood our needs and how you always delivered with care and quality. It is clear that you are passionate about what you do, and the result speaks for itself.
        </p>
        <p>
          Thank you again for everything. I truly recommend your competence, experience, and knowledge.
        </p>

        <hr className="my-6 border-[#ebddd7]/30" />
        <address className="not-italic mt-6">
          <div className="font-semibold">Robert Nyberg</div>
          <div className="italic opacity-90">Deputy CEO, new customers</div>
          <div className="mt-2 text-sm">
            <a className="underline hover:opacity-80" href="https://newcustomers.se/" target="_blank" rel="noopener">
              newcustomers.se
            </a>
          </div>
          <div className={`${poppins.className} text-sm opacity-90 mt-1`}>
            Contact details available on request.
          </div>
        </address>
      </article>
    </div>
  </section>
);

export default function Page() {
  return (
    <>
      <Hero />
      <RecommendationSection />
    </>
  );
}
