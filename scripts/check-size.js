const fs = require("node:fs");

console.log("Validating package size and bundle budget...");

const bundlePath = "dist/index.js";
if (!fs.existsSync(bundlePath)) {
    console.error("FAIL: dist/index.js not found. Build before running size check.");
    process.exit(1);
}

const stats = fs.statSync(bundlePath);
const sizeKb = stats.size / 1024;
const MAX_BUNDLE_KB = 250;

console.log(`Current bundle size: ${sizeKb.toFixed(2)} kB (Max budget: ${MAX_BUNDLE_KB} kB)`);

if (sizeKb > MAX_BUNDLE_KB) {
    console.error(`FAIL: Bundle size ${sizeKb.toFixed(2)} kB exceeds budget of ${MAX_BUNDLE_KB} kB`);
    process.exit(1);
}

console.log("✔ Package size validation PASSED.");
