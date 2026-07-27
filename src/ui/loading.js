const ora = require("ora");

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

module.exports = async function loading(text = "Loading...") {

    const spinner = ora(text).start();

    await sleep(900);

    spinner.succeed();

};