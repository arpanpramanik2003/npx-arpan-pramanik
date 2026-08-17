const { executeCommand } = require("../core/commandRegistry");

module.exports = {
    get help() { return () => executeCommand("help"); },
    get menu() { return () => executeCommand("menu"); },
    get whoami() { return () => executeCommand("whoami"); },
    get pwd() { return () => executeCommand("pwd"); },
    get ls() { return () => executeCommand("ls"); },
    get version() { return () => executeCommand("version"); },
    get about() { return () => executeCommand("about"); },
    get experience() { return () => executeCommand("experience"); },
    get projects() { return () => executeCommand("projects"); },
    get research() { return () => executeCommand("research"); },
    get skills() { return () => executeCommand("skills"); },
    get achievements() { return () => executeCommand("achievements"); },
    get education() { return () => executeCommand("education"); },
    get contact() { return () => executeCommand("contact"); },
    get social() { return () => executeCommand("social"); },
    get resume() { return () => executeCommand("resume"); },
    get github() { return () => executeCommand("github"); },
    get linkedin() { return () => executeCommand("linkedin"); },
    get portfolio() { return () => executeCommand("portfolio"); }
};