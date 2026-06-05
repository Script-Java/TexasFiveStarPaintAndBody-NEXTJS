/**
 * Service data for programmatic SEO pages.
 * Each service contains SEO templates, features, process steps, and FAQ.
 */

export const services = [
  {
    slug: "collision-repair",
    name: "Collision Repair",
    shortName: "Collision Repair",
    iconName: "tool",
    heroImage: "11",
    metaTitleTemplate: "{service} in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Expert {serviceLower} in {city}, TX. {uniqueHook}. Insurance claims welcome. Free estimates. Call (469) 583-7377.",
    features: [
      {
        title: "Frame Straightening",
        description:
          "Our computerized frame straightening equipment restores your vehicle's unibody or body-on-frame structure to exact factory specifications. Using multi-point laser measuring systems, we identify even the smallest deviations caused by collision impact. This ensures proper suspension geometry, steering response, and overall crash safety.",
      },
      {
        title: "Panel Replacement",
        description:
          "When body panels are creased, torn, or structurally compromised, our technicians perform precision panel replacement using OEM and certified components. Each panel is carefully fitted, welded or bonded, and sealed against moisture to prevent corrosion. We finish every replacement with factory-matched paint for an invisible repair.",
      },
      {
        title: "Bumper & Fender Repair",
        description:
          "We repair cracked plastic bumper covers with structural adhesive bonding, reshape bent steel fenders, and replace energy absorbers when necessary. Every bumper and fender repair includes color-matched refinishing so your vehicle looks factory-fresh.",
      },
    ],
    processSteps: [
      { step: 1, title: "Damage Assessment", description: "Comprehensive inspection using laser measuring and diagnostic scanning to uncover all visible and hidden collision damage." },
      { step: 2, title: "Insurance Coordination", description: "We work directly with your insurance company, handling estimates, supplements, and approvals so you don't have to." },
      { step: 3, title: "Expert Repair", description: "Our technicians restore structural integrity with frame straightening, panel work, and OEM-spec component replacement." },
      { step: 4, title: "Final Inspection", description: "Every vehicle undergoes a multi-point quality check including fit, finish, alignment verification, and test drive before delivery." },
    ],
    faq: [
      { q: "How long does collision repair typically take?", a: "Most collision repairs take 3\u201310 business days depending on the extent of damage. We'll provide a clear timeline during your free estimate and keep you informed throughout the process." },
      { q: "Do you work with my insurance company?", a: "Yes - we work with all major insurance providers. Our team handles the entire claims process including estimates, supplements, and approvals. We also offer up to $500 in deductible forgiveness." },
      { q: "Will my car look the same after collision repair?", a: "Absolutely. We use computerized color matching, OEM parts, and factory-spec repair techniques to restore your vehicle to its pre-accident condition. Our 5-star Google reviews consistently praise our flawless finish quality." },
      { q: "Can you repair frame damage?", a: "Yes. Our shop is equipped with state-of-the-art frame straightening machines and laser measuring systems to restore your vehicle's structural integrity to exact factory specifications." },
    ],
  },
  {
    slug: "custom-paint-refinishing",
    name: "Custom Paint & Refinishing",
    shortName: "Custom Paint",
    iconName: "droplet",
    heroImage: "12",
    metaTitleTemplate: "{service} in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Professional {serviceLower} in {city}, TX. {uniqueHook}. Factory color matching & custom finishes. Call (469) 583-7377.",
    features: [
      {
        title: "Factory Color Matching",
        description:
          "Our computerized spectrophotometer analyzes your vehicle's exact paint code, accounting for UV fade and age, to deliver a seamless color match that's invisible to the eye. We use premium PPG and Axalta basecoats applied in our downdraft spray booths.",
      },
      {
        title: "Custom Colors & Finishes",
        description:
          "From candy apple red and chameleon pearl to satin matte and metallic flake, we create head-turning custom finishes that make your vehicle truly one-of-a-kind. Our artisan painters have 15+ years of experience with exotic color techniques.",
      },
      {
        title: "Paint Correction & Polishing",
        description:
          "We remove swirl marks, oxidation, orange peel, and surface imperfections through multi-stage machine polishing and wet sanding. The result is a mirror-like finish that brings out the true depth and clarity of your paint.",
      },
    ],
    processSteps: [
      { step: 1, title: "Color Consultation", description: "We discuss your vision, analyze your current paint, and recommend the best approach - from factory match to full custom." },
      { step: 2, title: "Surface Preparation", description: "Thorough sanding, priming, and masking to ensure perfect adhesion and a flawless foundation for your new finish." },
      { step: 3, title: "Paint Application", description: "Multiple coats of basecoat, effects layers, and clear coat applied in our climate-controlled downdraft booth." },
      { step: 4, title: "Polish & Deliver", description: "Final wet sanding, buffing, and detail work to achieve a showroom-quality finish before your vehicle is released." },
    ],
    faq: [
      { q: "How much does a custom paint job cost?", a: "Custom paint pricing varies based on scope - from single-panel refinishing to full-body color changes. Contact us for a free estimate tailored to your specific project." },
      { q: "How long does a full repaint take?", a: "A complete color change typically takes 5\u201314 days depending on prep work, the number of coats, and any custom effects like candy, pearl, or graphics." },
      { q: "Can you match my factory paint exactly?", a: "Yes. Our computerized spectrophotometer reads your vehicle's exact color code and adjusts for UV fade and aging, delivering an invisible match every time." },
      { q: "What paint brands do you use?", a: "We use premium PPG and Axalta paint systems - the same brands trusted by OEM manufacturers - for maximum durability, color accuracy, and UV resistance." },
    ],
  },
  {
    slug: "auto-restoration",
    name: "Auto Restoration",
    shortName: "Auto Restoration",
    iconName: "star",
    heroImage: "9",
    metaTitleTemplate: "{service} in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Expert {serviceLower} near {city}, TX. {uniqueHook}. Classic & muscle cars. Free consultation. Call (469) 583-7377.",
    features: [
      {
        title: "Classic & Muscle Cars",
        description:
          "We specialize in restoring iconic American classics - from Chevrolet Camaros and Ford Mustangs to Mopar muscle and vintage Corvettes. Our team understands the nuances of each era and marque.",
      },
      {
        title: "Frame-Off Restorations",
        description:
          "For concours-level results, we perform complete frame-off (rotisserie) restorations - disassembling the entire vehicle to restore, repair, or replace every component down to the bare frame.",
      },
      {
        title: "Period-Correct Finishing",
        description:
          "We research factory-original colors, materials, and techniques to deliver period-correct finishes that preserve your classic's authenticity and maximize its collector value.",
      },
    ],
    processSteps: [
      { step: 1, title: "Assessment & Planning", description: "Thorough documentation of your vehicle's condition, research into factory-original specs, and a detailed restoration plan." },
      { step: 2, title: "Disassembly", description: "Careful removal and cataloging of all components. For frame-off restorations, the body is separated from the chassis." },
      { step: 3, title: "Metalwork & Paint", description: "Rust repair, panel fabrication, bodywork, and application of period-correct or custom paint in our spray booth." },
      { step: 4, title: "Reassembly & Detail", description: "Precision reassembly, final detailing, and quality inspection to deliver a show-ready or driver-quality restoration." },
    ],
    faq: [
      { q: "What types of cars do you restore?", a: "We restore classic American muscle cars (Camaro, Mustang, Chevelle, Challenger), vintage trucks, European classics, and modern collectibles. If it has wheels and a body, we can restore it." },
      { q: "How long does a full restoration take?", a: "A frame-off restoration typically takes 3\u20136 months depending on the vehicle's condition and the scope of work. We provide regular progress updates with photos." },
      { q: "Do you do partial restorations?", a: "Absolutely. We offer everything from paint-only refreshes to partial body restoration to full frame-off concours-level builds. We'll tailor the project to your goals and budget." },
      { q: "Can you source hard-to-find parts?", a: "We have an extensive network of parts suppliers for classic and muscle cars. We can source NOS (new old stock), reproduction, and high-quality aftermarket parts." },
    ],
  },
  {
    slug: "paintless-dent-repair",
    name: "Paintless Dent Repair (PDR)",
    shortName: "Dent Repair",
    iconName: "shield",
    heroImage: "13",
    metaTitleTemplate: "Paintless Dent Repair in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Professional paintless dent repair in {city}, TX. {uniqueHook}. Same-day service available. Call (469) 583-7377.",
    features: [
      {
        title: "Hail Damage Specialists",
        description:
          "Texas hail storms can leave hundreds of dents across your vehicle. Our PDR technicians use specialized tools to massage each dent from behind the panel, restoring your car to pre-storm condition without repainting.",
      },
      {
        title: "Minor Dent & Ding Removal",
        description:
          "Parking lot dings, shopping cart dents, and door impacts are no match for our PDR expertise. We remove minor dents quickly and affordably while preserving your factory paint finish.",
      },
      {
        title: "Maintains Factory Finish",
        description:
          "Unlike traditional body repair, PDR preserves your vehicle's original factory paint - maintaining its value, warranty coverage, and eliminating the risk of color mismatch from repainting.",
      },
    ],
    processSteps: [
      { step: 1, title: "Dent Assessment", description: "We evaluate each dent's size, depth, and location to determine if PDR is the right technique or if traditional repair is needed." },
      { step: 2, title: "Access & Tooling", description: "Our technicians gain access behind the panel using specialized PDR rods and tools, working through existing openings in the body." },
      { step: 3, title: "Precision Massage", description: "Each dent is carefully massaged from behind, applying precise pressure to restore the panel to its original contour without disturbing the paint." },
      { step: 4, title: "Quality Check", description: "We inspect every repair under specialized lighting to ensure a perfectly smooth surface with no trace of the original damage." },
    ],
    faq: [
      { q: "Is PDR covered by insurance?", a: "Yes - most insurance policies cover paintless dent repair, especially for hail damage. We handle the claims process for you and offer up to $500 in deductible forgiveness." },
      { q: "How long does PDR take?", a: "Minor dents can be repaired same-day in as little as 1\u20132 hours. Extensive hail damage may take 2\u20133 days depending on the number of dents." },
      { q: "Will PDR damage my paint?", a: "No - that's the entire point of PDR. The process preserves your factory paint finish completely, which is why it's the preferred method for minor dent removal." },
      { q: "What dents can't be fixed with PDR?", a: "PDR works best on dents where the paint is intact and the metal isn't creased or stretched. Very sharp creases, large dents, or dents on body lines may require traditional repair." },
    ],
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    shortName: "Headlight Restoration",
    iconName: "sun",
    heroImage: "14",
    metaTitleTemplate: "Headlight Restoration in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Professional headlight restoration in {city}, TX. {uniqueHook}. UV sealant protection included. Call (469) 583-7377.",
    features: [
      {
        title: "Oxidation & Yellowing Removal",
        description:
          "Texas sun breaks down polycarbonate headlight lenses over time, causing yellowing, hazing, and reduced light output. Our multi-stage process removes all oxidation to restore crystal clarity.",
      },
      {
        title: "Multi-Stage Wet Sanding",
        description:
          "We use progressive wet sanding grits followed by machine polishing to remove surface damage layer by layer, achieving optical clarity without replacing the entire headlight assembly.",
      },
      {
        title: "UV Protection Sealant",
        description:
          "After restoration, we apply a professional-grade UV-resistant sealant that protects your headlights from future oxidation and yellowing for 2\u20133 years, keeping them clear and bright.",
      },
    ],
    processSteps: [
      { step: 1, title: "Inspection", description: "We assess the severity of oxidation, yellowing, and any cracks or moisture intrusion in your headlight assemblies." },
      { step: 2, title: "Wet Sanding", description: "Progressive wet sanding from coarse to fine grits removes the damaged outer layer of the polycarbonate lens." },
      { step: 3, title: "Polish & Clarity", description: "Machine polishing restores optical clarity, maximizing light output and improving nighttime visibility." },
      { step: 4, title: "UV Sealant", description: "A professional UV-resistant sealant is applied to protect against future sun damage and keep headlights clear." },
    ],
    faq: [
      { q: "How long does headlight restoration take?", a: "Most headlight restorations are completed in 1\u20132 hours. It's one of our quickest services - you can often wait while we work." },
      { q: "Is restoration better than replacing headlights?", a: "In most cases, yes. Restoration costs a fraction of replacement (new assemblies can cost $200\u2013$800+ each) and delivers comparable clarity. We'll recommend replacement only if the lens is cracked or has internal moisture damage." },
      { q: "Will restored headlights pass Texas inspection?", a: "Absolutely. Our restoration process brings headlights back to like-new clarity, which easily meets Texas safety inspection requirements for light output." },
      { q: "How long do results last?", a: "With our UV sealant protection, restored headlights stay clear for 2\u20133 years. We recommend reapplying sealant after that to maintain protection." },
    ],
  },
  {
    slug: "lease-return-reconditioning",
    name: "Lease Return Reconditioning",
    shortName: "Lease Return Prep",
    iconName: "refresh",
    heroImage: "15",
    metaTitleTemplate: "Lease Return Reconditioning in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Lease return reconditioning in {city}, TX. {uniqueHook}. Avoid excess wear charges. Call (469) 583-7377.",
    features: [
      {
        title: "Pre-Inspection Assessment",
        description:
          "We perform the same inspection dealerships use at lease-end, identifying every item that could trigger excess wear charges - so you know exactly what to fix before turn-in.",
      },
      {
        title: "Scuffs & Scratch Repair",
        description:
          "We repair paint scratches, scuffs, key marks, and chips that would be flagged during lease inspection. Our color-matching technology ensures invisible repairs that pass scrutiny.",
      },
      {
        title: "Dings & Bumper Reconditioning",
        description:
          "Door dings, parking lot dents, bumper scuffs, and curb rash on bumper corners are all addressed. We restore these high-visibility areas to lease-return standards.",
      },
    ],
    processSteps: [
      { step: 1, title: "Lease Inspection", description: "We evaluate your vehicle using dealership lease-return standards, documenting every item that could incur charges." },
      { step: 2, title: "Repair Plan", description: "We present a prioritized repair list comparing our costs vs. the dealer's excess wear charges - you choose what to fix." },
      { step: 3, title: "Reconditioning", description: "Our team addresses scratches, dents, bumper damage, and any other flagged items to bring your vehicle to return-ready condition." },
      { step: 4, title: "Final Review", description: "A final inspection ensures every repair meets lease-return standards, giving you confidence at turn-in." },
    ],
    faq: [
      { q: "When should I get my lease car inspected?", a: "Ideally 4\u20136 weeks before your lease-end date. This gives us time to complete any repairs before the dealership's pre-return inspection." },
      { q: "How much can I save vs. dealer charges?", a: "Dealers typically charge 2\u20133x what an independent body shop charges for the same repairs. Our customers routinely save $500\u2013$2,000+ by reconditioning before turn-in." },
      { q: "What counts as 'excess wear' on a lease?", a: "Common flags include scratches longer than 2 inches, dents larger than a quarter, bumper scuffs, wheel damage, and interior stains or tears. Standards vary by manufacturer." },
      { q: "Do you handle all lease brands?", a: "Yes - we're experienced with lease-return standards for Toyota, Honda, BMW, Mercedes-Benz, Lexus, Ford, Chevrolet, and all other manufacturers." },
    ],
  },
];

/** Helper to get a service by slug */
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null;
}
