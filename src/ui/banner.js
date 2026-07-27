const figlet = require("figlet");
const gradient = require("gradient-string");
const chalk = require("chalk");

function renderBanner(text = "ARPAN") {
    console.log(
        gradient.atlas.multiline(
            figlet.textSync(text, {
                horizontalLayout: "default"
            })
        )
    );
}

function renderHeader(title, subtitle) {
    renderBanner(title);
    if (subtitle) {
        console.log(chalk.cyan.bold(subtitle));
    }
}

module.exports = {
    renderBanner,
    renderHeader
};
