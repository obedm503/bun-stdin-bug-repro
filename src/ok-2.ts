const reader = await Bun.stdin.stream().getReader().read();
const text = new TextDecoder().decode(reader.value);
const lines = text.split("\n");

console.log(lines.length);
