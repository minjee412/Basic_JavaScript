'use strict';

//  Function
//  -   fundamental building block in the program
//  -   subprogram can be used multiple times
//  -   performs a tsk or calculates a value

//  1.  Function declaration
//  function name(param1, param2) { body... return;}
//  one function === one thing
//  naming : doSometing, command, verb
//  function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');  // 'HELLO@'
log(1234);  // 1234

// ๐ญ 2.  Parameters
//  primitive parameters(๋ณ์ ์ ์ธํ๋ฉด ๋ฉ๋ชจ๋ฆฌ์ ๋ฐ๋ก ํ ๋น ๋จ) : passed by value.
//  object parameters : passed by reference.

function changeName(obj){
    obj.name = 'coder'; // name์ 'coder'๋ก ๋ฌด์กฐ๊ฑด ๋ณ๊ฒฝ ํด์ฃผ๋ ํจ์
    obj.age = 20; //age๋ฅผ 20์ผ๋ก ๋ฌด์กฐ๊ฑด ๋ณ๊ฒฝ ํด์ฃผ๋ ํจ์
}
const ellie = { name : 'ellie' , age : 31};
changeName(ellie);
console.log(ellie);
console.log(ellie.name);
console.log(ellie.age);


//  3.  Default parameters (added in ES6)
function showMessage (message, from) {
    console.log(`${message} by ${from}`);
}  
showMessage ('Hi!'); // from์ด ์ ์ ๋์ด ์์ง ์์, Hi! by undefined๋ก ๋์ด

//  ๐ undefined์ ์กฐ๊ฑด์ ์์ ์ค์ 
function showMessage (message, from){
    if(from===undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//  ๐ ์ ๋ถ๋ถ์ ๊ฐ๊ฒฐํ๊ฒ ํํ
function showMessage (message, from = 'unknown'){
    console.log(`${message} by ${from}`);
} 
showMessage('Hi!');

//  4. Rest parameters (added in ES6)
function printAll(...args) // ๋ฐฐ์ด ํํ๋ก ์ ๋ฌ ๋๋ค.
{
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
//  ์ ๋ถ๋ถ์ ๊ฐ๊ฒฐํ๊ฒ ํํ ํ๊ธฐ
    for (const arg of args){
        console.log(arg);
    }
//  ๋ ๊ฐ๊ฒฐํ๊ฒ ํํํ๊ธฐ
    args.forEach((arg) => console.log(arg));        
} 
printAll('dream', 'coding', 'ellie');

//  5.  Local scope [๐ ๋ฐ์์๋ ์์ด ๋ณด์ด์ง ์๊ณ , ์์์๋ง ๋ฐ์ ๋ณผ ์ ์๋ค. (=ํดํธ ์ํ ์ ๋ฆฌ)]
let globalMessage = 'global'; // local variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);  // error (์์ ๋ธ๋ญ์์ ์ ์ ๋ ๊ฐ์ ๋ถ๋ชจ ๋ธ๋ญ์์ ๋ณผ ์ ์๋ค.)
}
printMessage();

//  6.  Return a value
function sum(a , b){
    return a + b;
}
const result = sum (1 , 2); // 3
console.log(`sum : ${sum(1 , 2)}`);

//  7.  Early return, early exit
//  โ bad 
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}
//  โญ๏ธ good
function upgradeUser(user){
    if(user.version <= 10){
        return;
    }
    // long upgrade logic
}

//  โ First-class function
//  function are treated like any other variable (๋ค๋ฅธ ๋ณ์์ ๋ง์น๊ฐ์ง)
//  can be assigned as a value to variable (๋ณ์์ ํ ๋น์ด ๋๋ค.)
//  can be passed as and argument to other functions. (function์ ํ๋ผ๋ฏธํฐ๋ก ์ ๋ฌ์ด ๋๋ค.)
//  can be returned by another function (๋ฆฌํด ๊ฐ์ผ๋ก ๋ฆฌํด์ด ๋๋ค.)

//  1. Function expression
//  a function declaration can be called earlier than it is defined. (hoisted)
//  a function expression is created when the execution reaches it.

const print = function(){   // ํจ์์ ์ด๋ฆ์ด ์๋ ๊ฒ์ anonymous function์ด๋ผ๊ณ  ํ๋ค.
    console.log ('print');
}
print();
const printAGAIN = print;
printAGAIN();
const sumAgain = sum; // ์์์ sum์ ํ ๋น ๋ ํจ์๋ฅผ ๋ถ๋ฌ ์จ๋ค.
console.log (sumAgain(1, 3));

//  2.  Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {      //anonymous function (ํจ์์ ์ด๋ฆ์ด ์๋ ๊ฒ)
    console.log('yes!');
}

const printNo = function print (){  //named function (๋๋ฒ๊น ํ ๋ ์ฌ์ฉ ๋จ)
    console.log('no!');
}
randomQuiz ('wrong', printYes, printNo);
randomQuiz ('love you', printYes, printNo);

//  3. Arrow function (always anonymous)
// ๊ธฐ๋ณธ ํ์ ํจ์
const simplePRINT = function(){
    console.log('simplePRINT!');
};
simplePRINT();

// โ Arrow function์ผ๋ก ๋ณํ
const simplePrint = () => console.log ('simplePrint!');
simplePrint();

// ๊ธฐ๋ณธ ํ์ ํจ์
const add = function(a, b){
    return a + b;
}
// โ Arrow function์ผ๋ก ๋ณํ
//const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    //do something more
    return a*b;
};

//  4.  IIFE : Immediately Invoked Function Expression (ํจ์๋ฅผ ์ ์ธํจ๊ณผ ๋์์ ๋ฐ๋ก ์ ์ธ) >> ์ต๊ทผ์ ์ ์ฐ์ด์ง ์์.
//  ๊ธฐ๋ณธ ํจ์
function hello (){
    console.log ('IIFE');
}
hello;
//  IIFE ์ ์ฉ
(function hello(){
    console.log('IIFE');
})();

//๐ PUZZLE
// function calculate (command, a, b)
// command : add, subtract, divide, multiply, remainder

function calculate (command, a, b){     // command :๋ช๋ น์ด
    switch(command){
        case 'add' : 
            return a + b;
        case 'subtract' :
            return a - b;
        case 'divide' :
            return a / b;
        case 'multiply' :
            return a * b;
        case 'remainder':
            return a % b;
    
        default :
        throw Error ('unknown command')
    }
}
console.log(calculate('add', 2,3));
