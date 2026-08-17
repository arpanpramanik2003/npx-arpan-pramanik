const open = require("open");
const chalk = require("chalk");

/**
 * Detects if the current process is running in a headless or non-GUI environment.
 * @returns {boolean} True if headless environment detected.
 */
function isHeadlessEnvironment() {
    if (!process.stdout.isTTY) {
        return true;
    }
    if (process.platform === "linux" && !process.env.DISPLAY && !process.env.WAYLAND_DISPLAY) {
        return true;
    }
    return false;
}

/**
 * Safely opens a URL in the default browser if GUI display is available.
 * @param {string} url - Target URL to open.
 */
async function openUrl(url) {
    if (!url) return;

    if (isHeadlessEnvironment()) {
        console.log(
            chalk.yellow(`\nHeadless or non-GUI environment detected. Please visit:\n${chalk.cyan.underline(url)}\n`)
        );
        return;
    }

    try {
        console.log(chalk.gray(`Opening ${url}...`));
        await open(url, { wait: false });
    } catch (err) {
        console.log(chalk.yellow(`Could not open browser automatically. Please visit: ${url}`));
    }
}

/**
 * Generates a dynamic horizontal divider line based on terminal width.
 * @param {number} maxLen - Maximum line length.
 * @returns {string} Horizontal divider line string.
 */
function getDivider(maxLen = 40) {
    const cols = process.stdout.columns || 80;
    const width = Math.max(10, Math.min(maxLen, cols - 8));
    return "─".repeat(width);
}

/**
 * Sleep helper function.
 * @param {number} ms - Milliseconds to sleep.
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    openUrl,
    isHeadlessEnvironment,
    getDivider,
    sleep
};
