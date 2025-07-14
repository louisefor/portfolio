"use client";
import Image from "next/image";
import Link from "next/link";
import { dmSerif, poppins } from "@/app/fonts";

const projects = [
  {
    title: "Berghs UX/UI Prototype",
    intro: "Part of the UI/UX course at Berghs School of Communication (Spring 2025).",
    bullets: [
      "Ideation & Wireframes: Concept development, user journeys and content structure.",
      "Visual & Digital Design: Visual identity, iconography and overall look & feel.",
      "Prototype, Testing & Iteration: Interactive prototype built in Figma, tested with users and refined based on feedback.",
      "Responsive Design: Designed a marketing webpage for the app, optimized for mobile, tablet, and desktop.",
    ],
    video: "/videos/prototype_berghs.mp4",
  },
  {
    title: "Saveabl Newsletter Funnel",
    intro: "Designed and implemented popup and email automation to convert visitors into subscribers and active customers.",
    bullets: [
      "Popup Concept & Design: Created the idea and responsive design for a giveaway popup where visitors can win a meal kit by signing up.",
      "Multilingual Segmentation: Built in Swedish, English, and Danish. Triggered for first-time visitors. Users select their country to enable accurate audience targeting.",
      "Email Routing Setup: Connected the form to Firebase and created a Zapier flow to route subscribers into the correct Mailchimp audience based on country.",
      "Automated Funnel in Mailchimp: Built and designed welcome sequences, including logic to transition users into the weekly newsletter flow after onboarding.",
    ],
    video: "/videos/saveabl_newsletter_funnel.mp4",
  },
  {
    title: "Saveabl Referral System",
    intro: "Designed to drive growth through personal referrals and seamless user experience.",
    bullets: [
      'Digital Referral Flow: Designed and developed a referral system integrated with Firebase, where users can access and share their personal code via “My Pages”.',
      "Multilingual Setup: Built to work seamlessly in Swedish, English, and Danish.",
      "Share Feature: Designed and implemented a mobile-first sharing experience.",
      "Printed Vouchers: Created printed referral vouchers, included in customer deliveries.",
    ],
    video: "/videos/referral_saveabl.mp4",
    images: ["/images/referral_voucher_front.png", "/images/referral_voucher_back.png"],
  },
  {
    title: "Saveabl Meta Carousel Ad",
    intro: "Sponsored Instagram carousel ad that became part of Saveabl’s long-term paid and organic social strategy.",
    bullets: [
      "Concept & Copy: Developed the concept and wrote clear, conversion-oriented messaging aligned with Saveabl’s tone of voice.",
      "Design: Created all carousel slides with consistent layout, visual hierarchy and brand coherence.",
      "Execution: Published the carousel in the organic feed, then boosted it through Meta Ads for broader reach.",
      "Performance: Maintained a 3.3% CTR and 2.16 SEK CPC throughout the campaign.",
    ],
    images: ["/images/saveabl_meta_1.png", "/images/saveabl_meta_2.png"],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-[#917474] sm:bg-[#9d8080] text-[#ebddd7] px-0 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`${dmSerif.className} text-3xl sm:text-5xl mb-6 sm:mb-12`}>
          A few selected projects
        </h2>

        <div className="flex flex-col gap-10 sm:gap-20">
          {projects.map((project, index) => {
            const isOdd = index % 2 === 1;

            return (
              <div key={index}>
                <div
                  className={`flex flex-col sm:flex-row ${
                    isOdd ? "sm:flex-row-reverse" : ""
                  } items-center gap-10`}
                >
                  {/* TEXT */}
                  <div className="sm:w-1/2 w-full order-1 sm:order-none">
                    <h3 className={`${dmSerif.className} text-2xl sm:text-3xl mb-4`}>
                      {project.title}
                    </h3>
                    <div className={`${poppins.className} text-base sm:text-lg`}>
                      {project.intro && <p className="mb-4">{project.intro}</p>}
                      {project.bullets && (
                        <ul className="list-disc pl-5 space-y-4">
                          {project.bullets.map((bullet, i) => {
  const [boldPart, ...rest] = bullet.split(":");
  const restText = rest.join(":").trim(); // behåller resten även om det finns flera ":"
  return (
    <li key={i}>
      <strong>{boldPart}:</strong> {restText}
    </li>
  );
})}

                        </ul>
                      )}
                    </div>
                  </div>

                  {/* MEDIA */}
                  <div className="sm:w-1/2 w-full flex flex-col sm:flex-row items-center sm:justify-center gap-4 order-2 sm:order-none">
                    {project.video && (
                      <video
                        className={`object-contain ${
                          project.title === "Saveabl Newsletter Funnel"
                            ? "aspect-video max-w-[380px] sm:max-w-[580px]"
                            : "aspect-[9/16] max-w-[240px] sm:max-w-[280px]"
                        } w-full sm:w-auto`}
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {project.images && (
                      <div
                        className={`flex flex-row sm:flex-row justify-center items-center ${
                          project.title === "Saveabl Meta Carousel Ad"
                            ? "gap-0 sm:gap-0"
                            : "gap-2 sm:gap-4"
                        }`}
                      >
                        {project.images.map((img, i) => (
                          <Image
                            key={i}
                            src={img}
                            alt={`Image ${i + 1}`}
                            width={
                              project.title === "Saveabl Meta Carousel Ad" ? 160 : 120
                            }
                            height={
                              project.title === "Saveabl Meta Carousel Ad" ? 160 : 120
                            }
                            className={`object-contain ${
                              project.title === "Saveabl Meta Carousel Ad"
                                ? "w-[240px] sm:w-[280px]"
                                : "w-[120px] sm:w-[160px]"
                            } h-auto`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="block flex justify-center mt-12 mb-0">
                    <div className="w-full border-t border-[#ebddd7]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
