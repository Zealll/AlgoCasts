// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // Solution 1

    // const newArr = []
    // console.log('newAtt',newArr)
    // for (let char of array) {
    //     const last = newArr[newArr.length - 1]
    //     console.log(last)

    //     if(!last || last.length === size) {
    //         newArr.push([char])
    //     } else {
    //         last.push(char)
    //     }
    // }
    // console.log('second new arr', newArr)
    // return newArr

    // Solution 2

    const newArr = []
    let start = 0
    while (start < array.length) {
        newArr.push(array.slice(start, start + size))
        start = start + size
    }

    return newArr
}

module.exports = chunk;
