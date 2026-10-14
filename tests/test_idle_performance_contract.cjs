const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "src");
const jsFiles = fs.readdirSync(src).filter(file => file.endsWith(".js"));
const forbidden = [
  ["setInterval", /\bsetInterval\s*\(/],
  ["requestAnimationFrame", /\brequestAnimationFrame\s*\(/],
  ["Worker construction", /\bnew\s+Worker\s*\(/]
];
for (const file of jsFiles) {
  const content = fs.readFileSync(path.join(src, file), "utf8");
  for (const [label, pattern] of forbidden) {
    assert.equal(pattern.test(content), false,
      `${file} must not schedule a permanent idle loop (${label}) without a measured performance case.`);
  }
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)].map(match => match[1]);
assert.equal(new Set(scripts).size, scripts.length, "Each JavaScript module must be loaded exactly once.");

const css = fs.readFileSync(path.join(src, "styles.css"), "utf8");
assert.match(css, /content-visibility\s*:\s*auto/i, "Long archive lists should defer off-screen painting.");
assert.match(css, /prefers-reduced-motion\s*:\s*reduce/i, "Motion settings must respect the operating system preference.");

process.stdout.write(`PASS idle performance contract: ${jsFiles.length} source modules have no permanent timer/frame/worker loop; ${scripts.length} script imports are unique.\n`);
