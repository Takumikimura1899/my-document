# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```bash
bun create astro@latest -- --template starlight
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed
as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 🧹 Formatting & linting

The project now ships with opinionated Markdown tooling:

- `bun run format` — formats Markdown, MDX, Astro, and config files with Prettier.
- `bun run format:check` — checks whether files are already formatted.
- `bun run lint` — lints Markdown/MDX content via `markdownlint-cli2` using the rules in
  `.markdownlint-cli2.jsonc`.
- `bun run lint:secrets` — scans the repository with Secretlint to detect accidentally committed API
  keys や機密情報。

Prettier ignores build outputs (`dist`, `.astro`, etc.) and markdownlint skips generated folders.
Git hooks powered by Lefthook run `bun run format:check` と `bun run lint`
を自動実行し、リポジトリを常に整えます。Secretlint も pre-commit で実行され、機密情報の混入を防ぎます。Before
pushing, Lefthook also triggers a production build (`bun run build`) and a Cloudflare Workers dry
run (`bun run cf:dry-run`) to catch deployment issues early. Set `SKIP=build` or `SKIP=cloudflare`
when running `lefthook run` manually to skip an individual command if needed.

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read
[the Astro documentation](https://docs.astro.build), or jump into the
[Astro Discord server](https://astro.build/chat).
