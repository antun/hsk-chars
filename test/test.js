const hskChars = require('../src/index');

const assert = require('assert');


describe('hskChars', function () {
  describe('#isOnlyHskLevel()', function () {
    it('should return true for 个 as HSK 1', function () {
      assert.equal(hskChars.isOnlyHskLevel(1, '个'), true);
    });
    it('should return false for 还 as HSK 1', function () {
      assert.equal(hskChars.isOnlyHskLevel(1, '还'), false);
    });
  });
});
