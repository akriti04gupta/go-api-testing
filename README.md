# Go API Testing Tutorial

A beginner-friendly developer documentation site that demonstrates how real API traffic from a **Go + Echo + PostgreSQL** application can be turned into repeatable automated tests using **Keploy**.

The project is built as a single-page documentation experience using **Next.js, MDX, TypeScript, and Tailwind CSS**, with custom components for navigation, callouts, architecture diagrams, and developer-friendly code blocks.

## 🚀 Live Demo

**Live documentation:**  
https://YOUR-VERCEL-URL.vercel.app

**Source code:**  
https://github.com/akriti04gupta/go-api-testing

---

## 📖 What This Tutorial Covers

The tutorial walks through the complete workflow of taking a working Go application and turning real API interactions into reusable regression tests.

### The workflow

```text
Run the Go application
        ↓
Make real API requests
        ↓
Keploy records API traffic + dependencies
        ↓
Test cases + mocks are generated
        ↓
Replay the recorded tests
        ↓
Verify application behaviour
````

The tutorial uses a small **Echo + PostgreSQL URL shortener** so that the entire testing workflow can be understood without unnecessary application complexity.

---

## 🎯 What You'll Learn

By following the tutorial, you'll learn how to:

* Set up and run the Go sample application
* Run PostgreSQL using Docker Compose
* Connect a locally running Go application to PostgreSQL
* Record real API traffic using Keploy
* Capture application dependency behaviour
* Automatically generate test cases and mocks
* Inspect the generated Keploy test files
* Replay recorded API interactions
* Use recorded tests for regression testing

The goal is not just to show commands, but to explain **what is happening at each step and why it matters to a Go developer**.

---

## ✨ Documentation Features

The documentation site includes:

* **MDX-powered tutorial content** — Markdown with React components
* **Documentation-style layout** — focused reading experience for developers
* **Smart sidebar navigation** — quickly jump between tutorial sections
* **Active section tracking** — highlights the section currently being viewed
* **Interactive code blocks** — copy commands directly from the tutorial
* **Language indicators** — clearly identify shell, Go, JSON, YAML, and text snippets
* **Custom callout components** — highlight important information and tips
* **Architecture/workflow visualization** — explain how API traffic flows through the testing process
* **Responsive design** — optimized for desktop and smaller screens
* **External documentation links** — useful resources are linked directly from the relevant steps

---

## 🛠️ Technology Stack

| Technology         | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| **Next.js**        | Documentation website and application framework      |
| **React**          | UI and interactive components                        |
| **TypeScript**     | Type-safe component development                      |
| **MDX**            | Documentation content with embedded React components |
| **Tailwind CSS**   | Styling and responsive UI                            |
| **Keploy**         | API test generation and replay                       |
| **Go + Echo**      | Sample application                                   |
| **PostgreSQL**     | Application database                                 |
| **Docker Compose** | Local PostgreSQL environment                         |

---

## 📁 Project Structure

```text
go-api-testing/
├── app/
│   ├── components/
│   │   ├── ArchitectureDiagram.tsx
│   │   ├── Callout.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── CopyButton.tsx
│   │   ├── Hero.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── page.mdx
│   ├── layout.tsx
│   └── globals.css
│
├── public/
│   └── images/
│
├── mdx-components.tsx
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Prerequisites

To run the documentation website locally, you'll need:

* Node.js 18+
* npm
* Git

To follow the actual Go testing tutorial, you'll additionally need:

* Go
* Docker
* curl
* Keploy CLI
* Linux/WSL

---

## 🏃 Running the Documentation Site Locally

### 1. Clone the repository

```bash
git clone https://github.com/akriti04gupta/go-api-testing.git
cd go-api-testing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open the site

Visit:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

---

## 📝 Editing the Tutorial

The main tutorial is written in:

```text
app/page.mdx
```

Because the page uses MDX, regular Markdown can be combined with React components.

For example:

```mdx
<Callout type="info">
  PostgreSQL runs inside Docker while the Go application runs locally.
</Callout>
```

This allows the documentation to remain easy to read while still supporting interactive and reusable UI components.

---

## 🧪 Tutorial: API Testing Workflow

The sample application exposes two primary operations:

```text
POST /url
    ↓
Create a short URL

GET /:id
    ↓
Redirect to the original URL
```

The tutorial then demonstrates:

### Record

```bash
keploy record
```

Keploy observes the real API interaction and captures the relevant dependency behaviour.

### Generate

Real requests are converted into reusable test cases and dependency mocks.

### Test

```bash
keploy test
```

The recorded interactions are replayed and the application's responses are compared against the recorded expectations.

This creates a simple:

```text
Real traffic → Recorded tests → Repeatable verification
```

workflow.

---

## 🧩 Custom Components

### `Hero`

Introduces the tutorial and communicates the core idea of converting real API traffic into automated tests.

### `Sidebar`

Provides section-based navigation and helps readers understand their current position within the tutorial.

### `CodeBlock`

Provides a consistent developer-focused code presentation with:

* language/file indicators
* copy functionality
* horizontal scrolling
* theme-consistent styling

### `CopyButton`

Allows developers to copy commands and code snippets directly from the documentation.

### `Callout`

Used to highlight important information, setup notes, tips, and warnings without interrupting the tutorial flow.

### `ArchitectureDiagram`

Visually explains the relationship between:

```text
Client
  ↓
Keploy
  ↓
Go + Echo
  ↓
PostgreSQL
```

and how the recorded interaction is later replayed during testing.

---

## 🎨 Design Approach

The interface follows a documentation-first design philosophy:

* **Clarity over decoration** — content remains the primary focus
* **Strong visual hierarchy** — clear distinction between concepts, steps, and commands
* **Developer-focused code presentation** — commands are easy to identify and copy
* **Progressive explanation** — each step explains both the command and its purpose
* **Consistent visual language** — components share the same typography, spacing, and colour system
* **Responsive layout** — the tutorial remains usable across different screen sizes

---

## 🌐 Deployment

The documentation site is deployed using **Vercel**.

Every production deployment builds the Next.js application and serves the generated documentation as a web application.

### Deployment flow

```text
GitHub
   ↓
Vercel
   ↓
Next.js build
   ↓
Live documentation
```

**Live site:**
[https://YOUR-VERCEL-URL.vercel.app](https://YOUR-VERCEL-URL.vercel.app)

---

## 📚 Useful Resources

* [Keploy Documentation](https://keploy.io/docs/)
* [Keploy Go Samples](https://github.com/keploy/samples-go)
* [Go Documentation](https://go.dev/doc/)
* [Docker Documentation](https://docs.docker.com/)
* [Next.js Documentation](https://nextjs.org/docs)
* [MDX Documentation](https://mdxjs.com/)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 📌 Project Context

This project was built as a developer-focused documentation assignment.

The objective was to:

1. Learn and run a Keploy Go quickstart.
2. Understand the recording and replay workflow.
3. Document the experience for a developer new to Keploy.
4. Build the tutorial as a static Next.js + MDX website.
5. Present the technical workflow through a clean, interactive documentation experience.
6. Deploy the finished documentation publicly.

The tutorial is based on actually running the **Go + Echo + PostgreSQL** quickstart locally and validating the generated tests.

---


**Built with Next.js + MDX + Tailwind CSS 🚀**

````
And I'd **keep the README around this length**. The benchmark README is quite long, but for a DevRel assignment, this version is easier for a reviewer to scan while still demonstrating that you understand the project.
