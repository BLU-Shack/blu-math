/**
 * Checks if the numberToTest is inbetween greaterThan and lessThan
 * @param {Number} numberToTest The number to testify.
 * @param {Number} greaterThan The number that numberToTest must be greater than.
 * @param {Number} lessThan The number that numberToTest must be less than.
 */
const inBetween = (numberToTest, greaterThan, lessThan) => {
    if (typeof numberToTest !== 'number') throw new TypeError('numberToTest must be a number.');
    if (typeof greaterThan !== 'number') throw new TypeError('greaterThan must be a number.');
    if (typeof lessThan !== 'number') throw new TypeError('lessThan must be a number.');
    return greaterThan < numberToTest > lessThan;
};

module.exports = inBetween;