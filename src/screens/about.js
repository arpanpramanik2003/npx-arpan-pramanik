const chalk = require("chalk");
const boxen = require("boxen");
const profile = require("../data/profile");
const { getDivider } = require("../utils");

module.exports = () => {
    const div = getDivider(44);
    const cols = process.stdout.columns || 80;
    const content = `
${chalk.bold.cyan(profile.name)}

🤖  ${chalk.bold(profile.role)}
💻  ${chalk.italic.gray(profile.subtitle)}

${div}

🎓  ${profile.education.degree} (${chalk.yellow(`CGPA: ${profile.education.cgpa}`)})
    ${profile.education.university}

📍  ${profile.location}
🌐  ${chalk.cyan(profile.website)}
📧  ${profile.email}
📞  ${profile.phone}
🔗  ${chalk.gray(`GitHub: ${profile.github}`)}
🔗  ${chalk.gray(`LinkedIn: ${profile.linkedin}`)}

${div}

${profile.bio}

${chalk.bold.white("Core Interests & Focus Areas")}

${profile.interests.map(item => `• ${item}`).join("\n")}
`;

    console.log();
    console.log(
        boxen(content.trim(), {
            title: " ABOUT ",
            titleAlignment: "center",
            padding: cols < 50 ? 0 : 1,
            margin: cols < 50 ? 0 : 1,
            borderStyle: "round",
            borderColor: "cyan"
        })
    );
    console.log();
};

