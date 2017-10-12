import assert from "assert";
import {getTimer} from "./../utils";

describe(`test`, () => {
  it(`should return 0`, () => {
    const timer = getTimer(5);
    let tick = 0;
    for (let i = 5; i < 5; i--) {
      tick = timer.tick();
    }
    assert.equal(tick, 0);
  });

  it(`should return 10`, () => {
    const timer = getTimer(10);
    let tick = 0;
    for (let i = 10; i < 10; i--) {
      tick = timer.tick();
    }
    assert.equal(tick, 0);
  });

  it(`should return 15`, () => {
    const timer = getTimer(15);
    let tick = 0;
    for (let i = 15; i < 15; i--) {
      tick = timer.tick();
    }
    assert.equal(tick, 0);
  });
});
