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

/**
 * Restores terminal state to standard mode and ensures cursor is visible.
 */
function restoreTerminalState() {
    if (process.stdin.isTTY && typeof process.stdin.setRawMode === "function") {
        process.stdin.setRawMode(false);
    }
    if (process.stdout.isTTY) {
        process.stdout.write("\u001B[?25h");
    }
}

function startTerminal(showWelcome = true) {
    // Setup SIGINT handler to gracefully restore terminal
    const sigintHandler = () => {
        restoreTerminalState();
        console.log();
        console.log(chalk.yellow("Goodbye! Thanks for visiting my portfolio 👋"));
        console.log();
        process.exit(0);
    };

    process.once("SIGINT", sigintHandler);

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

    let isMenuMode = false;

    rl.prompt();

    rl.on("line", async (line) => {
        if (isMenuMode) return;

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

            restoreTerminalState();
            rl.close();
            process.exit(0);
            return;
        }

        // Interactive help / menu navigation using Up/Down arrow keys
        if (command === "help" || command === "menu") {
            isMenuMode = true;
            rl.pause();

            // Explicitly verify and reset stdin raw mode before handing control to Inquirer
            if (process.stdin.isTTY && typeof process.stdin.setRawMode === "function") {
                process.stdin.setRawMode(false);
            }

            try {
                await helpCmd(true, execute);
            } catch (err) {
                console.log();
                console.log(chalk.red(`An error occurred in menu: ${err.message || err}`));
                console.log();
            } finally {
                // Explicitly re-synchronize raw mode for readline in TTY environments
                if (process.stdin.isTTY && typeof process.stdin.setRawMode === "function") {
                    process.stdin.setRawMode(true);
                }
                isMenuMode = false;
                rl.resume();
                rl.prompt();
            }
            return;
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
        restoreTerminalState();
        process.exit(0);
    });
}

module.exports = startTerminal;