const chalk = require("chalk");
const boxen = require("boxen");
const experiences = require("../data/experience");

module.exports = () => {
    experiences.forEach((exp, index) => {
        const content = `

${chalk.bold.cyan(exp.title)}

🏢  ${exp.company}

📅  ${exp.duration}

📖  ${exp.description}

${chalk.bold.white("Key Contributions")}

${exp.highlights.map(item => `✔ ${item}`).join("\n")}

${chalk.bold.white("Tech Stack")}

${exp.technologies.join(" • ")}

`;

        console.log(
            boxen(content.trim(), {
                title: ` ${exp.year} `,
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "green",
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
