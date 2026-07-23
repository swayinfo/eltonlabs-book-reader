/*
 * patch-pdfjs.cjs — restore sentence-ending punctuation dropped by pdf.js.
 *
 * WHY THIS EXISTS
 * ---------------
 * Some PDFs ship a broken ToUnicode map where a glyph decodes to a MULTI-char
 * string that starts with a space, e.g. the full stop comes through as " ."
 * (space + period) instead of ".". pdf.js's text extractor classifies any glyph
 * whose unicode STARTS with whitespace as pure whitespace and emits a single
 * space, throwing the period away. Result: whole books lose every sentence
 * period ("единицы Она" instead of "единицы. Она").
 *
 * The check lives in pdf.worker.js:
 *     const SpecialCharRegExp = new RegExp("^(\\s)|(\\p{Mn})|(\\p{Cf})$", "u");
 * `^(\s)` matches on the FIRST char only. The fix requires the WHOLE string to be
 * whitespace before treating the glyph as a space:
 *     ...                        "^(\\s+)$|(\\p{Mn})|(\\p{Cf})$"
 * Pure spaces (" ", "\r\n") still count as whitespace; " ." no longer does, so
 * the period survives. Verified on 30 books: the two affected titles regained
 * all their periods and nothing else changed.
 *
 * pdf.worker.js is vendored (copied from node_modules at build time), so a fresh
 * `npm install` reverts it. Run this script after install / before shipping:
 *     node patch-pdfjs.cjs
 * It is idempotent and patches every worker copy it can find.
 */
const fs = require("fs");
const path = require("path");

const OLD = '"^(\\\\s)|(\\\\p{Mn})|(\\\\p{Cf})$"';   // literal in file: "^(\\s)|(\\p{Mn})|(\\p{Cf})$"
const NEW = '"^(\\\\s+)$|(\\\\p{Mn})|(\\\\p{Cf})$"';  // literal in file: "^(\\s+)$|(\\p{Mn})|(\\p{Cf})$"

const targets = [
  "pdf.worker.js",                                        // the shipped worker
  "node_modules/pdfjs-dist/build/pdf.worker.js",          // source the build copies
  "node_modules/pdfjs-dist/legacy/build/pdf.worker.js",   // legacy build (tests)
];

let patched = 0, already = 0, missing = 0;
for (const rel of targets) {
  const p = path.resolve(__dirname, rel);
  if (!fs.existsSync(p)) { console.warn("  skip (not found):", rel); missing++; continue; }
  let s = fs.readFileSync(p, "utf8");
  if (s.includes(NEW)) { console.log("  already patched:", rel); already++; continue; }
  const n = s.split(OLD).length - 1;
  if (n === 0) { console.warn("  PATTERN NOT FOUND (pdf.js version changed?):", rel); missing++; continue; }
  fs.writeFileSync(p, s.split(OLD).join(NEW));
  console.log(`  patched ${n}x:`, rel);
  patched++;
}
console.log(`\npatch-pdfjs: ${patched} patched, ${already} already ok, ${missing} skipped.`);
if (missing && !patched && !already) process.exit(1);
