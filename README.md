# bun-stdin-bug-repro

Reported in [#7500](https://github.com/oven-sh/bun/issues/7500).
Fixed in [#7535](https://github.com/oven-sh/bun/pull/7535).


To install dependencies:

```bash
bun install
```

To run:

```bash
cat big.txt | bun run src/ok.ts # 141
cat big.txt | bun run src/ok-2.ts # 141
cat big.txt | bun run src/bug.ts # 30
```

This project was created using `bun init` in bun v1.0.15. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
