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
    this.chain.reverse();
    return this;
  },
  finishChain() {

    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};
module.exports = chainMaker;


