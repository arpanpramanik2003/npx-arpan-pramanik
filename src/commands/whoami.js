const chalk = require("chalk");
const boxen = require("boxen");

module.exports = () => {

    console.log(
        boxen(
            `${chalk.bold.cyan("Arpan Pramanik")}

AI Engineer
Full Stack Developer
Researcher

📍 West Bengal, India
🎓 The Neotia University
💻 AI • Full Stack • Research

Type ${chalk.yellow("about")} to know more.`,
            {
                padding: 1,
                borderStyle: "round",
                borderColor: "green"
            }
        )
    );

};