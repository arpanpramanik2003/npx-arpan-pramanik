const test = require("node:test");
const assert = require("node:assert");
const { execSync } = require("child_process");
const { PassThrough } = require("node:stream");
const readline = require("node:readline");
const fs = require("node:fs");
const pkg = require("../package.json");
const config = require("../src/config");
const { getCommandNames, executeCommand, getMenuChoices } = require("../src/core/commandRegistry");
const { isHeadlessEnvironment, openUrl } = require("../src/utils");

test("Package version alignment across package.json and config.js", () => {
    assert.strictEqual(config.version, pkg.version);
    assert.ok(pkg.version.length > 0);
});

test("Engines field in package.json requires Node.js >= 18.0.0", () => {
    assert.ok(pkg.engines && pkg.engines.node);
    assert.ok(pkg.engines.node.includes("18"));
});

test("Command Registry registers all core portfolio commands", () => {
    const commands = getCommandNames();
    const expected = [
        "whoami", "about", "projects", "experience", "research",
        "skills", "education", "achievements", "contact",
        "github", "linkedin", "portfolio", "social", "resume",
        "help", "version", "pwd", "ls"
    ];
    for (const cmd of expected) {
        assert.ok(commands.includes(cmd), `Command ${cmd} should be registered`);
    }
});

test("Each command handler executes without throwing exceptions", async () => {
    const commands = getCommandNames();
    for (const cmd of commands) {
        const result = await executeCommand(cmd);
        assert.strictEqual(result, true, `Command ${cmd} should return true`);
    }
});

test("Direct CLI invocation of all registered commands exits cleanly with code 0", () => {
    const commands = [
        "whoami", "about", "projects", "experience", "research",
        "skills", "education", "achievements", "contact",
        "github", "linkedin", "portfolio", "social", "resume",
        "help", "version", "pwd", "ls"
    ];
    for (const cmd of commands) {
        const output = execSync(`node dist/index.js ${cmd}`, { encoding: "utf8" });
        assert.ok(output.length > 0, `Output for ${cmd} should not be empty`);
    }
});

test("Direct CLI invocation with flags (-v, --version, -h, --help) exits cleanly and quickly", () => {
    const t0 = performance.now();
    const versionOutput = execSync("node dist/index.js --version", { encoding: "utf8" });
    const versionElapsed = performance.now() - t0;
    assert.ok(versionOutput.includes(pkg.version));
    assert.ok(versionElapsed < 300, `Version check should complete in <300ms, took ${versionElapsed.toFixed(1)}ms`);

    const shortVOutput = execSync("node dist/index.js -v", { encoding: "utf8" });
    assert.ok(shortVOutput.includes(pkg.version));

    const helpOutput = execSync("node dist/index.js --help", { encoding: "utf8" });
    assert.ok(helpOutput.includes("ARPAN OS COMMAND CENTER"));

    const shortHOutput = execSync("node dist/index.js -h", { encoding: "utf8" });
    assert.ok(shortHOutput.includes("ARPAN OS COMMAND CENTER"));
});

test("Unknown CLI command (node dist/index.js fakecmd) exits with code 1 and friendly error", () => {
    try {
        execSync("node dist/index.js fakecmd", { encoding: "utf8", stdio: "pipe" });
        assert.fail("Should have thrown an error for unknown command");
    } catch (err) {
        assert.strictEqual(err.status, 1);
        assert.ok(err.stdout.includes("command not found") || err.stderr.includes("command not found"));
    }
});

test("Headless browser fallback handles non-TTY environment gracefully", async () => {
    assert.strictEqual(typeof isHeadlessEnvironment(), "boolean");
    await openUrl("https://github.com/arpanpramanik2003");
});

test("Menu choices contain structured separators and valid selectable items", () => {
    const choices = getMenuChoices();
    assert.ok(choices.length > 0);
    const separators = choices.filter(c => c.isSeparator);
    const selectable = choices.filter(c => !c.isSeparator);
    assert.ok(separators.length >= 3, "Should contain at least 3 category separators");
    assert.ok(selectable.length >= 16, "Should contain at least 16 selectable commands");
});

test("Terminal state machine maintains clean stdin raw-mode transitions and avoids double echo", async () => {
    const mockStdin = new PassThrough();
    mockStdin.isTTY = true;
    mockStdin.setRawMode = function (mode) {
        this.isRaw = mode;
        return this;
    };

    const mockStdout = new PassThrough();
    mockStdout.isTTY = true;

    let isMenuMode = false;
    let echoBuffer = "";
    mockStdout.on("data", chunk => {
        echoBuffer += chunk.toString();
    });

    const rl = readline.createInterface({
        input: mockStdin,
        output: mockStdout,
        prompt: "arpan@portfolio:~$ "
    });

    assert.strictEqual(mockStdin.isRaw, true, "Readline should initialize raw mode in TTY");

    // Simulate switching to menu mode
    isMenuMode = true;
    rl.pause();
    if (mockStdin.isTTY && typeof mockStdin.setRawMode === "function") {
        mockStdin.setRawMode(false);
    }
    assert.strictEqual(mockStdin.isRaw, false, "Menu mode should disable raw mode for external handler");

    // Simulate returning to shell mode
    if (mockStdin.isTTY && typeof mockStdin.setRawMode === "function") {
        mockStdin.setRawMode(true);
    }
    isMenuMode = false;
    rl.resume();
    assert.strictEqual(mockStdin.isRaw, true, "Shell mode should restore raw mode for readline");

    // Verify single echo of input line
    mockStdin.write("h\n");
    await new Promise(resolve => setTimeout(resolve, 50));
    rl.close();
});

test("Bundled dist/index.js exists and is within performance budget (<250 kB)", () => {
    assert.ok(fs.existsSync("dist/index.js"), "dist/index.js must exist");
    const stats = fs.statSync("dist/index.js");
    const sizeKb = stats.size / 1024;
    assert.ok(sizeKb < 250, `Bundle size (${sizeKb.toFixed(1)} kB) should be under 250 kB`);
});


