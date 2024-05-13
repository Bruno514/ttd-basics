function caesarCipher(word, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let encrypted = "";
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (!isAlpha(letter)) {
      encrypted += letter;
      continue;
    }

    key = key > 0 ? key : 26 + (key % 26)

    const isUpperCase = letter === letter.toUpperCase();
    const letterPos = alphabet.indexOf(letter.toLowerCase());

    const encryptPos = (letterPos + key) % alphabet.length;
    const letterCipher = alphabet[encryptPos];

    encrypted += isUpperCase ? letterCipher.toUpperCase() : letterCipher;
  }

  return encrypted;
}

function isAlpha(char) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet.includes(char.toLowerCase());
}

export default caesarCipher;
