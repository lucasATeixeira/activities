const testCases = [
  {
    case: [1, 2, 3, 2, 1],
    expected: 2
  },
  {
    case: [2, 4, 1, 4, 7, 0, 10],
    expected: -1
  },
  {
    case: [0],
    expected: 0
  },
  {
    case: [10, 9, 3, 2, 10, 2, 3, 9, 10],
    expected: 4
  },
  {
    case: [10, 9, 3, 2, 10, 2, 3, 9, 10, 1234, 41, 12],
    expected: -1
  }
];

function test(one) {
  let result = [];

  testCases.forEach(testCase => {
    const response = one(testCase.case);
    if (response === testCase.expected) {
      result.push("SUCCESS");
    } else {
      result.push(
        `FAIL: expected: ${testCase.expected}, your result: ${response}`
      );
    }
  });

  console.table(result);
}

module.exports = test;
