const execute = require("./core/commandManager");
const { getCommandNames } = require("./core/commandRegistry");
const readline = require("readline");
const chalk = require("chalk");
const config = require("./config");
const helpCmd = require("./commands/help");

const COMMAND_LIST = getCommandNames().concat(["clear", "exit"]);

function completer(line) {
    const hits = COMMAND_LIST.filter(c => c.startsWith(line.trim().toLowerCase()));
    return [hits.length ? hits : COMMAND_LIST, line];
}

function startTerminal(showWelcome = true) {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        completer: completer,
        prompt:
            chalk.green(config.username) +
            chalk.white("@") +
            chalk.blue(config.hostname) +
            chalk.gray(":~$ ")
    });

    if (showWelcome) {
        console.log();
        console.log(
            chalk.green("Type ") +
            chalk.yellow("help") +
            chalk.green(" or ") +
            chalk.yellow("menu") +
            chalk.green(" for interactive arrow-key navigation.\n") +
            chalk.gray("You can also type any command directly or press Tab for auto-completion.\n")
        );
    }

    rl.prompt();

    rl.on("line", async (line) => {

        const command = line.trim().toLowerCase();

        // Empty command
        if (command === "") {
            rl.prompt();
            return;
        }

        // Built-in: clear
        if (command === "clear") {
            console.clear();
            rl.prompt();
            return;
        }

        // Built-in: exit
        if (command === "exit") {

            console.log();
            console.log(
                chalk.yellow("Goodbye! Thanks for visiting my portfolio 👋")
            );
            console.log();

            rl.close();
            process.exit(0);
            return;
        }

        // Interactive help / menu navigation using Up/Down arrow keys
        if (command === "help" || command === "menu") {
            try {
                rl.removeAllListeners("close");
                rl.close();
                await helpCmd(true, execute);
                startTerminal(false);
                return;
            } catch (err) {
                console.log();
                console.log(chalk.red(`An error occurred in menu: ${err.message || err}`));
                console.log();
                startTerminal(false);
                return;
            }
        }

        // Execute registered commands
        try {
            const found = await execute(command);

            // Unknown command
            if (!found) {
                console.log();
                console.log(
                    chalk.red(`${command}: command not found`)
                );
                console.log(
                    chalk.gray("Type 'help' or 'menu' to view all available commands.")
                );
                console.log();
            }
        } catch (err) {
            console.log();
            console.log(
                chalk.red(`An error occurred while executing '${command}': ${err.message || err}`)
            );
            console.log(
                chalk.gray("Please try again or type 'help' for available commands.")
            );
            console.log();
        }

        rl.prompt();

    });

    rl.on("close", () => {
        process.exit(0);
    });

}

module.exports = startTerminal;