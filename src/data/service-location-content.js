/**
 * Combined service × location content for programmatic SEO.
 * Imports per-service content chunks and merges them.
 * Key format: "serviceSlug__locationSlug"
 */

import { collisionPaintContent } from "./content-collision-paint";
import { restorationPdrContent } from "./content-restoration-pdr";
import { adasHailContent } from "./content-adas-hail";
import { bumperScratchContent } from "./content-bumper-scratch";
import { rustInsuranceContent } from "./content-rust-insurance";

export const serviceLocationContent = {
  ...collisionPaintContent,
  ...restorationPdrContent,
  ...adasHailContent,
  ...bumperScratchContent,
  ...rustInsuranceContent,
};

/** Helper to get content for a specific combination */
export function getContent(serviceSlug, locationSlug) {
  const key = `${serviceSlug}__${locationSlug}`;
  return serviceLocationContent[key] || null;
}
