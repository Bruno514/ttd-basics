const calculator = {
  add: (n1, n2) => {
    return typeof n1 == "number" && typeof n2 == "number" ? n1 + n2 : null;
  },
  subtract: (n1, n2) => {
    return typeof n1 == "number" && typeof n2 == "number" ? n1 - n2 : null;
  },
  multiply: (n1, n2) => {
    return typeof n1 == "number" && typeof n2 == "number" ? n1 * n2 : null;
  },
  divide: (n1, n2) => {
    return typeof n1 == "number" && typeof n2 == "number" ? n1 / n2 : null;
  },
};

export default calculator;
