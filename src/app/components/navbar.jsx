"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
  ];

  const googleMapsUrl = "https://maps.app.goo.gl/P4kbxw5D3ktNxKi59";

  const linkClass = (href) =>
    `font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 ${
      pathname === href ? "text-white after:w-full" : "hover:after:w-full"
    }`;

  const mobileLinkClass = (href) =>
    `text-3xl font-bold transition-colors ${
      pathname === href ? "text-red-600" : "text-gray-300 hover:text-white"
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950 shadow-lg">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo / Brand */}
            <Link href="/" className="flex-none text-white" aria-label="Go to home">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold whitespace-nowrap">
                  Texas Five Star Paint & Body
                </span>
                <div className="flex items-center gap-2 text-red-600 mt-1">
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path} className={linkClass(link.path)}>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-5 rounded-md text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
              >
                Get Directions
                <FiArrowUpRight />
              </a>
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden text-white hover:text-red-600 transition-colors"
              >
                <FiMenu size={28} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex justify-end p-5">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            <FiX size={32} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full -mt-16">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={mobileLinkClass(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-12 text-center">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
            >
              Get Directions
              <FiArrowUpRight />
            </a>

            <div className="mt-8 flex flex-col gap-4 text-gray-400">
              <a href="tel:2142999240" className="flex items-center justify-center gap-3 hover:text-white">
                <FiPhone />
                <span>(214)-299-9240</span>
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 hover:text-white"
              >
                <FiMapPin />
                <span>214 Range Dr, Garland, TX</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
