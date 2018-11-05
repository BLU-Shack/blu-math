/**
 * Multiplies numbers; Tries to fix some JS's division problems.
 * @param {Number} base The number to divide on.
 * @param {...Number} numbers All numbers to divide onto base.
 * @returns {Number}
 */
const divide = (base, ...numbers) => {
    let greatestNumber = 0;
    numbers.forEach(v => {
        if (v.toString().length > greatestNumber) greatestNumber = v.toString().length;
        base /= v;
    });
    return parseFloat(base.toFixed(greatestNumber));
};

module.exports = divide;