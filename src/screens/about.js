const chalk = require("chalk");
const boxen = require("boxen");
const profile = require("../data/profile");
const { getDivider } = require("../utils");

module.exports = () => {
    const div = getDivider(44);
    const cols = process.stdout.columns || 80;
    const content = `
${chalk.bold.cyan(profile.name)}

🤖  ${profile.role}
💻  ${profile.subtitle}

${div}

🎓  ${profile.education.degree}
    ${profile.education.university}

📍  ${profile.location}

🌐  ${profile.website}

📧  ${profile.email}

${div}

${profile.bio}

${chalk.bold.white("Core Interests")}

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

