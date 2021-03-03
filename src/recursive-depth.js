const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let level = 0;
      level = Math.max(
        level,
        ...arr.map((sublevel) => this.calculateDepth(sublevel))
      );
      return level + 1;
    } else {
      return 0;
    }
  }
};
