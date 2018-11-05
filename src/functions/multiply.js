/**
 * Multiplies numbers; Tries to fix some JS's multiplication problems.
 * @param {...Number} numbers All numbers to multiply with each other.
 * @returns {Number}
 */
const multiply = (...numbers) => {
    let greatestNumber = 0;
    numbers.forEach(v => {
        if (v.toString().length > greatestNumber) greatestNumber = v.toString().length;
    });
    return parseFloat(numbers.reduce((number1, number2) => number1 * number2).toFixed(greatestNumber));
};

module.exports = multiply;