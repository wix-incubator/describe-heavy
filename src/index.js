'use strict';

function skip() {
  return !!process.env.WIX_NODE_BUILD_WATCH_MODE || !!process.env.SKIP_HEAVY;
}

describe.heavy = (name, fn) =>
  describe(name, () => {
    if (!skip()) {
      fn();
    }
  });

function describeHeavy(desc, fn) {
  if (skip()) {
    describe.skip.apply(this, arguments);
  } else {
    describe(desc, function () {
      if (this.timeout) {
        this.timeout(0);
      }
      fn();
    });
  }
}

function itHeavy() {
  if (skip()) {
    it.skip.apply(this, arguments);
  } else {
    const result = it.apply(this, arguments);
    if (result.timeout) {
      result.timeout(0);
    }
  }
}

module.exports = {describeHeavy, itHeavy};
