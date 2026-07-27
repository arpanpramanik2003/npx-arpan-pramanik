const chalk = require("chalk");
const boxen = require("boxen");
const projects = require("../data/projects");

module.exports = () => {
    console.log();
    projects.forEach((project, index) => {
        const content = `

${chalk.bold.cyan(project.title)}

📂  ${project.category}

📅  ${project.year}

🚀  ${project.status}

────────────────────────────────────────

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
