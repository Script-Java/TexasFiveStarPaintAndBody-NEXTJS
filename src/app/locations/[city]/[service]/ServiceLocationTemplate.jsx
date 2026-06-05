"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiCheck,
  FiArrowUpRight,
  FiArrowRight,
  FiPhone,
  FiMapPin,
  FiChevronDown,
  FiClock,
  FiNavigation,
  FiTool,
  FiDroplet,
  FiStar,
  FiShield,
  FiSun,
  FiRefreshCw,
} from "react-icons/fi";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

import heroImg9 from "../../../assets/img/9.jpg";
import heroImg10 from "../../../assets/img/10.jpg";
import heroImg11 from "../../../assets/img/11.jpg";
import heroImg12 from "../../../assets/img/12.jpg";
import heroImg13 from "../../../assets/img/13.jpg";
import heroImg14 from "../../../assets/img/14.jpg";
import heroImg15 from "../../../assets/img/15.jpg";

const heroImages = {
  "9": heroImg9,
  "10": heroImg10,
  "11": heroImg11,
  "12": heroImg12,
  "13": heroImg13,
  "14": heroImg14,
  "15": heroImg15,
};

const iconMap = {
  tool: FiTool,
  droplet: FiDroplet,
  star: FiStar,
  shield: FiShield,
  sun: FiSun,
  refresh: FiRefreshCw,
};

const allServiceSlugs = [
  { slug: "collision-repair", name: "Collision Repair", iconName: "tool" },
  { slug: "custom-paint-refinishing", name: "Custom Paint & Refinishing", iconName: "droplet" },
  { slug: "auto-restoration", name: "Auto Restoration", iconName: "star" },
  { slug: "paintless-dent-repair", name: "Paintless Dent Repair", iconName: "shield" },
  { slug: "headlight-restoration", name: "Headlight Restoration", iconName: "sun" },
  { slug: "lease-return-reconditioning", name: "Lease Return Reconditioning", iconName: "refresh" },
];

