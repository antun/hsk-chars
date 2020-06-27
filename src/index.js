const hskData = require('./data/hskData');

const isOnlyHskLevel = (level, testString) => {
  let search = hskData.hsk[level-1];
  search = '^['+search+']+$'
  const re = new RegExp(search);
  return re.test(testString);
};

const isAtOrBelowLevel = (level, testString) => {
  let search = '';
  do {
    search += hskData.hsk[level-1];
    level--;
  } while (level > 0);
  search = '^['+search+']+$'
  const re = new RegExp(search);
  return re.test(testString);
};

const getMaxHskLevel = (testString) => {
  let level = 1;
  do {
    if (isAtOrBelowLevel(level, testString)) {
      break;
    }
    level++;
  } while (level < 6);
  return level;
};


module.exports =  {
  getMaxHskLevel,
  isOnlyHskLevel,
  isAtOrBelowLevel
};

