import calculator from "../functions/calculator";

test("Addition between 2 whole numbers", () => {
  expect(calculator.add(1, 4)).toEqual(5);
});

test("Subtraction between 2 whole numbers", () => {
  expect(calculator.subtract(4, 1)).toEqual(3);
});

test("Multiplycation between 2 whole numbers", () => {
  expect(calculator.multiply(4, 2)).toEqual(8);
});

test("Division between 2 whole numbers", () => {
  expect(calculator.divide(10, 2)).toEqual(5);
});

test("Addition between 2 non-numbers", () => {
  expect(calculator.add("safdl", [])).toEqual(null);
});

test("Addition between 1 number and 1 non-number", () => {
  expect(calculator.add("safdl", [])).toEqual(null);
});
