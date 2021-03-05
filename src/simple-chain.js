const chainMaker = {
  chainOutput: [],
  getLength() {
    return this.chainOutput.length;
  },
  addLink(value) {
    this.chainOutput.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || position < 1 || this.chainOutput[position] === undefined) {
      this.chainOutput = [];
      throw new Error('Error with remove link');
    } else {
      this.chainOutput.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chainOutput.reverse();
    return this;
  },
  finishChain() {

    let result = this.chainOutput.join('~~');
    this.chainOutput = [];
    return result;
  }
};
module.exports = chainMaker;

//npm test test/simple-chain.test.js