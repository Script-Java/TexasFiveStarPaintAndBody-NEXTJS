import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/1.jpg';

export const metadata = {
  title: 'Scratch & Paint Chip Repair in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Expert scratch and paint chip repair in Garland, TX. We eliminate unsightly blemishes with precise color matching and clear coat blending. Free estimates.',
  alternates: { canonical: '/services/scratch-paint-chip-repair' },
  openGraph: {
    title: 'Scratch & Paint Chip Repair in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Expert scratch and paint chip repair in Garland, TX. We eliminate unsightly blemishes with precise color matching and clear coat blending. Free estimates.',
    url: '/services/scratch-paint-chip-repair',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Scratch & Paint Chip Repair',
  description:
    'Professional touch-ups and spot blending to eliminate unsightly scratches and rock chips before they lead to rust, utilizing computerized color matching.',
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

export default function ScratchPaintChipRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Scratch & Paint Chip Repair in Garland, TX"
        tagline="Flawless touch-ups and blending that erase the damage and protect your vehicle from rust."
        description={{
          heading: 'Erase Unsightly Scratches and Chips',
          paragraphs: [
            'Daily driving on DFW highways often results in unavoidable damage from flying rocks, debris, and tight parking lots. At Texas Five Star Paint & Body, our scratch and paint chip repair service in Garland, TX is designed to tackle these common blemishes before they evolve into costly rust problems. We understand that even a small scratch can diminish your vehicle’s pristine appearance and overall value.',
            'Using advanced computerized color matching technology, our team, backed by 500+ 5-star reviews, creates custom paint mixtures to perfectly blend with your car’s existing finish. Whether it’s a superficial clear coat scratch or a deep gouge that has penetrated down to the bare metal, we carefully prep the area, apply the exact color match, and finish with a durable clear coat to ensure a seamless, invisible repair.',
            'Located conveniently on Range Dr, we serve customers across Garland, Richardson, Plano, and beyond. Stop letting minor imperfections detract from your ride—let Texas Five Star restore your vehicle to a showroom shine quickly and affordably.'
          ],
        }}
        heroImage={heroImage}
        iconName="edit2"
        features={[
          {
            title: 'Color-Matched Touch-Ups',
            description:
              'Our computerized color-matching system reads your vehicle’s exact hue, factoring in natural fading, to mix the precise paint required for a flawless, invisible touch-up.',
          },
          {
            title: 'Clear Coat Blending',
            description:
              'We don’t just paint the scratch; we carefully blend the new clear coat into the surrounding area, then buff and polish it to ensure a completely seamless transition without harsh lines.',
          },
          {
            title: 'Rust Prevention',
            description:
              'Deep chips expose bare metal to moisture and the elements. We seal these vulnerable spots immediately, stopping oxidation in its tracks and preventing serious rust damage down the road.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Damage Inspection',
            description:
              'We evaluate the depth and severity of the scratch or chip to determine the most effective repair method.',
          },
          {
            step: 2,
            title: 'Surface Preparation',
            description:
              'The damaged area is thoroughly cleaned, sanded, and primed to create the optimal bonding surface for the new paint.',
          },
          {
            step: 3,
            title: 'Precision Color Match',
            description:
              'Using our digital spectrometer, we mix a custom batch of paint that matches your vehicle’s exact factory color.',
          },
          {
            step: 4,
            title: 'Paint & Polish',
            description:
              'We apply the color and clear coat, then meticulously polish the area to blend seamlessly with the surrounding finish.',
          },
        ]}
        relatedServices={[
          {
            title: 'Custom Paint & Refinishing',
            slug: 'custom-paint-refinishing',
            iconName: 'droplet',
            shortDesc: 'Factory color matching and custom finishes.',
          },
          {
            title: 'Bumper Repair',
            slug: 'bumper-repair',
            iconName: 'maximize',
            shortDesc: 'Expert bumper reshaping, crack welding, and refinishing.',
          },
          {
            title: 'Paintless Dent Repair',
            slug: 'paintless-dent-repair',
            iconName: 'shield',
            shortDesc: 'Remove minor dents and dings without repainting.',
          },
        ]}
      />
    </>
  );
}
