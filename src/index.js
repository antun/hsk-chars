const hskData = require('./data/hskData');

const getMaxHskLevel = (testString) => {

};

const getHskScore = (testString) => {

};

const isOnlyHskLevel = (level, testString) => {
  let search;
  switch (level) {
    case 1:
      search = hskData.hsk1;
    break;
  };
  search = '^['+search+']+$'
  console.log('@@ search', search);
  const re = new RegExp(search);
  return re.test(testString);
  
};

module.exports =  {
  getMaxHskLevel,
  getHskScore,
  isHskLevel
};

