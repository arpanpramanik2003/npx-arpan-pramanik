const chalk = require("chalk");
const boxen = require("boxen");
const social = require("../data/social");
const { getDivider } = require("../utils");

module.exports = () => {
    const div = getDivider(40);
    const cols = process.stdout.columns || 80;

    const rows = social.map(item => {
        return `${chalk.cyan(item.platform)}

${item.username}

${chalk.gray(item.url)}

${div}`;
    }).join("\n\n");

    console.log(
        boxen(rows, {
            title: " SOCIAL LINKS ",
            titleAlignment: "center",
            borderStyle: "round",
            borderColor: "blue",
            padding: cols < 50 ? 0 : 1,
            margin: cols < 50 ? 0 : 1
        })
    );
};