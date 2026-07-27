const chalk = require("chalk");
const boxen = require("boxen");
const descriptions = require("../descriptions");
const { showInteractiveMenu } = require("../menu");

module.exports = async (isInteractive = false, executeFn = null) => {
    if (isInteractive && process.stdin.isTTY) {
        await showInteractiveMenu(executeFn);
        return;
    }

    const portfolio = [
        "whoami",
        "about",
        "projects",
        "experience",
        "research",
        "skills",
        "education",
        "achievements",
        "contact"
    ];

    const links = [
        "github",
        "linkedin",
        "portfolio",
        "social",
        "resume"
    ];

    const system = [
        "help",
        "menu",
        "ls",
        "pwd",
        "version",
        "clear",
        "exit"
    ];

    function render(title, commands) {
        let text = chalk.bold.cyan(title) + "\n\n";
        commands.forEach(cmd => {
            text +=
                chalk.green(cmd.padEnd(15)) +
                chalk.gray(descriptions[cmd] || "") +
                "\n";
        });
        return text;
    }

    const content =
        render("📂 Portfolio", portfolio) +
        "\n" +
        render("🌐 Links", links) +
        "\n" +
        render("⚙ System", system);

    console.log(
        boxen(content, {
            title: "ARPAN OS COMMAND CENTER",
            titleAlignment: "center",
            padding: 1,
            borderStyle: "round",
            borderColor: "cyan"
        })
    );
};