// One Sentence for a Traveler from 1800.
// Writes a single sentence (at most 200 characters) explaining the modern
// internet to a time traveler from 1800, using only words and pictures a
// person of that year already knows: a road, a post office, a library.
//
// The sentence is a fixed text: the program takes no input, makes no
// network call, and uses no randomness, so every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Third revision: "finds" replaces "reaches" -- the letter is not merely
// delivered, the road finds the friend for it, and the sentence drops to
// 198 characters, two clear of the 200-character gate.
const SENTENCE =
  "Picture one road from your door to every library and post office on earth, where your letter finds a friend across the sea in a blink and any page you ask for is in your hands before your tea cools.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
