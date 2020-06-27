const hskChars = require('../src/index');

const assert = require('assert');


describe('hskChars', function () {
  describe('#isOnlyHskLevel()', function () {
    it('should match a single character in HSK1', function () {
      assert.equal(hskChars.isOnlyHskLevel(1, '个'), true);
    });
    it('should catch a single non-HSK1 character', function () {
      assert.equal(hskChars.isOnlyHskLevel(1, '还'), false);
    });
    it('should match a whole HSK1 string', function () {
      assert.equal(hskChars.isOnlyHskLevel(1, '一个人'), true);
    });
    it('should catch a single non-HSK1 character in a string', function () {
      assert.equal(hskChars.isOnlyHskLevel(1, '一个人走'), false);
    });
    it('should catch a Latin character', function () {
      assert.equal(hskChars.isOnlyHskLevel(1, 'X'), false);
    });
  });
  describe('#isAtOrBelowLevel()', function () {
    it('should match a single character below the level', function () {
      assert.equal(hskChars.isAtOrBelowLevel(2, '个'), true);
    });
    it('should match a single character at the level', function () {
      assert.equal(hskChars.isAtOrBelowLevel(2, '还'), true);
    });
    it('should catch a single character above the level', function () {
      assert.equal(hskChars.isAtOrBelowLevel(2, '用'), false);
    });
    it('should match a string at or below the level', function () {
      assert.equal(hskChars.isAtOrBelowLevel(2, '还要一个'), true);
    });
    it('should catch a single character that is above in a string', function () {
      assert.equal(hskChars.isAtOrBelowLevel(2, '还要一个包'), false);
    });
  });
  describe('#getMaxHskLevel()', function () {
    it('should find a level 2 character in a string of levels 1-2', function () {
      assert.equal(hskChars.getMaxHskLevel('还要一个'), 2);
    });
    it('should catch a level 6 character in a string of levels 1-2', function () {
      assert.equal(hskChars.getMaxHskLevel('还要一个包冤'), 6);
    });
  });
});
