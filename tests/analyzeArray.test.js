import analyzeArray from "../functions/analyzeArray";

test("Simple array with unique numbers", () => {
  const sampleArray = [12, 43, 25, 32, 90];
  const expectedObj = { average: 40.4, min: 12, max: 90, length: 5 };
  expect(analyzeArray(sampleArray)).toEqual(expectedObj);
});

test("Array with duplicated numbers", () => {
  const sampleArray = [12, 43, 25, 25, 90];
  const expectedObj = { average: 39, min: 12, max: 90, length: 5 };
  expect(analyzeArray(sampleArray)).toEqual(expectedObj);
});

test("Array with strings", () => {
  const sampleArray = ["what", 43, "the", 25, 90];
  const expectedObj = {average: null, min: null, max: null, length: null};
  expect(analyzeArray(sampleArray)).toEqual(expectedObj);
});

test("Array with others non-numbers", () => {
  const sampleArray = [true, 43, undefined, 25, null];
  const expectedObj = {average: null, min: null, max: null, length: null};
  expect(analyzeArray(sampleArray)).toEqual(expectedObj);
});

test("Empty array", () => {
  const sampleArray = [];
  const expectedObj = {average: null, min: null, max: null, length: null};
  expect(analyzeArray(sampleArray)).toEqual(expectedObj);
});