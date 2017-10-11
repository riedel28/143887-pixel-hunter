import assert from "assert";
import {getTotalScore} from "./../utils";

describe(`Count correct answers`, () => {
  it(`should return -1 if less than 10 questions answered`, () => {
    assert.equal(getTotalScore([`correct`, `fast`, `slow`]), -1);
  });

  it(`should return 1150 if all 10 answers are correct, but not fast or slow`, () => {
    assert.equal(
        getTotalScore([
          `correct`,
          `correct`,
          `correct`,
          `correct`,
          `correct`,
          `correct`,
          `correct`,
          `correct`,
          `correct`,
          `correct`
        ]),
        1150
    );
  });
});
