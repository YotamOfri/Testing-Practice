function reverseString(string) {
  let reversed = "";
  for (letter of string) reversed = letter + reversed;
  return reversed;
}
module.exports = reverseString;
