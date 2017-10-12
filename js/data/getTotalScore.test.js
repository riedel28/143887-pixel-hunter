import assert from "assert";
import {getTotalScore} from "./../utils";

describe(`Count correct answers`, () => {
  it(`should return -1 if less than 10 questions answered`, () => {
    assert.equal(
        getTotalScore(
            [
              {success: true, time: 17},
              {success: true, time: 17},
              {success: true, time: 17}
            ],
            3
        ),
        -1
    );
  });

  it(`should return 1150 if all 10 answers are correct, but not fast or slow`, () => {
    assert.equal(
        getTotalScore(
            [
              {success: true, time: 17},
              {success: true, time: 17},
              {success: true, time: 17},
              {success: true, time: 17},
              {success: true, time: 17},
              {success: true, time: 17},
              {success: true, time: 17},
              {success: true, time: 17},
              {success: true, time: 17},
              {success: true, time: 17}
            ],
            3
        ),
        1150
    );
  });

  it(`should return 1000`, () => {
    assert.equal(
        getTotalScore(
            [
              {success: true, time: 17},
              {success: true, time: 18},
              {success: true, time: 12},
              {success: true, time: 11},
              {success: true, time: 15},
              {success: true, time: 16},
              {success: true, time: 13},
              {success: true, time: 31},
              {success: true, time: 24},
              {success: true, time: 1}
            ],
            2
        ),
        1000
    );
  });

  it(`should return 1550`, () => {
    assert.equal(
        getTotalScore(
            [
              {success: true, time: 1},
              {success: true, time: 2},
              {success: true, time: 3},
              {success: true, time: 4},
              {success: true, time: 5},
              {success: true, time: 6},
              {success: true, time: 7},
              {success: true, time: 8},
              {success: true, time: 9},
              {success: true, time: 10}
            ],
            1
        ),
        1550
    );
  });

  it(`should return 300`, () => {
    assert.equal(
        getTotalScore(
            [
              {success: true, time: 31},
              {success: true, time: 32},
              {success: true, time: 33},
              {success: true, time: 60},
              {success: true, time: 42},
              {success: true, time: 100},
              {success: true, time: 1000},
              {success: true, time: 11},
              {success: true, time: 12},
              {success: true, time: 20}
            ],
            0
        ),
        300
    );
  });
});
