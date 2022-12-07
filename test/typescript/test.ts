let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input Text -> ", function (input: number) {
  console.log(`${input} x ${input} = ${input * input}`);
  rl.close();
});
