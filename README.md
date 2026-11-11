# CSCW27

A Hugo starter site using the [re-Terminal](https://github.com/mirus-ua/hugo-theme-re-terminal) theme.

## Run locally

Hugo Extended 0.128.0 or newer is required.

```bash
hugo server --buildDrafts
```

Open <http://localhost:1313>.

## Add a post

```bash
hugo new content posts/my-post.md
```

Edit the generated Markdown file, set `draft = false`, and run `hugo` to build
the production site into `public/`.

## Customize

- Site name, colors, and navigation: `hugo.toml`
- About page: `content/about.md`
- Posts: `content/posts/`
- Theme overrides: add matching files under `layouts/` or `assets/` instead of
  editing `themes/re-terminal` directly.

