import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/12.jpg';

export const metadata = {
  title: 'Custom Paint & Refinishing in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Custom auto paint & refinishing in Garland, TX. Computerized color matching, candy & pearl finishes, clear coat restoration. PPG & Axalta materials. Free quotes.',
  alternates: { canonical: '/services/custom-paint-refinishing' },
  openGraph: {
    title: 'Custom Paint & Refinishing in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Custom auto paint & refinishing in Garland, TX. Computerized color matching, candy & pearl finishes, clear coat restoration with premium materials.',
    url: '/services/custom-paint-refinishing',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Paint & Refinishing',
  description:
    'Professional custom auto paint and refinishing services in Garland, TX including computerized color matching, candy and pearl finishes, paint correction, and clear coat restoration using PPG and Axalta premium materials.',
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
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Garland, TX' },
    { '@type': 'Place', name: 'Dallas-Fort Worth Metroplex' },
  ],
};

export default function CustomPaintRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Custom Paint & Refinishing in Garland, TX"
        tagline="From flawless factory matches to show-stopping custom finishes - your vision, expertly applied."
        description={{
          heading: 'Premium Auto Paint & Refinishing Services in Garland',
          paragraphs: [
            'Texas Five Star Paint & Body delivers custom paint and refinishing services in Garland, TX that transform everyday vehicles into head-turners and restore weathered finishes to showroom brilliance. Our climate-controlled downdraft spray booths and computerized color-matching spectrophotometers ensure every coat of paint - whether a factory-exact repair or a full custom respray - goes on perfectly smooth, free of dust, orange peel, and color variance. We exclusively use PPG and Axalta basecoat–clearcoat systems, the same premium waterborne and solvent-borne materials trusted by OEM manufacturers and championship-winning custom shops across the country.',
            'Whether you want a deep candy apple red, a luminous three-stage pearl white, a satin matte finish, or simply need to restore your vehicle\'s original color after years of Texas sun exposure, our painters have the skill and technology to deliver stunning results. We offer complete surface preparation including chemical stripping, media blasting, epoxy priming, and high-build primer-surfacing to create a perfectly straight foundation before any color is applied. Every stage is block-sanded by hand to eliminate imperfections, because the quality of a paint job is only as good as what\'s underneath it.',
            'Drivers across the DFW metroplex - from Garland, Mesquite, and Plano to Dallas, Fort Worth, and beyond - bring their daily drivers, show cars, and classic vehicles to our 214 Range Dr facility for refinishing work that rivals factory output. We stand behind every paint job with a written warranty, and our transparent process keeps you informed from color selection through final buffing and sealant options.',
          ],
        }}
        heroImage={heroImage}
        iconName="droplet"
        features={[
          {
            title: 'Factory Color Matching',
            description:
              'Our computerized spectrophotometer reads your vehicle\'s existing paint and cross-references it against thousands of OEM formulas to produce an exact color match - even on faded, weathered, or multi-toned panels. We spray test panels and compare under daylight, fluorescent, and LED lighting to guarantee an invisible blend. This precision-matching process is essential for insurance repairs, partial refinishing, and spot corrections where the new paint must disappear seamlessly into the original finish.',
          },
          {
            title: 'Custom Colors & Finishes',
            description:
              'From deep candy coats and multi-stage chameleon pearls to flat satin mattes and high-gloss metallics, our custom paint services let you define your vehicle\'s personality. We mix custom tints in-house using PPG and Axalta mixing banks, giving you access to virtually unlimited color options and specialty effects including flake, ghost graphics, and two-tone designs. Each custom finish is sealed under multiple layers of premium clearcoat for UV protection, chip resistance, and lasting depth of shine that turns heads at every car meet in the DFW area.',
          },
          {
            title: 'Paint Correction & Polishing',
            description:
              'Years of automatic car washes, road debris, and harsh Texas sunlight take a toll on your vehicle\'s clearcoat, leaving behind swirl marks, water spots, oxidation, and micro-scratches. Our paint correction service uses a multi-stage machine polishing process - from heavy cutting compounds to ultra-fine finishing polishes - to remove defects and restore optical clarity to your finish. We finish with a protective sealant application that shields the corrected surface and keeps your paint looking freshly detailed for months to come.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Color Consultation',
            description:
              'We discuss your vision, scan existing paint, and present color chip samples or custom mix options for your approval.',
          },
          {
            step: 2,
            title: 'Surface Preparation',
            description:
              'Panels are stripped, primed, and block-sanded to create a flawless foundation free of dents, rust, and imperfections.',
          },
          {
            step: 3,
            title: 'Paint Application',
            description:
              'Basecoat and clearcoat are applied in our downdraft spray booths under controlled temperature and humidity for a perfect finish.',
          },
          {
            step: 4,
            title: 'Buffing & Protection',
            description:
              'The cured finish is wet-sanded, machine-polished to a mirror gloss, and sealed with protective coating for long-lasting shine.',
          },
        ]}
        relatedServices={[
          {
            title: 'Collision Repair',
            slug: 'collision-repair',
            iconName: 'tool',
            shortDesc:
              'Structural and cosmetic collision repair that pairs seamlessly with our refinishing services.',
          },
          {
            title: 'Auto Restoration',
            slug: 'auto-restoration',
            iconName: 'star',
            shortDesc:
              'Complete classic and muscle car restorations with period-correct and custom paint options.',
          },
          {
            title: 'Scratch & Paint Chip Repair',
            slug: 'scratch-paint-chip-repair',
            iconName: 'edit2',
            shortDesc:
              'Eliminate unsightly scratches and rock chips with precision color matching.',
          },
        ]}
      />
    </>
  );
}
