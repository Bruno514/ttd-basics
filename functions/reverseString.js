function reverseString(word) {
  if (typeof word !== "string") return "";

  let reversedString = ""
  for (let i = word.length; i >= 0; i--) {
    reversedString = reversedString + word.charAt(i)
  }

  return reversedString;
}

export default reverseString