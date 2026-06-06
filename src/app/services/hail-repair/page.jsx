import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/6.jpg';

export const metadata = {
  title: 'Hail Repair in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Comprehensive hail damage repair in Garland, TX. We use Paintless Dent Repair (PDR) and traditional bodywork to erase storm damage quickly and flawlessly.',
  alternates: { canonical: '/services/hail-repair' },
  openGraph: {
    title: 'Hail Repair in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Comprehensive hail damage repair in Garland, TX. We use Paintless Dent Repair (PDR) and traditional bodywork to erase storm damage quickly and flawlessly.',
    url: '/services/hail-repair',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hail Repair',
  description:
    'Comprehensive hail damage restoration utilizing a mix of Paintless Dent Repair (PDR) and traditional bodywork for severe impacts. Fast turnaround to get you back on the road.',
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

export default function HailRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Hail Repair in Garland, TX"
        tagline="Erase the aftermath of Texas storms with our comprehensive hail restoration services."
        description={{
          heading: 'Fast, Flawless Recovery from Severe Storm Damage',
          paragraphs: [
            'When severe weather strikes the Dallas-Fort Worth metroplex, a sudden hailstorm can leave your vehicle looking like a golf ball in a matter of minutes. Dealing with hundreds of dents across your hood, roof, and trunk is overwhelming, but Texas Five Star Paint & Body is here to make the recovery process smooth and painless. Our Garland-based team specializes in high-volume, high-quality hail damage repair that restores your vehicle to its pre-storm glory.',
            'We employ a hybrid approach to hail repair. For the vast majority of hail dents, our master technicians utilize Paintless Dent Repair (PDR), a technique that gently massages the metal back into shape from the inside out, preserving your factory paint and clear coat. However, when hail is large enough to crack the paint or cause severe structural creasing, we seamlessly transition to traditional auto body repair, panel replacement, and custom refinishing.',
            'Because hail damage is considered a comprehensive insurance claim, it typically will not raise your insurance rates. We work directly with all major insurance companies to expedite your claim, handle the complex estimating process, and offer deductible assistance so you can get your car fixed quickly without breaking the bank.'
          ],
        }}
        heroImage={heroImage}
        iconName="cloudRain"
        features={[
          {
            title: 'Paintless Dent Repair (PDR)',
            description:
              'Our primary method for hail damage. PDR is faster, more affordable, and environmentally friendly, perfectly removing dozens or hundreds of dents without the need for fillers or new paint.',
          },
          {
            title: 'Panel Replacement & Bodywork',
            description:
              'When hailstones are large enough to shatter windshields and severely crush hoods or roofs, we perform traditional collision-style repairs, replacing panels and applying factory-matched paint.',
          },
          {
            title: 'Storm Damage Specialists',
            description:
              'We are geared up for storm season. Our team knows how to efficiently process catastrophic hail claims with insurance companies, ensuring no dent goes unaccounted for in your supplement.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Specialized Hail Inspection',
            description:
              'We bring your vehicle into our specialized lighting bay to circle and document every single hail strike for the insurance adjuster.',
          },
          {
            step: 2,
            title: 'Claim & Supplement Handling',
            description:
              'We submit the detailed matrix of damage to your insurance provider and negotiate the necessary supplements for a complete repair.',
          },
          {
            step: 3,
            title: 'Hybrid Repair Execution',
            description:
              'Our technicians attack the damage, using PDR for intact paint and traditional bodywork/painting for severe, compromised impacts.',
          },
          {
            step: 4,
            title: 'Showroom Delivery',
            description:
              'After a final quality check under our inspection lights, your vehicle is washed, polished, and returned to you looking flawless.',
          },
        ]}
        relatedServices={[
          {
            title: 'Paintless Dent Repair',
            slug: 'paintless-dent-repair',
            iconName: 'shield',
            shortDesc: 'The core technique used to fix most hail damage.',
          },
          {
            title: 'Auto Insurance Claim Repair',
            slug: 'auto-insurance-claim-repair',
            iconName: 'fileText',
            shortDesc: 'We handle the insurance paperwork so you don\'t have to.',
          },
          {
            title: 'Collision Repair',
            slug: 'collision-repair',
            iconName: 'tool',
            shortDesc: 'For severe storm damage requiring panel replacement.',
          },
        ]}
      />
    </>
  );
}
