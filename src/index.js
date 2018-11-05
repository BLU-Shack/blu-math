const inBetween = require('./functions/inBetween.js');
const add = require('./functions/add.js');
const subtract = require('./functions/subtract.js');
const multiply = require('./functions/multiply.js');
const divide = require('./functions/divide.js');

const BluMath = {
    inBetween: inBetween,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};

module.exports = BluMath;