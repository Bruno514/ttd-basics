import caesarCipher from "../functions/caesarCipher";

test("Simple word and small factor", () => {
  const sampleWord = "island";
  expect(caesarCipher(sampleWord, 5)).toBe("nxqfsi");
});

test("Simple word and big factor", () => {
  const sampleWord = "island";
  expect(caesarCipher(sampleWord, 25)).toBe("hrkzmc");
});

test("Simple phrase with spaces only and small factor", () => {
  const sampleWord = "i am the greatest";
  expect(caesarCipher(sampleWord, 4)).toBe("m eq xli kviexiwx");
});

test("Simple phrase with spaces only and big factor", () => {
  const sampleWord = "i am the greatest";
  expect(caesarCipher(sampleWord, 34)).toBe("q iu bpm ozmibmab");
});

test("Keep same case in word", () => {
  const sampleWord = "I am the GREATEST";
  expect(caesarCipher(sampleWord, 4)).toBe("M eq xli KVIEXIWX");
});

test("Z to A", () => {
  const sampleWord = "zyxwvutsrqponmlkjihgfedcba";
  expect(caesarCipher(sampleWord, 8)).toBe("hgfedcbazyxwvutsrqponmlkji");
});

test("Test punctuation", () => {
  const sampleWord = "Ok, all right!";
  expect(caesarCipher(sampleWord, 8)).toBe("Ws, itt zqopb!");
});

test("Test negative factor", () => {
  const sampleWord = "Ok, all right!";
  expect(caesarCipher(sampleWord, -4)).toBe("Kg, whh necdp!");
});
