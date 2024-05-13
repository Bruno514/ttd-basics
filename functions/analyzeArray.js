function analyzeArray(arr) {
  let validArray = true;
  let total = 0;
  let max = undefined;
  let min = undefined;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      validArray = false;
      break;
    }

    if (!max || arr[i] > max) max = arr[i];
    if (!min || arr[i] < min) min = arr[i];

    total += arr[i];
  }

  if (!validArray || !arr.length) {
    console.log(validArray);
    return { average: null, min: null, max: null, length: null };
  }

  return {
    average: total / arr.length,
    min: min,
    max: max,
    length: arr.length,
  };
}

export default analyzeArray;
