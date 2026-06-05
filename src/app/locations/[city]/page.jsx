import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FiMapPin,
  FiArrowRight,
  FiPhone,
  FiArrowUpRight,
  FiClock,
  FiCheck,
  FiNavigation,
  FiTool,
  FiDroplet,
  FiStar,
  FiShield,
  FiSun,
  FiRefreshCw,
} from "react-icons/fi";
import { locations, getLocationBySlug } from "@/data/locations";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const serviceCards = [
  {
    slug: "collision-repair",
    name: "Collision Repair",
    icon: FiTool,
    description:
      "Frame straightening, panel replacement, and bumper repair. We restore your vehicle to pre-accident condition with expert precision.",
  },
  {
    slug: "custom-paint-refinishing",
    name: "Custom Paint & Refinishing",
    icon: FiDroplet,
    description:
      "Factory color matching, candy & pearl finishes, and paint correction. Premium materials for a stunning, durable finish.",
  },
  {
    slug: "auto-restoration",
    name: "Auto Restoration",
    icon: FiStar,
    description:
      "Classic & muscle car restoration, frame-off builds, and period-correct finishing. We bring vehicles back to their former glory.",
  },
  {
    slug: "paintless-dent-repair",
    name: "Paintless Dent Repair",
    icon: FiShield,
    description:
      "Hail damage specialists. Minor dent & ding removal that preserves your factory finish - often completed same-day.",
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    icon: FiSun,
    description:
      "Multi-stage wet sanding removes oxidation and yellowing. Sealed with UV protection for crystal-clear headlights.",
  },
  {
    slug: "lease-return-reconditioning",
    name: "Lease Return Reconditioning",
    icon: FiRefreshCw,
    description:
      "Pre-inspection assessment, scratch & scuff repair, and bumper reconditioning. Avoid costly dealership charges.",
  },
];

/**
 * Generate static params for all 12 city hub pages.
 */
export function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

/**
 * Dynamic metadata per city hub.
 */
export async function generateMetadata({ params }) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return {};

  const title = `Premium Auto Body & Paint Services in ${location.name}, TX | Texas Five Star`;
  const description = `Expert collision repair, custom paint, dent repair, auto restoration & more for ${location.name}, TX drivers. 5-star rated, family-owned shop just ${location.driveTime} away. Free estimates - call (469) 583-7377.`;

  return {
    title,
    description,
    alternates: { canonical: `/locations/${city}` },
    openGraph: { title, description, url: `/locations/${city}` },
  };
}

export default async function CityHubPage({ params }) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return notFound();

  const googleMapsUrl = "https://maps.app.goo.gl/P4kbxw5D3ktNxKi59";

  // Nearby city hubs
  const nearbyCities = (location.nearbyAreas || []).map((slug) => {
    const loc = getLocationBySlug(slug);
    return loc ? { slug, name: loc.name } : { slug, name: slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") };
  });

  // JSON-LD schemas for city hub
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://texasfivestarpaintandbody.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas We Serve",
        item: "https://texasfivestarpaintandbody.com/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: "Texas Five Star Paint & Body",
    telephone: "(469) 583-7377",
    url: "https://texasfivestarpaintandbody.com",
    image: [
      "https://texasfivestarpaintandbody.com/og-image.jpg",
      "https://texasfivestarpaintandbody.com/shop-exterior.jpg"
    ],
    logo: "https://texasfivestarpaintandbody.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "214 Range Dr",
      addressLocality: "Garland",
      addressRegion: "TX",
      postalCode: "75040",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9211,
      longitude: -96.6328,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Kaela O",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "I wish I could give more than 5 stars! The best car related experience of my life! The owners were SO kind, so quick, and were even able to fix the existing bumper flawlessly!",
    },
    areaServed: {
      "@type": "City",
      name: `${location.name}, TX`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <div className="bg-neutral-950 text-white pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-gray-500 flex items-center gap-2 flex-wrap mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-white transition-colors">Areas We Serve</Link>
              <span>/</span>
              <span className="text-gray-300">{location.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 font-semibold uppercase tracking-wider text-sm px-4 py-2 rounded-full mb-6">
                  <FiMapPin size={16} />
                  {location.name}, TX
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
                  Premium Auto Body & Paint Services in {location.name}, TX
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl">
                  Texas Five Star Paint & Body proudly serves {location.name} drivers from our five-star rated
                  Garland shop - just {location.driveTime} away. Explore our full range of services below.
                </p>
              </div>

              {/* Location Info Card */}
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FiMapPin className="text-red-500" />
                  Getting Here from {location.name}
                </h2>
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
                    <FiCheck className="text-red-500 mt-0.5 shrink-0" />
                    <span>All insurance claims handled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="text-red-500 mt-0.5 shrink-0" />
                    <span>Up to $500 deductible forgiveness</span>
                  </li>
                </ul>
                <a
                  href="tel:4695837377"
                  className="mt-5 bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-5 rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-red-900/30 text-sm"
                >
                  <FiPhone size={16} />
                  (469) 583-7377
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Card Grid - The Core of the City Hub */}
        <section className="py-16 sm:py-24 bg-neutral-900/50">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center">
              Our Services in {location.name}
            </h2>
            <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
              Click any service to learn more about what we offer specifically for {location.name} drivers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCards.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link
                    key={svc.slug}
                    href={`/locations/${location.slug}/${svc.slug}`}
                    className="group backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-red-600/40 transition-all duration-300 hover:bg-white/[0.07]"
                  >
                    <div className="bg-red-600/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-red-600 transition-all duration-300">
                      <Icon
                        className="text-red-500 group-hover:text-white transition-colors"
                        size={28}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                      {svc.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                      {svc.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-red-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <FiArrowRight size={16} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-10 border border-white/10">
              <div className="text-5xl font-black text-red-600 mb-2">5.0</div>
              <div className="flex items-center justify-center gap-1 text-red-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{"\u2605"}</span>
                ))}
              </div>
              <blockquote className="text-gray-300 italic text-xl mb-4">
                &ldquo;{location.testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-gray-500">
                {" - "} {location.testimonial.author}, {location.testimonial.context}
              </p>
            </div>
          </div>
        </section>

        {/* Local Info */}
        <section className="py-16 sm:py-24 bg-neutral-900/50">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-900 rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold mb-4">Major Roads</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {location.majorRoads.map((road) => (
                    <li key={road} className="flex items-center gap-2">
                      <FiNavigation className="text-red-500 shrink-0" size={12} />
                      {road}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold mb-4">Neighborhoods</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {location.neighborhoods.map((n) => (
                    <li key={n} className="flex items-center gap-2">
                      <FiMapPin className="text-red-500 shrink-0" size={12} />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold mb-4">Local Landmarks</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {location.landmarks.map((l) => (
                    <li key={l} className="flex items-center gap-2">
                      <FiStar className="text-red-500 shrink-0" size={12} />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby City Hubs */}
        {nearbyCities.length > 0 && (
          <section className="py-16 sm:py-24">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Nearby Areas We Serve
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.slug}`}
                    className="group bg-neutral-900 rounded-xl p-4 border border-white/5 hover:border-red-600/30 transition-all duration-300 text-center"
                  >
                    <span className="font-semibold text-white group-hover:text-red-500 transition-colors text-sm">
                      {city.name}, TX
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-neutral-900/50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              {location.name} drivers &mdash; contact us today for a free, no-obligation estimate.
              We&apos;ll inspect your vehicle and provide a detailed repair plan.
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
