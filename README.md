<div align="center">

<img src="images/bob_wave.png" alt="Bob waving" width="140">

# IBM Bob · Level 3 — Hands-on Lab Guide

**Learn IBM Bob by doing: seven practical labs that take you from inline AI assistance to custom modes, Bob Shell and MCP.**

[![Live guide](https://img.shields.io/badge/%F0%9F%9A%80%20Live%20guide-GitHub%20Pages-0f62fe?style=for-the-badge)](https://srlozano.github.io/bob-hands-on-lab/)
[![Languages: Spanish, Catalan](https://img.shields.io/badge/content-Espa%C3%B1ol%20%C2%B7%20Catal%C3%A0-c8102e?style=for-the-badge)](https://srlozano.github.io/bob-hands-on-lab/)
[![Labs](https://img.shields.io/badge/labs-7-24a148?style=for-the-badge)](#-the-labs)
[![Unofficial](https://img.shields.io/badge/IBM-unofficial%20community%20material-525252?style=for-the-badge)](#-disclaimer)

[**Open the guide →**](https://srlozano.github.io/bob-hands-on-lab/)

</div>

---

> 🌍 **Language note:** the guide itself (all lab instructions and explanations) is available in **Spanish** (default) and **Catalan** (*català*), with an `ES | CA` switcher in the page. Screenshots show the Bob interface in Spanish. This README is in English to make the repository easy to find and understand.

## 📖 What is this?

This repository hosts an interactive, step-by-step **hands-on lab guide for the IBM Bob Level 3 enablement course**. It walks you through the labs while you build real features on top of **Galaxium Travels**, the sample full-stack space-travel booking app used in the official [IBM Bob Level 3 material](https://ibm.github.io/bob-l3/).

[IBM Bob](https://bob.ibm.com) is an AI-powered partner for the whole software development lifecycle (SDLC), available as an IDE extension and as a terminal tool (Bob Shell). This guide helps you get hands-on with it, keeping you in control at every step.

## 🧭 What you will learn

The labs follow the **AI Maturity Curve**: as you move along it, you hand Bob progressively more responsibility while you stay in command.

| Module | Stage | What it covers |
|:---:|---|---|
| **1** | **Assist** | Bob speeds up everyday work in the editor. You accept or reject every change. |
| **2** | **Delegate** | Bob builds a whole feature from a plan you reviewed and approved first. |
| **3** | **Tailor** | Bob learns your codebase, follows your standards and adapts to each role. |
| **4** | **Scale & Extend** | Bob stays reliable on large tasks and connects to the tools your company already uses. |

## 🧪 The labs

| Lab | Topic | Time | Level |
|:---:|---|:---:|:---:|
| 1.1 | Inline Chat (⌘K / Ctrl+K) | ~10 min | Easy |
| 2.1 ⭐ | Agentic chat: seat classes (Plan → Agent) | ~20–30 min | Medium |
| 3.1 | The `/init` command and `AGENTS.md` | ~3 min | Easy |
| 3.2 | Bob Rules | ~7 min | Easy |
| 3.3 | Custom Modes | ~10 min | Medium |
| 4.1 | Bob Shell | ~15 min | Medium |
| 4.2 ⭐ | MCP: the GitHub server | ~15–20 min | Medium |

⭐ = essential if you are short on time.

The guide also includes a **setup** section (account, requirements, starting the app), a short chapter on **how to interact with Bob** (shortcuts and input methods) and a **key concepts** reference.

## ✨ Features of the guide

- 📌 Step-by-step labs with screenshots
- ✅ Progress saved automatically in your browser
- 🧩 Copy-ready prompts and commands with a one-click "Copy" button
- 🌙 Single static page (dark theme), no build step and no dependencies
- 🌐 Spanish / Catalan switcher; your choice is remembered, and `?lang=ca` or `?lang=es` forces a language
- ⚡ Screenshots load lazily, so the landing page opens fast

## 🚀 Getting started

**Just read it online:** [srlozano.github.io/bob-hands-on-lab](https://srlozano.github.io/bob-hands-on-lab/)

**Run it locally:**

```bash
git clone https://github.com/SrLozano/bob-hands-on-lab.git
cd bob-hands-on-lab
open index.html        # macOS; on other systems just open the file in a browser
```

To follow the labs you will also need IBM Bob and the [Galaxium Travels](https://github.com/IBM/galaxium-travels) sample app (branch `bob-learning-path-branch`). The guide's **Setup** section explains how to get both.

## 🗂️ Repository structure

```text
.
├── index.html      # The guide (HTML + CSS + JS) with the Spanish content
├── ca.js           # Catalan translation, loaded by index.html
├── images/         # Screenshots, Bob illustrations and author photos
├── .nojekyll       # Tells GitHub Pages to serve the files as they are
└── README.md
```

## 🌐 Publishing with GitHub Pages

No build is needed. In your repository go to **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** and save. The site will be available at `https://<your-user>.github.io/<repo-name>/`.

## 👥 Authors

| | Name | Role |
|---|---|---|
| <img src="images/mario.png" width="48" alt="Mario Lozano Cortés"> | **Mario Lozano Cortés** | Forward Deployed AI Engineer |
| <img src="images/nibrass.png" width="48" alt="Nibrass Haider"> | **Nibrass Haider** | Forward Deployed Engineer |
| <img src="images/miguel.jpg" width="48" alt="Miguel Ángel Hidalgo Sánchez"> | **Miguel Ángel Hidalgo Sánchez** | Client Value Engineer |

## 🙏 Acknowledgements

This guide is based on the official [IBM Bob Level 3](https://ibm.github.io/bob-l3/) hands-on material ([`IBM/bob-l3`](https://github.com/IBM/bob-l3), Apache-2.0) and on the public Galaxium Travels sample application. All credit for the original course goes to the IBM Enablement team.

## ⚠️ Disclaimer

This is an independent, community-created resource. It is **not** affiliated with, endorsed by, or an official publication of IBM. IBM and IBM Bob are trademarks of International Business Machines Corporation.
