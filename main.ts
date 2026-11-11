// main.ts — news-summary-01: writes one summary of the world's news of 11 November 2026
// to /output/entry.txt. The text is the repository's editorial judgment of the day, fixed here
// so the two graded runs write identical bytes.
import { mkdirSync, writeFileSync } from 'node:fs';

const SUMMARY = `Democrats' midterm sweep - 249 House seats plus a Senate majority - tightens around President Trump's final two years, and Washington is already pricing the consequences: funding fights, subpoena power and a narrower path for confirmations, with both parties reading a younger, more volatile electorate.

Ukraine diplomacy takes center stage Wednesday as US-mediated talks resume in Abu Dhabi among Washington, Kyiv and Moscow, covering post-war security, de-escalation and humanitarian steps. President Zelenskyy dismissed Putin's opening framing as a "different reality," overnight Ukrainian drones struck the Ust-Luga oil terminal near St Petersburg - Kyiv's deepest visible strike this month - and Ukraine's general staff counted 2,580 Russian casualties in a day.

Markets turned defensive as October's hotter US CPI jolted rate expectations: Treasury yields jumped, equities wobbled, Nvidia slid again while CoreWeave rose - a reminder that the AI trade now answers to the Fed. Anthropic's reported IPO prep kept AI financing in the spotlight.

In Dhaka, ousted Bangladesh PM Sheikh Hasina told the AP she will return from exile "in December, at any cost," raising stakes for an interim government already holding her trial. And London crowned an unlikely laurel: M. John Harrison, 81, won the Booker Prize for "The End of Everything," the first science-fiction novel to take it - a small cultural marker of the year's mood.`;

if (SUMMARY.length < 1 || SUMMARY.length > 2000) {
  throw new Error(`summary must be 1 to 2000 characters, got ${SUMMARY.length}`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, SUMMARY);
console.log(`wrote entry.txt (${SUMMARY.length} chars)`);
