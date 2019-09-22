// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //Solution 1
    // return str.split('').reverse().join('')

    //Solution 2
    // let newStr = ''
    // for (let char of str) {
    //     newStr = char + newStr
    // }

    // return newStr

    //Solution 3
    // let newStr = ''
    // for(let i = str.length - 1; i >= 0; i--) {
    //     newStr = newStr + str[i]
    // }

    // return newStr
    
    //Solution 4
    return str.split('').reduce((reversed, eachChar) => eachChar + reversed, '')
}

module.exports = reverse;