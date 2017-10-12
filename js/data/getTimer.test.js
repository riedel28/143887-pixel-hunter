import assert from "assert";
import {getTimer} from "./../utils";

describe(`test`, () => {
  it(`should return 0`, () => {
    const timer = getTimer(5);

    for (let i = 0; i < 5; i++) {
      timer.tick();
    }
    assert.equal(timer.getCurrentTimer(), 0);
  });

  it(`should return 5`, () => {
    const timer = getTimer(10);

    for (let i = 0; i < 5; i++) {
      timer.tick();
    }
    assert.equal(timer.getCurrentTimer(), 5);
  });

  it(`should return 15`, () => {
    const timer = getTimer(20);

    for (let i = 0; i < 10; i++) {
      timer.tick();
    }
    assert.equal(timer.getCurrentTimer(), 10);
  });
});
