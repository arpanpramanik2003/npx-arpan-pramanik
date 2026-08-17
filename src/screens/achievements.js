const chalk = require("chalk");
const boxen = require("boxen");
const achievements = require("../data/achievements");
const { getDivider } = require("../utils");

module.exports = () => {
    const div = getDivider(40);
    const cols = process.stdout.columns || 80;
    const content = achievements.map(item => {
        return `${item.icon}  ${chalk.bold.white(item.title)}

${chalk.cyan(item.value)}

${item.description}

${div}`;
    }).join("\n\n");

    console.log();
    console.log(
        boxen(content, {
            title: " CAREER SNAPSHOT ",
            titleAlignment: "center",
            padding: cols < 50 ? 0 : 1,
            margin: cols < 50 ? 0 : 1,
            borderStyle: "round",
            borderColor: "green"
        })
    );
    console.log();
};
