/**
 * Add numbers; Tries to fix some JS's addition problems.
 * @param {...Number} numbers All numbers to add.
 * @returns {Number}
 */
const add = (...numbers) => {
    let greatestNumber = 0;
    numbers.forEach(v => {
        if (v.toString().length > greatestNumber) greatestNumber = v.toString().length;
    });
    return parseFloat(numbers.reduce((number1, number2) => number1 + number2).toFixed(greatestNumber));
};

module.exports = add;