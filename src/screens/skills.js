const chalk = require("chalk");
const boxen = require("boxen");
const categories = require("../data/skills");
const { getDivider } = require("../utils");

module.exports = () => {
    const div = getDivider(40);
    const cols = process.stdout.columns || 80;
    categories.forEach((category, index) => {
        const content = `

${chalk.bold.cyan(category.title)}

${category.description}

${div}

${category.skills.join("   •   ")}

`;

        console.log(
            boxen(content.trim(), {
                title: ` SKILL ${index + 1} `,
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "blue",
                padding: cols < 50 ? 0 : 1,
                margin: {
                    top: index === 0 ? 1 : 0,
                    bottom: 1,
                    left: cols < 50 ? 0 : 1,
                    right: cols < 50 ? 0 : 1
                }
            })
        );
    });
};
