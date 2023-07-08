const reverseString = require("./reverseString");
test("Returns The string Reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});
