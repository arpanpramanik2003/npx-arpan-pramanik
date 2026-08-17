const chalk = require("chalk");
const boxen = require("boxen");
const contact = require("../data/contact");
const { getDivider } = require("../utils");

module.exports = () => {
    const div = getDivider(40);
    const cols = process.stdout.columns || 80;
    const content = `

📧 Email

${contact.email}

📱 Phone

${contact.phone}

📍 Location

${contact.location}

🌐 Portfolio

${contact.portfolio}

${div}

${chalk.green(contact.availability)}

`;

    console.log(
        boxen(content.trim(), {
            title: " CONTACT ",
            titleAlignment: "center",
            borderStyle: "round",
            borderColor: "green",
            padding: cols < 50 ? 0 : 1,
            margin: cols < 50 ? 0 : 1
        })
    );
};
