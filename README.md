# lib-config-ts-test

A turnkey **template** and **testing playground** for
the [lib-config-ts](https://github.com/vbetsch/lib-config-ts) monorepo.

> [!IMPORTANT]
> These configuration files are designed to be **extended**, not replaced. To ensure stability and
> receive future updates from the libraries, keep the core imports intact and add your
> project-specific settings in the **"Overrides"** sections.

## 📦 Available Packages

| Package                                                                              | Config File                                                               | Purpose                  |
|:-------------------------------------------------------------------------------------|:--------------------------------------------------------------------------|--------------------------|
| [`@vbetsch/config-eslint`](https://www.npmjs.com/package/@vbetsch/config-eslint)     | [eslint.config.mjs](eslint.config.mjs)                                    | Linting with Type Safety |
| [`@vbetsch/config-jest`](https://www.npmjs.com/package/@vbetsch/config-jest)         | [jest.config.mjs](jest.config.mjs)                                        | Testing with SWC support |
| [`@vbetsch/config-prettier`](https://www.npmjs.com/package/@vbetsch/config-prettier) | [.prettierrc.mjs](.prettierrc.mjs)                                        | Code Formatting          |
| [`@vbetsch/config-tsconfig`](https://www.npmjs.com/package/@vbetsch/config-tsconfig) | [tsconfig.json](tsconfig.json) [tsconfig.build.json](tsconfig.build.json) | TS Compilation & Build   |

**Utility Templates**:

* [.editorconfig](.editorconfig)
* [.gitignore](.gitignore)
* [.npmrc](.npmrc)
* [.prettierignore](.prettierignore).

---

## 🚀 How to Use as a Template

This repository is pre-configured. To start a new project:

1. **Clone** this repository.
2. **Clean up**: Remove example files in `src/` and `tests/`.
3. **Customize `package.json`**: Keep only the `@vbetsch` packages you actually need.
4. **Configure & Override**:

* Docstrings: These define the configuration chapters.
* Single comments: These are optional examples or overrides. Feel free to uncomment,
  modify, or add your own rules here to suit your project.

## 🛠 Installation & Updates

To ensure you have the latest stable versions and a clean environment:

```bash
npm cache clean --force
npm install -D @vbetsch/config-eslint@latest @vbetsch/config-jest@latest @vbetsch/config-prettier@latest @vbetsch/config-tsconfig@latest --prefer-online
```

## 🚥 Development Workflow

Validate your setup by running the following commands in order:

```bash
npm run start:dev        # Check development execution
npm run prettier         # Format code
npm run jest             # Run tests
npm run tsconfig         # Type-check
npm run eslint           # Lint code
npm run tsconfig:build   # Run production build
npm run start:prod       # Check production execution
```

## 🤝 Contributing

Contributions are welcome! To get started, please ensure you have an approved issue before
submitting a PR.
