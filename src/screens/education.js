const chalk = require("chalk");
const boxen = require("boxen");
const education = require("../data/education");
const { getDivider } = require("../utils");

module.exports = () => {
    const div = getDivider(40);
    const cols = process.stdout.columns || 80;
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

${div}

${item.description}

`;

        console.log(
            boxen(content.trim(), {
                title: ` EDUCATION ${index + 1} `,
                titleAlignment: "center",
                padding: cols < 50 ? 0 : 1,
                margin: {
                    top: index === 0 ? 1 : 0,
                    bottom: 1,
                    left: cols < 50 ? 0 : 1,
                    right: cols < 50 ? 0 : 1
                },
                borderStyle: "round",
                borderColor: "cyan"
            })
        );
    });
};
