// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function (style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good morning ladies and gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and Im ' + this.age + ' years old.');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and Im ' + this.age + ' years old. Have a nice ' + timeOfDay);

//         }
//     }
// };

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('friendly', 'Evening');

// john.presentation.call(emily, 'friendly', 'morning');

// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('fuck.');

// var emilyFormal = john.presentation.bind(emily, 'formal');

// emilyFormal('night');



// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// };

// function calculateAge(el) {
//     return 2020 - el;
// };

// function isFullAge(limit, el) {
//     return el >= limit;
// };

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(ages);
// console.log(fullJapan);

(function () {


    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;

    };

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' : ' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Incorrect answer');
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    Question.prototype.displayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('--------------------------------------------------------------');
    };

    var q1 = new Question('Is javascript the coolest programming language in the world?', ['yes', 'no'], 0);

    var q2 = new Question('Whats the name of this courses teacher?', ['John', 'Michael', 'Jonas'], 2);

    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    };

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        };
    };
    nextQuestion();
})();