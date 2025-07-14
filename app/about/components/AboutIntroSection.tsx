"use client";

import React from "react";
import { dmSerif, poppins } from "@/app/fonts";

const AboutIntroSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#ebddd7] text-[#624b4b] px-0 sm:px-6 pt-12 pb-20">
      <div className="sm:max-w-7xl mx-auto px-6 text-left">
        <h2 className={`${dmSerif.className} text-3xl sm:text-5xl mb-10`}>
          About
        </h2>
        <div className="grid sm:grid-cols-2 gap-0 sm:gap-32">

        <p className={`${poppins.className} text-base sm:text-lg mb-6 sm:mb-0`}>

            I created this page to give you a better sense of who I am. Partly to help
            you decide whether I would be a great complement for your team, and partly to
            showcase my skills in design, tech and marketing.
            <br /><br />
            Besides traveling, I love learning new things and constantly developing,
            both professionally and personally. This page is probably a good example
            of that. When I started at my current job, I had only taken a basic coding
            course. I was curious about how design and technology could come together.
            Not long after I joined, we realized we needed to rebuild our website.
            I was quick to dive in.
          </p>
          <p className={`${poppins.className} text-base sm:text-lg`}>
            Since then, I’ve learned a lot about user experience, design systems,
            frontend and backend logic. Along the way, I’ve built and shaped everything
            from campaign flows and multilingual websites to automated integrations and
            internal tools.
            <br /><br />
            That hands-on experience has given me a broader understanding of marketing
            and how everything connects. I believe it's a valuable perspective in many
            situations. It allows me to design and optimize the entire journey from
            first touchpoint to conversion, regardless of which strategy, channel or
            platform brought the customer there.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
