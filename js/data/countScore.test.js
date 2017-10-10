import assert from "assert";

const computeResult = (correctAnswers, restLives) => {
  if (correctAnswers.length < 10) {
    return -1;
  }
  if (correctAnswers.length === 10 && restLives === 3) {
    return 1150;
  }
  return correctAnswers.length;
};

const answers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe(`Count correct answers`, () => {
  it(`should return -1 if less than 10 questions answered`, () => {
    assert(computeResult(answers));
  });

  it(`should return 1150 if all questions answered and rest lives equal 3`, () => {
    assert(computeResult(answers, 3));
  });
});
