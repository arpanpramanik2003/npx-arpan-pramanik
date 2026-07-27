const chalk = require("chalk");
const boxen = require("boxen");
const achievements = require("../data/achievements");

module.exports = () => {
    const content = achievements.map(item => {
        return `${item.icon}  ${chalk.bold.white(item.title)}

${chalk.cyan(item.value)}

${item.description}

────────────────────────────────────────`;
    }).join("\n\n");

    console.log();
    console.log(
        boxen(content, {
            title: " CAREER SNAPSHOT ",
            titleAlignment: "center",
            padding: 1,
            margin: 1,
            borderStyle: "round",
            borderColor: "green"
        })
    );
    console.log();
};
