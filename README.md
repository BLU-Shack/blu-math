# BLU-Math

Math supplements and stuff I guess.

Fixes some problems that happen when performing math stuff?

## Usage

Initialization:

```js
const BluMath = require('blu-math');
```

Adding numbers:

```js
BluMath.add(0.1, 0.2) // 0.3
(0.1 + 0.2) // 0.30000000000000004
```

Subtracting Numbers:

```js
// The first number is the base. That is the number that will be subtracted.
// The proceeding numbers will subtract from the base.
// This basically means 0.3
BluMath.subtract(0.3, 0.1, 0.1) // 0.1
(0.3 - 0.1 - 0.1) // 0.09999999999999998
```

Multiplying Numbers:

```js
BluMath.multiply(0.2, 0.1) // 0.02
(0.2 * 0.1) // 0.020000000000000004
```

Dividing Numbers:

```js
// The first number is the base. That will be the number that will be divided by the proceeding numbers.
// Basically 0.3 / 0.1 / 0.1
BluMath.divide(0.3, 0.1, 0.1) // 30
(0.3 / 0.1 / 0.1) // 29.999999999999993
```