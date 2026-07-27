const chalk = require("chalk");
const boxen = require("boxen");
const profile = require("../data/profile");

module.exports = () => {
    const content = `
${chalk.bold.cyan(profile.name)}

🤖  ${profile.role}
💻  ${profile.subtitle}

────────────────────────────────────────────

🎓  ${profile.education.degree}
    ${profile.education.university}

📍  ${profile.location}

🌐  ${profile.website}

📧  ${profile.email}

────────────────────────────────────────────

${profile.bio}

${chalk.bold.white("Core Interests")}

${profile.interests.map(item => `• ${item}`).join("\n")}
`;

    console.log();
    console.log(
        boxen(content.trim(), {
            title: " ABOUT ",
            titleAlignment: "center",
            padding: 1,
            margin: 1,
            borderStyle: "round",
            borderColor: "cyan"
        })
    );
    console.log();
};
