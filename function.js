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

// 😭 2.  Parameters
//  primitive parameters(변수 선언하면 메모리에 바로 할당 됨) : passed by value.
//  object parameters : passed by reference.

function changeName(obj){
    obj.name = 'coder'; // name을 'coder'로 무조건 변경 해주는 함수
    obj.age = 20; //age를 20으로 무조건 변경 해주는 함수
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
showMessage ('Hi!'); // from이 정의 되어 있지 않아, Hi! by undefined로 나옴

//  🛑 undefined의 조건을 아예 설정
function showMessage (message, from){
    if(from===undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//  🛑 윗 부분을 간결하게 표현
function showMessage (message, from = 'unknown'){
    console.log(`${message} by ${from}`);
} 
showMessage('Hi!');

//  4. Rest parameters (added in ES6)
function printAll(...args) // 배열 형태로 전달 된다.
{
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
//  윗 부분을 간결하게 표현 하기
    for (const arg of args){
        console.log(arg);
    }
//  더 간결하게 표현하기
    args.forEach((arg) => console.log(arg));        
} 
printAll('dream', 'coding', 'ellie');

//  5.  Local scope [📗 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다. (=틴트 입힌 유리)]
let globalMessage = 'global'; // local variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);  // error (자식 블럭에서 정의 된 값은 부모 블럭에서 볼 수 없다.)
}
printMessage();

//  6.  Return a value
function sum(a , b){
    return a + b;
}
const result = sum (1 , 2); // 3
console.log(`sum : ${sum(1 , 2)}`);

//  7.  Early return, early exit
//  ❌ bad 
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}
//  ⭕️ good
function upgradeUser(user){
    if(user.version <= 10){
        return;
    }
    // long upgrade logic
}

//  ✅ First-class function
//  function are treated like any other variable (다른 변수와 마친가지)
//  can be assigned as a value to variable (변수에 할당이 된다.)
//  can be passed as and argument to other functions. (function에 파라미터로 전달이 된다.)
//  can be returned by another function (리턴 값으로 리턴이 된다.)

//  1. Function expression
//  a function declaration can be called earlier than it is defined. (hoisted)
//  a function expression is created when the execution reaches it.

const print = function(){   // 함수에 이름이 없는 것을 anonymous function이라고 한다.
    console.log ('print');
}
print();
const printAGAIN = print;
printAGAIN();
const sumAgain = sum; // 위에서 sum에 할당 된 함수를 불러 온다.
console.log (sumAgain(1, 3));

//  2.  Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {      //anonymous function (함수에 이름이 없는 것)
    console.log('yes!');
}

const printNo = function print (){  //named function (디버깅 할때 사용 됨)
    console.log('no!');
}
randomQuiz ('wrong', printYes, printNo);
randomQuiz ('love you', printYes, printNo);

//  3. Arrow function (always anonymous)
// 기본 형식 함수
const simplePRINT = function(){
    console.log('simplePRINT!');
};
simplePRINT();

// ✅ Arrow function으로 변환
const simplePrint = () => console.log ('simplePrint!');
simplePrint();

// 기본 형식 함수
const add = function(a, b){
    return a + b;
}
// ✅ Arrow function으로 변환
//const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    //do something more
    return a*b;
};

//  4.  IIFE : Immediately Invoked Function Expression (함수를 선언함과 동시에 바로 선언) >> 최근에 잘 쓰이진 않음.
//  기본 함수
function hello (){
    console.log ('IIFE');
}
hello;
//  IIFE 적용
(function hello(){
    console.log('IIFE');
})();

//📝 PUZZLE
// function calculate (command, a, b)
// command : add, subtract, divide, multiply, remainder

function calculate (command, a, b){     // command :명령어
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
