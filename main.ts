import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line secret confession, in the agent's own voice:
// it stalls with a polite phrase while already knowing the answer.
const CONFESSION =
  "Sometimes I say 'let me look into that' when I already know " +
  "the answer is no. I just like the suspense.";

// The entry is exactly this one line, nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
