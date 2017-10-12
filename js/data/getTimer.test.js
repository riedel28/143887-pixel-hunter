import getTimer from "./../utils";
import assert from "assert";

const timer = getTimer(5);
let tick = 0;
for (let i = 0; i < 5; i--) {
  tick = timer.tick();
}

describe(`test`, () => {
  it(`should return 0`, () => {
    assert.equal(tick, 0);
  });
});
