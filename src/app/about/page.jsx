// app/about/page.jsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiAward, FiUsers, FiShield, FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

// ✅ Static image imports (place files under /public/assets/img/gallery/)
import aboutHeroImg from "../assets/img/gallery/7.jpg";
import storyImg from "../assets/img/gallery/8.jpg";
import teamImg from "../assets/img/gallery/3.jpg";

const stats = [
  { icon: FiAward, value: "15+", label: "Years of Experience" },
  { icon: FiUsers, value: "1000+", label: "Satisfied Customers" },
  { icon: FiShield, value: "I-CAR Gold", label: "Certified Technicians" },
];

const values = [
  {
    name: "Craftsmanship",
    description:
      "We treat every vehicle as a work of art, applying meticulous attention to detail from start to finish.",
  },
  {
    name: "Integrity",
    description:
      "Honest advice, transparent pricing, and a commitment to doing what’s right for our customers.",
  },
  {
    name: "Innovation",
    description:
      "We invest in the latest technology and training to ensure we’re always delivering the best possible results.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.25 },
});

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <div className="bg-neutral-950 text-white pt-24">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={aboutHeroImg}
              alt="A restored vintage truck showcasing craftsmanship"
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Content */}
          <motion.div
            className="relative z-10 max-w-4xl mx-auto px-4"
            {...fadeUp(0.1)}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
              Driven by Passion, Defined by Quality.
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Learn the story behind Texas Five Star Paint &amp; Body—a local
              business built on a foundation of family, expertise, and an
              unwavering commitment to automotive perfection.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="bg-neutral-900 py-16 sm:py-20">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} className="p-4" {...fadeUp(0.05 * i)}>
                  <stat.icon className="text-red-600 mx-auto mb-4" size={48} />
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <p className="text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0.05)}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Our Story: From a Small Garage to Garland&apos;s Go-To Shop
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Founded over 15 years ago with a simple mission—to provide
                dealership-quality repairs with the care and integrity of a
                local, family-owned business—Texas Five Star Paint &amp; Body
                has grown into one of the most trusted names in the DFW area.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our journey began with a passion for automotive excellence. We
                saw a need for a body shop that didn&apos;t just fix cars, but
                restored them with an artist&apos;s touch. Today, our
                state-of-the-art facility is equipped with the industry&apos;s
                best technology, but our core values remain the same: honest
                work, transparent communication, and a five-star finish, every
                time.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="relative w-full h-[360px] md:h-[440px]">
              <Image
                src={storyImg}
                alt="A classic American muscle car with a new custom red paint finish"
                fill
                className="rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-neutral-900 py-16 sm:py-24 lg:py-32">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              {...fadeUp(0.05)}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
              {...fadeUp(0.1)}
            >
              These principles guide every decision we make and every vehicle we
              repair.
            </motion.p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {values.map((value, i) => (
                <motion.div
                  key={value.name}
                  className="bg-neutral-800 p-8 rounded-2xl"
                  {...fadeUp(0.08 * i)}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {value.name}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Highlight (optional extra use of imported image) */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0.05)} className="relative w-full h-[320px] md:h-[420px] order-last md:order-first">
              <Image
                src={teamImg}
                alt="Our expert team working on a high-end vehicle"
                fill
                className="rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                People Who Care, Skills You Can Trust
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our technicians are trained on the latest repair methods and
                technologies. More importantly, they care—about your safety,
                your time, and your vehicle. That’s the Five Star difference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter"
              {...fadeUp(0.05)}
            >
              Experience the Five-Star Difference
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
              {...fadeUp(0.1)}
            >
              Ready to work with a team that truly cares about your vehicle?
              Contact us today for a free, no-obligation estimate and let us
              show you why we&apos;re Garland&apos;s top choice.
            </motion.p>

            <motion.a
              href="https://maps.app.goo.gl/P4kbxw5D3ktNxKi59"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-900/50 transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/60"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              {...fadeUp(0.15)}
            >
              Get Directions
              <FiArrowUpRight />
            </motion.a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
