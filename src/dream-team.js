 const CustomError = require("../extensions/custom-error");
 module.exports = function createDreamTeam(members) {

if (!Array.isArray(members)){
return false}
  let lettersArr = [];
  members.forEach(element => {
  if (typeof(element) == "string" ) {
    lettersArr.push(element.trim()[0].toUpperCase())
  }
});
 
return  lettersArr.sort().join("").toUpperCase();

}

