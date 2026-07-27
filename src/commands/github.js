const chalk = require("chalk");
const boxen = require("boxen");
const config = require("../config");
const { openUrl } = require("../utils");

module.exports = async () => {
    const url = config.github;

    console.log(
        boxen(
            `🐙 GitHub Profile

Opening GitHub profile in browser:

${chalk.cyan(url)}`,
            {
                title: " GITHUB ",
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "cyan",
                padding: 1,
                margin: 1
            }
        )
    );

    await openUrl(url);
};
