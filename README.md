# npx arpan-pramanik 🚀

> Interactive CLI Portfolio of **Arpan Pramanik** — AI Engineer, Full Stack Developer & Researcher.

[![npm version](https://img.shields.io/badge/npm-v2.0.0-cb3837.svg?style=flat-square)](https://www.npmjs.com/package/arpan-pramanik)
[![npm downloads](https://img.shields.io/npm/dm/arpan-pramanik.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/arpan-pramanik)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-green.svg?style=flat-square)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Transforming standard resumes into an interactive terminal operating system experience. Explore projects, research publications, professional experience, skills, and social links right from your terminal console.

---

## ⚡ Quick Start

Run instantly without installation using `npx`:

```bash
npx arpan-pramanik
```

Or execute specific direct commands — executes the command and exits cleanly back to your host terminal:

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

- 🖥️ **Interactive Terminal Shell (`ArpanOS`)**: Continuous interactive prompt (`arpan@portfolio:~$`) supporting consecutive command executions without exiting.
- ⚡ **Sub-400ms Ultra-Fast Execution**: Optimized lazy command loading for near-instant response on direct CLI runs and interactive shells.
- 🎯 **Interactive Arrow-Key Menu**: Type `menu` or `help` to open an arrow-key navigable selection list with real-time descriptions.
- ⌨️ **Tab Auto-Completion**: Press `Tab` to quickly auto-complete available commands.
- 🌐 **Headless-Aware Browser Launcher**: Instantly open GitHub, LinkedIn, portfolio website, and resume in your default browser, with automatic plain-text URL fallbacks in headless server or SSH environments.
- 🎨 **Responsive Boxed Visuals**: Styled boxed screens with dynamic horizontal rules (`getDivider`) that auto-adapt line widths to narrow terminals (< 50 columns).
- 🛡️ **Graceful Error Resilience**: Wrapped command execution catches runtime exceptions safely with user-friendly error messages instead of process crashes.

---

## 📂 Available CLI Commands

### 📁 Portfolio Modules
| Command | Description |
| :--- | :--- |
| `whoami` | Overview summary of Arpan Pramanik |
| `about` | Background, bio & core AI/ML interests |
| `projects` | Featured AI, Computer Vision & Full Stack projects |
| `experience` | Professional experience & internships (NIT Durgapur, XetaLabs, WEBEL) |
| `research` | IEEE research papers & conference publications |
| `skills` | Tech stack, AI/ML libraries, languages & dev tools |
| `education` | Academic background & degree details |
| `achievements` | Career highlights & accomplishments |
| `contact` | Contact details & availability |

### 🌐 External Links
| Command | Description |
| :--- | :--- |
| `github` | Opens GitHub profile in default browser (with headless text fallback) |
| `linkedin` | Opens LinkedIn profile in default browser (with headless text fallback) |
| `portfolio` | Opens web portfolio (`arpanpramanik.dev`) in browser (with headless text fallback) |
| `social` | Displays and links all social media handles |
| `resume` | Opens latest resume PDF in default browser (with headless text fallback) |

### ⚙️ System Commands
| Command | Description |
| :--- | :--- |
| `help` / `menu` | Display interactive arrow-key menu navigation |
| `ls` | List all available modules |
| `pwd` | Print virtual working directory (`/home/arpan/portfolio`) |
| `version` | Display current ArpanOS version (`v2.0.0`) |
| `clear` | Clear terminal screen |
| `exit` | Exit the ArpanOS CLI shell |

---

## 🛠️ Local Development & Setup

To clone, modify, or test this CLI portfolio locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arpanpramanik2003/arpan-pramanik-cli.git
   cd arpan-pramanik-cli
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run automated test suite:**
   ```bash
   npm test
   ```

4. **Run locally:**
   ```bash
   npm start
   # or
   node index.js
   ```

5. **Test direct commands locally:**
   ```bash
   node index.js whoami
   node index.js projects
   ```

---

## 📁 Project Architecture

```
arpan-pramanik/
├── index.js              # CLI binary entry point (#!/usr/bin/env node)
├── package.json          # Package manifest, dependencies & version (v2.0.0)
├── README.md             # Project documentation & usage guide
├── LICENSE               # MIT License
├── tests/
│   └── cli.test.js       # Automated Node.js test runner suite (node:test)
├── .github/
│   └── workflows/
│       └── ci-cd.yml     # Automated CI testing & release pipeline
└── src/
    ├── app.js            # Main CLI initializer & direct invocation router
    ├── config.js         # Profile configuration & dynamic version loader
    ├── descriptions.js   # Command descriptions exporter
    ├── menu.js           # Interactive arrow-key navigation menu
    ├── terminal.js       # Readline interactive shell loop & autocompleter
    ├── utils.js          # Helpers (headless browser opener, getDivider)
    ├── commands/         # Lazy-loaded command exports
    ├── core/
    │   ├── commandManager.js   # Command execution router
    │   ├── commandRegistry.js  # Centralized Command Registry & Manifest
    │   ├── banner.js           # ASCII banner runner
    │   └── printer.js          # Terminal box printer helper
    ├── data/             # Static profile data (projects, experience, etc.)
    └── screens/          # Terminal UI screen renderers (whoami, about, etc.)
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
