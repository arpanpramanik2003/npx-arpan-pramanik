const chalk = require("chalk");
const boxen = require("boxen");
const contact = require("../data/contact");

module.exports = () => {
    const content = `

📧 Email

${contact.email}

📱 Phone

${contact.phone}

📍 Location

${contact.location}

🌐 Portfolio

${contact.portfolio}

────────────────────────────────────────

${chalk.green(contact.availability)}

`;

    console.log(
        boxen(content.trim(), {
            title: " CONTACT ",
            titleAlignment: "center",
            borderStyle: "round",
            borderColor: "green",
            padding: 1,
            margin: 1
        })
    );
};
