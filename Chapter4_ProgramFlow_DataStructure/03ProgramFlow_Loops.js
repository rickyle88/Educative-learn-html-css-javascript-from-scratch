var num = 0;
while (num <= 10) {
    if (num !== 10) {
        console.log("The number is", num, "- less than 10");
    } else {
        console.log("The number is", num, "- the loop is now over");
    }
    num++;
}

// 
// Exercise #
// Use the concepts we’ve discussed so far to write a function (called rangeSum) that returns the sum of all the numbers from 0 to number. For example,

// rangeSum(5);
// would sum the numbers 0, 1, 2, 3, 4, and 5 for a final value of 15. The function should be able to handle both positive and negative values.

let rangeSum = function (n) {
    let sum = 0;
    let i = n;
    if (n < 0) {
        while(i<0){
            sum = sum + i;
            i = i + 1;
        }
    } 
    else if(n > 0) {
        while(i>0){
            sum = sum + i;
            i = i - 1;
        }
    }
    else return 0;

    return sum;
}

console.log(rangeSum(-3));
console.log(rangeSum(3));
console.log(rangeSum(0));