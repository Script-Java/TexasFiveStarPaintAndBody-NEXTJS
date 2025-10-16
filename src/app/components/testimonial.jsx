// components/Testimonials.jsx
"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaGoogle } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

const testimonialsData = [
  {
    quote:
      "My truck needed the hood, roof, and side panel painted. The team did a fantastic job for a terrific price. Mary is very professional and kept me informed. I highly recommend them!",
    name: "Fred Souza",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXbc1tPYkeNqGSuwfPR7ebINGs1zxW0tgsainR2KDtR7AqqRkVfmQ=w36-h36-p-rp-mo-br100",
    rating: 5,
  },
  {
    quote:
      "I wish I could give more than 5 stars! The best car related experience of my life! The owners were SO kind, so quick, and were even able to fix the existing bumper flawlessly!",
    name: "Kaela O",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXb9L_dnUxTPOEL4fZbMhMOFdU6p6x6VD5L4qNO30vo0gOOu9SA=w36-h36-p-rp-mo-br100",
    rating: 5,
  },
  {
    quote:
      "The staff was professional and friendly, and the service was top-notch. They went above and beyond to ensure that my car was repaired to perfection. The quality of workmanship is outstanding.",
    name: "Rasoul Bisokhan",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXw3tBKj72_h_o_ZcnVs8nopvKNVTPajWwGACTqMkpJZve6YdOy=w36-h36-p-rp-mo-br100",
    rating: 5,
  },
  {
    quote:
      "I took my 2013 Cadillac Escalade to Five Star Paint and Body for hail damage and I must say that I’m very pleased with the work, timing, and courtesy received. They all were so nice and respectable. Especially Mrs. Mary, every time I spoke with her was a pleasure. Thank you guys for your hard work and I definitely appreciate it thank you again.",
    name: "Brandon Matthews",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXg7C-17r1uN9R8YqofOkB7hG5IWRYuvznGQSfpdYYGj4JYqRs=w36-h36-p-rp-mo-br100",
    rating: 5,
  },
  {
    quote:
      "I would like to take a moment to express my sincere gratitude for the outstanding service I received from Mary and the team. Her thorough explanations and attentive approach made me feel comfortable throughout the entire process. I was particularly impressed by the efficiency with which my car was returned to me. The turn around time was remarkably quick, and the quality of the work exceeded my expectations. My vehicle now looks as good as new, and I couldn't be happier with the results. Thank you once again for making my car looks brand new again!",
    name: "Bella Moncada",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjW1Eqa75cBYwPPNQMTbVu_QQpyltE8ScwlhrvY157DoQXn1Ih1Y0w=w36-h36-p-rp-mo-br100",
    rating: 5,
  },
];

// Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const starsVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.05, duration: 0.25, ease: "easeOut" },
  },
};

const starChild = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

function Stars({ count = 5 }) {
  return (
    <motion.div
      className="flex items-center text-yellow-400 gap-1 mb-4"
      variants={starsVariants}
      initial="hidden"
      animate="show"
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.span key={i} variants={starChild} aria-hidden>
          <FaStar />
        </motion.span>
      ))}
    </motion.div>
  );
}

function TestimonialCard({ quote, name, avatar, rating, index }) {
  return (
    <motion.figure
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: Math.min(index * 0.03, 0.2) }}
    >
      <Stars count={rating} />
      <blockquote className="text-gray-300 leading-relaxed flex-grow">“{quote}”</blockquote>
      <figcaption className="flex items-center gap-4 mt-6">
        <Image
          src={avatar}
          alt={`Avatar of ${name}`}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <div className="font-bold text-white">{name}</div>
          <div className="text-sm text-gray-400">Verified Google Review</div>
        </div>
      </figcaption>
    </motion.figure>
  );
}

function InfiniteVerticalMarquee({ items, speed = 30 }) {
  const prefersReducedMotion = useReducedMotion();

  // Duplicate for seamless loop
  const list = [...items, ...items];

  if (prefersReducedMotion) {
    // Static, no motion
    return (
      <div className="space-y-6">
        {list.slice(0, items.length).map((t, i) => (
          <TestimonialCard key={i} index={i} {...t} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* gradient mask via tailwind utilities */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950 opacity-80" />
      <motion.div
        className="flex flex-col gap-6"
        aria-hidden
        // Animate y from 0 to -50% to loop duplicated list
        animate={{ y: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {list.map((t, i) => (
          <TestimonialCard key={i} index={i % items.length} {...t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-neutral-950 text-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Title + CTA */}
          <motion.div
            className="relative z-10"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              Trusted by Drivers Across Garland
            </motion.h2>

            <motion.p
              className="mt-6 text-lg text-gray-400 max-w-lg"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            >
              We&apos;re proud of our 5-star rating. But don&apos;t just take our word for it—see what our
              satisfied customers have to say about their experience.
            </motion.p>

            <motion.a
              href="https://maps.app.goo.gl/P4kbxw5D3ktNxKi59"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-900/50 transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/60"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Read All Reviews
              <FaGoogle className="opacity-90" />
            </motion.a>
          </motion.div>

          {/* Right: Framer Motion marquee */}
          <InfiniteVerticalMarquee items={testimonialsData} speed={30} />
        </div>
      </div>
    </section>
  );
}
