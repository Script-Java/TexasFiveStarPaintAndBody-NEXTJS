"use client";

import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaYelp,
  FaGoogle,
  FaStar,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const serviceLinks = [
    { name: "Collision Repair", path: "/services/collision-repair" },
    { name: "Custom Paint & Refinishing", path: "/services/custom-paint-refinishing" },
    { name: "Paintless Dent Repair", path: "/services/paintless-dent-repair" },
    { name: "Auto Restoration", path: "/services/auto-restoration" },
    { name: "Headlight Restoration", path: "/services/headlight-restoration" },
    { name: "Lease Return Reconditioning", path: "/services/lease-return-reconditioning" },
  ];

  const quickLinks = [
    { name: "Gallery", path: "/gallery" },
    { name: "Before & After", path: "/before-and-after" },
    { name: "About", path: "/about" },
    { name: "Locations", path: "/locations" },
  ];

  const areaLinks = [
    { name: "Garland", path: "/locations/garland" },
    { name: "Dallas", path: "/locations/dallas" },
    { name: "Richardson", path: "/locations/richardson" },
    { name: "Plano", path: "/locations/plano" },
    { name: "Mesquite", path: "/locations/mesquite" },
    { name: "Rowlett", path: "/locations/rowlett" },
    { name: "Sachse", path: "/locations/sachse" },
    { name: "Murphy", path: "/locations/murphy" },
    { name: "Wylie", path: "/locations/wylie" },
    { name: "Sunnyvale", path: "/locations/sunnyvale" },
    { name: "Rockwall", path: "/locations/rockwall" },
    { name: "Balch Springs", path: "/locations/balch-springs" },
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/texas_five_star_paint_and_body/",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/profile.php?id=100084145820307",
      label: "Facebook",
    },
    {
      icon: FaYelp,
      href: "https://www.yelp.com/biz/texas-five-star-paint-and-body-garland",
      label: "Yelp",
    },
    {
      icon: FaGoogle,
      href: "https://www.google.com/maps/place/Texas+Five+Star+Paint+%26+Body/@32.9202014,-96.6320146,16.25z/data=!4m8!3m7!1s0x864c1d1967da4713:0x2a5fdb5d453210e!8m2!3d32.9210903!4d-96.6327826!9m1!1b1!16s%2Fg%2F11rndn42mm?entry=ttu",
      label: "Google",
    },
  ];

  const googleMapsUrl = "https://maps.app.goo.gl/P4kbxw5D3ktNxKi59";

  return (
    <footer className="bg-neutral-950 text-white">
      {/* Top CTA strip */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <Link href="/" className="inline-block mb-3" aria-label="Go to home">
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold tracking-tight">
                    Texas Five Star Paint &amp; Body
                  </span>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={12} className="text-red-600" />
                    ))}
                  </div>
                </div>
              </Link>
              <p className="text-neutral-500 text-base">
                Call us for a free estimate or swing by the shop.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:4695837377"
                className="inline-flex items-center gap-2 bg-white text-neutral-950 font-semibold py-3 px-6 rounded-full text-sm transition-all duration-300 hover:bg-neutral-200"
              >
                (469) 583-7377
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/[0.12] text-white font-semibold py-3 px-6 rounded-full text-sm transition-all duration-300 hover:bg-white/[0.06]"
              >
                Get Directions
                <FiArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
            {/* Services */}
            <div className="col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">
                Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages */}
            <div className="col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">
                Company
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas (first half) */}
            <div className="col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">
                Service Areas
              </h3>
              <ul className="space-y-3">
                {areaLinks.slice(0, 6).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}, TX
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas (second half) */}
            <div className="col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5 lg:invisible">
                More Areas
              </h3>
              <ul className="space-y-3">
                {areaLinks.slice(6).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}, TX
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    214 Range Dr
                    <br />
                    Garland, TX 75040
                  </a>
                </li>
                <li>
                  <a
                    href="tel:4695837377"
                    className="hover:text-white transition-colors"
                  >
                    (469) 583-7377
                  </a>
                </li>

              </ul>

              <div className="mt-5 text-sm text-neutral-500">
                <p>Mon – Fri: 8am – 6pm</p>
                <p>Sat: 9am – 3pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Texas Five Star Paint & Body
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="text-neutral-600 hover:text-white transition-colors duration-200"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
