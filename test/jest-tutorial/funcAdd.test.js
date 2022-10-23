const funcAdd = require("./funcAdd");

test("1 => 1", () => {
  expect(1).toBe(1);
});

test("2 + 3 = 5", () => {
  expect(funcAdd.add(2, 3)).toBe(5);
});

test("3 + 3 ≠ 5", () => {
  expect(funcAdd.add(3, 3)).not.toBe(5);
});



test("Make User Test", () => {
  expect(funcAdd.makeUser("James", 33)).toEqual({ name: "James", age: 33 });
});

test("Make User Test", () => {
  expect(funcAdd.makeUser("James", 33)).toStrictEqual({ name: "James", age: 33 });
});

// toBeNull
// toBeFalsey
// toBeTruthy
// toBeLessThanOrEqual
// toBeCloseTo
// toMatch
// toContain
// toThrow
