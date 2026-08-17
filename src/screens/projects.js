const chalk = require("chalk");
const boxen = require("boxen");
const projects = require("../data/projects");
const { getDivider } = require("../utils");

module.exports = () => {
    console.log();
    const div = getDivider(40);
    const cols = process.stdout.columns || 80;
    projects.forEach((project, index) => {
        const content = `

${chalk.bold.cyan(project.title)}

📂  ${project.category}

📅  ${project.year}

🚀  ${project.status}

${div}

${project.description}

${chalk.bold.white("Highlights")}

${project.highlights.map(item => `✔ ${item}`).join("\n")}

${chalk.bold.white("Technology Stack")}

${project.tech.join(" • ")}

`;

        console.log(
            boxen(content.trim(), {
                title: ` PROJECT ${index + 1} `,
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "yellow",
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
