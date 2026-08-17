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
            process.exit(0);
        }
        try {
            const found = await execute(cmd);
            if (!found) {
                console.log(chalk.red(`'${args[0]}': command not found`));
                console.log(chalk.gray("Run 'arpan-pramanik help' to view available commands.\n"));
                process.exit(1);
            }
        } catch (err) {
            console.log(chalk.red(`An error occurred while executing '${args[0]}': ${err.message || err}`));
            process.exit(1);
        }
        console.log();
        process.exit(0);
    }

    console.clear();

    const spinner = ora("Initializing ArpanOS...").start();
    await sleep(200);
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

    console.log(
        chalk.green("Launching ArpanOS Terminal...\n")
    );

    startTerminal();
}

module.exports = {
    startApp
};