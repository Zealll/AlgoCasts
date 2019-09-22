// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // Solution 1
    const charsObj = {}
    let maxNum = 0
    let maxChar = ''

    for (let char of str) {
        charsObj[char] = charsObj[char] + 1 || 1
    }

    for (let objKey in charsObj) {
        if(charsObj[objKey] > maxNum) {
            maxNum = charsObj[objKey]
            maxChar = objKey
        }
    }
    
    return maxChar

    
    // Solution 2
    // const charsObj = {}

    // for (let char of str) {
    //     if(!charsObj[char]) {
    //         charsObj[char] = 1
    //     } else {
    //         charsObj[char]++
    //     }
    // }
}

module.exports = maxChar;
