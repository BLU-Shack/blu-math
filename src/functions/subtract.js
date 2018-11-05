/**
 * Subtract numbers; Tries to fix some JS's subtraction problems.
 * @param {Number} base The base number to subtract from.
 * @param {...Number} numbers All numbers for subtracting the base.
 * @returns {Number}
 * @example
 * BluMath.subtract(0.3, 0.2); // 0.1
 * BluMath.subtract(0.2, 0.3); // -0.1
 */
const subtract = (base, ...numbers) => {
    let greatestNumber = 0;
    numbers.forEach(v => {
        if (v.toString().length > greatestNumber) greatestNumber = v.toString().length;
        base -= v;
    });
    return parseFloat(base.toFixed(greatestNumber));
};

module.exports = subtract;