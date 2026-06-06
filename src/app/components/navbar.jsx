"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaStar } from "react-icons/fa";
import {
  FiPhone,
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

const serviceLinks = [
  { name: "Collision Repair", path: "/services/collision-repair" },
  { name: "Custom Paint & Refinishing", path: "/services/custom-paint-refinishing" },
  { name: "Paintless Dent Repair", path: "/services/paintless-dent-repair" },
  { name: "Auto Restoration", path: "/services/auto-restoration" },
  { name: "Scratch & Paint Chip Repair", path: "/services/scratch-paint-chip-repair" },
  { name: "Bumper Repair", path: "/services/bumper-repair" },
  { name: "ADAS Calibration", path: "/services/adas-calibration" },
  { name: "Rust Repair", path: "/services/rust-repair" },
  { name: "Auto Insurance Claim Repair", path: "/services/auto-insurance-claim-repair" },
  { name: "Hail Repair", path: "/services/hail-repair" },
];

const areaLinks = [
  { name: "Garland", path: "/locations/garland" },
  { name: "Dallas", path: "/locations/dallas" },
  { name: "Plano", path: "/locations/plano" },
  { name: "Richardson", path: "/locations/richardson" },
  { name: "Mesquite", path: "/locations/mesquite" },
  { name: "Rowlett", path: "/locations/rowlett" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAreasOpen, setIsMobileAreasOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);
  const areasTimeoutRef = useRef(null);
  const pathname = usePathname();

  // Close dropdowns on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsAreasOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileAreasOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    };
  }, []);

  const handleServicesEnter = useCallback(() => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsAreasOpen(false);
    setIsServicesOpen(true);
  }, []);

  const handleServicesLeave = useCallback(() => {
    servicesTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 120);
  }, []);

  const handleAreasEnter = useCallback(() => {
    if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    setIsServicesOpen(false);
    setIsAreasOpen(true);
  }, []);

  const handleAreasLeave = useCallback(() => {
    areasTimeoutRef.current = setTimeout(() => setIsAreasOpen(false), 120);
  }, []);

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");
  const isAreasActive =
    pathname === "/locations" || pathname.startsWith("/locations/");

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]">
        <nav className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex-none group" aria-label="Go to home">
              <div className="flex flex-col">
                <span className="text-white text-lg font-semibold tracking-tight transition-opacity group-hover:opacity-80">
                  Texas Five Star Paint &amp; Body
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={10} className="text-red-600" />
                  ))}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - centered */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1 px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors rounded-full ${
                    isServicesActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Services
                  <FiChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    isServicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="bg-neutral-950 border border-white/[0.08] rounded-xl p-1.5 w-[280px] shadow-2xl shadow-black/50">
                    {serviceLinks.map((service) => {
                      const isActive = pathname === service.path;
                      return (
                        <Link
                          key={service.path}
                          href={service.path}
                          className={`block px-4 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                            isActive
                              ? "bg-white/[0.06] text-white"
                              : "text-neutral-400 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          {service.name}
                        </Link>
                      );
                    })}
                    <div className="border-t border-white/[0.06] mt-1.5 pt-1.5">
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-500 hover:text-white transition-colors"
                      >
                        All Services
                        <FiArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/gallery"
                className={`px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors rounded-full ${
                  pathname === "/gallery"
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/before-and-after"
                className={`px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors rounded-full ${
                  pathname === "/before-and-after"
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Before & After
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors rounded-full ${
                  pathname === "/about"
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                About
              </Link>

              {/* Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleAreasEnter}
                onMouseLeave={handleAreasLeave}
              >
                <Link
                  href="/locations"
                  className={`inline-flex items-center gap-1 px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors rounded-full ${
                    isAreasActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Locations
                  <FiChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      isAreasOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <div
                  className={`absolute top-full right-0 pt-3 transition-all duration-200 ${
                    isAreasOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="bg-neutral-950 border border-white/[0.08] rounded-xl p-1.5 w-[220px] shadow-2xl shadow-black/50">
                    {areaLinks.map((area) => {
                      const isActive = pathname === area.path;
                      return (
                        <Link
                          key={area.path}
                          href={area.path}
                          className={`block px-4 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                            isActive
                              ? "bg-white/[0.06] text-white"
                              : "text-neutral-400 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          {area.name}, TX
                        </Link>
                      );
                    })}
                    <div className="border-t border-white/[0.06] mt-1.5 pt-1.5">
                      <Link
                        href="/locations"
                        className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-500 hover:text-white transition-colors"
                      >
                        All Locations
                        <FiArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:4695837377"
                className="hidden sm:inline-flex items-center gap-2 text-[13px] font-medium text-neutral-400 hover:text-white transition-colors"
              >
                <FiPhone size={14} />
                (469) 583-7377
              </a>
              <Link
                href="/free-estimate"
                className="hidden sm:inline-flex items-center gap-2 bg-white text-neutral-950 font-semibold py-2 px-5 rounded-full text-[13px] transition-all duration-300 hover:bg-neutral-200"
              >
                Free Estimate
              </Link>
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden text-white hover:text-neutral-400 transition-colors p-1"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-neutral-950 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
            <span className="text-white text-lg font-semibold tracking-tight">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-500 hover:text-white transition-colors p-1"
            >
              <FiX size={22} />
            </button>
          </div>

          <div className="flex flex-col h-[calc(100%-73px)] overflow-y-auto">
            <nav className="flex-1 px-3 py-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                  pathname === "/"
                    ? "text-white bg-white/[0.04]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    isServicesActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Services
                  <FiChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isMobileServicesOpen
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 pb-2">
                    {serviceLinks.map((service) => {
                      const isActive = pathname === service.path;
                      return (
                        <Link
                          key={service.path}
                          href={service.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                            isActive
                              ? "text-white bg-white/[0.04]"
                              : "text-neutral-500 hover:text-white"
                          }`}
                        >
                          {service.name}
                        </Link>
                      );
                    })}
                    <Link
                      href="/services"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:text-white transition-colors"
                    >
                      View All
                      <FiArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                  pathname === "/gallery"
                    ? "text-white bg-white/[0.04]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/before-and-after"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                  pathname === "/before-and-after"
                    ? "text-white bg-white/[0.04]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Before & After
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                  pathname === "/about"
                    ? "text-white bg-white/[0.04]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                About
              </Link>

              {/* Mobile Areas Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileAreasOpen(!isMobileAreasOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    isAreasActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Locations
                  <FiChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isMobileAreasOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isMobileAreasOpen
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 pb-2">
                    {areaLinks.map((area) => {
                      const isActive = pathname === area.path;
                      return (
                        <Link
                          key={area.path}
                          href={area.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                            isActive
                              ? "text-white bg-white/[0.04]"
                              : "text-neutral-500 hover:text-white"
                          }`}
                        >
                          {area.name}, TX
                        </Link>
                      );
                    })}
                    <Link
                      href="/locations"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:text-white transition-colors"
                    >
                      View All
                      <FiArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile bottom CTA */}
            <div className="p-5 border-t border-white/[0.06] flex flex-col gap-3">
              <Link
                href="/free-estimate"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-semibold py-3.5 rounded-xl text-sm transition-all duration-300 hover:bg-red-700"
              >
                Request Free Estimate
              </Link>
              <a
                href="tel:4695837377"
                className="flex items-center justify-center gap-2 w-full bg-white text-neutral-950 font-semibold py-3.5 rounded-xl text-sm transition-all duration-300 hover:bg-neutral-200"
              >
                <FiPhone size={15} />
                Call (469) 583-7377
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
