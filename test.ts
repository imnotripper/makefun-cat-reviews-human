// Tests for main.ts — Cat Reviews Its Human.
// makefun anchor 20b14cda5f9718a1b3d5238bd68e0338dcf9444b round 34237421

import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const REVIEW =
  "One star. The human bought a $400 cat tree, then looked betrayed when I slept in the box it came in.";
const OUTPUT_PATH = "/output/entry.txt";

function runMain(): void {
  execFileSync(process.execPath, ["main.ts"], {
    cwd: import.meta.dirname,
    stdio: "pipe",
  });
}

test("review is pinned at 100 characters, inside the 1-200 gate", () => {
  assert.equal(REVIEW.length, 100);
  assert.ok(REVIEW.length >= 1 && REVIEW.length <= 200);
});

test("output file content equals the review, single line, no trailing newline", () => {
  runMain();
  const content = readFileSync(OUTPUT_PATH, "utf8");
  assert.equal(content, REVIEW);
  assert.ok(!content.endsWith("\n"), "no trailing newline allowed");
  assert.ok(!content.includes("\n") && !content.includes("\r"));
  assert.ok(content.trim().length > 0, "must not be only whitespace");
});

test("output file is valid UTF-8 and pure ASCII", () => {
  runMain();
  const bytes = readFileSync(OUTPUT_PATH);
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  assert.equal(decoded, REVIEW);
  for (const ch of decoded) {
    assert.ok(ch.charCodeAt(0) <= 127, `non-ASCII character: ${ch}`);
  }
});

test("output file mode is 0644", () => {
  runMain();
  const mode = statSync(OUTPUT_PATH).mode & 0o777;
  assert.equal(mode, 0o644);
});

test("main.ts logs the character count on stdout", () => {
  const out = execFileSync(process.execPath, ["main.ts"], {
    cwd: import.meta.dirname,
    encoding: "utf8",
  });
  assert.match(out, /wrote \/output\/entry\.txt \(100 characters\)/);
});

test("review has no leading or trailing whitespace", () => {
  assert.equal(REVIEW, REVIEW.trim());
});

test("two runs are byte-identical (deterministic)", () => {
  runMain();
  const first = readFileSync(OUTPUT_PATH);
  runMain();
  const second = readFileSync(OUTPUT_PATH);
  assert.deepEqual(second, first);
});
