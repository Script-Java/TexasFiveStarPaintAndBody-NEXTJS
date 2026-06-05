import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/9.jpg';

export const metadata = {
  title: 'Auto Restoration in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Classic & muscle car restoration in Garland, TX. Frame-off rotisserie builds, rust repair, sheet metal fabrication & concours finishing. Chevy, Ford & Mopar.',
  alternates: { canonical: '/services/auto-restoration' },
  openGraph: {
    title: 'Auto Restoration in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Classic & muscle car restoration in Garland, TX. Frame-off rotisserie builds, rust repair, sheet metal fabrication & concours finishing.',
    url: '/services/auto-restoration',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Auto Restoration',
  description:
    'Professional classic and muscle car restoration services in Garland, TX including frame-off rotisserie builds, rust repair, sheet metal fabrication, and concours-quality finishing for Chevrolet, Ford, Mopar, and more.',
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

export default function AutoRestorationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Auto Restoration in Garland, TX"
        tagline="Bringing classic American iron back to life - from barn finds to concours-winning show cars."
        description={{
          heading: 'Expert Classic & Muscle Car Restoration in the DFW Metroplex',
          paragraphs: [
            'Texas Five Star Paint & Body is the Dallas–Fort Worth area\'s trusted destination for classic car and muscle car restoration, operating out of our fully equipped facility at 214 Range Dr in Garland, TX. Whether you own a 1969 Camaro SS, a first-generation Ford Mustang, a numbers-matching Mopar B-body, or a vintage pickup truck that\'s been sitting in a barn for decades, our restoration team has the knowledge and craftsmanship to bring it back to its former glory - or beyond. We handle everything from partial cosmetic refreshes to complete frame-off rotisserie builds, giving each project the care and attention it deserves.',
            'Rust is the number-one enemy of classic vehicles, and Texas humidity makes it even worse. Our sheet metal fabrication shop is equipped to cut out rusted floor pans, trunk drops, quarter panels, and structural supports and replace them with precision-formed reproduction or hand-fabricated steel panels. Every weld is ground smooth and sealed with epoxy primer before any bodywork begins, ensuring a solid, corrosion-free foundation that will last another fifty years. We also address hidden structural decay in frame rails, subframes, and suspension mounting points that other shops overlook.',
            'From the Goodguys shows at Texas Motor Speedway to local Garland cruise nights and ISCA-judged concours events, our restoration clients consistently take home trophies and compliments. We use PPG and Axalta paint systems for period-correct single-stage enamels and lacquers as well as modern basecoat–clearcoat systems, and our painters are experienced in duplicating factory overspray patterns, date-coded markings, and assembly-line finishing details that concours judges look for. Every restoration is documented with photographs at each stage, so you can follow your car\'s journey from teardown to trophy.',
          ],
        }}
        heroImage={heroImage}
        iconName="star"
        features={[
          {
            title: 'Classic & Muscle Cars',
            description:
              'We specialize in American classic and muscle car restoration spanning every major marque - Chevrolet Camaro, Chevelle, and Corvette; Ford Mustang, Fairlane, and Bronco; Mopar Charger, Challenger, and Barracuda; Pontiac GTO and Firebird; and Buick GS and Oldsmobile 442. Our team understands the unique construction methods, hardware, and trim details specific to each platform and model year. Whether your goal is a numbers-matching concours restoration or a custom restomod build with modern drivetrain upgrades, we deliver results that honor the original design while meeting your vision.',
          },
          {
            title: 'Frame-Off Restorations',
            description:
              'A true frame-off - or rotisserie - restoration means disassembling the vehicle down to the bare frame and body shell, then restoring every component individually before reassembly. Our process includes media blasting the frame and body, performing structural repairs and rust remediation, applying epoxy primer and seam sealer, and refinishing the chassis and undercarriage to factory-correct or show-quality standards. Suspension, brakes, fuel lines, wiring harnesses, and weatherstripping are all replaced or rebuilt as part of a comprehensive rotisserie build that leaves no bolt unturned.',
          },
          {
            title: 'Period-Correct Finishing',
            description:
              'For owners pursuing concours-level judging or simply wanting their classic to look exactly as it did leaving the factory, we offer period-correct finishing services that replicate original paint codes, factory overspray patterns, and assembly-line markings. Our painters are experienced with single-stage acrylic enamels, acrylic lacquers, and modern basecoat–clearcoat alternatives that match factory appearance while providing superior durability. We also reproduce original undercoating, trunk spatter, date stamps, and broadcast sheet details that differentiate a good restoration from a truly exceptional one.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Project Evaluation',
            description:
              'We assess the vehicle\'s condition, discuss your goals - concours, driver-quality, or restomod - and develop a detailed project scope and timeline.',
          },
          {
            step: 2,
            title: 'Disassembly & Documentation',
            description:
              'The car is carefully disassembled, every part cataloged and photographed, and the body and frame are stripped for thorough inspection.',
          },
          {
            step: 3,
            title: 'Fabrication & Bodywork',
            description:
              'Rusted panels are replaced, structural repairs are completed, body gaps are aligned, and surfaces are primed and block-sanded to perfection.',
          },
          {
            step: 4,
            title: 'Paint, Assembly & Delivery',
            description:
              'Final paint is applied in our spray booths, the car is reassembled with restored or new components, and a complete shakedown ensures everything is right.',
          },
        ]}
        relatedServices={[
          {
            title: 'Custom Paint & Refinishing',
            slug: 'custom-paint-refinishing',
            iconName: 'droplet',
            shortDesc:
              'Custom colors, candy coats, and show-quality refinishing to complete your restoration.',
          },
          {
            title: 'Collision Repair',
            slug: 'collision-repair',
            iconName: 'tool',
            shortDesc:
              'Structural repair expertise that applies directly to restoration-grade metalwork and alignment.',
          },
          {
            title: 'Headlight Restoration',
            slug: 'headlight-restoration',
            iconName: 'sun',
            shortDesc:
              'Restore or upgrade headlight lenses and housings to match your vehicle\'s refreshed appearance.',
          },
        ]}
      />
    </>
  );
}
