"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiTool, FiDroplet, FiStar, FiShield, FiCheck, FiEdit2, FiMaximize, FiTarget, FiAlertTriangle, FiFileText, FiCloudRain } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";  // update path if yours differs

// Image imports
import heroBg from "../assets/img/10.jpg";
import collisionImg from "../assets/img/11.jpg";
import paintImg from "../assets/img/12.jpg";
import restorationImg from "../assets/img/9.jpg";
import pdrImg from "../assets/img/13.jpg";
import scratchImg from "../assets/img/1.jpg";
import bumperImg from "../assets/img/2.jpg";
import adasImg from "../assets/img/3.jpg";
import rustImg from "../assets/img/4.jpg";
import insuranceImg from "../assets/img/5.jpg";
import hailImg from "../assets/img/6.jpg";

const servicesData = [
  {
    icon: FiTool,
    title: "Collision Repair",
    slug: "collision-repair",
    description:
      "Collision Repair is a comprehensive process that restores your vehicle's structural integrity and appearance to pre-accident condition. Backed by 500+ 5-star reviews, our team handles all insurance claims and offers up to $500 deductible forgiveness, saving our average customer hundreds in out-of-pocket costs.",
    image: collisionImg,
    details: ["Frame Straightening", "Panel Replacement", "Bumper & Fender Repair"],
  },
  {
    icon: FiDroplet,
    title: "Custom Paint & Refinishing",
    slug: "custom-paint-refinishing",
    description:
      "Custom Paint & Refinishing is a premium auto body service that uses computerized color matching for invisible repair blending, alongside custom candy, pearl, and matte finishes. We utilize premium PPG and Axalta paints in a climate-controlled spray booth to guarantee a 100% factory match and a finish that lasts for years.",
    image: paintImg,
    details: ["Factory Color Matching", "Custom Colors & Finishes", "Paint Correction & Polishing"],
  },
  {
    icon: FiStar,
    title: "Auto Restoration",
    slug: "auto-restoration",
    description:
      "Auto Restoration is the meticulous process of returning classic muscle cars and vintage vehicles to factory specifications. This includes frame-off and rotisserie restorations, period-correct paint applications, and expert metalwork—delivering concourse-level craftsmanship that preserves the value of your classic vehicle.",
    image: restorationImg,
    details: ["Classic & Muscle Cars", "Frame-Off Restorations", "Period-Correct Finishing"],
  },
  {
    icon: FiShield,
    title: "Paintless Dent Repair (PDR)",
    slug: "paintless-dent-repair",
    description:
      "Paintless Dent Repair (PDR) is an innovative technique that removes hail damage, parking lot dings, and door dents without repainting. PDR is up to 50% faster than traditional bodywork and leaves your vehicle's factory finish 100% intact with zero risk of color mismatch.",
    image: pdrImg,
    details: ["Hail Damage Specialists", "Minor Dent & Ding Removal", "Maintains Factory Finish"],
  },
  {
    icon: FiEdit2,
    title: "Scratch & Paint Chip Repair",
    slug: "scratch-paint-chip-repair",
    description:
      "Scratch & Paint Chip Repair involves professional touch-ups and spot blending to eliminate unsightly scratches and rock chips. This process prevents rust formation and restores the exterior appearance of your vehicle efficiently and cost-effectively.",
    image: scratchImg,
    details: ["Color-Matched Touch-Ups", "Clear Coat Blending", "Rust Prevention"],
  },
  {
    icon: FiMaximize,
    title: "Bumper Repair",
    slug: "bumper-repair",
    description:
      "Bumper Repair is a specialized service for reshaping, welding, and refinishing damaged plastic bumpers. We restore structural integrity and factory appearance, saving customers an average of 40% compared to full bumper replacement when the damage allows.",
    image: bumperImg,
    details: ["Plastic Welding", "Dent Reshaping", "Factory Color Refinishing"],
  },
  {
    icon: FiTarget,
    title: "ADAS Calibration",
    slug: "adas-calibration",
    description:
      "Precise recalibration of your vehicle's Advanced Driver Assistance Systems (cameras, radar, sensors) following collision repair or windshield replacement.",
    image: adasImg,
    details: ["Camera Recalibration", "Radar Alignment", "Pre/Post Repair Scanning"],
  },
  {
    icon: FiAlertTriangle,
    title: "Rust Repair",
    slug: "rust-repair",
    description:
      "Thorough removal of oxidation, metal patching, and preventative sealing to stop rust from spreading and restore the structural integrity of your vehicle.",
    image: rustImg,
    details: ["Oxidation Removal", "Metal Fabrication & Patching", "Anti-Rust Undercoating"],
  },
  {
    icon: FiFileText,
    title: "Auto Insurance Claim Repair",
    slug: "auto-insurance-claim-repair",
    description:
      "Auto Insurance Claim Repair is a streamlined service where we handle the entire claims process directly with your provider. We ensure complete repairs using OEM-approved procedures and offer up to $500 in deductible forgiveness to minimize your out-of-pocket expenses.",
    image: insuranceImg,
    details: ["Direct Insurance Billing", "Supplement Negotiation", "Deductible Assistance"],
  },
  {
    icon: FiCloudRain,
    title: "Hail Repair",
    slug: "hail-repair",
    description:
      "Comprehensive hail damage restoration utilizing a mix of Paintless Dent Repair (PDR) and traditional bodywork for severe impacts. Fast turnaround to get you back on the road.",
    image: hailImg,
    details: ["Paintless Dent Repair (PDR)", "Panel Replacement if Needed", "Storm Damage Specialists"],
  },
];

function ServiceCard({ icon: Icon, title, slug, description, image, details }) {
  return (
    <Link href={`/services/${slug}`} className="block group">
      <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-900/50">
        <div className="relative h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div className="bg-red-600 p-3 rounded-full">
              <Icon className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-400 mb-4">{description}</p>
          <ul className="space-y-2">
            {details.map((detail) => (
              <li key={detail} className="flex items-center gap-3 text-gray-300">
                <FiCheck className="text-red-500 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 text-red-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn More
            <FiArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesContent() {
  return (
    <>
      <Navbar />

      <div className="bg-neutral-950 text-white pt-24">
        {/* Announcement Banner */}
        <div className="bg-red-600">
          <div className="max-w-[85rem] px-4 py-3 sm:px-6 lg:px-8 mx-auto">
            <p className="text-white text-center font-semibold">
              Up to $500 Deductible Forgiveness - Ask Us How!
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroBg}
              alt="Expert auto body work in progress"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
              Five-Star Quality, Down to the Last Detail
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Six specialized services under one roof - from insurance-covered collision
              repair to frame-off classic restorations. Every job backed by our perfect
              5-star Google rating.
            </p>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {servicesData.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
              Experience the Five-Star Difference
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Visit us at 214 Range Dr in Garland for a free estimate, or call for same-day
              consultations. We handle all insurance claims and offer up to $500 deductible forgiveness.
            </p>
            <a
              href="https://maps.app.goo.gl/P4kbxw5D3ktNxKi59"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
            >
              Get Directions
              <FiArrowUpRight />
            </a>
            {/* Example of internal navigation with Next.js Link */}
            <div className="mt-6">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-white/90 hover:text-white hover:border-white/30 transition"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
