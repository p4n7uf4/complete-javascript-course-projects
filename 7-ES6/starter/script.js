// function Person(name) {
//     this.name = name;
// }
// // Person.prototype.myFriends5 = function (friends) {
// //     var arr = friends.map(function (el) {
// //         return this.name + ' is friends with ' + el;
// //     }.bind(this));
// //     console.log(arr);
// // };

// Person.prototype.myFriends6 = function(friends) {
//     var arr = friends.map(e => `${this.name} is friends with ${e}`);
//     console.log(arr);
// };
// var friends = ['Kane', 'Bob', 'Mark'];
// var john = new Person('John');
// john.myFriends6(friends);

//ES5 

// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

//ES6
// const [name, age] = ['Lenin', 26];
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// const {firstName, lastName} = obj;

// console.log(firstName, lastName);

// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);




// // function calcAgeRetirement(year) {
// //     const age = new Date().getFullYear() - year;
// //     return [age, 65 - age];
// // };

// // const [age, retirement] = calcAgeRetirement(1996);
// // console.log(age, retirement);

// //Arrays

// // const boxes = document.querySelectorAll('.box');

// //ES5

// // var boxesArr5 = Array.prototype.slice.call(boxes);
// // boxesArr5.forEach(function (cur) {
// //     cur.style.backgroundColor = 'dodgerblue';
// // });

// // //ES6
// // const boxesArr6 = Array.from(boxes);
// // boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// //ES5
// // for (var i = 0; i < boxesArr5.length; i++) {
// //     if (boxesArr5[i].className === 'box blue') {
// //         continue;
// //     };
// //     boxesArr5[i].textContent = 'I changed to blue!'
// // }; 

// //ES6

// // for (let box of boxesArr6) {
// //     if (box.className.includes('blue')) {
// //         continue;
// //         // break;
// //     };
// //     box.textContent = 'MEU PAU É GIGANTE';
// // }


// //ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function (age) {
//     return age >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// //ES6
// console.log(ages.findIndex(age => age >= 18));
// console.log(ages.find(age => age >= 18));

// SPREAD OPERATOR

// function addFourAges (a, b, c, d) {
//     return a + b + c + d;
// };
// var sum1 = addFourAges(18, 30 , 12, 21);
// console.log(sum1);

// //ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// //ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
// Array.from(all).forEach(cur => cur.style.color = 'green');

//REST PARAMETERS

//ES5
// function isFullAge5() {
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(function(cur) {
//         console.log((2016 - cur) >= 18);
//     })
// };

// // isFullAge5(1990, 1999, 9185);
// // isFullAge5(1990, 1999, 1995, 2015, 1987);

// //ES6
// function isFullAge6(...years) {
//     years.forEach(cur => console.log((2016 - cur) >= 18));
// }

// isFullAge6(1990, 1999, 1995, 2015, 1987);

//MAPS
// const question = new Map();
// question.set('question', 'What is the official name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct Answer');
// question.set(false, 'Wrong, please try again');

// // console.log(question.get('question'));
// // console.log(question.size);

// // if (question.has(4)) {
// //     question.delete(4);
// // }

// // question.forEach((value, key) => console.log(`this is ${key} and its set to ${value}`));

// for (let [key, value] of question.entries()) {
//     // console.log(`this is ${key} and its set to ${value}`)
//     if (typeof(key) === 'number') {
//         console.log(`Answer ${key}: ${value}`)
//     }
// }

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));

//Classes

// //ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1990, 'teacher');

// //ES6

// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge() {
//         var age = new Date().getFullYear - this.yearOfBirth;
//     }
// }

// const john6 = new Person6('John', 1990, 'teacher');

// console.log(john5);
// console.log(john6);

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
//     Person5.call(this, name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);
// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
// console.log(johnAthlete5);

// //ES6

// class Athlete6 extends Person6 {
//     constructor(olympicGames, medals) {
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }
// }
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Park extends Element {
    constructor(trees, area) {
        super(name, buildYear);
        this.trees = trees;
        this.area = area;
    }
    calculateDensity() {
        const density = this.trees / this.area;
        console.log(`${this.name} `)
    }
}
class Street extends Element {
    constructor(length) {
        super(name, buildYear);
        this.length = length;
    }
}