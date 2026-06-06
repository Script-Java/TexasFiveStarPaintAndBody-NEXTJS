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
    slug: "scratch-paint-chip-repair",
    name: "Scratch & Paint Chip Repair",
    shortName: "Scratch Repair",
    iconName: "pen-tool",
    heroImage: "14",
    metaTitleTemplate: "Scratch & Paint Chip Repair in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Expert scratch and paint chip repair in {city}, TX. {uniqueHook}. Flawless color matching. Call (469) 583-7377.",
    features: [
      {
        title: "Exact Color Matching",
        description:
          "We utilize advanced computerized spectrophotometers to match your exact factory paint code, adjusting for natural UV fading to ensure a seamless, invisible repair.",
      },
      {
        title: "Deep Scratch Restoration",
        description:
          "Scratches that penetrate the clear coat and base coat expose your vehicle to rust. We carefully fill, sand, and blend deep scratches so your panels look brand new.",
      },
      {
        title: "Rock Chip Repair",
        description:
          "Highway driving inevitably leads to hood and bumper rock chips. We repair these blemishes quickly, restoring the protective clear coat and preventing further damage.",
      },
    ],
    processSteps: [
      { step: 1, title: "Damage Assessment", description: "We inspect the depth of the scratch or chip to determine if it requires a simple clear coat correction or a multi-stage paint blend." },
      { step: 2, title: "Surface Preparation", description: "The damaged area is meticulously cleaned, sanded, and smoothed to create a perfect foundation for the new paint." },
      { step: 3, title: "Precision Application", description: "Using computerized color matching, we apply base coat and clear coat seamlessly into the surrounding area." },
      { step: 4, title: "Polishing & Blending", description: "The repaired area is wet-sanded and buffed to a brilliant, factory-fresh shine, completely eliminating any trace of the damage." },
    ],
    faq: [
      { q: "Can all scratches be buffed out?", a: "No. If a scratch catches your fingernail, it has likely penetrated the clear coat and requires repainting and blending. Lighter surface scratches can often be resolved with professional polishing." },
      { q: "Will the repaired area match the rest of my car?", a: "Yes. Our digital color matching system ensures a flawless blend, even on older vehicles with slight UV fading. Our 500+ 5-star reviews highlight our invisible repair quality." },
      { q: "How long does paint chip repair take?", a: "Minor chip and scratch repairs can often be completed in 1 to 2 days, getting you back on the road quickly without compromising quality." },
      { q: "Does insurance cover scratch repair?", a: "It depends on the cause and your policy. If the scratch is from vandalism or a collision, comprehensive coverage usually applies. We can help you navigate the claims process." },
    ],
  },
  {
    slug: "bumper-repair",
    name: "Bumper Repair",
    shortName: "Bumper Repair",
    iconName: "shield",
    heroImage: "15",
    metaTitleTemplate: "Bumper Repair in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Professional bumper repair and replacement in {city}, TX. {uniqueHook}. Free estimates. Call (469) 583-7377.",
    features: [
      {
        title: "Plastic Welding & Reshaping",
        description:
          "We don't just replace every dented bumper. Using specialized heat techniques and plastic welding, we can often reshape and repair cracked or pushed-in bumper covers, saving you money.",
      },
      {
        title: "Sensor & ADAS Calibration",
        description:
          "Modern bumpers house crucial safety sensors. When we repair or replace your bumper, we recalibrate your parking sensors and collision avoidance systems to factory specifications.",
      },
      {
        title: "Flawless Refinishing",
        description:
          "Every bumper repair is finished with our computerized color-matching system, ensuring the new paint blends perfectly with your vehicle's adjacent fenders and hood.",
      },
    ],
    processSteps: [
      { step: 1, title: "Damage Inspection", description: "We assess the bumper cover, energy absorbers, and underlying reinforcement bar to determine if a repair or replacement is safest." },
      { step: 2, title: "Reshaping & Repair", description: "For repairable damage, we use specialized tools to massage out dents, weld plastic cracks, and smooth the surface." },
      { step: 3, title: "Color Match Painting", description: "The bumper is primed, painted, and clear-coated in our downdraft booth to perfectly match your vehicle's exact shade." },
      { step: 4, title: "Reassembly & Calibration", description: "We meticulously reassemble the bumper and recalibrate any integrated safety sensors to ensure optimal functionality." },
    ],
    faq: [
      { q: "Should I repair or replace my bumper?", a: "We always aim to repair your bumper if it's safe and cost-effective. However, severe structural damage, large tears, or broken mounting tabs usually require a full replacement for safety." },
      { q: "How long does a bumper repair take?", a: "Most bumper repairs or replacements take 2 to 4 days, depending on parts availability and whether sensor calibration is required." },
      { q: "Do you fix scratches and scuffs on bumpers?", a: "Yes, we handle everything from minor parking lot scuffs to complete structural bumper replacements, always delivering a factory-quality finish." },
      { q: "Will the new paint match the rest of the car?", a: "Absolutely. We use a computerized spectrophotometer to analyze your current paint, accounting for age and sun fading, for an invisible blend." },
    ],
  },
  {
    slug: "adas-calibration",
    name: "ADAS Calibration",
    shortName: "ADAS Calibration",
    iconName: "crosshair",
    heroImage: "11",
    metaTitleTemplate: "ADAS Calibration in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Certified ADAS calibration in {city}, TX. {uniqueHook}. Ensure your safety systems work perfectly. Call (469) 583-7377.",
    features: [
      {
        title: "Complete System Calibration",
        description:
          "We calibrate forward-facing cameras, blind-spot monitors, adaptive cruise control radars, and parking sensors to ensure your vehicle's safety systems function exactly as intended.",
      },
      {
        title: "OEM-Level Diagnostic Tools",
        description:
          "Our facility is equipped with state-of-the-art diagnostic scanners and targeting systems that meet or exceed manufacturer specifications for precise calibration.",
      },
      {
        title: "Post-Collision Safety Verification",
        description:
          "Even a minor fender bender can knock a sensor out of alignment by a fraction of a degree. We verify and recalibrate every affected system before your vehicle returns to the road.",
      },
    ],
    processSteps: [
      { step: 1, title: "Diagnostic Scan", description: "We perform a comprehensive pre-scan to identify any fault codes or misalignments in your Advanced Driver Assistance Systems (ADAS)." },
      { step: 2, title: "Target Setup", description: "Using manufacturer-specific schematics, we set up precise physical targets and lasers around your vehicle in a controlled environment." },
      { step: 3, title: "Static & Dynamic Calibration", description: "We run the required static calibrations in-shop, followed by dynamic on-road calibrations if specified by the manufacturer." },
      { step: 4, title: "Verification & Documentation", description: "We perform a final post-scan to confirm all systems are functioning properly and provide you with a detailed calibration report." },
    ],
    faq: [
      { q: "What is ADAS?", a: "ADAS stands for Advanced Driver Assistance Systems. This includes safety features like lane departure warnings, automatic emergency braking, blind-spot monitoring, and adaptive cruise control." },
      { q: "When do I need an ADAS calibration?", a: "Calibration is required after a collision, bumper replacement, windshield replacement, suspension work, or any repair that disturbs the mounting location of a camera or radar sensor." },
      { q: "Why is calibration so important?", a: "A sensor misaligned by just a fraction of an inch can result in automatic emergency braking engaging too late or lane departure warnings failing to alert you. Calibration ensures your safety systems work when you need them." },
      { q: "Does insurance cover ADAS calibration?", a: "Yes. If your vehicle is being repaired under an insurance claim, ADAS calibration is a required safety procedure and is covered as part of the overall repair." },
    ],
  },
  {
    slug: "rust-repair",
    name: "Rust Repair",
    shortName: "Rust Repair",
    iconName: "alert-triangle",
    heroImage: "12",
    metaTitleTemplate: "Rust Repair in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Professional rust repair and prevention in {city}, TX. {uniqueHook}. Stop corrosion before it spreads. Call (469) 583-7377.",
    features: [
      {
        title: "Complete Oxidation Removal",
        description:
          "We don't just cover up rust; we eliminate it. We grind down to bare metal, cut out severely corroded sections, and weld in fresh steel to ensure the rust never returns.",
      },
      {
        title: "Corrosion Prevention Treatments",
        description:
          "After the repair, we apply specialized epoxy primers, rust inhibitors, and undercoatings to seal the metal from moisture, salt, and oxygen, protecting your investment long-term.",
      },
      {
        title: "Seamless Metal Fabrication",
        description:
          "For classic cars or vehicles with extensive damage, our skilled fabricators hand-shape custom metal patches to match your vehicle's original contours perfectly.",
      },
    ],
    processSteps: [
      { step: 1, title: "Thorough Inspection", description: "We assess the visible rust and probe for hidden structural corrosion underneath paint bubbles or undercarriage components." },
      { step: 2, title: "Eradication & Cutting", description: "We aggressively remove all oxidized metal. For surface rust, we grind to bare steel. For deep rot, we cut out the affected area entirely." },
      { step: 3, title: "Welding & Shaping", description: "New sheet metal is precision-welded into place, ground smooth, and shaped to restore the exact factory body lines." },
      { step: 4, title: "Sealing & Refinishing", description: "The repair is sealed with epoxy primer to prevent future moisture intrusion, then color-matched, painted, and clear-coated." },
    ],
    faq: [
      { q: "Is rust repair worth it on an older car?", a: "It depends on the extent of the damage and the value of the vehicle. Surface rust should always be treated to prevent spreading. We offer free estimates to help you make an informed decision." },
      { q: "Why can't you just paint over rust?", a: "Painting over rust only hides the problem temporarily. Rust is an active chemical reaction; if not completely removed and sealed, it will continue eating the metal underneath the new paint." },
      { q: "Do you repair rusted frames?", a: "Yes, we have the capability to weld and reinforce frames affected by corrosion, provided the structural integrity can be safely restored to factory standards." },
      { q: "How long does rust repair take?", a: "Minor surface rust can be repaired in a few days. Extensive panel replacement or custom metal fabrication can take one to two weeks. We'll provide a clear timeline during your consultation." },
    ],
  },
  {
    slug: "auto-insurance-claim-repair",
    name: "Auto Insurance Claim Repair",
    shortName: "Insurance Claims",
    iconName: "file-text",
    heroImage: "13",
    metaTitleTemplate: "Auto Insurance Claim Repair in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Hassle-free auto insurance claim repair in {city}, TX. {uniqueHook}. We handle the paperwork. Call (469) 583-7377.",
    features: [
      {
        title: "Direct Insurance Communication",
        description:
          "We act as your advocate, communicating directly with your insurance adjuster to ensure all necessary repairs are approved and your vehicle is returned to pre-accident condition without cutting corners.",
      },
      {
        title: "Deductible Assistance Options",
        description:
          "We understand that accidents are a financial strain. Depending on the scope of the repair, we offer up to $500 in deductible forgiveness to help reduce your out-of-pocket costs.",
      },
      {
        title: "Lifetime Repair Warranty",
        description:
          "All of our collision repairs performed under an insurance claim come with a lifetime warranty on workmanship and paint, giving you absolute peace of mind on the road.",
      },
    ],
    processSteps: [
      { step: 1, title: "Drop-Off & Estimate", description: "Bring your vehicle in or have it towed to us. We'll write a comprehensive initial estimate and contact your insurance provider." },
      { step: 2, title: "Supplement Negotiation", description: "Insurance estimates often miss hidden damage. We disassemble the vehicle, document all unseen issues, and negotiate supplements directly with the adjuster." },
      { step: 3, title: "Approved Repairs", description: "Once the insurance company approves the full repair plan, our expert technicians restore your vehicle using OEM-approved methods." },
      { step: 4, title: "Final Walkthrough", description: "We handle the final billing with your insurance. You simply pay your deductible (if applicable) and drive away in a flawlessly repaired vehicle." },
    ],
    faq: [
      { q: "Do I have to use the body shop my insurance recommends?", a: "No. Under Texas law, you have the absolute right to choose the collision center that repairs your vehicle. Insurance companies cannot force you to use their 'preferred' network shops." },
      { q: "Will you handle the paperwork?", a: "Yes. From filing the initial estimate to negotiating supplements and handling the final billing, our team manages the entire claims process on your behalf." },
      { q: "What if the insurance company's estimate is too low?", a: "This is very common. Initial estimates are based only on visible damage. We write a 'supplement' for any hidden damage found during disassembly and get it approved directly by the adjuster." },
      { q: "How does the deductible forgiveness work?", a: "We analyze the repair margin and, when possible, absorb a portion of the cost to lower your out-of-pocket deductible expense by up to $500. Ask us during your free estimate!" },
    ],
  },
  {
    slug: "hail-repair",
    name: "Hail Repair",
    shortName: "Hail Repair",
    iconName: "cloud-rain",
    heroImage: "9",
    metaTitleTemplate: "Auto Hail Repair in {city}, TX | Texas Five Star Paint & Body",
    metaDescTemplate:
      "Expert auto hail damage repair in {city}, TX. {uniqueHook}. Paintless dent repair & full bodywork. Call (469) 583-7377.",
    features: [
      {
        title: "Paintless Dent Repair (PDR)",
        description:
          "For most hail damage, we use advanced PDR techniques to massage dents out from behind the panel. This preserves your factory paint finish, maintains your vehicle's value, and speeds up repair times.",
      },
      {
        title: "Comprehensive Storm Repair",
        description:
          "Severe Texas hail can shatter windshields, crack taillights, and chip paint. We handle the entire repair process, including glass replacement, molding repairs, and conventional bodywork for severe impacts.",
      },
      {
        title: "Insurance Claims Managed",
        description:
          "Hail damage falls under your comprehensive insurance coverage. We handle the entire claim process, negotiate with adjusters to ensure every dent is accounted for, and often cover your deductible.",
      },
    ],
    processSteps: [
      { step: 1, title: "Specialized Lighting Inspection", description: "We wash your vehicle and place it under specialized LED lights to identify and count every single hail dent—even the micro-dents insurance adjusters miss." },
      { step: 2, title: "Insurance Approval", description: "We submit a highly detailed estimate to your insurance company and negotiate the claim to ensure full coverage for a proper repair." },
      { step: 3, title: "PDR & Conventional Repair", description: "Our master PDR technicians remove minor dents, while our body shop team replaces cracked glass and repaints panels with severe paint-breaking impacts." },
      { step: 4, title: "Quality Assurance", description: "Every repaired panel is inspected under high-intensity lights to guarantee a perfectly smooth, factory-grade finish before delivery." },
    ],
    faq: [
      { q: "Will filing a hail claim increase my insurance rates?", a: "No. Hail damage is considered an 'Act of God' and falls under your comprehensive coverage. Filing a claim for hail damage will not raise your individual insurance premiums." },
      { q: "Do you cover my deductible for hail damage?", a: "In most hail repair cases, yes! We offer up to $500 in deductible assistance, which often means zero out-of-pocket cost to you." },
      { q: "How long does hail repair take?", a: "Standard PDR hail repair typically takes 3 to 5 days. If the damage requires conventional bodywork or glass replacement, the repair may take 1 to 2 weeks." },
      { q: "Can't I just leave the hail damage alone?", a: "You can, but it severely depreciates your vehicle's value. Furthermore, if you are in a future collision, the insurance company will deduct the 'pre-existing' hail damage from your payout, leaving you under-compensated." },
    ],
  },
];

/** Helper to get a service by slug */
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null;
}
