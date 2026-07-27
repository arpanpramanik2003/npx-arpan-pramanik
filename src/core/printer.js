const chalk = require("chalk");
const boxen = require("boxen");

function printBox(content, title, borderColor = "cyan") {
    console.log(
        boxen(content, {
            title,
            titleAlignment: "center",
            padding: 1,
            margin: 1,
            borderStyle: "round",
            borderColor
        })
    );
}

module.exports = {
    printBox
};
