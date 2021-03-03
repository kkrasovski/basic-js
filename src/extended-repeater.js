const CustomError = require("../extensions/custom-error");
module.exports = function repeater(str, options) {
  let line = "";
  let output = "";
  let stringer = String(str);
  let addition = options.addition

  if (!options.separator) {
    options.separator = "+"
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (addition === false || addition === null) {
    addition = String(addition);
  }
  if (!addition) {
    addition = "";
  }
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    line += addition + options.additionSeparator
  }
  line += addition;
  let lineWitString = stringer + line;
  for (let z = 1; z < options.repeatTimes; z++) {
    output += lineWitString + options.separator;
  }
  let outputString = output + lineWitString;
  return outputString
};

