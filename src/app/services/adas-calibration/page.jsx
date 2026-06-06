import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/3.jpg';

export const metadata = {
  title: 'ADAS Calibration in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Precise recalibration of Advanced Driver Assistance Systems (ADAS) in Garland, TX. We align cameras, radar, and sensors after collision repair.',
  alternates: { canonical: '/services/adas-calibration' },
  openGraph: {
    title: 'ADAS Calibration in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Precise recalibration of Advanced Driver Assistance Systems (ADAS) in Garland, TX. We align cameras, radar, and sensors after collision repair.',
    url: '/services/adas-calibration',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ADAS Calibration',
  description:
    'Precise recalibration of your vehicle\'s Advanced Driver Assistance Systems (cameras, radar, sensors) following collision repair or windshield replacement.',
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

export default function ADASCalibrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="ADAS Calibration in Garland, TX"
        tagline="Ensuring your vehicle's safety systems see the road as clearly as you do."
        description={{
          heading: 'Precision Calibration for Modern Vehicle Safety',
          paragraphs: [
            'Modern vehicles rely on a complex network of cameras, radar, and sensors known as Advanced Driver Assistance Systems (ADAS). Features like lane departure warnings, automatic emergency braking, and adaptive cruise control all depend on these sensors being perfectly aligned. At Texas Five Star Paint & Body, we offer precise ADAS calibration services to ensure your vehicle’s safety systems function exactly as the manufacturer intended.',
            'Even a minor fender bender, a bumper repair, or a windshield replacement can knock these highly sensitive sensors out of alignment by just a fraction of a degree—enough to compromise their effectiveness. Our facility in Garland, TX is equipped with state-of-the-art diagnostic and targeting equipment required to perform precise static and dynamic calibrations for all major vehicle makes and models.',
            'Don\'t compromise on safety after an accident. Backed by 500+ 5-star reviews, our team will scan, aim, and road-test your vehicle to guarantee that all ADAS features are fully operational, giving you peace of mind on the busy roads of the Dallas-Fort Worth metroplex.'
          ],
        }}
        heroImage={heroImage}
        iconName="target"
        features={[
          {
            title: 'Camera Recalibration',
            description:
              'We use precision targeting boards and OEM software to realign forward-facing windshield cameras, 360-degree surround-view cameras, and backup cameras.',
          },
          {
            title: 'Radar Alignment',
            description:
              'Front and rear radar sensors hidden behind bumpers are meticulously aimed to ensure features like blind-spot monitoring and adaptive cruise control work flawlessly.',
          },
          {
            title: 'Pre/Post Repair Scanning',
            description:
              'Every vehicle undergoes a full computerized diagnostic scan before and after repairs to identify hidden faults and verify that all electronic systems have been successfully restored.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Diagnostic Pre-Scan',
            description:
              'We plug into your vehicle’s OBD-II port to pull any existing fault codes and identify which ADAS modules require attention.',
          },
          {
            step: 2,
            title: 'Physical Repair & Reassembly',
            description:
              'Any necessary collision or auto body repairs are completed, ensuring the physical mounting points for all sensors are perfectly restored.',
          },
          {
            step: 3,
            title: 'Static & Dynamic Calibration',
            description:
              'Depending on the vehicle, we set up laser-aligned targets in our shop (static) or drive the vehicle under specific conditions (dynamic) to reset the sensors.',
          },
          {
            step: 4,
            title: 'Post-Scan & Verification',
            description:
              'A final scan is performed to clear any codes, and we provide you with a comprehensive report documenting the successful calibration.',
          },
        ]}
        relatedServices={[
          {
            title: 'Collision Repair',
            slug: 'collision-repair',
            iconName: 'tool',
            shortDesc: 'Frame straightening and panel replacement after an accident.',
          },
          {
            title: 'Bumper Repair',
            slug: 'bumper-repair',
            iconName: 'maximize',
            shortDesc: 'Expert reshaping of bumpers where ADAS sensors are housed.',
          },
          {
            title: 'Auto Insurance Claim Repair',
            slug: 'auto-insurance-claim-repair',
            iconName: 'fileText',
            shortDesc: 'We handle the claims process, ensuring calibration is covered.',
          },
        ]}
      />
    </>
  );
}
