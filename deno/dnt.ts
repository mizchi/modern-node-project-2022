import { build } from "https://deno.land/x/dnt/mod.ts";

await build({
  cjs: false,
  entryPoints: ["./deno-pkg/mod.ts"],
  outDir: "./packages/deno-pkg-node",
  shims: {
    deno: true,
  },
  package: {
    name: "@internal/deno-pkg-node",
    version: "1.0.0",
    description: "internal",
    license: "MIT",
  },
});
