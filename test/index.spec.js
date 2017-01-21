const {expect} = require('chai');
require('../src');

const old = process.env.WIX_NODE_BUILD_WATCH_MODE;
let status;

describe('set status', () => {
  it('will not change', () => {
    status = 'did not enter heavy';
  });
});

process.env.WIX_NODE_BUILD_WATCH_MODE = true;
describe.heavy('with heavy skipped', () => {
  it('should not run', () => {
    status = 'heavy entered!';
  });
});

describe('check status after skip', () => {
  it('did not run', () => {
    expect(status).to.equal('did not enter heavy');
    status = 'did not enter heavy';
  });
});

delete process.env.WIX_NODE_BUILD_WATCH_MODE;
describe.heavy('with heavy not skipped', () => {
  it('should run', () => {
    status = 'heavy entered!';
  });
});

describe('check status after heavy', () => {
  it('did run', () => {
    expect(status).to.equal('heavy entered!');
  });
});

if (old) {
  process.env.WIX_NODE_BUILD_WATCH_MODE = old;
} else {
  delete process.env.WIX_NODE_BUILD_WATCH_MODE;
}
