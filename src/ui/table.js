const Table = require("cli-table3");
const chalk = require("chalk");

function renderTable(headers, rows) {
    const table = new Table({
        head: headers.map(h => chalk.cyan.bold(h)),
        style: {
            head: [],
            border: ["gray"]
        }
    });

    rows.forEach(row => table.push(row));
    console.log(table.toString());
}

module.exports = renderTable;
