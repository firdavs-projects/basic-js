const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr) {
  return arr.sort((a, b) => {
    if (a === -1) {
      return a;
    }
    if (b === -1) {
      return b;
    }
    return a - b;
  });
  // throw new NotImplementedError();
}

module.exports = {
  sortByHeight
};
