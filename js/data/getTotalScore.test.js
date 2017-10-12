import assert from "assert";
import {getTotalScore} from "./../utils";

describe(`Count correct answers`, () => {
  it(`should return -1 if less than 10 questions answered`, () => {
    assert.equal(
        getTotalScore(
            [
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `slow`, time: 17}
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
              {type: `ok`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17}
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
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17},
              {type: `fast`, time: 17},
              {type: `fast`, time: 17},
              {type: `ok`, time: 17},
              {type: `ok`, time: 17}
            ],
            1
        ),
        1000
    );
  });

  it(`should return 550`, () => {
    assert.equal(
        getTotalScore(
            [
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `slow`, time: 17},
              {type: `slow`, time: 17}
            ],
            1
        ),
        550
    );
  });

  it(`should return 300`, () => {
    assert.equal(
        getTotalScore(
            [
              {type: `incorrect`, time: 17},
              {type: `incorrect`, time: 17},
              {type: `incorrect`, time: 17},
              {type: `incorrect`, time: 17},
              {type: `incorrect`, time: 17},
              {type: `incorrect`, time: 17},
              {type: `fast`, time: 17},
              {type: `ok`, time: 17},
              {type: `slow`, time: 17},
              {type: `incorrect`, time: 17}
            ],
            0
        ),
        300
    );
  });
});
