const chalk = require("chalk");
const boxen = require("boxen");
const papers = require("../data/research");

module.exports = () => {
    papers.forEach((paper, index) => {
        const content = `

${chalk.bold.cyan(paper.title)}

📖 ${paper.type}

🏛 Publisher : ${paper.publisher}

📅 Year : ${paper.year}

👥 Authors

${paper.authors}

────────────────────────────────────────

${paper.description}

${chalk.bold.white("Key Contributions")}

${paper.contributions.map(item => `✔ ${item}`).join("\n")}

`;

        console.log(
            boxen(content.trim(), {
                title: ` PUBLICATION ${index + 1} `,
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "magenta",
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
