const test = require("node:test");
const assert = require("node:assert");
const { execSync } = require("child_process");
const pkg = require("../package.json");
const config = require("../src/config");
const { getCommandNames, executeCommand } = require("../src/core/commandRegistry");
const { isHeadlessEnvironment, openUrl } = require("../src/utils");

test("Package version alignment across package.json and config.js", () => {
    assert.strictEqual(config.version, pkg.version);
    assert.ok(pkg.version.length > 0);
});

test("Command Registry registers all core portfolio commands", () => {
    const commands = getCommandNames();
    assert.ok(commands.includes("whoami"));
    assert.ok(commands.includes("about"));
    assert.ok(commands.includes("projects"));
    assert.ok(commands.includes("experience"));
    assert.ok(commands.includes("research"));
    assert.ok(commands.includes("skills"));
    assert.ok(commands.includes("education"));
    assert.ok(commands.includes("achievements"));
    assert.ok(commands.includes("contact"));
    assert.ok(commands.includes("github"));
    assert.ok(commands.includes("linkedin"));
    assert.ok(commands.includes("portfolio"));
    assert.ok(commands.includes("social"));
    assert.ok(commands.includes("resume"));
    assert.ok(commands.includes("help"));
    assert.ok(commands.includes("version"));
});

test("Each command handler executes without throwing exceptions", async () => {
    const commands = ["whoami", "about", "pwd", "ls", "version", "contact", "achievements"];
    for (const cmd of commands) {
        const result = await executeCommand(cmd);
        assert.strictEqual(result, true, `Command ${cmd} should return true`);
    }
});

test("Direct CLI invocation (node index.js whoami) exits cleanly with code 0", () => {
    const output = execSync("node index.js whoami", { encoding: "utf8" });
    assert.ok(output.includes("Arpan Pramanik"));
    assert.ok(output.includes("AI Engineer"));
});

test("Unknown CLI command (node index.js fakecmd) exits with code 1 and friendly error", () => {
    try {
        execSync("node index.js fakecmd", { encoding: "utf8", stdio: "pipe" });
        assert.fail("Should have thrown an error for unknown command");
    } catch (err) {
        assert.strictEqual(err.status, 1);
        assert.ok(err.stdout.includes("command not found") || err.stderr.includes("command not found"));
    }
});

test("Headless browser fallback handles non-TTY environment gracefully", async () => {
    assert.strictEqual(typeof isHeadlessEnvironment(), "boolean");
    // Verify openUrl does not throw
    await openUrl("https://github.com/arpanpramanik2003");
});
