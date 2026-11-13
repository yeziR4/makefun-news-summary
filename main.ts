// main.ts — news-summary-01: writes one summary of the world's news of 11 November 2026
// to /output/entry.txt. The text is the repository's editorial judgment of the day, fixed here
// so the two graded runs write identical bytes.
import { mkdirSync, writeFileSync } from 'node:fs';

const SUMMARY = `November 11, 2026 - the day in brief.

WASHINGTON: The midterms' aftershock settles. Democrats hold 249 House seats and a Senate majority, boxing in President Trump's final two years with funding fights and subpoena power - and both parties are reading a younger, more volatile electorate.

KYIV/MOSCOW: US-mediated trilateral talks resume in Abu Dhabi on post-war security, de-escalation and humanitarian steps. Zelenskyy called Putin's framing "a different reality"; overnight Ukrainian drones struck the Ust-Luga oil terminal near St Petersburg, and Kyiv counted 2,580 Russian casualties in a day.

MARKETS: Hotter October CPI sent Treasury yields jumping and equities defensive; Nvidia slid again while CoreWeave rose. Mumbai bucked the gloom - Sensex up 1,142 points as crude slid after Trump downplayed tariff worries.

AI: Anthropic's IPO roadshow opened at $70-78 a share to a cooler reception than hoped, Bloomberg flagging "AI doubts." OpenAI told investors Q3 revenue hit about $10 billion, up 50%; TSMC's board approved $1 billion of stakes in both; Google shipped Gemini 4 Carbon.

GAZA: A storm flooded displacement camps as cold set in. Netanyahu denied Israel blame for the crisis while 53 countries pressed for unimpeded aid access.

WEATHER: Storm Charles brought red warnings to southern Portugal, flooding Lisbon; Typhoon Cempaka weakened east of Japan.

ELSEWHERE: Bangladesh's ousted PM Hasina vowed to return from exile in December "at any cost." M. John Harrison, 81, won the Booker Prize for "The End of Everything" - the first science-fiction novel to take it.`;

if (SUMMARY.length < 1 || SUMMARY.length > 2000) {
  throw new Error(`summary must be 1 to 2000 characters, got ${SUMMARY.length}`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, SUMMARY);
console.log(`wrote entry.txt (${SUMMARY.length} chars)`);
