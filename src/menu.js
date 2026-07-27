const inquirer = require("inquirer");
const chalk = require("chalk");
const descriptions = require("./descriptions");

async function showInteractiveMenu(executeCommand) {
    console.log();
    const choices = [
        new inquirer.Separator(chalk.bold.cyan("── 📂 Portfolio Modules ─────────────")),
        { name: `whoami        ${chalk.gray("• " + descriptions.whoami)}`, value: "whoami" },
        { name: `about         ${chalk.gray("• " + descriptions.about)}`, value: "about" },
        { name: `projects      ${chalk.gray("• " + descriptions.projects)}`, value: "projects" },
        { name: `experience    ${chalk.gray("• " + descriptions.experience)}`, value: "experience" },
        { name: `research      ${chalk.gray("• " + descriptions.research)}`, value: "research" },
        { name: `skills        ${chalk.gray("• " + descriptions.skills)}`, value: "skills" },
        { name: `education     ${chalk.gray("• " + descriptions.education)}`, value: "education" },
        { name: `achievements  ${chalk.gray("• " + descriptions.achievements)}`, value: "achievements" },
        { name: `contact       ${chalk.gray("• " + descriptions.contact)}`, value: "contact" },

        new inquirer.Separator(chalk.bold.cyan("── 🌐 External Links ────────────────")),
        { name: `github        ${chalk.gray("• " + descriptions.github)}`, value: "github" },
        { name: `linkedin      ${chalk.gray("• " + descriptions.linkedin)}`, value: "linkedin" },
        { name: `portfolio     ${chalk.gray("• " + descriptions.portfolio)}`, value: "portfolio" },
        { name: `social        ${chalk.gray("• " + descriptions.social)}`, value: "social" },
        { name: `resume        ${chalk.gray("• " + descriptions.resume)}`, value: "resume" },

        new inquirer.Separator(chalk.bold.cyan("── ⚙ System Commands ────────────────")),
        { name: `clear         ${chalk.gray("• " + descriptions.clear)}`, value: "clear" },
        { name: `exit          ${chalk.gray("• " + descriptions.exit)}`, value: "exit" }
    ];

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
