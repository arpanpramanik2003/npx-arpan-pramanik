# arpan-pramanik 🚀

> Interactive CLI Portfolio of **Arpan Pramanik** — AI Engineer, Full Stack Developer & Researcher.

[![npm version](https://img.shields.io/npm/v/arpan-pramanik.svg?style=flat-square&color=cb3837)](https://www.npmjs.com/package/arpan-pramanik)
[![npm downloads](https://img.shields.io/npm/dm/arpan-pramanik.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/arpan-pramanik)
[![Node.js Version](https://img.shields.io/node/v/arpan-pramanik.svg?style=flat-square&color=green)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Transforming standard resumes into an interactive terminal operating system experience. Explore projects, research publications, professional experience, skills, and social links right from your terminal console.

---

## ⚡ Quick Start

Run instantly without installation using `npx`:

```bash
npx arpan-pramanik
```

Or execute specific commands directly:

```bash
npx arpan-pramanik whoami
npx arpan-pramanik about
npx arpan-pramanik projects
npx arpan-pramanik experience
npx arpan-pramanik research
npx arpan-pramanik skills
```

---

## 💻 Installation

Install globally via `npm`:

```bash
npm install -g arpan-pramanik
```

Then run anywhere from your terminal:

```bash
arpan-pramanik
```

---

## ✨ Key Features

- 🖥️ **Interactive Terminal Shell (`ArpanOS`)**: Continuous terminal prompt (`arpan@portfolio:~$`) supporting multiple consecutive command executions.
- 🎯 **Interactive Arrow-Key Menu**: Type `menu` or `help` to open an arrow-key navigable selection list with real-time descriptions.
- ⌨️ **Tab Auto-Completion**: Press `Tab` to quickly complete commands.
- 🌐 **Automatic Browser Launcher**: Instantly open GitHub, LinkedIn, portfolio website, and resume in your default browser.
- 🎨 **Rich Terminal Visuals**: Features styled gradients, boxed layouts, loading spinners, and styled tables.
- ⚡ **Continuous Session Execution**: Command execution keeps the terminal session alive for seamless navigation without exiting back to your host shell.

---

## 📂 Available CLI Commands

### 📁 Portfolio Modules
| Command | Description |
| :--- | :--- |
| `whoami` | Overview summary of Arpan Pramanik |
| `about` | Background, bio & core AI/ML interests |
| `projects` | Featured AI, Computer Vision & Full Stack projects |
| `experience` | Internships & work experience (NIT Durgapur, XetaLabs, WEBEL, etc.) |
| `research` | IEEE research papers & conference publications |
| `skills` | Tech stack, AI/ML libraries, languages & dev tools |
| `education` | Academic background & degree details |
| `achievements` | Career highlights & metrics snapshot |
| `contact` | Contact details & availability |

### 🌐 External Links
| Command | Description |
| :--- | :--- |
| `github` | Opens GitHub profile in your default browser |
| `linkedin` | Opens LinkedIn profile in your default browser |
| `portfolio` | Opens web portfolio (`arpanpramanik.dev`) in browser |
| `social` | Displays and links all social media handles |
| `resume` | Opens latest resume PDF in your default browser |

### ⚙️ System Commands
| Command | Description |
| :--- | :--- |
| `help` / `menu` | Display interactive arrow-key menu navigation |
| `ls` | List all available modules |
| `pwd` | Print virtual working directory |
| `version` | Display current ArpanOS version |
| `clear` | Clear terminal screen |
| `exit` | Exit the ArpanOS CLI shell |

---

## 🛠️ Local Development & Setup

To clone, modify, or contribute to this CLI portfolio locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arpanpramanik2003/arpan-pramanik-cli.git
   cd arpan-pramanik-cli
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   npm start
   # or
   node index.js
   ```

4. **Test specific commands locally:**
   ```bash
   node index.js about
   node index.js projects
   ```

---

## 📁 Project Architecture

```
arpan-pramanik/
├── index.js              # Binary entry point (#!/usr/bin/env node)
├── package.json          # Package manifest & CLI configuration
├── README.md             # Project documentation
└── src/
    ├── app.js            # App initializer & boot sequence spinner
    ├── config.js         # User profile links & configuration constants
    ├── descriptions.js   # Command descriptions for interactive menu
    ├── menu.js           # Inquirer interactive menu navigator
    ├── terminal.js       # Readline interactive shell loop
    ├── utils.js          # Helper functions (browser opener, sleep)
    ├── commands/         # Command execution handlers
    ├── core/             # Command manager registry & banner runner
    ├── data/             # Static profile data (projects, experience, etc.)
    ├── screens/          # Boxen & Chalk terminal UI screens
    └── ui/               # Modular UI components (cards, tables, dividers)
```

---

## 👤 Author

**Arpan Pramanik**
- 🌐 Website: [arpanpramanik.dev](https://arpanpramanik.dev)
- 🐙 GitHub: [@arpanpramanik2003](https://github.com/arpanpramanik2003)
- 💼 LinkedIn: [in/arpanpramanik2003](https://linkedin.com/in/arpanpramanik2003)
- 📧 Email: [pramanikarpan089@gmail.com](mailto:pramanikarpan089@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

