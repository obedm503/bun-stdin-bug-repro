const lines: string[] = [];
for await (const line of console) {
  lines.push(line);
}

console.log(lines.length);
