const chalk = require("chalk");
const boxen = require("boxen");
const projects = require("../data/projects");
const { getDivider } = require("../utils");

module.exports = () => {
    console.log();
    const div = getDivider(44);
    const cols = process.stdout.columns || 80;
    projects.forEach((project, index) => {
        const linkParts = [];
        if (project.demo) linkParts.push(`🚀  ${chalk.cyan(project.demo)}`);
        if (project.github) linkParts.push(`💻  ${chalk.gray(project.github)}`);
        const linksDisplay = linkParts.length > 0 ? `\n${linkParts.join("\n")}\n` : "";

        const content = `
${chalk.bold.cyan(project.title)}

📂  ${project.category}
📅  ${project.year} • 🚀  ${chalk.green(project.status)}${linksDisplay}
${div}

${project.description}

${chalk.bold.white("Key Highlights & Engineering Rigor")}
${project.highlights.map(item => `✔ ${item}`).join("\n")}

${chalk.bold.white("Technology Stack")}
${project.tech.map(t => chalk.magenta(t)).join(" • ")}
`;

        console.log(
            boxen(content.trim(), {
                title: ` PROJECT ${index + 1}: ${project.title.toUpperCase()} `,
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
