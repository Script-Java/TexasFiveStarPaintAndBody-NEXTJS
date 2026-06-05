import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { locations, getLocationBySlug } from "@/data/locations";
import { getContent } from "@/data/service-location-content";
import ServiceLocationTemplate from "./ServiceLocationTemplate";

/**
 * Generate all 72 static pages at build time (6 services × 12 locations).
 */
export function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const location of locations) {
      params.push({
        city: location.slug,
        service: service.slug,
      });
    }
  }
  return params;
}

/**
 * Generate unique metadata for each service × location combination.
 */
export async function generateMetadata({ params }) {
  const { city, service: serviceSlug } = await params;
  const location = getLocationBySlug(city);
  const service = services.find((s) => s.slug === serviceSlug);
  if (!location || !service) return {};

  const content = getContent(service.slug, location.slug);

  const hook =
    content?.uniqueHook ||
    `Trusted ${service.shortName.toLowerCase()} for ${location.name} drivers - just ${location.driveTime} from our shop`;

  const title = service.metaTitleTemplate
    .replace("{service}", service.name)
    .replace("{city}", location.name);

  const description = service.metaDescTemplate
    .replace("{serviceLower}", service.name.toLowerCase())
    .replace("{city}", location.name)
    .replace("{uniqueHook}", hook);

  return {
    title,
    description,
    alternates: { canonical: `/locations/${city}/${serviceSlug}` },
    openGraph: {
      title,
      description,
      url: `/locations/${city}/${serviceSlug}`,
    },
  };
}

/**
 * Build JSON-LD schema: Service + FAQPage + BreadcrumbList
 */
function buildJsonLd(service, location) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${location.name}, TX`,
    description: `Professional ${service.name.toLowerCase()} services for ${location.name}, TX residents. Expert technicians, all insurance accepted, free estimates.`,
    provider: {
      "@type": "LocalBusiness",
      name: "Texas Five Star Paint & Body",
      telephone: "(469) 583-7377",
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
        addressCountry: "US",
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

  const faqSchema =
    service.faq && service.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

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
        item: `https://texasfivestarpaintandbody.com/locations/${location.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: service.name,
      },
    ],
  };

  return [serviceSchema, faqSchema, breadcrumbSchema].filter(Boolean);
}

export default async function ServiceLocationPage({ params }) {
  const { city, service: serviceSlug } = await params;
  const location = getLocationBySlug(city);
  const service = services.find((s) => s.slug === serviceSlug);
  if (!location || !service) return notFound();

  const content = getContent(service.slug, location.slug);
  const jsonLdSchemas = buildJsonLd(service, location);

  return (
    <>
      {jsonLdSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServiceLocationTemplate
        service={service}
        location={location}
        content={content}
      />
    </>
  );
}
