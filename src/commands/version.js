const chalk = require("chalk");
const config = require("../config");

module.exports = () => {

    console.log(
        chalk.yellow(
            `ArpanOS v${config.version}`
        )
    );

};