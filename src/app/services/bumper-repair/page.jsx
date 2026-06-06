import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/2.jpg';

export const metadata = {
  title: 'Bumper Repair in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Expert bumper repair and refinishing in Garland, TX. We reshape dents, weld cracks, and restore your bumper to factory condition. Free estimates.',
  alternates: { canonical: '/services/bumper-repair' },
  openGraph: {
    title: 'Bumper Repair in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Expert bumper repair and refinishing in Garland, TX. We reshape dents, weld cracks, and restore your bumper to factory condition. Free estimates.',
    url: '/services/bumper-repair',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bumper Repair',
  description:
    'Expert bumper reshaping, plastic crack welding, and refinishing. We restore structural integrity and factory appearance without full replacement when possible.',
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

export default function BumperRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Bumper Repair in Garland, TX"
        tagline="Restoring your bumper's shape, safety, and seamless factory look."
        description={{
          heading: 'Expert Plastic Welding and Bumper Refinishing',
          paragraphs: [
            'Your bumper is the first line of defense in a collision. Unfortunately, this means it’s highly susceptible to scuffs, cracks, and dents from parking lot mishaps and minor fender benders. At Texas Five Star Paint & Body in Garland, TX, our specialized bumper repair services aim to restore the structural integrity and aesthetic appeal of your bumper without the high cost of a complete replacement.',
            'Modern bumpers are complex systems of flexible plastics, sensors, and structural absorbers. Backed by 500+ 5-star reviews, our team has the expertise to reshape dented plastics using controlled heat, weld structural cracks, and properly repair tears. We follow all OEM guidelines to ensure your bumper will continue to perform as designed in the event of another impact.',
            'After the structural repairs are complete, we use computerized color matching to refinish the bumper, flawlessly blending the paint into your vehicle’s existing finish. Don’t let a damaged bumper detract from your car’s appearance—trust our top-rated team to make it look like it never happened.'
          ],
        }}
        heroImage={heroImage}
        iconName="maximize"
        features={[
          {
            title: 'Plastic Welding',
            description:
              'We use advanced plastic welding techniques to permanently fuse cracked or torn bumper covers back together, restoring their original strength and flexibility.',
          },
          {
            title: 'Dent Reshaping',
            description:
              'By applying controlled, specialized heat treatments, we can gently massage and reshape indented plastic bumpers back to their exact factory contours.',
          },
          {
            title: 'Factory Color Refinishing',
            description:
              'Every repaired bumper is primed, painted with precision-matched colors, and sealed with a durable clear coat in our climate-controlled spray booths for an undetectable finish.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Thorough Assessment',
            description:
              'We inspect the bumper cover, underlying impact absorbers, and any embedded sensors to determine if repair or replacement is the safer option.',
          },
          {
            step: 2,
            title: 'Structural Repair',
            description:
              'Dents are reshaped and cracks are professionally welded or bonded using industry-approved plastic repair methods.',
          },
          {
            step: 3,
            title: 'Surface Prep & Paint',
            description:
              'The repaired area is sanded smooth, primed, and painted using our computerized color-matching system.',
          },
          {
            step: 4,
            title: 'Reassembly & Polish',
            description:
              'The bumper is reinstalled with perfect alignment, and the finish is polished to match the rest of your vehicle’s shine.',
          },
        ]}
        relatedServices={[
          {
            title: 'Collision Repair',
            slug: 'collision-repair',
            iconName: 'tool',
            shortDesc: 'Frame straightening, panel replacement, and major bodywork.',
          },
          {
            title: 'ADAS Calibration',
            slug: 'adas-calibration',
            iconName: 'target',
            shortDesc: 'Recalibrating sensors often located inside the bumper.',
          },
          {
            title: 'Scratch & Paint Chip Repair',
            slug: 'scratch-paint-chip-repair',
            iconName: 'edit2',
            shortDesc: 'Professional touch-ups to eliminate minor blemishes.',
          },
        ]}
      />
    </>
  );
}
