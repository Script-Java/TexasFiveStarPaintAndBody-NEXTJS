import ServicePageTemplate from "../ServicePageTemplate";
import heroImage from "../../assets/img/13.jpg";

export const metadata = {
  title:
    "Paintless Dent Repair (PDR) in Garland, TX | Texas Five Star Paint & Body",
  description:
    "Expert paintless dent repair in Garland, TX. Hail damage repair, minor dent & ding removal that preserves your factory finish. Insurance-approved PDR specialists in DFW.",
  alternates: {
    canonical: "https://texasfivestarpaintandbody.com/services/paintless-dent-repair",
  },
  openGraph: {
    title:
      "Paintless Dent Repair (PDR) in Garland, TX | Texas Five Star Paint & Body",
    description:
      "Expert paintless dent repair in Garland, TX. Hail damage repair, minor dent & ding removal that preserves your factory finish. Insurance-approved PDR specialists in DFW.",
    url: "https://texasfivestarpaintandbody.com/services/paintless-dent-repair",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paintless Dent Repair (PDR)",
  description:
    "Professional paintless dent repair services in Garland, TX including hail damage repair, minor dent and ding removal, and factory finish preservation. Insurance-approved PDR specialists serving the DFW metroplex.",
  provider: {
    "@type": "LocalBusiness",
    name: "Texas Five Star Paint & Body",
    address: {
      "@type": "PostalAddress",
      streetAddress: "214 Range Dr",
      addressLocality: "Garland",
      addressRegion: "TX",
      postalCode: "75040",
    },
    telephone: "(469) 583-7377",
  },
  areaServed: {
    "@type": "Place",
    name: "Dallas-Fort Worth Metroplex, TX",
  },
};

export default function PaintlessDentRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Paintless Dent Repair (PDR)"
        tagline="Remove dents and dings without paint - preserving your vehicle\'s original factory finish and value."
        description={{
          heading: "Cost-Effective Dent Removal That Keeps Your Original Paint Intact",
          paragraphs: [
            "Paintless dent repair (PDR) is the most advanced and cost-effective method for removing dents, dings, and hail damage from your vehicle without the need for body filler or repainting. At Texas Five Star Paint & Body in Garland, TX, our expert technicians use specialized tools and precise techniques to gently massage the metal back to its original contour from behind the panel. This no-paint approach preserves your vehicle\'s factory finish, protects its resale value, and eliminates the risk of color-match issues that can come with traditional bodywork. Whether you\'ve been caught in one of North Texas\'s notorious hail storms or picked up a parking lot ding at the Firewheel Town Center, PDR delivers flawless results in a fraction of the time and cost of conventional repair.",
            "Hail season in the DFW metroplex can leave vehicles covered in hundreds of dents, but that doesn\'t mean your car needs weeks in a body shop. Our Garland, TX facility is equipped with specialized PDR lighting systems and precision rods that allow our technicians to identify and repair even the most subtle hail damage across hoods, roofs, trunk lids, and quarter panels. We work directly with all major insurance carriers as an approved PDR facility, handling your claim from initial estimate through final inspection so you can focus on getting back to your daily routine.",
            "Beyond hail damage, paintless dent repair is the ideal solution for everyday dents from shopping cart impacts, door dings in crowded parking lots, and minor creases from low-speed contact. Because PDR requires no sanding, filler, or painting, repairs can often be completed in the same day, saving you the hassle of extended rental car periods. Our team at Texas Five Star Paint & Body has restored thousands of vehicles across the Dallas-Fort Worth area, and we stand behind every repair with our quality guarantee. Call us today for a free PDR assessment and see why Garland drivers trust us for fast, affordable, and invisible dent removal.",
          ],
        }}
        heroImage={heroImage}
        iconName="shield"
        features={[
          {
            title: "Hail Damage Specialists",
            description:
              "North Texas sees some of the most severe hail storms in the country, and our Garland shop is fully equipped to handle everything from light peppering to catastrophic hail damage. We use advanced fluorescent lighting boards and reflective tools to map every dent across your vehicle\'s panels, ensuring nothing is missed during the repair process. Our technicians carefully work each dent from behind the panel, restoring the metal to factory-smooth condition without disturbing your original paint. We process insurance hail claims daily and can provide a comprehensive estimate that satisfies your adjuster\'s requirements.",
          },
          {
            title: "Minor Dent & Ding Removal",
            description:
              "Shopping cart strikes, car door impacts, and minor fender contact are unavoidable realities of daily driving across the DFW metroplex. Our PDR specialists can remove these everyday dents and dings quickly, often completing repairs within just a few hours while you wait. The process uses no chemicals, fillers, or paint, which means there\'s zero risk of overspray, texture mismatch, or diminished resale value. Whether the damage is on a flat panel, a body line, or near an edge, our experienced technicians have the skill and tools to deliver seamless, undetectable results.",
          },
          {
            title: "Maintains Factory Finish",
            description:
              "One of the greatest advantages of paintless dent repair is that it preserves your vehicle\'s original manufacturer paint - the highest-quality finish your car will ever have. Aftermarket paint, no matter how skillfully applied, can never perfectly replicate the baked-on factory coating in terms of thickness, durability, and UV resistance. By choosing PDR at Texas Five Star Paint & Body, you protect your CARFAX history from showing body repair work, which directly supports stronger trade-in and resale values. This makes PDR especially valuable for newer vehicles, leased cars, and owners who take pride in maintaining their vehicle in showroom condition.",
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: "Damage Assessment",
            description:
              "We inspect your vehicle under specialized PDR lighting to identify and document every dent, ding, or crease for an accurate repair plan.",
          },
          {
            step: 2,
            title: "Access & Tool Selection",
            description:
              "Our technicians gain access behind each damaged panel and select the right combination of rods, tips, and glue-pull tools for the specific damage.",
          },
          {
            step: 3,
            title: "Precision Repair",
            description:
              "Using controlled pressure and expert technique, each dent is carefully massaged back to its original contour without disturbing the factory paint.",
          },
          {
            step: 4,
            title: "Quality Inspection",
            description:
              "Every repaired area is re-checked under PDR lighting to confirm the panel is perfectly smooth and the original finish is completely intact.",
          },
        ]}
        relatedServices={[
          {
            title: "Collision Repair",
            slug: "collision-repair",
            iconName: "tool",
            shortDesc:
              "Full-service collision repair for damage beyond PDR, including structural and panel replacement.",
          },
          {
            title: "Hail Repair",
            slug: "hail-repair",
            iconName: "cloudRain",
            shortDesc:
              "Comprehensive hail damage restoration utilizing a mix of PDR and traditional bodywork.",
          },
          {
            title: "Auto Insurance Claim Repair",
            slug: "auto-insurance-claim-repair",
            iconName: "fileText",
            shortDesc:
              "We handle the claims process directly with your provider for seamless repairs.",
          },
        ]}
      />
    </>
  );
}
