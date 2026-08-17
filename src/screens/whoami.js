const chalk = require("chalk");
const boxen = require("boxen");
const profile = require("../data/profile");

module.exports = () => {
    const cols = process.stdout.columns || 80;
    const content = `${chalk.bold.cyan(profile.name)}

${profile.role}

📍 ${profile.location}
🎓 ${profile.education.university}
💻 AI • Full Stack • Research

Type ${chalk.yellow("about")} to know more.`;

    console.log(
        boxen(content, {
            title: " WHOAMI ",
            titleAlignment: "center",
            padding: cols < 50 ? 0 : 1,
            margin: cols < 50 ? 0 : 1,
            borderStyle: "round",
            borderColor: "green"
        })
    );
};
