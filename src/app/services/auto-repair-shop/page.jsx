import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/15.jpg';

export const metadata = {
  title: 'Auto Repair Shop in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Texas Five Star Paint & Body is a trusted auto repair shop in Garland, TX specializing in collision damage repair, mechanical diagnostics, suspension work & ADAS calibration. Free estimates - (469) 583-7377.',
  alternates: { canonical: '/services/auto-repair-shop' },
  openGraph: {
    title: 'Auto Repair Shop in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Trusted auto repair shop in Garland, TX. Collision damage repair, suspension work, ADAS calibration & mechanical diagnostics. 500+ 5-star reviews.',
    url: '/services/auto-repair-shop',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Auto Repair Shop',
  description:
    'Professional auto repair shop in Garland, TX providing collision damage repair, mechanical diagnostics, suspension alignment, brake inspection, and ADAS calibration with over 15 years of experience and a perfect 5-star rating.',
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

export default function AutoRepairShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Auto Repair Shop in Garland, TX"
        tagline="More than bodywork - complete collision-related auto repair including mechanical diagnostics, suspension, and safety system calibration."
        description={{
          heading: 'Trusted Auto Repair Shop Serving Garland, Firewheel & the DFW Metroplex',
          paragraphs: [
            'Texas Five Star Paint & Body is more than a paint and body shop - we are a complete auto repair shop in Garland, TX equipped to handle the full scope of collision-related mechanical and structural repairs. Located at 214 Range Dr, we proudly serve drivers from the Firewheel area, Duck Creek, Eastside Garland, Rowlett, Sachse, Richardson, Mesquite, and the entire Dallas–Fort Worth metroplex. When your vehicle is involved in a collision, the damage often extends well beyond dented panels and scratched paint. Bent suspension components, misaligned wheels, damaged cooling systems, and compromised safety sensors all require expert diagnosis and repair - and that is exactly what our team delivers.',
            'Our auto repair shop is equipped with advanced diagnostic scanning tools, computerized alignment systems, and certified technicians who understand how modern vehicles are engineered. After a collision, we perform a bumper-to-bumper mechanical inspection to identify every issue - from bent control arms and damaged CV joints to leaking radiators and malfunctioning ADAS cameras. This thorough approach ensures nothing is missed, and your vehicle leaves our shop driving exactly as the manufacturer intended.',
            'With over 15 years of experience and 500+ five-star Google reviews, Texas Five Star has earned a reputation as one of the most trusted auto repair shops in the Garland area. We work with all major insurance providers, offer up to $500 in deductible forgiveness, and stand behind every repair with a written quality guarantee. Whether you need a post-collision mechanical inspection, suspension realignment, brake system repair, or ADAS sensor calibration, our Garland auto repair shop has you covered.',
          ],
        }}
        heroImage={heroImage}
        iconName="refresh"
        features={[
          {
            title: 'Post-Collision Mechanical Repair',
            description:
              'Collisions cause damage that goes far beyond what you can see. Our auto repair shop performs comprehensive mechanical inspections and repairs following any accident, addressing bent suspension arms, damaged steering linkages, leaking fluid lines, compromised exhaust systems, and drivetrain issues. We use OEM diagnostic tools to scan every module in your vehicle\'s computer system and verify that all mechanical components are restored to factory operating specifications before the vehicle leaves our shop.',
          },
          {
            title: 'Suspension & Alignment Service',
            description:
              'Even a low-speed impact can knock your vehicle\'s suspension out of alignment, causing uneven tire wear, pulling, and compromised handling. Our auto repair shop features a state-of-the-art four-wheel alignment system that measures camber, caster, toe, and thrust angle to thousandths of a degree. We replace bent or damaged suspension components - control arms, tie rods, struts, sway bar links, and wheel bearings - with OEM or OEM-equivalent parts and verify the final alignment against manufacturer specifications.',
          },
          {
            title: 'ADAS & Safety System Calibration',
            description:
              'Modern vehicles rely on a network of cameras, radar sensors, and lidar units to power Advanced Driver Assistance Systems like automatic emergency braking, lane departure warning, adaptive cruise control, and blind-spot monitoring. After any collision repair, windshield replacement, or suspension work, these sensors must be precisely recalibrated to function correctly. Our auto repair shop performs both static and dynamic ADAS calibrations following OEM procedures, ensuring your safety systems protect you as designed.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Diagnostic Inspection',
            description:
              'We perform a full vehicle scan and hands-on inspection to identify all collision-related mechanical, structural, and electronic damage.',
          },
          {
            step: 2,
            title: 'Repair Planning',
            description:
              'A detailed repair plan is created and coordinated with your insurance provider, covering parts, labor, and estimated timeline.',
          },
          {
            step: 3,
            title: 'Expert Repair & Calibration',
            description:
              'Our technicians perform all mechanical, structural, and electronic repairs, including suspension alignment and ADAS calibration.',
          },
          {
            step: 4,
            title: 'Test Drive & Delivery',
            description:
              'Every vehicle is road-tested to verify steering, braking, and handling performance before final quality inspection and delivery.',
          },
        ]}
        relatedServices={[
          {
            title: 'Collision Repair',
            slug: 'collision-repair',
            iconName: 'tool',
            shortDesc:
              'Structural frame straightening and panel work to restore your vehicle after a collision.',
          },
          {
            title: 'ADAS Calibration',
            slug: 'adas-calibration',
            iconName: 'shield',
            shortDesc:
              'Precise recalibration of cameras and sensors for your vehicle\'s safety systems.',
          },
          {
            title: 'Bumper Repair',
            slug: 'bumper-repair',
            iconName: 'tool',
            shortDesc:
              'Expert reshaping, welding, and refinishing of damaged bumpers and fenders.',
          },
        ]}
        faq={[
          {
            question: 'What kind of auto repairs do you handle?',
            answer:
              'We specialize in collision-related auto repairs including structural frame straightening, suspension and alignment work, mechanical diagnostics, brake inspection, cooling system repair, ADAS sensor calibration, and complete body and paint restoration. We handle the full repair from start to finish under one roof.',
          },
          {
            question: 'Do I need mechanical repair after a minor fender bender?',
            answer:
              'Even minor collisions can cause hidden mechanical damage such as bent suspension components, misaligned wheels, or compromised safety sensors. We recommend a diagnostic inspection after any collision to ensure your vehicle is safe to drive and all systems are functioning properly.',
          },
          {
            question: 'Can you recalibrate my vehicle\'s safety sensors after repair?',
            answer:
              'Yes. Our auto repair shop performs full ADAS calibration including forward-facing camera, radar, lidar, and blind-spot monitoring sensors. We follow OEM-specific procedures to ensure every safety system is accurately calibrated after collision repair or windshield replacement.',
          },
          {
            question: 'Do you accept insurance for auto repair work?',
            answer:
              'Absolutely. We work directly with all major insurance providers and handle the entire claims process on your behalf. We also offer up to $500 in deductible forgiveness on qualifying repairs to reduce your out-of-pocket costs.',
          },
          {
            question: 'What areas does your auto repair shop serve?',
            answer:
              'We are located at 214 Range Dr in Garland, TX and serve drivers from Firewheel, Duck Creek, Downtown Garland, Rowlett, Sachse, Richardson, Mesquite, Murphy, Wylie, Plano, and the entire Dallas-Fort Worth metroplex.',
          },
        ]}
      />
    </>
  );
}
