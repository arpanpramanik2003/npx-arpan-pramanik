const inquirer = require("inquirer");
const chalk = require("chalk");
const { getMenuChoices } = require("./core/commandRegistry");

async function showInteractiveMenu(executeCommand) {
    console.log();
    const choices = getMenuChoices();

    try {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "command",
                message: chalk.yellow.bold("Select a command to execute (Use ↑/↓ arrows & Enter):"),
                pageSize: 16,
                choices: choices
            }
        ]);

        if (!answer.command) return;

        if (answer.command === "clear") {
            console.clear();
            return;
        }

        if (answer.command === "exit") {
            console.log(chalk.yellow("\nGoodbye! Thanks for visiting my portfolio 👋\n"));
            process.exit(0);
        }

        if (executeCommand) {
            await executeCommand(answer.command);
        }
    } catch (err) {
        if (err && err.isTtyError) {
            console.log(chalk.red("Interactive menu requires a TTY terminal window."));
        }
    }
}

module.exports = {
    showInteractiveMenu
};
