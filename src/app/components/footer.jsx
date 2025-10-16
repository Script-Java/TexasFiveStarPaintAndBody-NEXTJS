"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaGoogle, FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
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
      <div className="max-w-[85rem] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1: Brand & CTA */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="Go to home">
              <div className="flex items-center gap-3">
                {/* Optional logo: put /logo.png in /public if you want an image logo */}
                {/* Remove this block if you don't use a logo image */}


                <div className="flex flex-col">
                  <span className="text-2xl font-semibold whitespace-nowrap">
                    Texas Five Star Paint & Body
                  </span>
                  <div className="flex items-center gap-2 text-red-600 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={16} />
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-gray-400 mb-6">
              Your trusted, I-CAR Gold Class certified auto body shop in Garland, TX. We bring
              precision, passion, and perfection to every repair.
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-md text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
            >
              Get Directions
              <FiArrowUpRight />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold uppercase text-gray-300 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div>
            <h3 className="text-lg font-semibold uppercase text-gray-300 mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-red-600 mt-1 flex-shrink-0" size={18} />
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600"
                >
                  214 Range Dr, <br />
                  Garland, TX 75040
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-red-600 flex-shrink-0" size={18} />
                <a href="tel:2142999240" className="hover:text-red-600">
                  (214) 299-9240
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-red-600 flex-shrink-0" size={18} />
                <a
                  href="mailto:texasfivestarpaintandbody@yahoo.com"
                  className="hover:text-red-600 break-all"
                >
                  texasfivestarpaintandbody@yahoo.com
                </a>
              </li>
            </ul>

            <h4 className="text-md font-semibold text-gray-300 mt-6 mb-2">Business Hours</h4>
            <p className="text-sm text-gray-400">Mon - Fri: 8am - 6pm</p>
            <p className="text-sm text-gray-400">Saturday: 9am - 3pm</p>
            <p className="text-sm text-gray-400">Sunday: Closed</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Texas Five Star Paint & Body. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-500 hover:text-red-600 transition-colors"
                title={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
