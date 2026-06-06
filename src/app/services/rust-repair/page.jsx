import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/4.jpg';

export const metadata = {
  title: 'Rust Repair in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Professional rust repair and oxidation removal in Garland, TX. We cut out rust, patch with fresh metal, and apply anti-rust undercoating to save your vehicle.',
  alternates: { canonical: '/services/rust-repair' },
  openGraph: {
    title: 'Rust Repair in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Professional rust repair and oxidation removal in Garland, TX. We cut out rust, patch with fresh metal, and apply anti-rust undercoating to save your vehicle.',
    url: '/services/rust-repair',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Rust Repair',
  description:
    'Thorough removal of oxidation, metal patching, and preventative sealing to stop rust from spreading and restore the structural integrity of your vehicle.',
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

export default function RustRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Rust Repair in Garland, TX"
        tagline="Stopping oxidation in its tracks to save your vehicle's body and structural integrity."
        description={{
          heading: 'Permanent Solutions for Automotive Rust',
          paragraphs: [
            'Rust is a vehicle’s worst enemy. What starts as a small bubble under the paint or a neglected rock chip can rapidly spread like a cancer, compromising the structural integrity of your car and drastically reducing its value. At Texas Five Star Paint & Body, we specialize in comprehensive rust repair that completely eliminates oxidation and prevents it from returning.',
            'Unlike amateur repairs that simply cover up rust with body filler—only for it to bubble back up months later—our technicians perform true metal restoration. We cut out the diseased metal entirely, fabricate and weld in fresh steel patches, and meticulously shape the area back to its factory contours. This ensures a permanent, structurally sound repair.',
            'Whether you have surface rust on a classic restoration project or severe rot on the rocker panels of your daily driver, our Garland-based team has the metalworking expertise and specialized sealing products required to conquer it. We finish every repair with an anti-rust undercoating and perfectly matched paint, protecting your investment for years to come.'
          ],
        }}
        heroImage={heroImage}
        iconName="alertTriangle"
        features={[
          {
            title: 'Oxidation Removal',
            description:
              'We use media blasting, grinding, and chemical converters to aggressively strip away every trace of surface rust and deep-seated oxidation down to bare, clean metal.',
          },
          {
            title: 'Metal Fabrication & Patching',
            description:
              'For severe rust-through, we completely excise the rusted sections and seamlessly weld in custom-fabricated steel patches, restoring the original strength of the panel.',
          },
          {
            title: 'Anti-Rust Undercoating',
            description:
              'After repairs are made, we apply specialized rust-inhibiting epoxy primers and durable undercoatings to seal out moisture and salt, ensuring the rust does not return.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Assessment & Excision',
            description:
              'We inspect the vehicle to find the full extent of the rust, then physically cut away all compromised metal until only clean, solid steel remains.',
          },
          {
            step: 2,
            title: 'Welding & Fabrication',
            description:
              'New sheet metal is cut, shaped, and precision-welded into place, ensuring it perfectly matches the original contours of the vehicle.',
          },
          {
            step: 3,
            title: 'Sealing & Priming',
            description:
              'The new metal is ground smooth and coated with an anti-corrosive epoxy primer, sealing the repair against future moisture intrusion.',
          },
          {
            step: 4,
            title: 'Paint & Finish',
            description:
              'We apply body-color paint and clear coat, blending it flawlessly into the surrounding areas for an invisible restoration.',
          },
        ]}
        relatedServices={[
          {
            title: 'Auto Restoration',
            slug: 'auto-restoration',
            iconName: 'star',
            shortDesc: 'Frame-off and rotisserie restorations for classic cars.',
          },
          {
            title: 'Custom Paint & Refinishing',
            slug: 'custom-paint-refinishing',
            iconName: 'droplet',
            shortDesc: 'Factory color matching for seamless repairs.',
          },
          {
            title: 'Collision Repair',
            slug: 'collision-repair',
            iconName: 'tool',
            shortDesc: 'Major structural repairs and panel replacement.',
          },
        ]}
      />
    </>
  );
}
