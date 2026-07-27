const ora = require("ora");
const chalk = require("chalk");
const figlet = require("figlet");
const gradient = require("gradient-string");
const startTerminal = require("./terminal");
const execute = require("./core/commandManager");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startApp() {
    const args = process.argv.slice(2);
    if (args.length > 0) {
        const cmd = args[0].toLowerCase().replace(/^--?/, "");
        if (cmd === "v" || cmd === "version") {
            const versionCmd = require("./commands/version");
            versionCmd();
            process.exit(0);
        }
        if (cmd === "help" || cmd === "h") {
            const helpCmd = require("./commands/help");
            await helpCmd();
            console.log();
            startTerminal(false);
            return;
        }
        const found = await execute(cmd);
        if (!found) {
            console.log(chalk.red(`'${args[0]}': command not found`));
            console.log(chalk.gray("Run 'arpan-pramanik help' to view available commands.\n"));
            startTerminal(false);
            return;
        }
        console.log();
        startTerminal(false);
        return;
    }

    console.clear();

    const spinner = ora("Initializing ArpanOS...").start();
    await sleep(400);

    spinner.text = "Loading Neural Engine...";
    await sleep(400);

    spinner.text = "Loading Research Modules...";
    await sleep(400);

    spinner.text = "Loading Developer Toolkit...";
    await sleep(400);

    spinner.text = "Connecting Portfolio...";
    await sleep(300);

    spinner.succeed("System Ready");

    console.log();

    console.log(
        gradient.atlas.multiline(
            figlet.textSync("ARPAN", {
                horizontalLayout: "default"
            })
        )
    );

    console.log(
        chalk.cyan.bold(
            "AI Engineer • Full Stack Developer • Researcher"
        )
    );

    console.log();

    console.log(
        chalk.gray(
            "Welcome to ArpanOS v2.0"
        )
    );

    console.log();

    await sleep(500);

    console.log(
        chalk.green("Launching ArpanOS Terminal...\n")
    );

    await sleep(300);

    startTerminal();
}

module.exports = {
    startApp
};