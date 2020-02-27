//Convert array of arrays to array of objects, named students
//Each object in the array should have a name and age property.

let arrayOfArrays = [["Mary", 10], ["Barbara", 11], ["David", 12], ["Alex", 11]];

let students = [];
for (let i = 0; i < arrayOfArrays.length; i++) {
    // Create new object inside the loop
    let student = {};
    student.name = arrayOfArrays[i][0];
    student.age = arrayOfArrays[i][1];
    // console.log(student);
    // Then push the same object into the array
    students.push(student);
}

// console.log(students);



// Write a function that returns an array of grade averages. For instance, if the returned array was named averages:

// averages[0] would equal 91
// averages[1] would equal 91.5
var students2 = [
    {
        name: "Mary",
        age: 10,
        grades: [90, 88, 95]
    },
    {
        name: "Joseph",
        age: 11,
        grades: [80, 100, 90, 96]
    }
];

var getAverages = function(students){
    var averages = [];
    // Write your code here
    for(i in students){
        var sum = 0;
        var avg = 0;

        // console.log(students[i]);
        for(let j = 0; j < students[i].grades.length; j++){
            sum += students[i].grades[j];
        }
        avg = sum / (j + 1);
        averages.push(avg);

    }
    return averages;
}

console.log(getAverages(students2));