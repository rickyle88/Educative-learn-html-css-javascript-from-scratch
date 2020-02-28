// Here we have four variables, each of them functions, that complete some operation on two numbers:
var sum = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
var multiply = function (x, y) { return x * y; };
var divide = function (x, y) { return x / y; };

// We can use these variables like any other variable type. This means we could store all of these functions in a single array, named operations, to clearly indicate the functions’ intent.

//functions can be stored in an array
var operations = [sum, subtract, multiply, divide];

//functions can be called from an array by accessing them and using the () operator
for (let i = 0; i < operations.length; i++) {
    console.log(operations[i](5, 10));
}

// Functions can be stored in an object as property and values
// Create an additional property (named modulo) in the operations object that computes the remainder of dividing a number by another number.
var operations1 = {
    sum: function (x, y) { return x + y; },
    subtract: function (x, y) { return x - y; },
    multiply: function (x, y) { return x * y; },
    divide: function (x, y) { return x / y; },
    modulo: function(x,y) { return x % y}
}

//functions can be called from an object by accessing a property (dot or bracket)
//and using then the () operator
console.log(operations1.multiply(5, 10));
console.log(operations1["multiply"](5, 10));

// Output: 50 50 

