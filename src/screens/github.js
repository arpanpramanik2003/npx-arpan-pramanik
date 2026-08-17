const chalk = require("chalk");
const boxen = require("boxen");
const config = require("../config");
const { openUrl } = require("../utils");

module.exports = async () => {
    const url = config.github;
    const cols = process.stdout.columns || 80;

    console.log(
        boxen(
            `🐙 GitHub Profile\n\nOpening GitHub profile in browser:\n\n${chalk.cyan(url)}`,
            {
                title: " GITHUB ",
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "cyan",
                padding: cols < 50 ? 0 : 1,
                margin: cols < 50 ? 0 : 1
            }
        )
    );

    await openUrl(url);
};
