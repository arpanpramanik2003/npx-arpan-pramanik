const chalk = require("chalk");
const boxen = require("boxen");
const config = require("../config");
const { openUrl } = require("../utils");

module.exports = async () => {
    const url = config.website;

    console.log(
        boxen(
            `🌐 Portfolio Website

Opening web portfolio in browser:

${chalk.cyan(url)}`,
            {
                title: " PORTFOLIO ",
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "magenta",
                padding: 1,
                margin: 1
            }
        )
    );

    await openUrl(url);
};
