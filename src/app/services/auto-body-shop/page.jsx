import ServicePageTemplate from '../ServicePageTemplate';
import heroImage from '../../assets/img/14.jpg';

export const metadata = {
  title: 'Auto Body Shop in Garland, TX | Texas Five Star Paint & Body',
  description:
    'Texas Five Star Paint & Body is a full-service auto body shop in Garland, TX offering collision repair, dent removal, paint refinishing & insurance claim assistance. 500+ 5-star reviews. Free estimates - (469) 583-7377.',
  alternates: { canonical: '/services/auto-body-shop' },
  openGraph: {
    title: 'Auto Body Shop in Garland, TX | Texas Five Star Paint & Body',
    description:
      'Full-service auto body shop in Garland, TX. Collision repair, dent removal, paint refinishing & insurance claims. 500+ 5-star Google reviews.',
    url: '/services/auto-body-shop',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Auto Body Shop',
  description:
    'Full-service auto body shop in Garland, TX providing collision repair, paintless dent removal, paint refinishing, bumper repair, and insurance claim assistance with a perfect 5-star Google rating.',
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

export default function AutoBodyShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Auto Body Shop in Garland, TX"
        tagline="Your trusted neighborhood auto body shop - delivering dealership-quality collision repair, paint, and bodywork across the DFW metroplex."
        description={{
          heading: 'Full-Service Auto Body Shop Serving Garland & Surrounding Communities',
          paragraphs: [
            'Texas Five Star Paint & Body is a full-service auto body shop located at 214 Range Dr in Garland, TX, proudly serving the Firewheel area, Downtown Garland, and all neighborhoods across Garland, Rowlett, Sachse, Richardson, and the greater Dallas–Fort Worth metroplex. Whether your vehicle has been damaged in a collision, dinged in a parking lot, or simply needs a fresh coat of paint, our team of experienced technicians delivers dealership-quality results backed by 500+ five-star Google reviews and over 15 years of hands-on expertise.',
            'As a family-owned auto body shop, we treat every vehicle - and every customer - like family. We handle the complete spectrum of auto body services under one roof: structural frame straightening, precision panel replacement, bumper and fender repair, paintless dent removal, factory-match paint refinishing, scratch and chip repair, and full custom paint jobs. Our shop is equipped with state-of-the-art downdraft spray booths, computerized color-matching spectrophotometers, and advanced frame-pulling systems that allow us to restore vehicles to pre-accident condition with pinpoint accuracy.',
            'We also make the repair process as stress-free as possible by working directly with all major insurance providers. From filing your initial claim to negotiating supplements and coordinating rental cars, our team manages every detail so you can focus on your daily life. We offer up to $500 in deductible forgiveness on qualifying repairs, and every job is backed by our written quality guarantee. Drivers from Firewheel, Duck Creek, Eastside Garland, and communities throughout the DFW area trust us to get the job done right the first time.',
          ],
        }}
        heroImage={heroImage}
        iconName="tool"
        features={[
          {
            title: 'Complete Collision Repair',
            description:
              'From minor fender benders to major structural damage, our auto body shop handles every type of collision repair. We use computerized frame analysis and laser measuring systems to identify all points of impact, then restore your vehicle\'s structure and appearance to factory specifications using OEM and OEM-equivalent parts. Every repair is finished with factory-matched paint applied in our climate-controlled spray booths for a seamless result.',
          },
          {
            title: 'Expert Paint & Refinishing',
            description:
              'Our auto body shop features dedicated downdraft spray booths and computerized color matching technology that guarantees an invisible blend on every paint job. Whether you need a single-panel respray after a collision, a full-body color change, or a custom candy, pearl, or metallic finish, our painters deliver stunning results using premium PPG and Axalta basecoat-clearcoat systems trusted by OEM manufacturers worldwide.',
          },
          {
            title: 'Insurance Claims Made Easy',
            description:
              'Dealing with insurance after an accident shouldn\'t add more stress to your day. Our auto body shop works directly with all major insurance carriers - State Farm, GEICO, Progressive, Allstate, USAA, and more - handling estimates, supplements, photo documentation, and approvals on your behalf. We offer up to $500 in deductible forgiveness and keep you informed at every step so there are no surprises when you pick up your vehicle.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Free Estimate',
            description:
              'Bring your vehicle to our Garland shop or call for a free, no-obligation estimate. We inspect all damage and provide a detailed written quote.',
          },
          {
            step: 2,
            title: 'Insurance Coordination',
            description:
              'We file your claim, communicate with adjusters, and handle all paperwork so you don\'t have to deal with the back-and-forth.',
          },
          {
            step: 3,
            title: 'Expert Repair',
            description:
              'Our technicians restore your vehicle using advanced equipment, OEM-spec parts, and factory-match paint in our climate-controlled facility.',
          },
          {
            step: 4,
            title: 'Quality Delivery',
            description:
              'Every vehicle undergoes a multi-point final inspection for fit, finish, and alignment before we hand you back the keys - guaranteed.',
          },
        ]}
        relatedServices={[
          {
            title: 'Collision Repair',
            slug: 'collision-repair',
            iconName: 'tool',
            shortDesc:
              'Specialized structural and cosmetic collision repair with advanced frame straightening.',
          },
          {
            title: 'Custom Paint & Refinishing',
            slug: 'custom-paint-refinishing',
            iconName: 'droplet',
            shortDesc:
              'Factory color matching and custom finishes using premium PPG and Axalta materials.',
          },
          {
            title: 'Auto Insurance Claim Repair',
            slug: 'auto-insurance-claim-repair',
            iconName: 'shield',
            shortDesc:
              'Streamlined insurance claim handling with up to $500 deductible forgiveness.',
          },
        ]}
        faq={[
          {
            question: 'What services does your auto body shop offer?',
            answer:
              'We offer a complete range of auto body services including collision repair, frame straightening, paintless dent repair, bumper and fender repair, custom paint and refinishing, scratch and chip repair, ADAS calibration, rust repair, hail damage restoration, and full insurance claim management.',
          },
          {
            question: 'Do you work with my insurance company?',
            answer:
              'Yes. We work directly with all major insurance providers including State Farm, GEICO, Progressive, Allstate, USAA, Liberty Mutual, and many more. We handle estimates, supplements, and all claims communication on your behalf.',
          },
          {
            question: 'How long does auto body repair typically take?',
            answer:
              'Repair timelines depend on the extent of the damage. Minor dent and scratch repairs can often be completed in 1-2 days, while major collision repairs typically take 5-10 business days. We provide an estimated completion date at the time of your estimate and keep you updated throughout the process.',
          },
          {
            question: 'Do you offer a warranty on your auto body work?',
            answer:
              'Absolutely. Every repair performed at Texas Five Star Paint & Body comes with a written quality guarantee. We stand behind our workmanship and materials, and our 500+ five-star Google reviews reflect our commitment to getting every job right the first time.',
          },
          {
            question: 'Where is your auto body shop located?',
            answer:
              'We are located at 214 Range Dr, Garland, TX 75040, conveniently serving the Firewheel area, Duck Creek, Downtown Garland, and surrounding communities including Rowlett, Sachse, Richardson, Mesquite, and the entire DFW metroplex.',
          },
        ]}
      />
    </>
  );
}
