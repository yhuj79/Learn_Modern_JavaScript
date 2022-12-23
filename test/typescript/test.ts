const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr: number[] = [];

for (let i = 0; i < input.length; i++) {
  let inf: number = Number(input[i]);
  arr.push(inf);
}

console.log(arr);