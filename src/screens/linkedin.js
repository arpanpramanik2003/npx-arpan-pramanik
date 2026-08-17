const chalk = require("chalk");
const boxen = require("boxen");
const config = require("../config");
const { openUrl } = require("../utils");

module.exports = async () => {
    const url = config.linkedin;
    const cols = process.stdout.columns || 80;

    console.log(
        boxen(
            `💼 LinkedIn Profile\n\nOpening LinkedIn profile in browser:\n\n${chalk.cyan(url)}`,
            {
                title: " LINKEDIN ",
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "blue",
                padding: cols < 50 ? 0 : 1,
                margin: cols < 50 ? 0 : 1
            }
        )
    );

    await openUrl(url);
};
