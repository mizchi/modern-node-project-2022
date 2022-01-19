# modern-node-project-2022

My opinionated node & deno project

## Requirements

- node@16
- npm@8
- pnpm (`npm i -g pnpm`)
- Optional: deno (`curl -fsSL https://deno.land/install.sh | sh`)

## Stack

- frontend: Vite
- test: Vitest
- lint: `deno lint`
- format: `deno fmt`
- incremental build: turbo
- import deno module from nodejs by https://github.com/denoland/dnt


## Directories

- `apps/*`: node app
- `packages/*`: node packages
- `deno/*`: deno modules

## Develop

```bash
# init
$ pnpm install

# build
pnpm run build

# test
pnpm test

# format
pnpm run format

# lint
pnpm run lint
```

## Develop(deno)

Open `./deno` dir as workspace

```
$ code ./deno --add
```

Reload vscode and enable `vscode_deno`

## LICENSE

MIT