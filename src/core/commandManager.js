const { executeCommand } = require("./commandRegistry");

async function execute(command) {
    return await executeCommand(command);
}

module.exports = execute;