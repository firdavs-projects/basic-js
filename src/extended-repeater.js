const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'}) {
    const result = [];
    switch (typeof str) {
        case 'boolean':
            str = !str ? str.toString() : str;
            break;
        default:
            if (str === null) {
                str = 'null';
            }
            break;
    }
    switch (typeof addition) {
        case 'boolean':
            addition = !addition ? addition.toString() : addition;
            break;
        default:
            if (addition === null) {
                addition = 'null';
            }
            break;
    }
    for (let i = 0; i < repeatTimes; i++) {
        result.push(str);
        if (addition) {
            for (let j = 0; j < additionRepeatTimes; j++) {
                result.push(addition);
                j !== additionRepeatTimes - 1 && result.push(additionSeparator);
            }
        }
        i !== repeatTimes - 1 && result.push(separator);
    }
    return result.join('');
}

module.exports = {
    repeater
};
