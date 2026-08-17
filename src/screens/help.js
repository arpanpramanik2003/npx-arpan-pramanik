const chalk = require("chalk");
const boxen = require("boxen");

module.exports = (categories) => {
    const cols = process.stdout.columns || 80;

    function render(title, items) {
        let text = chalk.bold.cyan(title) + "\n\n";
        items.forEach(item => {
            text +=
                chalk.green(item.name.padEnd(15)) +
                chalk.gray(item.description || "") +
                "\n";
        });
        return text;
    }

    const content =
        render("📂 Portfolio", categories.portfolio || []) +
        "\n" +
        render("🌐 Links", categories.links || []) +
        "\n" +
        render("⚙ System", categories.system || []);

    console.log(
        boxen(content, {
            title: "ARPAN OS COMMAND CENTER",
            titleAlignment: "center",
            padding: cols < 50 ? 0 : 1,
            margin: cols < 50 ? 0 : 1,
            borderStyle: "round",
            borderColor: "cyan"
        })
    );
};
