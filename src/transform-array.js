const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr ) {
  if ( !Array.isArray(arr) ) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  return arr.map( (item, index) => {
    if (item === '--double-next') {
      if(arr[index + 1]) {
        return arr[index + 1];
      } else {
        return undefined;
      }
    } else if (item === '--double-prev') {
      if (arr[index - 1]) {
        return arr[index - 1];
      } else {
        return undefined;
      }
    } else if (item === '--discard-prev') {
      arr[index - 1] = undefined;
      return undefined;
    } else if (item === '--discard-next') {
      arr[index + 1] = undefined;
      return undefined;
    }  else {
      return item;
    }
  }).filter( item => item !== undefined );
}

module.exports = {
  transform
};
