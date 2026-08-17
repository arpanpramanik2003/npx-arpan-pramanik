const inquirer = require("inquirer");
const chalk = require("chalk");

const commandsList = [
    // 📁 Portfolio Modules
    {
        name: "whoami",
        category: "portfolio",
        description: "About Arpan",
        screen: () => require("../screens/whoami")()
    },
    {
        name: "about",
        category: "portfolio",
        description: "About Me",
        screen: () => require("../screens/about")()
    },
    {
        name: "projects",
        category: "portfolio",
        description: "Browse featured projects",
        screen: () => require("../screens/projects")()
    },
    {
        name: "experience",
        category: "portfolio",
        description: "Professional experience & internships",
        screen: () => require("../screens/experience")()
    },
    {
        name: "research",
        category: "portfolio",
        description: "Research publications and academic contributions",
        screen: () => require("../screens/research")()
    },
    {
        name: "skills",
        category: "portfolio",
        description: "Technical skills and technology stack",
        screen: () => require("../screens/skills")()
    },
    {
        name: "education",
        category: "portfolio",
        description: "Academic background and qualifications",
        screen: () => require("../screens/education")()
    },
    {
        name: "achievements",
        category: "portfolio",
        description: "Career highlights and accomplishments",
        screen: () => require("../screens/achievements")()
    },
    {
        name: "contact",
        category: "portfolio",
        description: "Contact Information",
        screen: () => require("../screens/contact")()
    },

    // 🌐 External Links
    {
        name: "github",
        category: "links",
        description: "Open GitHub Profile",
        screen: () => require("../screens/github")()
    },
    {
        name: "linkedin",
        category: "links",
        description: "Open LinkedIn Profile",
        screen: () => require("../screens/linkedin")()
    },
    {
        name: "portfolio",
        category: "links",
        description: "Open Web Portfolio",
        screen: () => require("../screens/portfolio")()
    },
    {
        name: "social",
        category: "links",
        description: "Social profiles",
        screen: () => require("../screens/social")()
    },
    {
        name: "resume",
        category: "links",
        description: "Open Resume PDF",
        screen: () => require("../screens/resume")()
    },

    // ⚙ System Commands
    {
        name: "help",
        category: "system",
        description: "Show available commands & interactive menu",
        screen: () => {
            const categories = getHelpCategories();
            require("../screens/help")(categories);
        }
    },
    {
        name: "menu",
        category: "system",
        description: "Open interactive arrow-key navigation menu",
        screen: () => {
            const categories = getHelpCategories();
            require("../screens/help")(categories);
        }
    },
    {
        name: "pwd",
        category: "system",
        description: "Print current directory",
        screen: () => console.log("/home/arpan/portfolio")
    },
    {
        name: "ls",
        category: "system",
        description: "List available modules",
        screen: () => {
            console.log(chalk.cyan("whoami  about  projects  experience  research  skills  education  achievements  contact"));
            console.log(chalk.blue("github  linkedin  portfolio  social  resume"));
        }
    },
    {
        name: "version",
        category: "system",
        description: "Show ArpanOS version",
        screen: () => require("../screens/version")()
    }
];

const commandMap = new Map(commandsList.map(cmd => [cmd.name, cmd]));

async function executeCommand(name) {
    const cmd = commandMap.get(name.toLowerCase());
    if (!cmd) return false;
    await cmd.screen();
    return true;
}

function getCommandNames() {
    return Array.from(commandMap.keys());
}

function getDescriptions() {
    const desc = {};
    commandsList.forEach(cmd => {
        desc[cmd.name] = cmd.description;
    });
    desc.clear = "Clear Terminal";
    desc.exit = "Exit ArpanOS";
    return desc;
}

function getHelpCategories() {
    return {
        portfolio: commandsList.filter(c => c.category === "portfolio"),
        links: commandsList.filter(c => c.category === "links"),
        system: commandsList.filter(c => c.category === "system").concat([
            { name: "clear", description: "Clear Terminal" },
            { name: "exit", description: "Exit ArpanOS" }
        ])
    };
}

function getMenuChoices() {
    const choices = [
        new inquirer.Separator(chalk.bold.cyan("── 📂 Portfolio Modules ─────────────"))
    ];

    commandsList.filter(c => c.category === "portfolio").forEach(c => {
        choices.push({
            name: `${c.name.padEnd(14)} ${chalk.gray("• " + c.description)}`,
            value: c.name
        });
    });

    choices.push(new inquirer.Separator(chalk.bold.cyan("── 🌐 External Links ────────────────")));
    commandsList.filter(c => c.category === "links").forEach(c => {
        choices.push({
            name: `${c.name.padEnd(14)} ${chalk.gray("• " + c.description)}`,
            value: c.name
        });
    });

    choices.push(new inquirer.Separator(chalk.bold.cyan("── ⚙ System Commands ────────────────")));
    choices.push({ name: `clear          ${chalk.gray("• Clear Terminal")}`, value: "clear" });
    choices.push({ name: `exit           ${chalk.gray("• Exit ArpanOS")}`, value: "exit" });

    return choices;
}

module.exports = {
    commandsList,
    executeCommand,
    getCommandNames,
    getDescriptions,
    getHelpCategories,
    getMenuChoices
};
