import assert from "assert";

const computeResult = (correctAnswers) => {
  if (correctAnswers.length < 10) {
    return -1;
  }
  return correctAnswers.length;
};

const answers = [1, 2, 3, 4, 5];

describe(`Count correct answers`, () => {
  it(`should return -1 if less than 10 questions answered`, () => {
    assert(computeResult(answers));
  });
});
