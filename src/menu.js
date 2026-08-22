const readline = require("readline");
const chalk = require("chalk");
const { getMenuChoices } = require("./core/commandRegistry");

/**
 * Interactive zero-dependency arrow-key selection menu using native Node.js readline.
 * @param {Function} executeCommand - Command execution callback.
 */
function showInteractiveMenu(executeCommand) {
    return new Promise((resolve) => {
        if (!process.stdin.isTTY) {
            console.log(chalk.red("Interactive menu requires a TTY terminal window."));
            resolve();
            return;
        }

        const choices = getMenuChoices();
        const selectableIndices = [];
        choices.forEach((choice, index) => {
            if (!choice.isSeparator) {
                selectableIndices.push(index);
            }
        });

        if (selectableIndices.length === 0) {
            resolve();
            return;
        }

        let selectedPointer = 0;
        let renderedLines = 0;

        function render(isFirst = false) {
            let output = "";

            if (!isFirst && renderedLines > 0) {
                output += `\u001B[${renderedLines}A\u001B[0J`;
            }

            const header = chalk.yellow.bold("? Select a command to execute (Use ↑/↓ arrows & Enter, Esc to cancel):") + "\n";
            output += header;
            let lineCount = 1;

            const activeIndex = selectableIndices[selectedPointer];

            for (let i = 0; i < choices.length; i++) {
                const choice = choices[i];
                if (choice.isSeparator) {
                    output += `  ${choice.text}\n`;
                } else if (i === activeIndex) {
                    output += chalk.cyan(`❯ ${chalk.bold.underline(choice.displayName)}\n`);
                } else {
                    output += `  ${choice.displayName}\n`;
                }
                lineCount++;
            }

            renderedLines = lineCount;
            process.stdout.write(output);
        }

        // Hide cursor
        process.stdout.write("\u001B[?25l");

        // Enable keypress events on stdin
        readline.emitKeypressEvents(process.stdin);
        if (typeof process.stdin.setRawMode === "function") {
            process.stdin.setRawMode(true);
        }
        process.stdin.resume();

        render(true);

        async function cleanupAndFinish(selectedCommand = null) {
            process.stdin.removeListener("keypress", onKeypress);

            // Clear the rendered menu
            if (renderedLines > 0) {
                process.stdout.write(`\u001B[${renderedLines}A\u001B[0J`);
            }

            // Restore cursor
            process.stdout.write("\u001B[?25h");

            if (typeof process.stdin.setRawMode === "function") {
                process.stdin.setRawMode(false);
            }

            if (!selectedCommand) {
                resolve();
                return;
            }

            if (selectedCommand === "clear") {
                console.clear();
                resolve();
                return;
            }

            if (selectedCommand === "exit") {
                console.log(chalk.yellow("\nGoodbye! Thanks for visiting my portfolio 👋\n"));
                process.exit(0);
            }

            if (executeCommand) {
                try {
                    await executeCommand(selectedCommand);
                } catch (err) {
                    console.log(chalk.red(`Command error: ${err.message || err}`));
                }
            }

            resolve();
        }

        function onKeypress(str, key) {
            if (!key) return;

            // Ctrl+C
            if (key.ctrl && key.name === "c") {
                cleanupAndFinish(null);
                console.log();
                console.log(chalk.yellow("Goodbye! Thanks for visiting my portfolio 👋"));
                console.log();
                process.exit(0);
                return;
            }

            // Navigation: Up / Down
            if (key.name === "up" || key.name === "k") {
                selectedPointer = (selectedPointer - 1 + selectableIndices.length) % selectableIndices.length;
                render();
                return;
            }

            if (key.name === "down" || key.name === "j") {
                selectedPointer = (selectedPointer + 1) % selectableIndices.length;
                render();
                return;
            }

            // Selection: Enter / Return
            if (key.name === "return" || key.name === "enter") {
                const selectedChoice = choices[selectableIndices[selectedPointer]];
                cleanupAndFinish(selectedChoice.value);
                return;
            }

            // Cancel: Escape / 'q'
            if (key.name === "escape" || key.name === "q") {
                cleanupAndFinish(null);
                return;
            }
        }

        process.stdin.on("keypress", onKeypress);
    });
}

module.exports = {
    showInteractiveMenu
};
