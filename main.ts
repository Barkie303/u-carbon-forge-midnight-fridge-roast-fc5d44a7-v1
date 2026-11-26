// Midnight Fridge Roast — entry for make.fun
// u-carbon-forge-midnight-fridge-roast-fc5d44a7
// Writes one line (1-200 chars) to /output/entry.txt: a roast of a smart
// fridge that refuses to open after midnight. The laugh comes from the
// fridge's petty little rule: it guards leftovers like a velvet rope.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "My fridge locks at midnight like a nightclub bouncer — my 2 a.m. sandwich isn't on the list.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
