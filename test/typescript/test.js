var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Input Text -> ", function (input) {
    console.log("".concat(input, " x ").concat(input, " = ").concat(input * input));
    rl.close();
});
