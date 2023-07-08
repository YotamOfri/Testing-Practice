function caesarCipher(string, shift) {
  // letter into number A = 1, Z = 26
  const LetterToNum = (string) => string.toLowerCase().charCodeAt(0) - 97 + 1;
  const ShiftToSize = (number) =>
    number > 26 ? ShiftToSize(number - 26) : number;
  let NumbersList = [];
  let cipherString = "";
  //   converting every letter into number and inside the NumbersList
  for (letter of string) NumbersList.push(LetterToNum(letter));
  for (num of NumbersList) {
    if (num >= 1)
      cipherString += String.fromCharCode(96 + ShiftToSize(num + shift));
    else cipherString += " ";
  }
  return cipherString;
}
module.exports = caesarCipher;
