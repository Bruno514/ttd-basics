import capitalize from "../functions/capitalize";

test("Capitalize lowercase word", () => {
  const sampleWord = "coding";
  expect(capitalize(sampleWord)).toBe("Coding");
});

test("Capitalize uppercase word", () => {
  const sampleWord = "flexbox";
  expect(capitalize(sampleWord)).toBe("Flexbox");
});

test("Capitalize random word", () => {
  const sampleWord = "akshgaasdfj";
  expect(capitalize(sampleWord)).toBe("Akshgaasdfj");
});

test("Capitalize null", () => {
  const sampleWord = null;
  expect(capitalize(sampleWord)).toBe("");
});

test("Capitalize undefined", () => {
  const sampleWord = undefined;
  expect(capitalize(sampleWord)).toBe("");
});

test("Capitalize long string", () => {
  const sampleWord = "this is a really long string";
  expect(capitalize(sampleWord)).toBe("This is a really long string");
});
