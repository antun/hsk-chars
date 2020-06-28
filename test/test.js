const hskChars = require('../src/index');

const assert = require('assert');


describe('hskChars', function () {
  describe('#isOnlyHskLevel()', function () {
    it('should handle an empty string', function () {
      assert.equal(hskChars.isOnlyHskLevel(1, ''), true);
    });
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
    it('should handle an empty string', function () {
      assert.equal(hskChars.isAtOrBelowLevel(2, ''), true);
    });
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
    it('should handle empty string', function () {
      assert.equal(hskChars.getMaxHskLevel(''), 0);
    });
    it('should find a level 2 character in a string of levels 1-2', function () {
      assert.equal(hskChars.getMaxHskLevel('还要一个'), 2);
    });
    it('should catch a level 6 character in a string of levels 1-2', function () {
      assert.equal(hskChars.getMaxHskLevel('还要一个包冤'), 6);
    });
  });
  describe('#getAverageHskLevel()', function () {
    it('should handle empty string', function () {
      assert.equal(hskChars.getAverageHskLevel(''), 0);
    });
    it('should get an average value for all level 1 characters', function () {
      assert.equal(hskChars.getAverageHskLevel('一个人一个人一个人一个人一个人'), 1);
    });
    it('should get an average value of 2 for half level 1 and half level 3', function () {
      assert.equal(hskChars.getAverageHskLevel('定其主理心人一个人人'), 2);
    });
    it('should get an average value of 6 for a string containing all level 6 characters', function () {
      assert.equal(hskChars.getAverageHskLevel('兽帐昌铺惧盗辉扣嘛董'), 6);
    });
  });
});
