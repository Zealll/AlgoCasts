// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // Solution 1
    // return Math.sign(n) === -1 ? parseInt(n.toString().split('').reverse().join('')) * -1 : parseInt(n.toString().split('').reverse().join(''))

    // Solution 2
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

module.exports = reverseInt;
