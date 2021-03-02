 const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {

  let catsCount = 0;
  matrix.forEach((element) => {
  element.forEach((item) => {
    if (item == '^^') {
catsCount += 1;
    }
  })
}) 
return catsCount
};

