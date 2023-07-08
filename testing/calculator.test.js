const calculator = require("./calculator");

test("object with 4 function {add,subtract,divied,multiply}", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.divide(5, 5)).toBe(1);
  expect(calculator.multiply(2, 5)).toBe(10);
});
