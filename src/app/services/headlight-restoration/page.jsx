import ServicePageTemplate from "../ServicePageTemplate";
import heroImage from "../../assets/img/14.jpg";

export const metadata = {
  title:
    "Headlight Restoration in Garland, TX | Texas Five Star Paint & Body",
  description:
    "Professional headlight restoration in Garland, TX. Remove yellowing & oxidation, restore clarity, and apply UV sealant. Improve nighttime visibility and pass Texas inspection.",
  alternates: {
    canonical: "https://texasfivestarpaintandbody.com/services/headlight-restoration",
  },
  openGraph: {
    title:
      "Headlight Restoration in Garland, TX | Texas Five Star Paint & Body",
    description:
      "Professional headlight restoration in Garland, TX. Remove yellowing & oxidation, restore clarity, and apply UV sealant. Improve nighttime visibility and pass Texas inspection.",
    url: "https://texasfivestarpaintandbody.com/services/headlight-restoration",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Headlight Restoration",
  description:
    "Professional headlight restoration services in Garland, TX including oxidation and yellowing removal, multi-stage wet sanding, and UV protection sealant application. Improve nighttime visibility and pass Texas vehicle inspection.",
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

export default function HeadlightRestorationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        title="Headlight Restoration"
        tagline="Restore crystal-clear visibility and like-new appearance to your cloudy, yellowed headlights - for a fraction of the cost of replacement."
        description={{
          heading: "Professional Headlight Clarity Restoration in Garland, TX",
          paragraphs: [
            "Over time, the intense Texas sun breaks down the UV-protective coating on your vehicle\'s polycarbonate headlight lenses, causing them to turn hazy, yellow, and oxidized. This isn\'t just a cosmetic issue - cloudy headlights can reduce your nighttime visibility by up to 80%, creating a serious safety hazard on busy DFW roads and highways. At Texas Five Star Paint & Body in Garland, TX, our professional headlight restoration service removes years of UV damage, road grime, and environmental contamination to bring your lenses back to factory-clear condition. The result is dramatically improved light output, a refreshed vehicle appearance, and a cost savings of hundreds of dollars compared to full headlight assembly replacement.",
            "Our multi-stage restoration process goes far beyond the quick-fix products sold at auto parts stores. We begin with a thorough cleaning and masking of the surrounding paint to prevent any damage during the sanding process. Our technicians then use a progressive wet-sanding technique with increasingly fine grits to carefully remove the damaged outer layer of the polycarbonate lens, followed by machine polishing to achieve optical clarity. The final step is the application of a professional-grade UV inhibitor sealant that protects your restored lenses from future sun damage, keeping them clear for years rather than weeks.",
            "Whether you\'re preparing for a Texas state vehicle inspection, getting your car ready for sale, or simply want to improve your driving safety across the DFW metroplex, our headlight restoration service delivers immediate, visible results. Severely oxidized headlights can cause your vehicle to fail the state safety inspection, and replacing OEM headlight assemblies can cost $300 to $1,000 or more per side. Our restoration service achieves comparable clarity at a fraction of the price and can be completed while you wait at our Garland, TX shop. Trust the team at Texas Five Star Paint & Body to restore your headlights and your confidence on the road.",
          ],
        }}
        heroImage={heroImage}
        iconName="sun"
        features={[
          {
            title: "Oxidation & Yellowing Removal",
            description:
              "The brutal North Texas sun subjects your headlights to constant UV bombardment, which degrades the clear coat and causes the characteristic yellow, hazy appearance that plagues vehicles across the DFW area. Our restoration process targets this oxidation layer directly, using professional compounds and techniques to strip away the damaged material without compromising the structural integrity of the lens. We treat each headlight individually, adjusting our approach based on the severity of the degradation and the specific type of polycarbonate material. The result is a lens that looks and performs like the day it left the factory.",
          },
          {
            title: "Multi-Stage Wet Sanding",
            description:
              "Unlike DIY headlight kits that rely on a single abrasive pad, our professional process employs a carefully sequenced series of wet-sanding grits ranging from coarse to ultra-fine. This graduated approach removes the oxidized surface layer methodically, minimizing material removal while maximizing clarity. After sanding, our technicians use professional rotary and dual-action polishers with optical-grade compounds to achieve a glass-smooth, perfectly transparent finish. This multi-stage method produces results that are visibly superior to any retail restoration kit and ensures the lens surface is properly prepared for sealant adhesion.",
          },
          {
            title: "UV Protection Sealant",
            description:
              "Restoring clarity is only half the job - protecting that clarity from the relentless Texas sun is what separates a professional restoration from a temporary fix. After polishing, we apply a commercial-grade UV inhibitor sealant that forms a durable barrier against future ultraviolet degradation, road chemicals, and environmental contaminants. This protective layer is the same type used by professional detailers and body shops across the DFW metroplex, engineered to withstand years of sun exposure rather than fading after a few car washes. We recommend periodic reapplication as part of your regular vehicle maintenance to keep your headlights crystal clear for the life of your vehicle.",
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: "Inspection & Masking",
            description:
              "We evaluate the extent of oxidation and yellowing, then carefully mask surrounding paint and trim to protect your vehicle during restoration.",
          },
          {
            step: 2,
            title: "Progressive Wet Sanding",
            description:
              "Multiple grits of wet sandpaper are used in sequence to remove the oxidized layer from the polycarbonate lens surface.",
          },
          {
            step: 3,
            title: "Machine Polishing",
            description:
              "Optical-grade polishing compounds and professional buffers bring the sanded lens to a perfectly smooth, crystal-clear finish.",
          },
          {
            step: 4,
            title: "UV Sealant Application",
            description:
              "A professional-grade UV inhibitor sealant is applied to protect the restored lens from future sun damage and oxidation.",
          },
        ]}
        relatedServices={[
          {
            title: "Paintless Dent Repair",
            slug: "paintless-dent-repair",
            iconName: "shield",
            shortDesc:
              "Remove dents and dings without paint to preserve your vehicle\'s factory finish and value.",
          },
          {
            title: "Lease Return Reconditioning",
            slug: "lease-return-reconditioning",
            iconName: "refresh",
            shortDesc:
              "Get your leased vehicle inspection-ready and avoid expensive excess wear charges.",
          },
          {
            title: "Custom Paint & Refinishing",
            slug: "custom-paint-refinishing",
            iconName: "droplet",
            shortDesc:
              "Expert color matching, custom paint jobs, and professional refinishing for any vehicle.",
          },
        ]}
      />
    </>
  );
}
