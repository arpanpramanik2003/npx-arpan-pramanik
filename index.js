#!/usr/bin/env node

process.on("uncaughtException", (err) => {
    console.error(`\n\x1b[31mError: ${err && err.message ? err.message : err}\x1b[0m\n`);
    if (process.stdin.isTTY && typeof process.stdin.setRawMode === "function") {
        process.stdin.setRawMode(false);
    }
    if (process.stdout.isTTY) {
        process.stdout.write("\u001B[?25h");
    }
    process.exit(1);
});

process.on("unhandledRejection", (reason) => {
    console.error(`\n\x1b[31mError: ${reason && reason.message ? reason.message : reason}\x1b[0m\n`);
    if (process.stdin.isTTY && typeof process.stdin.setRawMode === "function") {
        process.stdin.setRawMode(false);
    }
    if (process.stdout.isTTY) {
        process.stdout.write("\u001B[?25h");
    }
    process.exit(1);
});

const { startApp } = require("./src/app");

startApp();