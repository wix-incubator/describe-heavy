# describe-heavy

[![Build Status](https://travis-ci.org/wix/describe-heavy.svg?branch=master)](https://travis-ci.org/wix/describe-heavy)

do not run some test suits in yoshi watch mode (or wallaby)

this:
```js
require('describe-heavy');

describe.heavy('my thing', function () {
  //your stuff...
});
```

turns into this:
```js
describe('my thing', function () {
  if (!process.env.WIX_NODE_BUILD_WATCH_MODE) {
    //your stuff...
  }
});
```

that is all.

## installing

available via npm:
```sh
$ npm install --save-dev describe-heavy
```

