'use strict';

describe.heavy = (name, fn) =>
  describe(name, () => {
    if (!process.env.WIX_NODE_BUILD_WATCH_MODE) {
      fn();
    }
  });

function describeHeavy(desc, fn) {
  if (process.env.WIX_NODE_BUILD_WATCH_MODE) {
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
  if (process.env.WIX_NODE_BUILD_WATCH_MODE) {
    it.skip.apply(this, arguments);
  } else {
    const result = it.apply(this, arguments);
    if (result.timeout) {
      result.timeout(0);
    }
  }
}

module.exports = {describeHeavy, itHeavy};
