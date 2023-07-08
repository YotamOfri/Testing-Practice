const caesarCipher = require("./caesarCipher");

test("casear Cipher", () => {
  expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
  expect(caesarCipher("Knight Watch", 10)).toBe("uxsqrd gkdmr");
});
