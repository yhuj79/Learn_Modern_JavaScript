let factorial = 0;

function nFacRuntimeFunc(n) {
  for (let i = 0; i < n; i++) {
    nFacRuntimeFunc(n - 1);
  }
}

console.log(factorial(4));
console.log("factorial: ", factorial);