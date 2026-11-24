// makefun anchor 20b14cda5f9718a1b3d5238bd68e0338dcf9444b round 34237421
//
// Cat Reviews Its Human — deterministic emitter.
// Writes one funny single-line one-star review from a house cat about its
// human to /output/entry.txt. No network, no randomness, no clock.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. The human bought a $400 cat tree, then looked betrayed when I slept in the box it came in.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate: 1-200 characters, non-blank, single line (no \n or \r), pure ASCII.
  if (REVIEW.length < 1 || REVIEW.length > MAX_CHARS) {
    throw new Error(
      `review must be 1-${MAX_CHARS} characters, got ${REVIEW.length}`,
    );
  }
  if (REVIEW.trim().length === 0) {
    throw new Error("review must not be only whitespace");
  }
  if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
    throw new Error("review must be a single line");
  }
  if (REVIEW !== REVIEW.trim()) {
    throw new Error("review must not start or end with whitespace");
  }
  for (const ch of REVIEW) {
    if (ch.charCodeAt(0) > 127) {
      throw new Error(`review must be pure ASCII, found ${JSON.stringify(ch)}`);
    }
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, REVIEW, "utf8");
  chmodSync(OUTPUT_PATH, 0o644);

  // Read back and fail loudly if the bytes differ.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== REVIEW) {
    throw new Error("verification failed: /output/entry.txt does not match review");
  }

  console.log(`wrote ${OUTPUT_PATH} (${REVIEW.length} characters)`);
}

main();
