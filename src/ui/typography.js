const chalk = require("chalk");

module.exports = {

    title(text) {
        return chalk.bold.cyan(text);
    },

    subtitle(text) {
        return chalk.white.bold(text);
    },

    label(text) {
        return chalk.green(text);
    },

    value(text) {
        return chalk.white(text);
    },

    info(text) {
        return chalk.gray(text);
    },

    success(text) {
        return chalk.greenBright(text);
    },

    warning(text) {
        return chalk.yellow(text);
    },

    error(text) {
        return chalk.red(text);
    }

};