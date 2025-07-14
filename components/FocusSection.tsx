"use client";
import React from "react";
import { dmSerif, poppins } from "@/app/fonts";
import {
  Briefcase,
  Layout,
  TrendingUp,
  PenTool,
  Building,
  Code,
} from "lucide-react";

const FocusSection: React.FC = () => {
  const areas = [
    {
      icon: <Briefcase size={32} />,
      title: "Strategic Marketing",
      text: "I build marketing strategies that balance long-term goals with short-term growth.",
    },
    {
      icon: <Layout size={32} />,
      title: "UX/UI & Web Design",
      text: "I design and code landing pages, forms and flows that feel intuitive. Always with User Experience in mind.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Growth & Performance",
      text: "I create campaigns on Meta and Google, data-driven and adapted to the brand's voice.",
    },
    {
      icon: <PenTool size={32} />,
      title: "Content & Copy",
      text: "Email flows, social content, website content and blog stories. I create clear, engaging messaging across channels.",
    },
    {
      icon: <Building size={32} />,
      title: "Business Development",
      text: "I’ve helped shape brand identity, growth systems and sales flows.",
    },
    {
      icon: <Code size={32} />,
      title: "Bridging Tech & Marketing",
      text: "My background helps me turn technical details into clear communication. Perfect for B2B, SaaS and CRM.",
    },
  ];

  return (
    <section className="bg-[#d7c3b9] text-[#624b4b] px-0 sm:px-6 pt-12 pb-20 sm:pt-12 sm:pb-20">
      <div className="sm:max-w-7xl mx-auto px-6 text-left">
        <h2 className={`${dmSerif.className} text-3xl sm:text-5xl mb-6`}>
          My focus areas
        </h2>
        <p className={`${poppins.className} text-lg sm:text-xl mb-16 max-w-3xl`}>
          I love working where marketing, design and tech meet. 
          Here are the areas where I create value:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {areas.map((area, index) => (
            <div key={index} className="flex flex-col max-w-[320px]">
              <div className="text-[#624b4b] mb-3">{area.icon}</div>
              <h3 className={`${dmSerif.className} text-2xl mb-1`}>{area.title}</h3>
              <p className={`${poppins.className} text-base`}>{area.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
