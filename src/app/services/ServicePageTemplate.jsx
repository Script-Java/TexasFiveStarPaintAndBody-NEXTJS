"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiCheck,
  FiArrowUpRight,
  FiArrowRight,
  FiPhone,
  FiTool,
  FiDroplet,
  FiStar,
  FiShield,
  FiSun,
  FiRefreshCw,
} from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const iconMap = {
  tool: FiTool,
  droplet: FiDroplet,
  star: FiStar,
  shield: FiShield,
  sun: FiSun,
  refresh: FiRefreshCw,
};

export default function ServicePageTemplate({
  title,
  tagline,
  description,
  heroImage,
  iconName,
  features,
  processSteps,
  relatedServices,
  faq,
}) {
  const Icon = iconMap[iconName] || FiTool;
  const googleMapsUrl = "https://maps.app.goo.gl/P4kbxw5D3ktNxKi59";

  const jsonLdArray = [
    {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: tagline,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Texas Five Star Paint & Body',
      telephone: '(469) 583-7377',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '214 Range Dr',
        addressLocality: 'Garland',
        addressRegion: 'TX',
        postalCode: '75040',
        addressCountry: 'US',
      }
    }
    }
  ];

  if (processSteps && processSteps.length > 0) {
    jsonLdArray.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: `How We Perform ${title}`,
      step: processSteps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        text: step.description
      }))
    });
  }

  if (faq && faq.length > 0) {
    jsonLdArray.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArray) }}
      />
      <Navbar />

      <div className="bg-neutral-950 text-white pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`${title} service at Texas Five Star Paint & Body`}
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
                href="/services"
                className="text-red-500 font-semibold uppercase tracking-wider text-sm hover:text-red-400 transition-colors"
              >
                Our Services
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl">
              {tagline}
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="border-b border-white/5">
          <nav
            aria-label="Breadcrumb"
            className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500 flex items-center gap-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-gray-300">{title}</span>
          </nav>
        </div>

        {/* Overview Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Main content */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  {description.heading}
                </h2>
                {description.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-gray-400 text-lg leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="bg-neutral-900 rounded-2xl p-6 border border-white/5">
                  <h3 className="font-bold text-lg mb-4">Service Highlights</h3>
                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li key={f.title} className="flex items-start gap-3">
                        <FiCheck className="text-red-500 mt-1 shrink-0" />
                        <span className="text-gray-300">{f.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="tel:4695837377"
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-6 rounded-2xl text-center transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-red-900/30"
                >
                  <FiPhone size={20} />
                  Call for a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Details */}
        <section className="py-16 sm:py-24 bg-neutral-900/50">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
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
              {processSteps.map((step, i) => (
                <div key={step.title} className="relative">
                  {i < processSteps.length - 1 && (
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

        {/* Related Services */}
        {relatedServices && relatedServices.length > 0 && (
          <section className="py-16 sm:py-24 bg-neutral-900/50">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight mb-12">
                Related Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((service) => {
                  const RelIcon = iconMap[service.iconName] || FiTool;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group bg-neutral-900 rounded-2xl p-6 border border-white/5 hover:border-red-600/30 transition-all duration-300 flex items-start gap-4"
                    >
                      <div className="bg-red-600/10 p-3 rounded-xl group-hover:bg-red-600 transition-all duration-300 shrink-0">
                        <RelIcon
                          className="text-red-500 group-hover:text-white transition-colors"
                          size={20}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white group-hover:text-red-500 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          {service.shortDesc}
                        </p>
                        <span className="inline-flex items-center gap-1 text-red-500 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more <FiArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faq && faq.length > 0 && (
          <section className="py-16 sm:py-24 bg-neutral-900/30 border-t border-white/5">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faq.map((item, index) => (
                  <div key={index} className="bg-neutral-900 rounded-xl p-6 border border-white/5">
                    <h3 className="font-bold text-lg text-white mb-2">{item.question}</h3>
                    <p className="text-gray-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Expert Attribution */}
        <section className="py-12 bg-neutral-950 border-t border-white/5">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start sm:items-center gap-4 bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-white/5 shadow-xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                <FiStar className="text-red-500 text-2xl sm:text-3xl" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg sm:text-xl">Expertly Reviewed</h3>
                <p className="text-gray-400 text-sm sm:text-base mt-1 leading-relaxed">
                  This service information has been reviewed and verified by the certified estimating and technical team at Texas Five Star Paint & Body. With over 15 years of hands-on experience and a perfect 5-star Google rating, we guarantee transparent processes and dealership-quality results on every job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation estimate. We&apos;ll
              inspect your vehicle and provide a detailed plan to get it looking
              its best.
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
