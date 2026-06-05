import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://texasfivestarpaintandbody.com'),
  title: {
    default: 'Texas Five Star Paint & Body | Auto Body Repair in Garland, TX',
    template: '%s | Texas Five Star Paint & Body',
  },
  description:
    'Family-owned auto body shop in Garland, TX with a perfect 5-star Google rating. Collision repair, custom paint, dent repair & classic car restoration. Up to $500 deductible forgiveness. Free estimates - (469) 583-7377.',
  keywords: [
    'auto body shop Garland TX',
    'collision repair Garland',
    'custom paint job DFW',
    'paintless dent repair',
    'auto restoration Texas',
    'auto body repair Garland',
    'Texas Five Star Paint and Body',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Texas Five Star Paint & Body | Auto Body Repair in Garland, TX',
    description:
      'Family-owned auto body shop in Garland, TX with a perfect 5-star Google rating. Collision repair, custom paint, dent repair & classic car restoration. Up to $500 deductible forgiveness. Free estimates - (469) 583-7377.',
    url: 'https://texasfivestarpaintandbody.com',
    siteName: 'Texas Five Star Paint & Body',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoRepair'],
  name: 'Texas Five Star Paint & Body',
  description:
    'Family-owned auto body shop in Garland, TX with a perfect 5-star Google rating. Collision repair, custom paint, dent repair & classic car restoration. 15+ years of experience, 1,000+ satisfied customers.',
  url: 'https://texasfivestarpaintandbody.com',
  telephone: '(469) 583-7377',
  image: [
    'https://texasfivestarpaintandbody.com/og-image.jpg',
    'https://texasfivestarpaintandbody.com/shop-exterior.jpg'
  ],
  logo: 'https://texasfivestarpaintandbody.com/logo.png',

  address: {
    '@type': 'PostalAddress',
    streetAddress: '214 Range Dr',
    addressLocality: 'Garland',
    addressRegion: 'TX',
    postalCode: '75040',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.9210903,
    longitude: -96.6327826,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '15:00',
    },
  ],
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Garland' },
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Richardson' },
    { '@type': 'City', name: 'Mesquite' },
    { '@type': 'City', name: 'Rowlett' },
    { '@type': 'City', name: 'Sachse' },
    { '@type': 'City', name: 'Plano' },
    { '@type': 'City', name: 'Murphy' },
    { '@type': 'City', name: 'Wylie' },
    { '@type': 'City', name: 'Sunnyvale' },
    { '@type': 'City', name: 'Rockwall' },
    { '@type': 'City', name: 'Balch Springs' },
    { '@type': 'State', name: 'Texas' },
  ],
  sameAs: [
    'https://www.instagram.com/texas_five_star_paint_and_body/',
    'https://www.facebook.com/profile.php?id=100084145820307',
    'https://www.yelp.com/biz/texas-five-star-paint-and-body-garland',
    'https://maps.app.goo.gl/P4kbxw5D3ktNxKi59',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    ratingCount: '50',
  },
  review: {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: 'Kaela O',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    reviewBody: 'I wish I could give more than 5 stars! The best car related experience of my life! The owners were SO kind, so quick, and were even able to fix the existing bumper flawlessly!',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Auto Body Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Collision Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Paint Jobs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paintless Dent Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Restoration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Frame Straightening' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bumper Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Scratch & Dent Removal' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Insurance Claims Assistance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Headlight Restoration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lease Return Reconditioning' } },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
