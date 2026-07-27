const handlers = require("../commands");

async function execute(command) {

    if (!handlers[command]) {
        return false;
    }

    await handlers[command]();

    return true;
}

module.exports = execute;