const testCases = [
  {
    case: ["N", "N", "S", "S"],
    expected: []
  },
  {
    case: ["N", "N", "S"],
    expected: ["N"]
  },
  {
    case: ["L", "O"],
    expected: []
  },
  {
    case: ["L", "O", "N", "S"],
    expected: []
  },
  {
    case: ["N", "L", "S", "O"],
    expected: ["N", "L", "S", "O"]
  },
  {
    case: ["N", "N", "S", "L", "S"],
    expected: ["N", "L", "S"]
  }
];

function test(two) {
  let result = [];

  testCases.forEach(testCase => {
    const response = two(testCase.case);
    console.log(response == testCase.expected);
    if (response === testCase.expected) {
      result.push("SUCCESS");
    } else {
      result.push(`expected: ${testCase.expected}, your result: ${response}`);
    }
  });

  console.table(result);
}

module.exports = test;
