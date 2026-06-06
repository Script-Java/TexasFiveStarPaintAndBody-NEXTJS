import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/11.jpg';

export const metadata = {
  title: 'Collision Repair in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Expert collision repair in Garland, TX. Precision frame straightening, panel replacement & bumper repair by technicians backed by 500+ 5-star reviews. Insurance claims welcome. Free estimates.',
  alternates: { canonical: '/services/collision-repair' },
  openGraph: {
    title: 'Collision Repair in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Expert collision repair in Garland, TX. Precision frame straightening, panel replacement & bumper repair by technicians backed by 500+ 5-star reviews. Insurance claims welcome.',
    url: '/services/collision-repair',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Collision Repair',
  description:
    'Professional collision repair services in Garland, TX including frame straightening, panel replacement, and bumper & fender repair using certified expert techniques and OEM parts.',
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

export default function CollisionRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Collision Repair in Garland, TX"
        tagline="Restoring structural integrity and factory finish after every collision - trusted across the DFW metroplex."
        description={{
          heading: 'Complete Collision Damage Repair You Can Count On',
          paragraphs: [
            'At Texas Five Star Paint & Body, our collision repair services in Garland, TX are built on decades of hands-on experience restoring vehicles to pre-accident condition. Whether you\'ve been involved in a minor fender bender on I-635 or a major multi-vehicle collision on the George Bush Turnpike, our technicians, backed by 500+ 5-star reviews, use advanced measuring systems and computerized frame analysis to identify every point of structural damage. We work with all insurance providers to streamline your claims process, handling the paperwork so you can focus on getting back on the road safely.',
            'Structural integrity is the foundation of safe driving, and our shop is fully equipped with state-of-the-art frame straightening machines and unibody repair systems used by leading OEM manufacturers. Every collision repair begins with a thorough damage assessment, including a detailed inspection of crumple zones, suspension mounting points, and structural rails that may not be visible to the naked eye. We use only OEM and OEM-equivalent parts to maintain your vehicle\'s factory crash protection ratings and preserve its resale value throughout the DFW area.',
            'From Garland and Richardson to Rowlett, Sachse, and the broader Dallas–Fort Worth metroplex, drivers trust Texas Five Star for honest estimates and meticulous collision work. Our 214 Range Dr facility features dedicated paint booths, precision welding stations, and climate-controlled curing areas that allow us to deliver seamless, factory-quality finishes on every repair - guaranteed.',
          ],
        }}
        heroImage={heroImage}
        iconName="tool"
        features={[
          {
            title: 'Frame Straightening',
            description:
              'Our computerized frame straightening equipment restores your vehicle\'s unibody or body-on-frame structure to exact factory specifications. Using multi-point laser measuring systems, we identify even the smallest deviations in alignment caused by collision impact. This process is critical for maintaining proper suspension geometry, steering response, and overall crash safety - ensuring your car drives straight and handles predictably long after the repair is complete.',
          },
          {
            title: 'Panel Replacement',
            description:
              'When body panels are creased, torn, or structurally compromised beyond repair, our technicians perform precision panel replacement using OEM and certified aftermarket components. Each panel is carefully fitted, welded or bonded into place, and sealed against moisture intrusion to prevent future corrosion. We finish every replacement with factory-matched paint applied in our downdraft spray booths, delivering an invisible repair that maintains your vehicle\'s appearance and value.',
          },
          {
            title: 'Bumper & Fender Repair',
            description:
              'Bumpers and fenders absorb the brunt of most collisions, and our team specializes in restoring or replacing these critical components efficiently and affordably. We repair cracked plastic bumper covers with structural adhesive bonding, reshape bent steel fenders on our English wheel and planishing hammer stations, and replace energy absorbers and foam impact strips when necessary. Every bumper and fender repair includes color-matched refinishing so your vehicle looks factory-fresh when it leaves our Garland shop.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Damage Assessment',
            description:
              'We perform a comprehensive inspection using laser measuring and diagnostic scanning to uncover all visible and hidden collision damage.',
          },
          {
            step: 2,
            title: 'Insurance Coordination',
            description:
              'Our team works directly with your insurance company, handling estimates, supplements, and approvals so you don\'t have to.',
          },
          {
            step: 3,
            title: 'Expert Repair',
            description:
              'Our expert technicians restore structural integrity with frame straightening, panel work, and OEM-spec component replacement.',
          },
          {
            step: 4,
            title: 'Final Inspection',
            description:
              'Every vehicle undergoes a multi-point quality check including fit, finish, alignment verification, and a test drive before delivery.',
          },
        ]}
        relatedServices={[
          {
            title: 'Custom Paint & Refinishing',
            slug: 'custom-paint-refinishing',
            iconName: 'droplet',
            shortDesc:
              'Factory color matching and custom refinishing to complement your collision repair.',
          },
          {
            title: 'Paintless Dent Repair',
            slug: 'paintless-dent-repair',
            iconName: 'shield',
            shortDesc:
              'Remove minor dents and dings without repainting - fast, affordable, and eco-friendly.',
          },
          {
            title: 'ADAS Calibration',
            slug: 'adas-calibration',
            iconName: 'target',
            shortDesc:
              'Precise recalibration of safety sensors following collision repair.',
          },
        ]}
      />
    </>
  );
}
