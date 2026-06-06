// app/about/AboutContent.jsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiAward, FiUsers, FiStar, FiArrowUpRight } from "react-icons/fi";
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
  { icon: FiStar, value: "500+", label: "5-Star Reviews" },
];

const values = [
  {
    name: "Craftsmanship",
    description:
      "Every vehicle is hand-inspected under specialized lighting before it leaves our shop - because 'good enough' doesn't earn five-star reviews.",
  },
  {
    name: "Integrity",
    description:
      "We give honest assessments and transparent pricing. If a repair isn't necessary, we'll tell you. If we find hidden damage, you'll know before we touch it.",
  },
  {
    name: "Family-Owned Accountability",
    description:
      "When Mary hands you the keys, she's putting her name on the work. No corporate layers, no anonymous technicians - just a family that stands behind every repair.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.25 },
});

export default function AboutContent() {
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
              For over 15 years, our family-owned Garland shop has delivered
              dealership-quality collision repair, custom paint, and classic car
              restoration - one five-star review at a time.
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
                Texas Five Star Paint & Body started with a straightforward
                idea: give every vehicle the same attention you&apos;d want for
                your own. Over 15 years and 1,000+ customers later, that idea
                hasn&apos;t changed - but our capabilities have. We&apos;ve
                grown from a small Garland shop into a full-service collision
                repair, custom paint, and restoration facility trusted by
                everyday drivers and luxury car owners across the DFW metroplex.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Owner Mary and our team combine
                computerized color matching, advanced frame straightening
                equipment, and old-school artisan paintwork to deliver results
                that consistently earn us perfect five-star reviews. Whether
                it&apos;s a fender bender on I-635 or a frame-off restoration
                of a &apos;69 Camaro, every vehicle gets the same meticulous
                care.
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
                500+ 5-Star Reviews, Family-Owned Accountability
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our crew includes certified specialists in aluminum and carbon
                fiber repair, computerized frame straightening, and
                factory-match paint systems from PPG and Axalta. They&apos;ve
                collectively restored over 1,000 vehicles - from daily
                drivers to Porsches and vintage Shelby Cobras.
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
              Bring your vehicle to 214 Range Dr in Garland for a free
              estimate. We handle all insurance claims and offer up to $500 in
              deductible forgiveness.
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
