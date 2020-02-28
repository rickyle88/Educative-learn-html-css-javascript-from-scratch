// A better way to create a student object would be to create a function that returns an object:
var createStudent = function (name, age) {
    // Create student object
    var student = {
        name: name,
        age: age,
        birthday: function () {
            this.age++;
        }
    };

    // Return student object
    return student;
}

var student1 = createStudent("Mary", 10);
var student2 = createStudent("Michael", 12);
var student3 = createStudent("Jack", 32);

console.log(student1["name"]);
console.log(student2.name);

// Increase student1's birthday
student1.birthday();
console.log(student1.age);



// Object construction using this
var Student = function (name, age) {
    this.name = name;
    this.age = age;
    this.birthday = function () {
        this.age++;
    }
}


var student1 = new Student("Mary", 11);