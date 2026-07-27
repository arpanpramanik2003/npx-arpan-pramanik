const chalk = require("chalk");
const boxen = require("boxen");

const social = require("../data/social");

module.exports = () => {

    const rows = social.map(item => {

        return `${chalk.cyan(item.platform)}

${item.username}

${chalk.gray(item.url)}

────────────────────────────────────────`;

    }).join("\n\n");

    console.log(

        boxen(rows, {

            title: " SOCIAL LINKS ",

            titleAlignment: "center",

            borderStyle: "round",

            borderColor: "blue",

            padding: 1,

            margin: 1

        })

    );

};