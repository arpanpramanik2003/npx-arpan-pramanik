const chalk = require("chalk");
const boxen = require("boxen");
const config = require("../config");
const { openUrl } = require("../utils");

module.exports = async () => {
    const url = config.website;
    const cols = process.stdout.columns || 80;

    console.log(
        boxen(
            `🌐 Web Portfolio\n\nOpening web portfolio in browser:\n\n${chalk.cyan(url)}`,
            {
                title: " PORTFOLIO ",
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "magenta",
                padding: cols < 50 ? 0 : 1,
                margin: cols < 50 ? 0 : 1
            }
        )
    );

    await openUrl(url);
};
