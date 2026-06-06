import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/5.jpg';

export const metadata = {
  title: 'Auto Insurance Claim Repair in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Hassle-free auto insurance claim repairs in Garland, TX. We work with all major providers, negotiate supplements, and offer up to $500 in deductible assistance.',
  alternates: { canonical: '/services/auto-insurance-claim-repair' },
  openGraph: {
    title: 'Auto Insurance Claim Repair in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Hassle-free auto insurance claim repairs in Garland, TX. We work with all major providers, negotiate supplements, and offer up to $500 in deductible assistance.',
    url: '/services/auto-insurance-claim-repair',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Auto Insurance Claim Repair',
  description:
    'We handle the entire claims process directly with your provider, ensuring complete repairs using OEM-approved procedures and up to $500 in deductible forgiveness.',
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

export default function AutoInsuranceClaimRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Auto Insurance Claim Repair in Garland, TX"
        tagline="We fight for your vehicle’s factory-correct repair so you don't have to."
        description={{
          heading: 'Stress-Free Collision Claims and Deductible Assistance',
          paragraphs: [
            'Dealing with the aftermath of a car accident is stressful enough without having to navigate a complicated insurance claim. Insurance companies often try to dictate where you take your vehicle and may push for cheaper, inferior aftermarket parts to save money. At Texas Five Star Paint & Body, we work for *you*, not the insurance company. We handle the entire claims process from start to finish to ensure your vehicle is repaired correctly and safely.',
            'As an independent, five-star rated collision center in Garland, TX, we have established relationships with all major insurance providers. We handle the estimates, negotiate the necessary supplements for hidden damages, and insist on OEM-approved repair procedures. By Texas law, you have the right to choose your repair shop, and choosing Texas Five Star means choosing an advocate who won\'t cut corners.',
            'To make the process even easier, we offer up to $500 in deductible forgiveness on qualifying collision repairs. Bring your vehicle and your claim number to our shop on Range Dr, and let our experienced team manage the paperwork, the adjusters, and the repair, getting you back on the road safely and without the headache.'
          ],
        }}
        heroImage={heroImage}
        iconName="fileText"
        features={[
          {
            title: 'Direct Insurance Billing',
            description:
              'We communicate directly with your insurance adjuster, submitting detailed estimates, photographs, and documentation so you don\'t have to act as the middleman.',
          },
          {
            title: 'Supplement Negotiation',
            description:
              'Initial insurance estimates almost always miss hidden damage. We perform thorough tear-downs and fiercely negotiate supplements to ensure every broken part is fully covered and repaired.',
          },
          {
            title: 'Deductible Assistance',
            description:
              'To ease the financial burden of an unexpected accident, we offer up to $500 in deductible forgiveness for qualifying major collision claims. Ask us how we can help lower your out-of-pocket costs.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Drop Off & Claim Setup',
            description:
              'Bring your vehicle and claim number to our shop. We’ll take over communication with your insurance provider immediately.',
          },
          {
            step: 2,
            title: 'Tear-Down & Estimate',
            description:
              'We disassemble the damaged area to uncover hidden structural or mechanical issues, compiling a comprehensive, accurate estimate.',
          },
          {
            step: 3,
            title: 'Supplement Approval',
            description:
              'We submit our findings to the insurance adjuster and negotiate on your behalf to ensure authorization for a proper, safe repair.',
          },
          {
            step: 4,
            title: 'Repair & Delivery',
            description:
              'Once approved, we execute the repairs using factory-approved methods, then return your beautifully restored vehicle with zero paperwork hassle.',
          },
        ]}
        relatedServices={[
          {
            title: 'Collision Repair',
            slug: 'collision-repair',
            iconName: 'tool',
            shortDesc: 'Expert structural and body repairs following an accident.',
          },
          {
            title: 'Paintless Dent Repair',
            slug: 'paintless-dent-repair',
            iconName: 'shield',
            shortDesc: 'Insurance-approved hail damage and dent removal.',
          },
          {
            title: 'ADAS Calibration',
            slug: 'adas-calibration',
            iconName: 'target',
            shortDesc: 'Recalibrating safety sensors, covered by most policies.',
          },
        ]}
      />
    </>
  );
}
