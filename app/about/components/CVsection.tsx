"use client";

import React from "react";
import { dmSerif, poppins } from "@/app/fonts";

const CvSection: React.FC = () => {
  return (
    <section id="cv" className="bg-[#9d8080] text-[#624b4b] px-0 sm:px-6 pt-12 pb-20">
      <div className="sm:max-w-7xl mx-auto px-6 text-left">
        <h2 className={`${dmSerif.className} text-3xl sm:text-5xl mb-10`}>
          CV
        </h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {/* Work Experience */}
          <div className="relative bg-[#d7c3b9] text-[#624b4b] p-6 sm:p-8 rounded-2xl shadow-md max-h-[650px] overflow-y-auto">
  {/* Pilar – placeras i övre högra hörnet */}
  <div className="absolute top-6 right-6 flex flex-col items-center space-y-1 text-xl pointer-events-none select-none">
    <span>↑</span>
    <span>↓</span>
  </div>
            
            <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Marketing Manager</h3>
              <p className="italic mb-2">
                Saveabl, Gothenburg <span className="mx-1">|</span> October 2022 – Present
              </p>
              <p className="mb-4">
                Started as an intern via the Matix program and now run all marketing activities
                in a scaling startup environment. I handle both strategy and execution to drive growth
                across all digital touchpoints. Saveabl is a foodtech startup reducing food waste by delivering rescued, chef-prepared meal kits.
              </p>
              <ul className="list-disc pl-4 ml-2 space-y-2">
                <li>Plan and execute marketing strategies across paid media, organic channels and email</li>
                <li>Design and manage landing pages, popups and forms (frontend & backend)</li>
                <li>Improve UX/UI and contribute to design systems and development</li>
                <li>Support brand development and positioning</li>
                <li>Combine tech and marketing to build scalable systems and better customer experiences</li>
                <li>Balance internal responsibilities with external consulting within marketing</li>
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Marketing Consultant</h3>
              <p className="italic mb-2">
                Exelement, remote <span className="mx-1">|</span> February 2025 – Present
              </p>
              <p className="mb-4">
                Support Exelement’s internal marketing efforts to strengthen brand visibility and digital communication. Exelement is a Swedish consultancy specialising in CRM, MarTech and integrations for B2B clients.
              </p>
              <ul className="list-disc pl-4 ml-2 space-y-2">
                <li>Write website content, blog posts and campaigns in English and Swedish</li>
                <li>Translate and adapt technical copy to fit the Swedish market and audience</li>
                <li>Improve UX and content structure to support conversions</li>
                <li>Collaborate with internal team and external consultants to produce content</li>
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Marketing Consultant</h3>
              <p className="italic mb-2">
                Adderat, remote <span className="mx-1">|</span> December 2024 – Present
              </p>
              <p className="mb-4">
                Support Adderat’s internal marketing with a focus on digital visibility and lead generation. Adderat is a Swedish accounting firm.
              </p>
              <ul className="list-disc pl-4 ml-2 space-y-2">
                <li>Developed and manage a local Google Ads strategy tailored to specific regions</li>
                <li>Build, design and optimise landing pages to align with Adderat’s brand and Google Ads strategy</li>
                <li>Set up email automation for new leads via Mailchimp</li>
                <li>Improve SEO on the main website to increase organic visibility</li>
                <li>Work independently with focus on clarity, conversion and positioning</li>
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Marketing Assistant</h3>
              <p className="italic mb-2">
                Familjekortet, Borås <span className="mx-1">|</span> June 2023 – June 2024 <span className="mx-1">|</span> 50%
              </p>
              <p className="mb-3">
                Supported the marketing operations of Familjekortet, a digital platform offering local discounts and national deals for families across Sweden.
              </p>
              <ul className="list-disc pl-4 ml-2 space-y-2">
                <li>Handled email marketing and push notifications</li>
                <li>Created and optimised Meta Ads campaigns</li>
                <li>Supported organic social media with content production and scheduling</li>
                <li>Assisted with customer support and affiliate partnership coordination</li>
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Marketing Intern</h3>
              <p className="italic mb-2">
                BrightAct, Barcelona <span className="mx-1">|</span> January 2022 – March 2022
              </p>
              <p className="mb-3">
                Contributed to BrightAct’s digital marketing during an early startup phase focused on brand awareness. BrightAct is a social impact startup developing an app that centralises support services for individuals affected by domestic violence.
              </p>
              <ul className="list-disc pl-4 ml-2 space-y-2">
                <li>Created an early-stage marketing strategy tailored to the startup’s goals.</li>
                <li>Created content and supported social media engagement</li>
                <li>Assisted in building brand visibility through storytelling and digital outreach</li>
                <li>Supported small-scale campaigns to raise user awareness</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="bg-[#d7c3b9] text-[#624b4b] p-6 sm:p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Interface Design/UX</h3>
              <p className="italic mb-2">
                Berghs School of Communication <span className="mx-1">|</span> April 2025 - May 2025
              </p>
              <p className="mb-3">
  Course focused on UX principles, intuitive interface design and prototyping. View{" "}
  <a
    href="https://certificate.berghs.se/kursintyg-louise-forsby-267657-granssnittsdesign-ux-a00qt00000eqbzbiap/?ref=linkedin-profile&zone=truecrt&lang=se"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold underline text-[#624b4b] hover:opacity-80"
  >
    course certificate
  </a>
  .
</p>

            </div>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Master of Science in Business and Economics (One Year)</h3>
              <p className="italic mb-2">
                Matix, School of Business, Economics and Law at the University of Gothenburg <span className="mx-1">|</span> August 2022 - June 2023 
              </p>
              <p className="mb-3">
                Innovation, strategy, change management, and leadership, with practical experience two days a week at partner companies.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Bachelor of Science in Business Administration and Economics</h3>
              <p className="italic mb-2">
                University of Halmstad <span className="mx-1">|</span> August 2019 - June 2022  
              </p>
              <p className="mb-3">
                Awarded Economics Student of the Year and organized the economists' winter ball (2019).
              </p>
            </div>
          </div>

         {/* Skills */}
<div className="bg-[#d7c3b9] text-[#624b4b] p-6 sm:p-8 rounded-2xl shadow-md">
  <h3 className="text-2xl font-semibold mb-4">Skills</h3>
  <ul className="mb-6 list-none pl-0 space-y-3">
    <li><strong>Marketing Tools & Analytics:</strong> GA4, Meta Ads Manager, SEMrush, Google Search Console, Keyword Planner, Asana</li>
    <li><strong>CMS:</strong> Hygraph (Headless CMS), Webflow</li>
    <li><strong>Design & Creative:</strong> Canva, Figma, Photoshop, Premiere Pro, Illustrator, CapCut</li>
    <li><strong>Email Marketing:</strong> Mailchimp, Rule</li>
    <li><strong>Customer Relations:</strong> Zendesk, Pipedrive</li>
    <li><strong>Programming & Development:</strong> React, JavaScript, HTML, CSS, PHP, Firebase, Vercel, VS Code</li>
    <li><strong>Personal:</strong> Quick learner, growth-driven, curious, collaborative and solution-oriented</li>
  </ul>


  <h3 className="text-xl sm:text-xl mt-10 font-semibold">Certificate</h3>
  <h3 className="text-xl font-semibold mt-4">Introduction to Coding</h3>
              <p className="italic mb-2">
              SheCodes <span className="mx-1">|</span> 2022
              </p>
  <p className="mb-4">
  Completed a coding course covering HTML, CSS, JavaScript, and the use of Visual Studio Code, earning a{" "}
  <a
    href="https://www.shecodes.io/certificates/0c6b814604ff2a52916b114088450934"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold underline hover:opacity-80"
  >
    certificate
  </a>{" "}
  upon completion.
</p>


            <h3 className="text-xl font-semibold mt-10 mb-4">Languages</h3>
            <ul className="list-disc list-inside mb-10">
              <li>Swedish: Native</li>
              <li>English: Fluent</li>
              <li>Danish: Basic conversational</li>
            </ul>
          </div>

          {/* Elected Positions */}
          <div className="bg-[#d7c3b9] text-[#624b4b] p-6 sm:p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Elected Positions</h3>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Board Member</h3>
              <p className="italic mb-2">
                Saveabl, Gothenburg <span className="mx-1">|</span> February 2025 – Present
              </p>
              <p className="mb-3">
                Support the company’s brand development and long-term growth through an advisory role.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Responsible for Marketing and Communication</h3>
              <p className="italic mb-2">
                Sveriges Ekonomföreningars Riksorganisation (S.E.R.O.), remote <span className="mx-1">|</span> January 2021 – December 2021
              </p>
              <p className="mb-2">
              Led marketing and communication nationally for S.E.R.O., the umbrella organisation for Sweden&rsquo;s business student associations.
              </p>
              <ul className="list-disc pl-4 ml-2 space-y-2">
                <li>Created marketing strategies and wrote copy for newsletters and campaigns</li>
                <li>Supported local associations with marketing material and guidance</li>
                <li>Planned and led marketing workshops for member organisations</li>
                <li>Contributed to overall board work and national initiatives</li>
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold">Responsible for Marketing</h3>
              <p className="italic mb-2">
                Eurekha, Halmstad <span className="mx-1">|</span> January 2020 – December 2020
              </p>
              <p className="mb-2">
              Managed marketing for Eurekha, the student business association at Halmstad University.
              </p>
              <ul className="list-disc pl-4 ml-2 space-y-2">
                <li>Planned and promoted events for students</li>
                <li>Created marketing strategies and copy for campaign material</li>
                <li>Handled organic social media</li>
                <li>Contributed to overall board work and coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvSection;
