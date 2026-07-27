const open = require("open");
const chalk = require("chalk");

/**
 * Safely opens a URL in the default browser.
 * @param {string} url - Target URL to open.
 */
async function openUrl(url) {
    if (!url) return;
    try {
        console.log(chalk.gray(`Opening ${url}...`));
        await open(url);
    } catch (err) {
        console.log(chalk.yellow(`Could not open browser automatically. Please visit: ${url}`));
    }
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
    sleep
};
