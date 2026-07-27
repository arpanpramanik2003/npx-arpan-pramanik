const chalk = require("chalk");
const boxen = require("boxen");
const categories = require("../data/skills");

module.exports = () => {
    categories.forEach((category, index) => {
        const content = `

${chalk.bold.cyan(category.title)}

${category.description}

────────────────────────────────────────

${category.skills.join("   •   ")}

`;

        console.log(
            boxen(content.trim(), {
                title: ` SKILL ${index + 1} `,
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "blue",
                padding: 1,
                margin: {
                    top: index === 0 ? 1 : 0,
                    bottom: 1,
                    left: 1,
                    right: 1
                }
            })
        );
    });
};
