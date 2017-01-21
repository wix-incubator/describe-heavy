'use strict';

describe.heavy = (name, fn) =>
  describe(name, () => {
    if (!process.env.WIX_NODE_BUILD_WATCH_MODE) {
      fn();
    }
  });
