const lines: string[] = (await Bun.stdin.text()).split("\n");

console.log(lines.length);
