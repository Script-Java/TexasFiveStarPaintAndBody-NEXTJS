/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const baseUrl = 'https://texasfivestarpaintandbody.com'

  // Core pages
  const corePages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/services/collision-repair`, lastModified: new Date() },
    { url: `${baseUrl}/services/custom-paint-refinishing`, lastModified: new Date() },
    { url: `${baseUrl}/services/auto-restoration`, lastModified: new Date() },
    { url: `${baseUrl}/services/paintless-dent-repair`, lastModified: new Date() },
    { url: `${baseUrl}/services/scratch-paint-chip-repair`, lastModified: new Date() },
    { url: `${baseUrl}/services/bumper-repair`, lastModified: new Date() },
    { url: `${baseUrl}/services/adas-calibration`, lastModified: new Date() },
    { url: `${baseUrl}/services/rust-repair`, lastModified: new Date() },
    { url: `${baseUrl}/services/auto-insurance-claim-repair`, lastModified: new Date() },
    { url: `${baseUrl}/services/hail-repair`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/before-and-after`, lastModified: new Date() },
  ]

  // Location hub + city hubs + leaf pages
  const citySlugs = ['garland', 'richardson', 'mesquite', 'sachse', 'rowlett', 'murphy', 'wylie', 'plano', 'sunnyvale', 'rockwall', 'balch-springs', 'dallas']
  const serviceSlugs = [
    'collision-repair',
    'custom-paint-refinishing',
    'auto-restoration',
    'paintless-dent-repair',
    'scratch-paint-chip-repair',
    'bumper-repair',
    'adas-calibration',
    'rust-repair',
    'auto-insurance-claim-repair',
    'hail-repair',
  ]

  // Global locations hub
  const locationPages = [
    { url: `${baseUrl}/locations`, lastModified: new Date() },
  ]

  // City hubs: /locations/[city]
  for (const city of citySlugs) {
    locationPages.push({
      url: `${baseUrl}/locations/${city}`,
      lastModified: new Date(),
    })
  }

  // Leaf pages: /locations/[city]/[service] (72 combos)
  for (const city of citySlugs) {
    for (const svc of serviceSlugs) {
      locationPages.push({
        url: `${baseUrl}/locations/${city}/${svc}`,
        lastModified: new Date(),
      })
    }
  }

  return [...corePages, ...locationPages]
}