function FAQAccordion({ faq }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="space-y-3">
      {faq.map((item, i) => (
        <div
          key={i}
          className="bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className="font-semibold text-white text-base pr-4">
              {item.q}
            </span>
            <FiChevronDown
              size={18}
              className={`text-gray-500 shrink-0 transition-transform duration-300 ${
                openIdx === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIdx === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 pb-5 text-gray-400 leading-relaxed">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServiceLocationTemplate({ service, location, content }) {
  const Icon = iconMap[service.iconName] || FiTool;
  const heroImage = heroImages[service.heroImage] || heroImg10;
  const googleMapsUrl = "https://maps.app.goo.gl/P4kbxw5D3ktNxKi59";

  // Cross-links: other services in same city → /locations/[city]/[service]
  const otherServicesInCity = allServiceSlugs
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({
      ...s,
      href: `/locations/${location.slug}/${s.slug}`,
    }));

  // Cross-links: same service in nearby cities → /locations/[nearbyCity]/[service]
  const sameServiceNearby = (location.nearbyAreas || []).map((areaSlug) => ({
    slug: areaSlug,
    href: `/locations/${areaSlug}/${service.slug}`,
  }));



  return (
    <>

      <Navbar />

      <div className="bg-neutral-950 text-white pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`${service.name} in ${location.name}, TX - Texas Five Star Paint & Body`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/60 to-black/30" />

          <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-600 p-3 rounded-full shadow-lg shadow-red-900/40">
                <Icon className="text-white" size={24} />
              </div>
              <Link
                href={`/locations/${location.slug}`}
                className="text-red-500 font-semibold uppercase tracking-wider text-sm hover:text-red-400 transition-colors"
              >
                {location.name}, TX
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
              {service.name} in {location.name}, TX
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl">
              {content?.uniqueHook ||
                `Expert ${service.shortName.toLowerCase()} for ${location.name} drivers - just ${location.driveTime} from our five-star rated Garland shop.`}
            </p>
          </div>
        </section>

        {/* Breadcrumb: Home > Areas We Serve > {City} > {Service} */}
        <div className="border-b border-white/5">
          <nav
            aria-label="Breadcrumb"
            className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500 flex items-center gap-2 flex-wrap"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-white transition-colors">Areas We Serve</Link>
            <span>/</span>
            <Link href={`/locations/${location.slug}`} className="hover:text-white transition-colors">
              {location.name}
            </Link>
            <span>/</span>
            <span className="text-gray-300">{service.name}</span>
          </nav>
        </div>

        {/* Unique Content Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Main content */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  Expert {service.shortName} for {location.name} Drivers
                </h2>
                {content?.introP && (
                  <p className="text-gray-400 text-lg leading-relaxed mb-5">
                    {content.introP}
                  </p>
                )}
                {content?.whyLocalP && (
                  <p className="text-gray-400 text-lg leading-relaxed mb-5">
                    {content.whyLocalP}
                  </p>
                )}
                {!content?.introP && (
                  <p className="text-gray-400 text-lg leading-relaxed mb-5">
                    Texas Five Star Paint &amp; Body provides expert {service.name.toLowerCase()} services
                    to drivers throughout {location.name}, TX. Our five-star rated shop at 214 Range Dr
                    in Garland is just {location.driveTime} away, making us one of the most convenient
                    options for {location.name} residents seeking premium auto body work.
                  </p>
                )}
              </div>

              {/* Location Sidebar */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <FiMapPin className="text-red-500" />
                    {location.name} to Our Shop
                  </h3>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start gap-3">
                      <FiClock className="text-red-500 mt-0.5 shrink-0" />
                      <span>Drive time: {location.driveTime}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiNavigation className="text-red-500 mt-0.5 shrink-0" />
                      <span>{location.drivingDirections}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiMapPin className="text-red-500 mt-0.5 shrink-0" />
                      <span>
                        Major roads: {location.majorRoads.slice(0, 3).join(", ")}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="text-red-500 mt-0.5 shrink-0" />
                      <span>All insurance claims handled</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="text-red-500 mt-0.5 shrink-0" />
                      <span>Up to $500 deductible forgiveness</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="tel:4695837377"
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-6 rounded-2xl text-center transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-red-900/30"
                >
                  <FiPhone size={20} />
                  Call for a Free Estimate
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 hover:border-white/20 text-white font-bold py-4 px-6 rounded-2xl text-center transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FiMapPin size={20} />
                  Get Directions from {location.name}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 sm:py-24 bg-neutral-900/50">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="bg-neutral-900 rounded-2xl p-8 border border-white/5 hover:border-red-900/30 transition-all duration-300 group"
                >
                  <div className="bg-red-600/10 text-red-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Our Process
              </h2>
              <p className="mt-4 text-gray-400 text-lg">
                From initial assessment to final inspection, here&apos;s what to
                expect when you bring your vehicle to Texas Five Star.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.processSteps.map((step, i) => (
                <div key={step.title} className="relative">
                  {i < service.processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-red-600/50 to-transparent" />
                  )}
                  <div className="text-center">
                    <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-black shadow-lg shadow-red-900/30">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold mt-4 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us + Testimonial */}
        <section className="py-16 sm:py-24 bg-neutral-900/50">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  Why {location.name} Drivers Choose Texas Five Star
                </h2>
                <ul className="space-y-4">
                  {[
                    "15+ years of experience with 1,000+ satisfied customers",
                    "Perfect 5-star Google rating with 500+ reviews",
                    "Family-owned shop - personal care from owner Mary and the team",
                    "All insurance claims handled - we do the paperwork for you",
                    "Up to $500 deductible forgiveness",
                    "State-of-the-art equipment & certified expert technicians",
                    `Convenient location - just ${location.driveTime} from ${location.name}`,
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-red-600/10 p-1 rounded-full mt-1 shrink-0">
                        <FiCheck className="text-red-500" size={14} />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="text-center">
                  <div className="text-6xl font-black text-red-600 mb-2">5.0</div>
                  <div className="flex items-center justify-center gap-1 text-red-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{"\u2605"}</span>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-6">Google Rating {"\u2022"} 500+ Reviews</p>
                  <blockquote className="text-gray-300 italic text-lg mb-4">
                    &ldquo;{location.testimonial.quote}&rdquo;
                  </blockquote>
                  <p className="text-gray-500 text-sm">
                    {" - "} {location.testimonial.author}, {location.testimonial.context}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <section className="py-16 sm:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-center">
                {service.shortName} FAQ for {location.name} Drivers
              </h2>
              <FAQAccordion faq={service.faq} />
            </div>
          </section>
        )}

        {/* Cross-Links: Other Services in This City (Closed-Loop City Silo) */}
        <section className="py-16 sm:py-24 bg-neutral-900/50">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Other Services in {location.name}, TX
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServicesInCity.map((s) => {
                const SIcon = iconMap[s.iconName] || FiTool;
                return (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className="group bg-neutral-900 rounded-2xl p-6 border border-white/5 hover:border-red-600/30 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="bg-red-600/10 p-3 rounded-xl group-hover:bg-red-600 transition-all duration-300 shrink-0">
                      <SIcon
                        className="text-red-500 group-hover:text-white transition-colors"
                        size={20}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-red-500 transition-colors">
                        {s.name} in {location.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-red-500 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <FiArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cross-Links: Same Service in Nearby Cities */}
        {sameServiceNearby.length > 0 && (
          <section className="py-16 sm:py-24">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                {service.shortName} in Nearby Cities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {sameServiceNearby.map((area) => (
                  <Link
                    key={area.slug}
                    href={area.href}
                    className="group bg-neutral-900 rounded-xl p-4 border border-white/5 hover:border-red-600/30 transition-all duration-300 text-center"
                  >
                    <span className="font-semibold text-white group-hover:text-red-500 transition-colors text-sm">
                      {area.slug
                        .split("-")
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join(" ")}
                      , TX
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-neutral-900/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              {content?.localCTA ||
                `${location.name} residents - contact us today for a free, no-obligation estimate. We'll inspect your vehicle and provide a detailed repair plan.`}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:4695837377"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
              >
                <FiPhone />
                (469) 583-7377
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-8 py-4 text-white/90 hover:text-white hover:border-white/30 transition text-lg"
              >
                Get Directions
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
