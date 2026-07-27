const chalk = require("chalk");
const boxen = require("boxen");
const config = require("../config");
const { openUrl } = require("../utils");

module.exports = async () => {
    const url = config.linkedin;

    console.log(
        boxen(
            `💼 LinkedIn Profile

Opening LinkedIn profile in browser:

${chalk.cyan(url)}`,
            {
                title: " LINKEDIN ",
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "blue",
                padding: 1,
                margin: 1
            }
        )
    );

    await openUrl(url);
};
