var arraySum = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(arraySum([4, 5, 6, 7])); /* returns 22 */
console.log(arraySum([-6, 10, 0, 4])); /* returns 8 */

// Exercise #Given an array of arrays, each of which contains a set of numbers, write a function that returns an array where each item is the sum of all the items in the sub-array. For example,
var numbers = [
    [1, 2, 3, 4],
    [5, 6, 7],
    [8, 9, 10, 11, 12]
];

// Output: [10, 18, 42]
let arraySum1 = function(numbers){
    let sum = [];
    
    for(let i = 0; i < numbers.length; i++){
        let s = 0;
        for(let j = 0; j < numbers[i].length; j++){
            s+=numbers[i][j];
        }
        sum.push(s);
    }
    return sum;
}

console.log(arraySum1(numbers));