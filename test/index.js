const assert = require('assert');
const main = require('..');

describe('shake-canvas', () => {
  it('returns with placeholder', () => {
    assert.equal(main(), 'shake-canvas');
  });
});
