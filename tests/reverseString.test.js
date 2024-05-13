import reverseString from "../functions/reverseString";

test("Reverse simple word", () => {
  const sampleWord = "soup";
  expect(reverseString(sampleWord)).toBe("puos");
});

test("Reverse big word", () => {
  const sampleWord = "tastysoupofdragonmeat";
  expect(reverseString(sampleWord)).toBe("taemnogardfopuosytsat");
});

test("Reverse phrase", () => {
  const sampleWord = "coding is fun";
  expect(reverseString(sampleWord)).toBe("nuf si gnidoc");
});

test("Reverse empty string", () => {
  const sampleWord = "coding is fun";
  expect(reverseString(sampleWord)).toBe("nuf si gnidoc");
});

test("Return empty for non-strings values", () => {
  const samples = [null, undefined, 1, [1,2,3], false]
  samples.forEach(sample => {
    expect(reverseString(sample)).toBe("");
  })
})
