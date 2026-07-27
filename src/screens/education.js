const chalk = require("chalk");
const boxen = require("boxen");
const education = require("../data/education");

module.exports = () => {
    education.forEach((item, index) => {
        const content = `

${chalk.bold.cyan(item.degree)}

${item.specialization}

🏫 Institution

${item.institution}

📍 Location

${item.location}

📅 Duration

${item.duration}

📖 Status

${item.status}

────────────────────────────────────────

${item.description}

`;

        console.log(
            boxen(content.trim(), {
                title: ` EDUCATION ${index + 1} `,
                titleAlignment: "center",
                padding: 1,
                margin: {
                    top: index === 0 ? 1 : 0,
                    bottom: 1,
                    left: 1,
                    right: 1
                },
                borderStyle: "round",
                borderColor: "cyan"
            })
        );
    });
};
