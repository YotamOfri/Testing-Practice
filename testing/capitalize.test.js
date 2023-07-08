const capitalize = require("./capitalize");

test("Returning the string with the first letter capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("man")).toBe("Man");
});
